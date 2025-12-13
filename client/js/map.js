import { kingdoms, captures, abilities, nomoonKingdoms, moons, moonKingdoms, multimoonKingdoms } from "../data/index.js";
import { clearCache, initAbly } from "./auth.js";

const kingdomList = document.getElementById("kingdom-list");

const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
document.getElementById("sidebar-dragbar").onmousedown = sidebarDrag;
document.getElementById("sidebar-tab-captures").onclick = setSidebarContentCaptures;
document.getElementById("sidebar-tab-abilities").onclick = setSidebarContentAbilities;
document.getElementById("sidebar-tab-subAreas").onclick = setSidebarContentSubAreas;
document.getElementById("sidebar-tab-loadingZones").onclick = setSidebarContentLoadingZones;
document.getElementById("sidebar-tab-moons").onclick = setSidebarContentMoons;
document.getElementById("sidebar-tab-display").onclick = setSidebarContentDisplay;

const hamburgerMover = document.getElementById("button-menu-mover");
const hamburgerButton = document.getElementById("hamburger-button");
hamburgerButton.onclick = openHamburger;

const settingsMenu = document.getElementById("settings-menu");
const resetMenu = document.getElementById("reset-menu");
const helpMenu = document.getElementById("help-menu");
document.getElementById("link-button").onclick = createLinkToast;
document.getElementById("settings-button").onclick = openSettings;
document.getElementById("reset-button").onclick = confirmReset;
document.getElementById("help-button").onclick = openHelp;
document.getElementById("setting-menu-showText-toggle").onchange = toggleImageText;

const moonsContainer = document.getElementById("moon-menu-moon-container");
const moonsTotal = document.getElementById("moon-menu-total");

const toaster = document.getElementById("toaster");

const selectionMenu = document.getElementById("selection-menu");
const selectionMenuToggle = document.getElementById("selection-menu-header");
selectionMenuToggle.onclick = openSelectionMenu;

// INITIAL STATE
const markMap = new Map();
let i;

// ---- ABLY WEBSOCKET ----
initAbly().then(({ ably, clientId }) => {
    ably.subscribe("update:moonTotals", (msg) => {
        const data = msg.data;

        let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

        if (data.value == 0) {
            moonTotals.clear(data.kingdom);
        } else {
            moonTotals.set(data.kingdom, data.value);
        }

        localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));

        if (data.kingdom == localStorage.getItem("kingdom")) {
            document.getElementById('moon-menu-total-editor').textContent = data.value ? data.value : "??";
            updateMoonCounter();
        }
    });
    ably.subscribe("update:moons", (msg) => {
        const data = msg.data;

        let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);

        if (data.value > 0) {
            moons.set(data.kingdom, data.value);
        } else {
            moons.clear(data.kingdom);
        }

        localStorage.setItem("moons", JSON.stringify([...moons]));

        if (data.kingdom == localStorage.getItem("kingdom")) updateMoonCounter();
    })
    ably.subscribe("update:captures", (msg) => {
        const data = msg.data;

        let target = document.getElementById(`capture-tracker-${data.capture}`);

        let captures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);

        if (data.value) {
            if (target) target.classList.remove("locked");
            captures.add(data.capture);
        } else {
            if (target) target.classList.add("locked");
            captures.delete(data.capture);
        }

        localStorage.setItem("captures", JSON.stringify([...captures]));
    });
    ably.subscribe("update:abilities", (msg) => {
        const data = msg.data;

        let target = document.getElementById(`ability-tracker-${data.ability}`);

        let abilities = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

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
    
    window.ably = ably;
    window.clientId = clientId;
});

// SETUP
initKingdomList();
leafletInit();
setSidebarContentCaptures();
updateCurrentKingdom("Sand");

