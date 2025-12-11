const kingdoms = [
    "Cap",
    "Cascade",
    "Sand",
    "Lake",
    "Wooded",
    "Cloud",
    "Lost",
    "Metro",
    "Snow",
    "Seaside",
    "Luncheon",
    "Ruined",
    "Bowser",
    "Moon",
    "Mushroom",
    "Dark",
    "Darker"
];

const captures = [
    "Spark Pylon",
    "Golden Chain Chomp",
    "Parabones",
    "Banzai Bill",
    "Bowser",
    "Bullet Bill",
    "Knucklotec's Fist",
    "Uproot",
    "Sherm",
    "Manhole",
    "Ty-Foo",
    "Shiverian",
    "Gushen",
    "Hammer Bro",
    "Meat",
    "Volbonan",
    "Lava Bubble",
    "Pokio",
    "Rocket",
    "Lakitu",
    "Yoshi",
    "Goomba",
    "Paragoomba",
    "Binoculars",
    "Frog",
    "Chain Chomp",
    "Big Chain Chomp",
    "T-Rex",
    "Glydon",
    "Moe-Eye",
    "Zipper",
    "Tropical Wiggler",
    "Pole",
    "Taxi",
    "RC Car",
    "Chargin' Chuck",
    "Coin Coffer",
    "Poison Piranha Plant",
    "Fire Bro",
    "Fire Piranha Plant",
    "Cheep Cheep",
    "Snow Cheep Cheep",
    "Cactus",
    "Tree",
    "Boulder",
    "Letter",
    "Bowser Statue",
    "Jizo",
    "Puzzle Part (Metro Kingdom)",
    "Puzzle Part (Lake Kingdom)",
    "Picture Match Part (Goomba)",
    "Picture Match Part (Mario)",
];

const abilities = [
    "Jump",
    "Double Jump",
    "Triple Jump",
    "Wall Jump",
    "Long Jump",
    "Backflip",
    "Sideflip",
    "Crouch",
    "Roll",
    "Roll Boost",
    "Dive",
    "Climb",
    "Ground Pound",
    "Cap Throw",
    "Down Throw",
    "Up Throw",
    "Spin Throw",
    "Cap Bounce",
    "Ledge Grab"
];

const noRequirementKingdoms = new Set([
    "Cap",
    "Cloud",
    "Moon",
    "Mushroom",
    "Dark",
    "Darker"
]);

const kingdomList = document.getElementById("kingdom-list");

const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
document.getElementById("sidebar-dragbar").onmousedown = sidebarDrag;
document.getElementById("sidebar-tab-captures").onclick = updateSidebarTab;
document.getElementById("sidebar-tab-abilities").onclick = updateSidebarTab;
document.getElementById("sidebar-tab-subAreas").onclick = updateSidebarTab;
document.getElementById("sidebar-tab-loadingZones").onclick = updateSidebarTab;
document.getElementById("sidebar-tab-moons").onclick = updateSidebarTab;
document.getElementById("sidebar-tab-display").onclick = updateSidebarTab;

const hamburgerMover = document.getElementById("button-menu-mover");
document.getElementById("hamburger-button").onclick = toggleHamburger;

const settingsMenu = document.getElementById("settings-menu");
const resetMenu = document.getElementById("reset-menu");
const helpMenu = document.getElementById("help-menu");
document.getElementById("link-button").onclick = createLinkToast;
document.getElementById("settings-button").onclick = openSettings;
document.getElementById("reset-button").onclick = confirmReset;
document.getElementById("help-button").onclick = openHelp;
document.getElementById("setting-menu-showText-toggle").onchange = toggleImageText;

const kingdomName = document.getElementById("moon-menu-kingdom");
const moonsContainer = document.getElementById("moon-menu-moon-container");
const moonsTotal = document.getElementById("moon-menu-total");

const toaster = document.getElementById("toaster");

const selectionMenu = document.getElementById("selection-menu");
const selectionMenuToggle = document.getElementById("selection-menu-header-collapse");
document.getElementById("selection-menu-header").onclick = toggleSelectionMenu;

// INITIAL STATE
let showText = false;
let currentKingdom = "Sand";
let currentSidebarTab = "captures";

// SETUP
kingdoms.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `kingdom-list-${normalizeName(kingdom)}`;
    newDiv.innerHTML = `<img src="/resource/kingdoms/${normalizeName(kingdom)}.png" alt="${kingdom}" title="${kingdom}" draggable="false">`;
    newDiv.onclick = updateCurrentKingdom;
    kingdomList.appendChild(newDiv);
});
setSidebarContentCaptures();
updateCurrentKingdom();

