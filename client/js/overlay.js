import { kingdoms, captures, abilities, nomoonKingdoms, moonKingdoms, multimoonKingdoms, worldPeace, groups } from "../data/index.js";
import { clearCache, initAbly } from "./auth.js";

const moons = kingdoms.filter((kingdom) => !nomoonKingdoms.has(kingdom));
const primaryCaptures = captures.slice(0, 24);
const secondaryCaptures = captures.slice(24);

// SETUP
const nodes = initNodes();
initListeners(nodes);
initOverlay();
initMenus();
initAbly().then(ablyPubSubSetup);

// ---- DOM ELEMENTS ----
// DOM Setup
function initNodes() {
    return {
        divMoon: document.getElementById("moon-tracker"),
        divAbility: document.getElementById("ability-tracker"),
        divCapture: document.getElementById("capture-tracker"),
        divOverflow: document.getElementById("capture-overflow"),
        hamburger: document.getElementById("capture-overflow-hamburger"),
        settingsMenu: document.getElementById("settings-menu"),
        resetMenu: document.getElementById("reset-menu"),
        helpMenu: document.getElementById("help-menu"),
        settingsButton: document.getElementById("settings-button"),
        resetButton: document.getElementById("reset-button"),
        helpButton: document.getElementById("help-button"),
        showTextToggle: document.getElementById("setting-menu-showText-toggle"),
        moonBackgroundToggle: document.getElementById("setting-menu-moonBackground-toggle"),
        moonEditor: null
    }
}
function initListeners(nodes) {
    window.onresize = resizer;
    nodes.hamburger.onclick = clickOnHamburger;
    nodes.settingsButton.onclick = openSettings;
    nodes.resetButton.onclick = confirmReset;
    nodes.helpButton.onclick = openHelp;
    nodes.showTextToggle.onchange = toggleImageText;
    nodes.moonBackgroundToggle.onchange = toggleMoonBackgrounds;
}
function initOverlay() {
    let savedMoons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
    let savedMoonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);
    let savedCaptures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);
    let savedAbilties = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    if (localStorage.getItem("moonBackgrounds")) {
        nodes.moonBackgroundToggle.checked = true;
    }

    moons.forEach((kingdom) => {
        let newDiv = document.createElement("div");
        newDiv.id = `moon-tracker-${normalizeName(kingdom)}`;
        newDiv.classList.add("moon-panel");
        newDiv.innerHTML = (Number(localStorage.getItem("showText")) ? `<p>${kingdom}</p>` : `<img src="/resource/moons/progress-${normalizeName(kingdom)}.webp" alt="${kingdom} Moons" title="${kingdom}" draggable="false">`) + `<div class="moon-filter"></div><span id="moon-tracker-${normalizeName(kingdom)}-amount" class="moon-amount">${savedMoons.has(kingdom) ? savedMoons.get(kingdom) : 0}</span><span class="moon-total">/ <span id="moon-tracker-${normalizeName(kingdom)}-total" contenteditable="false">${savedMoonTotals.has(kingdom) ? savedMoonTotals.get(kingdom) : "??"}</span></span>`;
        newDiv.onwheel = scrollMoonCount(kingdom);
        newDiv.onclick = setMoonTotal(kingdom);
        nodes.divMoon.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
        updateMoonProgress(kingdom);
    });
    abilities.forEach((ability) => {
        let newDiv = document.createElement("div");
        newDiv.id = `ability-tracker-${normalizeName(ability)}`;
        if (!savedAbilties.has(normalizeName(ability))) newDiv.classList.add("locked");
        newDiv.innerHTML = Number(localStorage.getItem("showText")) ? `<p>${ability}</p>` : `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        newDiv.onclick = clickAbility;
        nodes.divAbility.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    });
    primaryCaptures.forEach((capture) => {
        let newDiv = document.createElement("div");
        newDiv.id = `capture-tracker-${normalizeName(capture)}`;
        if (!savedCaptures.has(normalizeName(capture))) newDiv.classList.add("locked");
        newDiv.innerHTML = Number(localStorage.getItem("showText")) ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        newDiv.onclick = clickCapture;
        nodes.divCapture.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    });
    secondaryCaptures.forEach((capture) => {
        let newDiv = document.createElement("div");
        newDiv.id = `capture-tracker-${normalizeName(capture)}`;
        if (!savedCaptures.has(normalizeName(capture))) newDiv.classList.add("locked");
        newDiv.innerHTML = Number(localStorage.getItem("showText")) ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        newDiv.onclick = clickCapture;
        nodes.divOverflow.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    });
    let newDiv = document.createElement("div");
    newDiv.id = `moon-tracker-moon`;
    newDiv.classList.add("moon-panel");
    newDiv.style.backgroundColor = nodes.moonBackgroundToggle.checked ? "#4e4e4e" : "transparent";
    newDiv.innerHTML = Number(localStorage.getItem("showText")) ? '<p>Moon Requirements</p>' : '<img src="/resource/moons/Mushroom.png" alt="Moon Requirements" title="Moon Requirements">';
    nodes.divMoon.appendChild(newDiv);
    setTimeout(wrapText, 1, newDiv);
    checkMoonReqs();
}

// ---- ABLY ----
// Ably Setup
function ablyPubSubSetup({ ably, clientId }) {
    window.ably = ably;
    window.clientId = clientId;

    ablySubUpdateMoonTotals(ably, clientId);
    ablySubUpdateMoons(ably, clientId);
    ablySubUpdateCaptures(ably, clientId);
    ablySubUpdateAbilities(ably, clientId);
    ablySubPostReset(ably, clientId);
    ablySubPostAll(ably, clientId);
    ablySubGetAll(ably, clientId);

    ably.publish("get:all", { clientId: clientId });
}
// PubSub Handlers
function ablySubUpdateMoonTotals(ably, clientId) {
    ably.subscribe("update:moonTotals", (msg) => {
        const data = msg.data;
        let span = document.getElementById(`moon-tracker-${data.kingdom}-total`);

        let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

        if (data.value == 0) {
            span.textContent = "??";
            updateMoonProgress(data.kingdom);
            moonTotals.clear(data.kingdom);
        } else {
            span.textContent = data.value;
            updateMoonProgress(data.kingdom);
            moonTotals.set(data.kingdom, data.value);
        }

        localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));
    });
}
function ablySubUpdateMoons(ably, clientId) {
    ably.subscribe("update:moons", (msg) => {
        const data = msg.data;

        if (!nomoonKingdoms.has(data.kingdom)) {
            let span = document.getElementById(`moon-tracker-${data.kingdom}-amount`);

            span.textContent = data.value;

            updateMoonProgress(data.kingdom);
        }
        
        let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);

        if (data.value > 0) {
            moons.set(data.kingdom, data.value);
        } else {
            moons.clear(data.kingdom);
        }

        localStorage.setItem("moons", JSON.stringify([...moons]));
    });
}
function ablySubUpdateCaptures(ably, clientId) {
    ably.subscribe("update:captures", (msg) => {
        const data = msg.data;

        setCapture(data.capture, data.value);
    });
}
function ablySubUpdateAbilities(ably, clientId) {
    ably.subscribe("update:abilities", (msg) => {
        const data = msg.data;

        setAbility(data.ability, data.value);
    });
}
function ablySubPostReset(ably, clientId) {
    ably.subscribe("post:reset", (msg) => {
        resetProgress(0);
    });
}
function ablySubPostAll(ably, clientId) {
    ably.subscribe("post:all", (msg) => {
        const data = msg.data;

        if (data.clientId !== clientId) return;

        localStorage.setItem("moons", data.moons);
        localStorage.setItem("moonTotals", data.moonTotals);
        localStorage.setItem("captures", data.captures);
        localStorage.setItem("abilities", data.abilities);

        setAll();
    });
}
function ablySubGetAll(ably, clientId) {
    ably.subscribe("get:all", (msg) => {
        const data = msg.data;
        ably.publish("post:all", {
            clientId: data.clientId,
            moons: localStorage.getItem("moons"),
            moonTotals: localStorage.getItem("moonTotals"),
            captures: localStorage.getItem("captures"),
            abilities: localStorage.getItem("abilities"),
        });
    });
}

// ---- SUPER MARIO ODYSSEY TRACKER ----
// Capture Tracker
function clickCapture(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;

    setCapture(target.id.split("-")[2], target.classList.contains("locked"));

    
}
function setCapture(capture, state) {
    let captures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);

    if (state) {
        document.getElementById(`capture-tracker-${capture}`).classList.remove("locked");
        captures.add(capture);
    } else {
        document.getElementById(`capture-tracker-${capture}`).classList.add("locked");
        captures.delete(capture);
    }
    
    localStorage.setItem("captures", JSON.stringify([...captures]));

    checkMoonReqs();

    ably.publish("update:captures", { capture: capture, value: state });
}
// Abilitiy Tracker
function clickAbility(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;

    setAbility(target.id.split("-")[2], target.classList.contains("locked"));

    checkMoonReqs();
}
function setAbility(ability, state) {
    let abilities = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    if (state) {
        document.getElementById(`ability-tracker-${ability}`).classList.remove("locked");
        abilities.add(ability);
    } else {
        document.getElementById(`ability-tracker-${ability}`).classList.add("locked");
        abilities.delete(ability);
    }

    localStorage.setItem("abilities", JSON.stringify([...abilities]));

    checkMoonReqs();

    ably.publish("update:abilities", { ability: ability, value: state });
}
// Moon Tracker
function scrollMoonCount(kingdom) {
    return (event) => {
        event.preventDefault();

        let delta = event.deltaY > 0 ? -1 : 1;

        let target = document.getElementById(`moon-tracker-${kingdom}-amount`);

        let amount = parseInt(target.textContent);
        if (isNaN(amount)) amount = 0;

        amount+= delta;

        if (amount < 0) amount = 0;
        if (amount > 99) amount = 99;

        let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);

        target.textContent = amount;

        updateMoonProgress(kingdom);

        if (amount > 0) {
            moons.set(kingdom, amount);
        } else {
            moons.clear(kingdom);
        }

        localStorage.setItem("moons", JSON.stringify([...moons]));

        ably.publish("update:moons", { kingdom: kingdom, value: amount });
    }
}
function updateMoonProgress(kingdom) {
    let amount = Number(document.getElementById(`moon-tracker-${kingdom}-amount`).textContent);
    let total = Number(document.getElementById(`moon-tracker-${kingdom}-total`).textContent);
    let filter = document.getElementById(`moon-tracker-${kingdom}`).querySelector(".moon-filter");
    if (isNaN(amount) || isNaN(total)) {
        filter.style.height = "100%";
    };
    filter.style.height = Math.min(Math.max(15, 15 + (total - amount) / total * 67), 82) + "%";
    fullMoons(kingdom);
}
// Moon Total Tracker
function setMoonTotal(kingdom) {
    return (event) => {
        event.preventDefault();

        nodes.moonEditor = document.getElementById(`moon-tracker-${kingdom}-total`);

        nodes.moonEditor.contentEditable = true;
        nodes.moonEditor.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(nodes.moonEditor);
        sel.removeAllRanges();
        sel.addRange(range);

        nodes.moonEditor.addEventListener("blur", blurMoonTotal(kingdom));
        nodes.moonEditor.addEventListener('keydown', enterMoonTotal(kingdom));
    }
}
function enterMoonTotal(kingdom) {
    return (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            nodes.moonEditor.contentEditable = "false";
            nodes.moonEditor.removeEventListener("keydown", enterMoonTotal);
            nodes.moonEditor.removeEventListener("blur", blurMoonTotal);
            validateTotalMoons(kingdom);
        }
    }
}
function blurMoonTotal(kingdom) {
    return (event) => {
        nodes.moonEditor.contentEditable = "false";
        nodes.moonEditor.removeEventListener("keydown", enterMoonTotal);
        nodes.moonEditor.removeEventListener("blur", blurMoonTotal);
        validateTotalMoons(kingdom);
    }
}
function validateTotalMoons(kingdom) {
    let newValue = nodes.moonEditor.textContent.trim();

    let num = Number(newValue);

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

    let item = nodes.moonEditor.id.split("-")[2];

    if (isNaN(num) || num >= 100 || num <= 0) {
        nodes.moonEditor.textContent = "??";
        moonTotals.clear(item);
    } else {
        nodes.moonEditor.textContent = String(num);

        moonTotals.set(item, num);
    }
    updateMoonProgress(kingdom);

    localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));
    ably.publish("update:moonTotals", { kingdom: item, value: num });
}
// Moon Tracker Styling
function fullMoons(kingdom) {
    let total = document.getElementById(`moon-tracker-${kingdom}-total`);
    let amount = document.getElementById(`moon-tracker-${kingdom}-amount`);
    let target = document.getElementById(`moon-tracker-${kingdom}`);

    if (Number(amount.textContent) >= Number(total.textContent)) {
        target.style.color = "#55ff55";
        if (nodes.moonBackgroundToggle.checked) target.style.backgroundColor = "#f2f2f2";
    } else {
        target.style.color = "white";
        if (nodes.moonBackgroundToggle.checked) target.style.backgroundColor = "#4e4e4e";
    }
    if (!nodes.moonBackgroundToggle.checked) target.style.backgroundColor = "transparent";
}
function checkMoonReqs() {
    let state = evaluateLogic(worldPeace.get("Moon"));

    let div = document.getElementById("moon-tracker-moon");

    if (state) {
        div.style.filter = "none";
        if (Number(localStorage.getItem("moonBackgrounds"))) div.style.background = "var(--neutral-light)";
    } else {
        div.style.filter = "grayscale(1)";
        if (Number(localStorage.getItem("moonBackgrounds"))) div.style.background = "var(--locked)";
    }
}
function evaluateLogic(logic) {
    function predicate (value) {
        if (typeof value == "object") {
            return evaluateLogic(value);
        } else if (typeof value == "string") {
            if (value.charAt(0) == "c") { // Capture
                return new Set(JSON.parse(localStorage.getItem("captures")) ?? []).has(normalizeName(value.substring(1)));
            } else if (value.charAt(0) == "a") { // Ability
                return new Set(JSON.parse(localStorage.getItem("abilities")) ?? []).has(normalizeName(value.substring(1)));
            } else if (value.charAt(0) == "m") { // Moon
                return new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []).has(Number(value.substring(1)));
            } else if (value.charAt(0) == "l") { // Loading Zone
                return new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []).has(Number(value.substring(1)));
            } else if (value.charAt(0) == "g") { // Group
                let group = groups.get(value.substring(1));
                return group ? evaluateLogic(group) : false;
            } else if (value.charAt(0) == "w") { // World Peace
                let peace = worldPeace.get(value.substring(1));
                return peace ? evaluateLogic(peace) : false;
            } else if (value.charAt(0) == "r") { // Moon Rock
                let peace = new Set(JSON.parse(localStorage.getItem("moonRock")) ?? []).has(normalizeName(value.substring(1)));
                return peace ? evaluateLogic(peace) : false;
            } else if (value.charAt(0) == "o") { // Outfit
                return new Set(JSON.parse(localStorage.getItem("outfits")) ?? []).has(normalizeName(value.substring(1)));
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    switch (logic.op) {
        case "TRUE":
            return 1;
        case "FALSE":
            return 0;
        case "AND":
            return logic.reqs.every(predicate);
        case "OR":
            return logic.reqs.some(predicate);
        default:
            return 0;
    }
}
// Miscellaneous
// Note: Doesn't set background completion percentage
// Note: Overwrites changes made immediately after reloading
function setAll() {
    let savedMoons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
    let savedMoonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);
    let savedCaptures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);
    let savedAbilties = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    moons.forEach((kingdom) => {
        let el = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
        let amount = document.getElementById(`moon-tracker-${normalizeName(kingdom)}-amount`);
        let total = document.getElementById(`moon-tracker-${normalizeName(kingdom)}-total`);

        if (savedMoons.has(normalizeName(kingdom))) {
            amount.textContent = savedMoons.get(normalizeName(kingdom));
        } else {
            amount.textContent = 0;
        }

        if (savedMoonTotals.has(normalizeName(kingdom))) {
            if (!nodes.moonEditor || nodes.moonEditor.id.split("-")[2] != kingdom) total.textContent = savedMoonTotals.get(normalizeName(kingdom));
        } else {
            if (!nodes.moonEditor || nodes.moonEditor.id.split("-")[2] != kingdom) total.textContent = "??";
        }

        fullMoons(kingdom);
    });
    primaryCaptures.forEach((capture) => {
        let el = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        if (savedCaptures.has(normalizeName(capture))) {
            el.classList.remove("locked");
        } else {
            el.classList.add("locked");
        }
    });
    secondaryCaptures.forEach((capture) => {
        let el = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        if (savedCaptures.has(normalizeName(capture))) {
            el.classList.remove("locked");
        } else {
            el.classList.add("locked");
        }
    });
    abilities.forEach((ability) => {
        let el = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
        if (savedAbilties.has(normalizeName(ability))) {
            el.classList.remove("locked");
        } else {
            el.classList.add("locked");
        }
    });
}

// ---- HAMBURGER MENU ----
// Open/Close Hamburger Menu
function clickOnHamburger(event) {
    if (nodes.divOverflow.style.zIndex > 0) {
        closeHamburger();
    } else {
        nodes.divOverflow.style.zIndex = 100;
        nodes.divOverflow.style.opacity = 1;
        setTimeout(() => {document.addEventListener("click", clickOffHamburger)}, 0);
    }
    
}
function clickOffHamburger(event) {
    if (!nodes.divOverflow.contains(event.target)) {
        closeHamburger();
        document.removeEventListener("click", clickOffHamburger);
    }
}
function closeHamburger() {
    nodes.divOverflow.style.opacity = 0;
    setTimeout(() => {nodes.divOverflow.style.zIndex = -100;}, 200);
}
// Hamburger Menu Buttons
function initMenus() {
    const captureRect = nodes.divCapture.getBoundingClientRect();
    nodes.divOverflow.style.height = (nodes.divCapture.clientHeight + 2*nodes.divCapture.style.borderWidth )+ "px";
    nodes.divOverflow.style.bottom = (window.innerHeight - captureRect.bottom) + "px";
    nodes.divOverflow.style.right = (window.innerWidth - captureRect.right) + "px";
    nodes.divOverflow.style.borderBottomRightRadius = (8 + nodes.hamburger.clientWidth / 2) + "px"; // 8 = padding

    if (Number(localStorage.getItem("showText"))) {
        nodes.showTextToggle.checked = true;
    }
}
function openSettings() {
    nodes.settingsMenu.style.opacity = 1;
    nodes.settingsMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("settings-close").onclick = (e) => {
        nodes.settingsMenu.style.opacity = 0;
        setTimeout(() => {nodes.settingsMenu.style.zIndex = -1}, 200);
        document.getElementById("settings-close").onclick = null;
    }
}
function openHelp() {
    nodes.helpMenu.style.opacity = 1;
    nodes.helpMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("help-close").onclick = (e) => {
        nodes.helpMenu.style.opacity = 0;
        setTimeout(() => {nodes.helpMenu.style.zIndex = -1}, 200);
        document.getElementById("help-close").onclick = null;
    }
}

// ---- POPUP MENUS ----
// Settings Menu
function toggleImageText() {
    let showText = nodes.showTextToggle.checked;

    if (showText) {
        localStorage.setItem("showText", 1);

        moons.forEach((kingdom) => {
            let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
            div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>${kingdom}</p>`);
            wrapText(div);
        });

        abilities.forEach((ability) => {
            let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
            div.innerHTML = `<p>${ability}</p>`;
            wrapText(div);
        });

        primaryCaptures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<p>${capture}</p>`;
            wrapText(div);
        });

        secondaryCaptures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<p>${capture}</p>`;
            wrapText(div);
        });

        let div = document.getElementById(`moon-tracker-moon`);
        div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>Moon Requirements</p>`);
        wrapText(div);

    } else {
        localStorage.setItem("showText", 0);

        moons.forEach((kingdom) => {
            let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
            div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/progress-${normalizeName(kingdom)}.webp" alt="${kingdom} Moons" title="${kingdom}" draggable="false">`);
            wrapText(div);
        });
        

        abilities.forEach((ability) => {
            let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
            div.innerHTML = `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        });

        primaryCaptures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
            
        });

        secondaryCaptures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        });

        let div = document.getElementById(`moon-tracker-moon`);
        div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/Mushroom.png" alt="Moon Requirements" title="Moon Requirements" draggable="false">`);
        wrapText(div);
    }
}
function toggleMoonBackgrounds() {
    localStorage.setItem("moonBackgrounds", nodes.moonBackgroundToggle.checked ? 1 : 0);
    moons.forEach((kingdom) => {
        let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
        fullMoons(kingdom);
    });
    document.getElementById(`moon-tracker-moon`).style.backgroundColor = nodes.moonBackgroundToggle.checked ? (evaluateLogic(worldPeace.get("Moon")) ? "var(--neutral-light)" : "var(--locked)") : "transparent";
}
// Reset Menu
function confirmReset() {
    nodes.resetMenu.style.opacity = 1;
    nodes.resetMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("reset-yes").onclick = (e) => {
        nodes.resetMenu.style.opacity = 0;
        setTimeout(() => {nodes.resetMenu.style.zIndex = -1}, 200);
        document.getElementById("reset-yes").onclick = null;
        document.getElementById("reset-no").onclick = null;
        resetProgress(1);
    }
    document.getElementById("reset-no").onclick = (e) => {
        nodes.resetMenu.style.opacity = 0;
        setTimeout(() => {nodes.resetMenu.style.zIndex = -1}, 200);
        document.getElementById("reset-no").onclick = null;
        document.getElementById("reset-yes").onclick = null;
    }
}
function resetProgress(forward) {
    moons.forEach((kingdom) => {
        document.getElementById(`moon-tracker-${normalizeName(kingdom)}-amount`).textContent = 0;
        document.getElementById(`moon-tracker-${normalizeName(kingdom)}-total`).textContent = "??";
        updateMoonProgress(normalizeName(kingdom));
    });

    captures.forEach((capture) => {
        document.getElementById(`capture-tracker-${normalizeName(capture)}`).classList.add("locked");
    });

    abilities.forEach((ability) => {
        document.getElementById(`ability-tracker-${normalizeName(ability)}`).classList.add("locked");
    });

    clearCache();

    checkMoonReqs();

    if (forward) ably.publish("post:reset", {});
}

// ---- RESPONSIVENESS ----
function resizer(event) {
    const captureRect = nodes.divCapture.getBoundingClientRect();
    nodes.divOverflow.style.height = (nodes.divCapture.clientHeight + 2*nodes.divCapture.style.borderWidth )+ "px";
    nodes.divOverflow.style.bottom = (window.innerHeight - captureRect.bottom) + "px";
    nodes.divOverflow.style.right = (window.innerWidth - captureRect.right) + "px";
    nodes.divOverflow.style.borderBottomRightRadius = (8 + nodes.hamburger.clientWidth / 2) + "px"; // 8 = padding
}

// ---- STRING CONVERSIONS ----
function normalizeName(input) {
    return input.replace(/\s+/g, "_").replace(/\-/, "_");
}
function wrapText(target) {
    let child = target.firstElementChild;

    let style = window.getComputedStyle(target);
    let childStyle = window.getComputedStyle(child);

    let targetWidth = target.clientWidth * 0.95 - 2 * parseFloat(style.padding);

    if (child.scrollWidth <= targetWidth) return;

    child.style.fontSize = (parseFloat(childStyle.fontSize) * (targetWidth / child.scrollWidth)) + "px";
}