// ---- MAP ----
// Map Setup
function leafletInit() {
    document.getElementById("map").style.width = `calc(100vw - ${parseFloat(window.getComputedStyle(sidebar).width)}px)`;
    const mapBounds = [fractionToLatLng([0, 0]), fractionToLatLng([1, 1])];
    window.leafletMap = L.map("map", {
        attributionControl: false,
        zoomControl: false,
        zoomSnap: 0.1,
        maxZoom: 5,
        minZoom: Math.round(10 * (window.innerHeight < window.innerWidth ? window.innerHeight / 512 - 0.1 : window.innerWidth / 512 - 0.1)) / 10,
        maxBounds: mapBounds
    }).setView([0, 0], 0);
    // let testIcon = L.icon({
    //     iconUrl: `/resource/icons/moon-Cap.png`,
    //     iconSize: [36, 36],
    //     iconAnchor: [18, 18]
    // });
    // const testMarker = L.marker(fractionToLatLng([0.5, 0.5]), { icon: testIcon, draggable: true });
    // testMarker.on("moveend", (e) => {
    //     let location = testMarker.getLatLng();
    //     let [x, y] = latLngToFraction([location.lat, location.lng]);
    //     console.log(`"x": ${x},\n"y": ${y},`);
    // });
    window.completedMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.availableMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.lockedMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.availablePostMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.lockedPostMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.linkedZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.availableZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.lockedZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.mapLayer = L.imageOverlay(`/resource/maps/${localStorage.getItem("kingdom")}.png`, mapBounds).addTo(leafletMap);
}
// Coordinate Conversions
function fractionToLatLng([x, y]) {
    return [
        90 - (180 * Number(y)),
        (360 * Number(x)) - 180
    ];
}
function latLngToFraction([lat, lng]) {
    return [
        (Number(lng) + 180) / 360,
        (90 - Number(lat)) / 180
    ];
}
// Icon Functions
function icon(name) {
    return L.icon({
        iconUrl: `/resource/icons/moon-${name}.png`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
}

// ---- SIDEBAR ----
function updateSidebarTab(newSidebarTab, singleColumn) {
    if (localStorage.getItem("sidebarTab")) document.getElementById(`sidebar-tab-${localStorage.getItem("sidebarTab")}`).classList.remove("selected");
    document.getElementById(`sidebar-tab-${newSidebarTab}`).classList.add("selected");

    localStorage.setItem("sidebarTab", newSidebarTab);

    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = singleColumn ? "1fr" : "repeat(auto-fit, minmax(90px, 1fr))";
}
function setSidebarContentCaptures() {
    updateSidebarTab("captures", 0);

    let savedCaptures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);

    captures.forEach((capture) => {
        let el = document.createElement("div");
        el.id = `capture-tracker-${normalizeName(capture)}`;
        if (!savedCaptures.has(normalizeName(capture))) el.classList.add("locked");
        el.innerHTML = !localStorage.getItem("showText") ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        el.onclick = clickCapture;
        sidebarContent.appendChild(el);
        setTimeout(wrapText, 1, el);
    })
}
function setSidebarContentAbilities() {
    updateSidebarTab("abilities", 0);

    let savedAbilties = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    abilities.forEach((ability) => {
        let el = document.createElement("div");
        el.id = `ability-tracker-${normalizeName(ability)}`;
        if (!savedAbilties.has(normalizeName(ability))) el.classList.add("locked");
        el.innerHTML = !localStorage.getItem("showText") ? `<p>${ability}</p>` : `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        el.onclick = clickAbility;
        sidebarContent.appendChild(el);
        setTimeout(wrapText, 1, el);
    });
}
function setSidebarContentSubAreas() {
    updateSidebarTab("subAreas", 0);
}
function setSidebarContentLoadingZones() {
    updateSidebarTab("loadingZones", 0);
}
function setSidebarContentMoons() {
    updateSidebarTab("moons", 0);
    
    // let availableCategory = sidebarCreateCategory("Available");
    // let lockedCategory = sidebarCreateCategory("Locked");
    // let collectedCategory = sidebarCreateCategory("Collected");

    // sidebarContent.append(availableCategory);
    // sidebarContent.append(lockedCategory);
    // sidebarContent.append(collectedCategory);
    
    // let collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
    // let moonMap = new Set(JSON.parse(localStorage.getItem("moonMap")) ?? []);
    // let moonList = moons.get(localStorage.getItem("kingdom"));

    // moonList.forEach((moon) => {  
    //     let el = document.createElement("div");
    //     el.id = `moonlist-tracker-${moon.kingdomId})}`;
    //     el.textContent = `Moon #${moon.kingdomId} - ${moon.name}`;
    //     if (collectedSet.has(moon.id)) {
    //         collectedCategory.append(el);
    //     } else {
    //         availableCategory.append(el);
    //     }
    //     // el.innerHTML = !localStorage.getItem("showText") ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    //     // el.onclick = clickCapture;
    //     // sidebarContent.appendChild(el);
    //     // setTimeout(wrapText, 1, el);
    // })
}
function setSidebarContentDisplay() {
    updateSidebarTab("display", 0);
}
function sidebarDrag(event) {
    let prevX = event.screenX;

    window.onmousemove = (e) => {
        let curX = e.screenX;

        let width = parseFloat(window.getComputedStyle(sidebar).width);

        if (isNaN(width)) return;

        let clampWidth = Math.max(200, Math.min(width + (prevX - curX), 800));

        sidebar.style.width = clampWidth + "px";
        selectionMenu.style.right = (clampWidth + 70)+ "px";
        document.getElementById("map").style.width = `calc(100vw - ${clampWidth}px)`;

        prevX = curX;
    }
    window.onmouseup = (e) => {
        window.onmousemove = null;
        window.onmouseup = null;
    }
}
function sidebarCreateCategory(name) {
    let el = document.createElement("div");
    el.id = `sidebar-content-category-${name}`;
    el.classList.add("sidebar-content-category");
    el.innerHTML = `<h1>${name}</h1>`;

    return el;
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
        if (localStorage.getItem("sidebarTab") == "captures") document.getElementById(`capture-tracker-${capture}`).classList.remove("locked");
        captures.add(capture);
    } else {
        if (localStorage.getItem("sidebarTab") == "captures") document.getElementById(`capture-tracker-${capture}`).classList.add("locked");
        captures.delete(capture);
    }

    localStorage.setItem("captures", JSON.stringify([...captures]));
    ably.publish("update:captures", { capture: capture, value: state });
}
// Ability Tracker
function clickAbility(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;

    setAbility(target.id.split("-")[2], target.classList.contains("locked"));
}
function setAbility(ability, state) {
    let abilities = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    if (state) {
        if (localStorage.getItem("sidebarTab") == "abilities") document.getElementById(`ability-tracker-${ability}`).classList.remove("locked");
        abilities.add(ability);
    } else {
        if (localStorage.getItem("sidebarTab") == "abilities") document.getElementById(`ability-tracker-${ability}`).classList.add("locked");
        abilities.delete(ability);
    }

    localStorage.setItem("abilities", JSON.stringify([...abilities]));
    ably.publish("update:abilities", { ability: ability, value: state });
}
// Moon Tracker
function updateMoonCounter() {
    const currentKingdom = localStorage.getItem("kingdom");

    document.getElementById("moon-menu-kingdom").textContent = currentKingdom;

    let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

    let amount = moons.get(currentKingdom) ?? 0;
    let total = !nomoonKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;
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
    const currentKingdom = localStorage.getItem("kingdom");

    let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals"))) ?? [];

    let moon = moons.get(currentKingdom) ?? 0;
    let total = !nomoonKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

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
    
    ably.publish("update:moons", { kingdom: currentKingdom, value: moon });
}
function removeMoon() {
    const currentKingdom = localStorage.getItem("kingdom");

    let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

    let moon = moons.get(currentKingdom) ?? 0;
    let total = !nomoonKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

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

    ably.publish("update:moons", { kingdom: currentKingdom, value: moon });
}
function updateMoonIcon(name, index, onclick) {
    if (index < 0) index = moonsContainer.children.length + index;
    let el = moonsContainer.children[index];
    el.src = `/resource/icons/moon-${name}.png`;
    el.onclick = onclick;
}
// Moon Total Tracker
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
    const currentKingdom = localStorage.getItem("kingdom");

    let newValue = moonEditor.textContent.trim();

    let num = Number(newValue);

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);

    if (isNaN(num) || num >= 100 || num <= 0) {
        moonEditor.textContent = "??";
        moonTotals.clear(currentKingdom);
    } else {
        moonEditor.textContent = String(num);

        moonTotals.set(currentKingdom, num);
    }
    localStorage.setItem("moonTotals", JSON.stringify([...moonTotals]));

    if (!nomoonKingdoms.has(currentKingdom)) ably.publish("update:moonTotals", { kingdom: currentKingdom, value: num });

    updateMoonCounter();
}
// Kingdom List
function initKingdomList() {
    kingdoms.forEach((kingdom) => {
        let el = document.createElement("div");
        el.id = `kingdom-list-${normalizeName(kingdom)}`;
        el.innerHTML = `<img src="/resource/kingdoms/${normalizeName(kingdom)}.png" alt="${kingdom}" title="${kingdom}" draggable="false">`;
        el.onclick = clickKingdom;
        kingdomList.appendChild(el);
    });
}
function clickKingdom(event) {
    let target = event.target.tagName == "IMG" ? event.target.parentElement : event.target;
    updateCurrentKingdom(target.id.split("-")[2]);
}
function updateCurrentKingdom(currentKingdom) {
    if (localStorage.getItem("kingdom")) document.getElementById(`kingdom-list-${localStorage.getItem("kingdom")}`).classList.remove("selected");
    document.getElementById(`kingdom-list-${currentKingdom}`).classList.add("selected");

    localStorage.setItem("kingdom", currentKingdom);

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);
    let total = !nomoonKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

    if (!nomoonKingdoms.has(currentKingdom)) {
        moonsTotal.innerHTML = `(<span id="moon-menu-total-editor" contenteditable="false">${total ? total : "??"}</span>)`;
        document.getElementById("moon-menu-total-editor").onclick = setMoonTotal;
    } else {
        moonsTotal.innerHTML = "";
    }

    leafletMap.setView([0, 0], 0);
    mapLayer.setUrl(`/resource/maps/${currentKingdom}.png`);
    
    completedMoonsLayer.clearLayers();

    let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);

    moons.get(currentKingdom).forEach((moon) => {
        let mark = L.marker(fractionToLatLng([moon.x, moon.y]), { icon: icon(moonMap.has(moon.id) ? moonMap.get(moon.id) : "unknown"),  });
        mark.on("click", (e) => {
            setSelection(`${moon.type}-${moon.kingdomId}`);
        });
        markMap.set(moon.id, mark);
        completedMoonsLayer.addLayer(mark);
    });

    setSelection("");
    updateMoonCounter();
}