// ABLY FUNCTIONS
const ablyReady = initAbly().then(() => {
    ably.subscribe("update:moonTotals", (msg) => {
        const data = msg.data;

        console.log(data)

        let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

        if (data.value == 0) {
            moonTotals.clear(data.kingdom);
        } else {
            moonTotals.set(data.kingdom, data.value);
        }

        localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));

        if (data.kingdom == currentKingdom) {
            document.getElementById('moon-menu-total-editor').textContent = data.value ? data.value : "??";
            updateMoonCounter();
        }
    });
    ably.subscribe("update:moons", (msg) => {
        const data = msg.data;

        console.log(data)

        let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));

        if (data.value > 0) {
            moons.set(data.kingdom, data.value);
        } else {
            moons.clear(data.kingdom);
        }

        localStorage.setItem("moons", JSON.stringify([...moons]));

        if (data.kingdom == currentKingdom) updateMoonCounter();
    })
    ably.subscribe("update:captures", (msg) => {
        const data = msg.data;

        let target = document.getElementById(`capture-tracker-${data.capture}`);

        let captures = new Set(JSON.parse(localStorage.getItem("captures") ?? "[]"));

        if (data.value) {
            if (target) target.classList.remove("locked");
            captures.add(data.capture);
        } else {
            if (target) target.classList.add("locked");
            captures.delete(data.capture);
        }

        localStorage.setItem("captures", JSON.stringify([...captures]));
    });
    ably.subscribe("update:ability", (msg) => {
        const data = msg.data;

        let target = document.getElementById(`ability-tracker-${data.ability}`);

        let abilities = new Set(JSON.parse(localStorage.getItem("abilities") ?? "[]"));

        if (data.value) {
            if (target) target.classList.remove("locked");
            abilities.add(data.ability);
        } else {
            if (target) target.classList.add("locked");
            abilities.delete(data.ability);
        }

        localStorage.setItem("abilities", JSON.stringify([...abilities]));
    });
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
    ably.subscribe("post:reset", (msg) => {
        resetProgress(1);
    });
});



// KINGDOM FUNCTIONS
function updateCurrentKingdom(event) {
    if (event) {

        let target = event.target.tagName == "IMG" ? event.target.parentElement : event.target;
        let newKingdom = target.id.split("-")[2];
        document.getElementById(`kingdom-list-${normalizeName(currentKingdom)}`).classList.remove("selected");
        currentKingdom = newKingdom;
    }

    document.getElementById(`kingdom-list-${normalizeName(currentKingdom)}`).classList.add("selected");

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));
    let total = !noRequirementKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

    if (!noRequirementKingdoms.has(currentKingdom)) {
        moonsTotal.innerHTML = `(<span id="moon-menu-total-editor" contenteditable="false">${total ? total : "??"}</span>)`;
        document.getElementById("moon-menu-total-editor").onclick = setMoonTotal;
    } else {
        moonsTotal.innerHTML = "";
    }

    updateMoonCounter();
}