// ---- TOAST ----
// Create/Hide Toast
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
// Link Toast
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

// ---- SELECTION MENU ----
function openSelectionMenu() {
    selectionMenu.style.marginBottom = "0px";
    document.getElementById("selection-menu-header-collapse").style.transform = "rotate(0deg)";
    selectionMenuToggle.onclick = closeSelectionMenu;
}
function closeSelectionMenu() {
    selectionMenu.style.marginBottom = (-parseFloat(window.getComputedStyle(selectionMenu).height) + 50) + "px";
    document.getElementById("selection-menu-header-collapse").style.transform = "rotate(180deg)";
    selectionMenuToggle.onclick = openSelectionMenu;
}
function setSelection(selection) {
    localStorage.setItem("selection", selection);
    
    if (localStorage.getItem("selectPersist")) return;

    let title = document.getElementById("selection-menu-header-title");
    let icon = document.getElementById("selection-menu-header-icon");
    let picture = document.getElementById("selection-menu-content-picture");
    let description = document.getElementById("selection-menu-content-description");
    let buttons = document.getElementById("selection-menu-content-buttons");

    buttons.innerHTML = "";

    if (selection == "") {
        closeSelectionMenu();
        title.textContent = "No Selection";
        icon.src = `/resource/icons/moon-empty.png`;
        picture.src = `/resource/icons/moon-empty.png`;
        description.textContent = "Select an icon to see details.";
        return;
    }

    let type = selection.split("-")[0];
    let kingdomId = selection.split("-")[1];

    switch (type) {
        case "moon": {
            let data = moons.get(localStorage.getItem("kingdom"))[Number(kingdomId) - 1];
            let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);

            title.textContent = data.name;

            let actualKingdom = moonMap.get(data.id);

            buttons.append(addMoonSelectionButtons(data.id, 0));

            if (actualKingdom) {
                updateSelectionTitleIcon("moon", actualKingdom);
                description.textContent = `This is a ${actualKingdom} power moon.`;
            } else {
                updateSelectionTitleIcon("moon", "unknown");
                description.textContent = "This is a mystery power moon.";
            }

            buttons.append(addMoonCollectionButton(data.id));

            break;
        }
        case "multimoon": {
            let data = moons.get(localStorage.getItem("kingdom"))[Number(kingdomId) - 1];
            let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);

            title.textContent = data.name;

            let actualKingdom = moonMap.get(data.id);

            buttons.append(addMoonSelectionButtons(data.id, 1));

            if (actualKingdom) {
                updateSelectionTitleIcon("moon", actualKingdom);
                description.textContent = `This is a ${actualKingdom} multi-moon.`;
            } else {
                updateSelectionTitleIcon("moon", "unknown");
                description.textContent = "This is a mystery multi-moon.";
            }

            buttons.append(addMoonCollectionButton(data.id));

            break;
        }
    }

    openSelectionMenu();
}
function updateSelectionTitleIcon(type, value) {
    document.getElementById("selection-menu-header-icon").src = `/resource/icons/${type}-${value}.png`;
    document.getElementById("selection-menu-content-picture").src = `/resource/${type}s/${value}.png`;
}

// CHANGE MOON TO MULTIMOON
function addMoonSelectionButtons(id, multi) {
    let container = document.createElement("div");
    container.classList.add("selection-menu-content-button-grid");

    [...(multi ? multimoonKingdoms : moonKingdoms)].forEach((kingdom) => {
        let el = document.createElement("div");
        el.innerHTML = `<img src="/resource/icons/${multi ? "moon" : "moon"}-${kingdom}.png">`;
        el.onclick = moonSetKingdom(id, kingdom, multi);
        container.append(el);
    });

    let el = document.createElement("div");
    el.innerHTML = `<img src="/resource/eraser.png" alt="Eraser" title="Clear">`;
    el.onclick = moonSetKingdom(id, "");
    container.append(el);

    return container;
}
function moonSetKingdom(id, kingdom, multi) {
    return (e) => {
        let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
        let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

        let oldKingdom = moonMap.get(id);

        if (kingdom == "") {
            moonMap.delete(id);
            markMap.get(id).setIcon(icon("unknown"));
            updateSelectionTitleIcon(multi ? "moon" : "moon", "unknown");
            document.getElementById("selection-menu-content-description").textContent = `This is a mystery ${multi ? "multi-" : "power "}moon.`;
        } else {
            moonMap.set(id, kingdom);
            markMap.get(id).setIcon(icon(kingdom));
            updateSelectionTitleIcon(multi ? "moon" : "moon", kingdom);
            document.getElementById("selection-menu-content-description").textContent = `This is a ${kingdom} ${multi ? "multi-" : "power "}moon.`;
        }

        if (collectedMap.has(id)) {
            let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);

            if (oldKingdom) {
                let oldMoon = moons.get(oldKingdom) ?? 0;

                moons.set(oldKingdom, --oldMoon);

                ably.publish("update:moons", { kingdom: oldKingdom, value: oldMoon });
            }

            if (kingdom) {
                let newMoon = moons.get(kingdom) ?? 0;
            
                moons.set(kingdom, ++newMoon)

                ably.publish("update:moons", { kingdom: kingdom, value: newMoon });
            }
            
            localStorage.setItem("moons", JSON.stringify([...moons]));
        }

        localStorage.setItem("moonMap", JSON.stringify([...moonMap]));
    }
}
function addMoonCollectionButton(id) {
    let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

    let container = document.createElement("div");
    container.classList.add("selection-menu-content-button-line");

    let button = document.createElement("div");
    let eraser = document.createElement("div");

    eraser.classList.add("selection-menu-content-button");
    eraser.innerHTML = `<img src="/resource/eraser.png" alt="Eraser" title="Clear">`;

    if (collectedMap.has(id)) {
        container.style.gap = "5px";
        button.innerText = "Collected";
        button.onclick =  null;
        button.style.cursor = "auto";
        eraser.onclick = moonSetCollected(id, 0, container);
        eraser.style.width = "38px";
        eraser.style.borderWidth = "1px";
        eraser.style.padding = "7px";
        eraser.style.opacity = "1" ;
    } else {
        container.style.gap = "0";
        button.innerText = "Collect";
        button.onclick = moonSetCollected(id, 1, container);
        button.style.cursor = "pointer";
        eraser.onclick = null;
        eraser.style.width = "0px";
        eraser.style.padding = "7px 0px";
        eraser.style.borderWidth = "0px";
        eraser.style.opacity = "0";
    }
    container.append(button);
    container.append(eraser);

    return container;
}
function moonSetCollected(id, state, container) {
    return (e) => {
        let moons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
        let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
        let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

        let kingdom = moonMap.get(id);
        let moon = moons.get(kingdom) ?? 0;

        let button = container.firstElementChild;
        let eraser = container.lastElementChild;

        if (state) {
            collectedMap.add(id);
            moon++;
            
            button.onclick = null;

            button.textContent = "Collected";
            button.style.cursor = "auto"
            eraser.style.width = "38px";
            container.style.gap = "5px";
            eraser.style.borderWidth = "1px";
            eraser.style.padding = "7px";
            
            setTimeout(() => {
                eraser.style.opacity = "1" ;
                eraser.onclick = moonSetCollected(id, 0, container);
            }, 300)
        } else {
            collectedMap.delete(id);
            moon--;

            eraser.onclick = null;

            button.textContent = "Collect";
            button.style.cursor = "pointer"
            eraser.style.opacity = "0";
            
            setTimeout(() => {
                eraser.style.width = "0";
                container.style.gap = "0";
                eraser.style.borderWidth = "0px";
                eraser.style.padding = "7px 0px";
                button.onclick = moonSetCollected(id, 1, container);
            }, 300);
        }
        if (kingdom != undefined) {
            moons.set(kingdom, moon);

            localStorage.setItem("moons", JSON.stringify([...moons]));
        }

        localStorage.setItem("collectedMap", JSON.stringify([...collectedMap]));

        if (localStorage.getItem("kingdom") == kingdom) updateMoonCounter();

        ably.publish("update:moons", { kingdom: kingdom, value: moon });
    }
}