// MOON COUNTER FUNCTIONS
function updateMoonCounter() {
    kingdomName.textContent = currentKingdom;

    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let amount = moons.get(currentKingdom) ?? 0;
    let total = !noRequirementKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;
    let empty = total ? total - amount : 0;

    moonsContainer.innerHTML = "";

    for (i = 0; i < amount; i++) {
        createMoonIcon(currentKingdom, removeMoon);
    }

    if (amount < total) createMoonIcon("emptyplus", addMoon);

    for (i = 1; i < empty; i++) {
        createMoonIcon("empty", addMoon);
    }

    if (!total || amount >= total) {
        createMoonIcon("plus", addMoon);
    }
}
function createMoonIcon(name, onclick) {
    let el = document.createElement("img");
        el.src = `/resource/icons/moon-${name}.png`;
        el.alt="Moon";
        el.title="";
        el.draggable=false;
        el.onclick = onclick;
        moonsContainer.appendChild(el);
}
function addMoon() {
    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let moon = moons.get(currentKingdom) ?? 0;
    let total = !noRequirementKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

    updateMoonIcon(currentKingdom, moon, removeMoon);

    moons.set(currentKingdom, ++moon);

    localStorage.setItem("moons", JSON.stringify([...moons]));

    if (!total) {
        createMoonIcon("plus", addMoon);
    } else if (moon >= total) {
        createMoonIcon("plus", addMoon);
    } else {
        updateMoonIcon("emptyplus", moon, addMoon)
    }
    
    if (!noRequirementKingdoms.has(currentKingdom)) ably.publish("update:moons", { kingdom: currentKingdom, value: moon });
}
function removeMoon() {
    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let moon = moons.get(currentKingdom) ?? 0;
    let total = !noRequirementKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

    if (moon <= 0) return;

    if (!total || moon > total) {
        moonsContainer.lastElementChild.remove();
        updateMoonIcon("plus", -1, addMoon);
    } else if (moon == total) {
        moonsContainer.lastElementChild.remove();
        updateMoonIcon("emptyplus", -1, addMoon);
    } else {
        updateMoonIcon("empty", moon, addMoon);
        updateMoonIcon("emptyplus", moon - 1, addMoon);
    }

    moons.set(currentKingdom, --moon);

    localStorage.setItem("moons", JSON.stringify([...moons]));

    if (!noRequirementKingdoms.has(currentKingdom)) ably.publish("update:moons", { kingdom: currentKingdom, value: moon });
}
function updateMoonIcon(name, index, onclick) {
    if (index < 0) index = moonsContainer.children.length + index;
    let el = moonsContainer.children[index];
    el.src = `/resource/icons/moon-${name}.png`;
    el.onclick = onclick;
}
function setMoonTotal(event) {
    const moonEditor = document.getElementById("moon-menu-total-editor");

    event.preventDefault();

    moonEditor.contentEditable = true;
    moonEditor.focus();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(moonEditor);
    sel.removeAllRanges();
    sel.addRange(range);

    moonEditor.addEventListener("blur", blurMoonTotal);
    moonEditor.addEventListener('keydown', enterMoonTotal);
}
function enterMoonTotal(e) {
    if (e.key == 'Enter') {
        const moonEditor = document.getElementById("moon-menu-total-editor");
        e.preventDefault();
        moonEditor.contentEditable = "false";
        moonEditor.removeEventListener("keydown", enterMoonTotal);
        moonEditor.removeEventListener("blur", blurMoonTotal);
        validateTotalMoons(moonEditor);
    }
}
function blurMoonTotal(e) {
    const moonEditor = document.getElementById("moon-menu-total-editor");
    moonEditor.contentEditable = "false";
    moonEditor.removeEventListener("keydown", enterMoonTotal);
    moonEditor.removeEventListener("blur", blurMoonTotal);
    validateTotalMoons(moonEditor);
}
function validateTotalMoons(moonEditor) {
    let newValue = moonEditor.textContent.trim();

    let num = Number(newValue);

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    if (isNaN(num) || num >= 100 || num <= 0) {
        moonEditor.textContent = "??";
        moonTotals.clear(currentKingdom);
    } else {
        moonEditor.textContent = String(num);

        moonTotals.set(currentKingdom, num);
    }
    localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));

    if (!noRequirementKingdoms.has(currentKingdom)) ably.publish("update:moonTotals", { kingdom: currentKingdom, value: num });

    updateMoonCounter();
}