// ---- HAMBURGER MENU ----
// Open/Close Hamburger Menu
function openHamburger() {
    hamburgerMover.style.marginTop = "0";
    setTimeout(() => {document.addEventListener("click", clickOffHamburger)}, 1);
    hamburgerButton.onclick = closeHamburger;
}
function closeHamburger() {
    hamburgerMover.style.marginTop = window.getComputedStyle(hamburgerMover).height;
    hamburgerButton.onclick = openHamburger;
}
function clickOffHamburger(event) {
    if (!hamburgerMover.contains(event.target)) {
        closeHamburger();
        document.removeEventListener("click", clickOffHamburger);
    }
}
// Hamburger Menu Buttons
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

// ---- POPUP MENUS ----
// Settings Menu
function toggleImageText() {
    showText = localStorage.getItem("showText");

    if (!showText) {
        localStorage.setItem("showText", 1);

        // moons.forEach((kingdom) => {
        //     let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
        //     div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>${kingdom}</p>`);
        //     wrapText(div);
        // });

        // abilities.forEach((ability) => {
        //     let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
        //     div.innerHTML = `<p>${ability}</p>`;
        //     wrapText(div);
        // });

        // primaryCaptures.forEach((capture) => {
        //     let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        //     div.innerHTML = `<p>${capture}</p>`;
        //     wrapText(div);
        // });

        // captures.forEach((capture) => {
        //     let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        //     div.innerHTML = `<p>${capture}</p>`;
        //     wrapText(div);
        // });

        // let div = document.getElementById(`moon-tracker-moon`);
        // div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>Moon Requirements</p>`);
        // wrapText(div);

    } else {
        localStorage.setItem("showText", 0);

        // moons.forEach((kingdom) => {
        //     let div = document.getElementById(`moon-tracker-${normalizeName(kingdom)}`);
        //     div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/${normalizeName(kingdom)}.png" alt="${kingdom} Moons" title="${kingdom}" draggable="false">`);
        //     wrapText(div);
        // });
        

        // abilities.forEach((ability) => {
        //     let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
        //     div.innerHTML = `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        // });

        // primaryCaptures.forEach((capture) => {
        //     let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        //     div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
            
        // });

        // captures.forEach((capture) => {
        //     let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
        //     div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        // });

        // let div = document.getElementById(`moon-tracker-moon`);
        // div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="/resource/moons/Mushroom.png" alt="Moon Requirements" title="Moon Requirements" draggable="false">`);
        // wrapText(div);
    }
}
// Reset Menu
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

    updateCurrentKingdom(localStorage.getItem("kingdom"));

    if (!nomoonKingdoms.has(localStorage.getItem("kingdom"))) document.getElementById('moon-menu-total-editor').textContent = "??";

    if (forward) ably.publish("post:reset", {});
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