// SIDEBAR FUNCTIONS
function updateSidebarTab(event) {
    let target = event.target.tagName == "P" ? event.target.parentElement : event.target;

    let newSidebarTab = target.id.split("-")[2];

    document.getElementById(`sidebar-tab-${currentSidebarTab}`).classList.remove("selected");
    document.getElementById(`sidebar-tab-${newSidebarTab}`).classList.add("selected");

    currentSidebarTab = newSidebarTab;

    switch(newSidebarTab) {
        case "captures":
            setSidebarContentCaptures();
            return;
        case "abilities":
            setSidebarContentAbilities();
            return;
        case "subAreas":
            setSidebarContentSubAreas();
            return;
        case "loadingZones":
            setSidebarContentLoadingZones();
            return;
        case "moons":
            setSidebarContentMoons();
            return;
        case "display":
            setSidebarContentDisplay();
            return;
    }
}
function setSidebarContentCaptures() {
    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = "repeat(auto-fit, minmax(90px, 1fr))";

    let savedCaptures = new Set(JSON.parse(localStorage.getItem("captures") ?? "[]"));

    captures.forEach((capture) => {
        let newDiv = document.createElement("div");
        newDiv.id = `capture-tracker-${normalizeName(capture)}`;
        if (!savedCaptures.has(normalizeName(capture))) newDiv.classList.add("locked");
        newDiv.innerHTML = showText ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        newDiv.addEventListener("click", toggleUnlock);
        sidebarContent.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    })
}
function setSidebarContentAbilities() {
    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = "repeat(auto-fit, minmax(90px, 1fr))";

    let savedAbilties = new Set(JSON.parse(localStorage.getItem("abilities") ?? "[]"));

    abilities.forEach((ability) => {
        let newDiv = document.createElement("div");
        newDiv.id = `ability-tracker-${normalizeName(ability)}`;
        if (!savedAbilties.has(normalizeName(ability))) newDiv.classList.add("locked");
        newDiv.innerHTML = showText ? `<p>${ability}</p>` : `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        newDiv.onclick = toggleUnlock;
        sidebarContent.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    });
}
function setSidebarContentSubAreas() {
    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = "1fr";
}
function setSidebarContentLoadingZones() {
    sidebarContent.innerHTML = "";
}
function setSidebarContentMoons() {
    sidebarContent.innerHTML = "";
}
function setSidebarContentDisplay() {
    sidebarContent.innerHTML = "";
}
function sidebarDrag(event) {
    let prevX = event.screenX;

    window.onmousemove = (e) => {
        let curX = e.screenX;

        let width = parseFloat(window.getComputedStyle(sidebar).width);

        if (isNaN(width)) return;

        sidebar.style.width = Math.max(200, Math.min(width + (prevX - curX), 800)) + "px";
        selectionMenu.style.right = (Math.max(200, Math.min(width + (prevX - curX), 800)) + 70)+ "px";

        prevX = curX;
    }
    window.onmouseup = (e) => {
        window.onmousemove = null;
        window.onmouseup = null;
    }
}

// CAPTURE/ABILITY FUNCTIONS
function toggleUnlock(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;

    let type = target.id.split("-")[0];
    let item = target.id.split("-")[2];

    if (target.classList.contains("locked")) {
        target.classList.remove("locked");
        type == "capture" ? setCapture(item, 1) : setAbility(item, 1);
    } else {
        target.classList.add("locked");
        type == "capture" ? setCapture(item, 0) : setAbility(item, 0);
    }
}
function setCapture(capture, state) {
    let captures = new Set(JSON.parse(localStorage.getItem("captures") ?? "[]"))

    if (state) {
        captures.add(capture);
    } else {
        captures.delete(capture);
    }

    localStorage.setItem("captures", JSON.stringify([...captures]));
    ably.publish("update:captures", { capture: capture, value: state });
}
function setAbility(ability, state) {
    let abilities = new Set(JSON.parse(localStorage.getItem("abilities") ?? "[]"));

    if (state) {
        abilities.add(ability);
    } else {
        abilities.delete(ability);
    }

    localStorage.setItem("abilities", JSON.stringify([...abilities]));
    ably.publish("update:abilities", { ability: ability, value: state });
}

// TOAST FUNCTIONS
function showToast(toastId) {
    let toast = document.getElementById(toastId);
    toast.style.top = "30px";
}
function hideToast(toastId) {
    let toast = document.getElementById(toastId);
    toast.style.top = "-200px";
    setTimeout(() => {
        toast.remove();
    }, 300);
}
function toggleLinkReveal() {
    let link = document.getElementById("toast-link-text");
    let eye = document.getElementById("toast-reveal");

    if (link.textContent == `http://localhost:3000/?roomId=************************************`) {
        link.textContent = `http://localhost:3000/?roomId=${localStorage.getItem("roomId")}`;
        eye.src = "/resource/hide.png";
        eye.title = "Hide";
    } else {
        link.textContent = `http://localhost:3000/?roomId=************************************`;
        eye.src = "/resource/reveal.png";
        eye.title = "Reveal";
    }
}
function copyLink() {
    navigator.clipboard.writeText(`http://localhost:3000/?roomId=${localStorage.getItem("roomId")}`);
    hideToast("toast-link-div");
}
function toggleSelectionMenu() {
    let displacement = selectionMenu.getBoundingClientRect().height;

    if (parseInt(window.getComputedStyle(selectionMenu).marginBottom) == 0) {
        selectionMenu.style.marginBottom = (-displacement + 50) + "px";
        selectionMenuToggle.style.transform = "rotate(180deg)";
    } else {
        selectionMenu.style.marginBottom = "0px";
        selectionMenuToggle.style.transform = "rotate(0deg)";
    }
}

// HAMBURGER MENU FUNCTIONS
function toggleHamburger(event) {
    let state = parseInt(window.getComputedStyle(hamburgerMover).marginTop) > 0;

    if (state) {
        hamburgerMover.style.marginTop = "0";
        setTimeout(() => {document.addEventListener("click", clickOffHamburger)}, 1);
    } else {
        hamburgerMover.style.marginTop = window.getComputedStyle(hamburgerMover).height;
    }
}
function closeHamburger() {
    hamburgerMover.style.marginTop = window.getComputedStyle(hamburgerMover).height;
}
function clickOffHamburger(event) {
    if (!hamburgerMover.contains(event.target)) {
        closeHamburger();
        document.removeEventListener("click", clickOffHamburger);
    }
}
function createLinkToast() {
    closeHamburger();

    if (document.getElementById("toast-link-div")) return;

    let el = document.createElement("div");
    el.classList.add("toast");
    el.id = "toast-link-div";
    el.innerHTML = `<h1 class="toast-title">Copy this link into an OBS browser source.</h1><p id="toast-link"><span id="toast-link-text">http://localhost:3000/?roomId=************************************</span><img id="toast-reveal" src="/resource/reveal.png" alt="Eye" title="Reveal"><img id="toast-copy" src="/resource/link.png" alt="Link" title="Copy"></p>`;
    toaster.appendChild(el);
    el.style.top = "-200px";
    let reveal = document.getElementById("toast-reveal");
    let copy = document.getElementById("toast-copy");

    let hideTimeout = setTimeout(hideToast, 10 * 1000, "toast-link-div");

    reveal.onclick = toggleLinkReveal;
    copy.onclick = () => {
        clearTimeout(hideTimeout);
        copyLink();
    }

    setTimeout(showToast, 1, "toast-link-div");

}
function openSettings() {
    settingsMenu.style.opacity = 1;
    settingsMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("settings-close").onclick = (e) => {
        settingsMenu.style.opacity = 0;
        setTimeout(() => {settingsMenu.style.zIndex = -1}, 200);
        document.getElementById("settings-close").onclick = null;
    }
}
function confirmReset() {
    resetMenu.style.opacity = 1;
    resetMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("reset-yes").onclick = (e) => {
        resetMenu.style.opacity = 0;
        setTimeout(() => {resetMenu.style.zIndex = -1}, 200);
        document.getElementById("reset-yes").onclick = null;
        document.getElementById("reset-no").onclick = null;
        resetProgress();
    }
    document.getElementById("reset-no").onclick = (e) => {
        resetMenu.style.opacity = 0;
        setTimeout(() => {resetMenu.style.zIndex = -1}, 200);
        document.getElementById("reset-no").onclick = null;
        document.getElementById("reset-yes").onclick = null;
    }
}
function resetProgress(forward) {
    captures.forEach((capture) => {
        let el = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        if (el) el.classList.add("locked");
    });
    abilities.forEach((ability) => {
        let el = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
        if (el) el.classList.add("locked");
    });

    clearCache();

    updateMoonCounter();

    if (!noRequirementKingdoms.has(currentKingdom)) document.getElementById('moon-menu-total-editor').textContent = "??";

    if (forward) ably.publish("post:reset", {});
}
function clearCache() {
    localStorage.clear();
}
function openHelp() {
    helpMenu.style.opacity = 1;
    helpMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("help-close").onclick = (e) => {
        helpMenu.style.opacity = 0;
        setTimeout(() => {helpMenu.style.zIndex = -1}, 200);
        document.getElementById("help-close").onclick = null;
    }
}
function toggleImageText() {
    // showText = localStorage.getItem("showText");

    // if (showText == 0) {
    //     localStorage.setItem("showText", 1);

    //     moons.forEach((kingdom) => {
    //         let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
    //         div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>${kingdom}</p>`);
    //         wrapText(div);
    //     });

    //     abilities.forEach((ability) => {
    //         let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
    //         div.innerHTML = `<p>${ability}</p>`;
    //         wrapText(div);
    //     });

    //     primaryCaptures.forEach((capture) => {
    //         let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
    //         div.innerHTML = `<p>${capture}</p>`;
    //         wrapText(div);
    //     });

    //     captures.forEach((capture) => {
    //         let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
    //         div.innerHTML = `<p>${capture}</p>`;
    //         wrapText(div);
    //     });

    //     let div = document.getElementById(`moon-tracker-moon`);
    //     div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>Moon Requirements</p>`);
    //     wrapText(div);

    // } else {
    //     localStorage.setItem("showText", 0);

    //     moons.forEach((kingdom) => {
    //         let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
    //         div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/${normalizeName(kingdom)}.png" alt="${kingdom} Moons" title="${kingdom}" draggable="false">`);
    //         wrapText(div);
    //     });
        

    //     abilities.forEach((ability) => {
    //         let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
    //         div.innerHTML = `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
    //     });

    //     primaryCaptures.forEach((capture) => {
    //         let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
    //         div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
            
    //     });

    //     captures.forEach((capture) => {
    //         let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
    //         div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    //     });

    //     let div = document.getElementById(`moon-tracker-moon`);
    //     div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/Mushroom.png" alt="Moon Requirements" title="Moon Requirements" draggable="false">`);
    //     wrapText(div);
    // }
}

// String conversions
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