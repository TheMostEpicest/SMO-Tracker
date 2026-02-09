import { kingdoms, captures, abilities, nomoonKingdoms, moons, moonKingdoms, multimoonKingdoms, zones, groups, worldPeace, subAreas, presets } from "../data/index.js";
import { clearCache, initAbly } from "./auth.js";

// TODO: Optimize data storage to O(1) when possible

// SETUP
const nodes = initNodes();
initListeners();
initMenus();
window.markMap = new Map();
window.subMapsMap = new Map();
window.logicCache = new Map();
initAbly().then(ablyPubSubSetup);
initKingdomList();
leafletInit();
setSidebarContentCaptures();
updateCurrentKingdom(localStorage.getItem("kingdom") ?? "Cap");

// ---- DOM ELEMENTS ----
// DOM Setup
function initNodes() {
    return {
        root: document.documentElement,
        kingdomList: document.getElementById("kingdom-list"),
        sidebar: document.getElementById("sidebar"),
        sidebarContent: document.getElementById("sidebar-content"),
        sidebarDragbar: document.getElementById("sidebar-dragbar"),
        sidebarTabCaptures: document.getElementById("sidebar-tab-captures"),
        sidebarTabAbilities: document.getElementById("sidebar-tab-abilities"),
        sidebarTabSubAreas: document.getElementById("sidebar-tab-subAreas"),
        sidebarTabLoadingZones: document.getElementById("sidebar-tab-loadingZones"),
        sidebarTabMoons: document.getElementById("sidebar-tab-moons"),
        sidebarTabMiscellaneous: document.getElementById("sidebar-tab-miscellaneous"),
        hamburgerButton: document.getElementById("hamburger-button"),
        hamburgerMover: document.getElementById("button-menu-mover"),
        linkButton: document.getElementById("link-button"),
        settingsButton: document.getElementById("settings-button"),
        resetButton: document.getElementById("reset-button"),
        helpButton: document.getElementById("help-button"),
        settingsMenu: document.getElementById("settings-menu"),
        popupMenu: document.getElementById("popup-menu"),
        helpMenu: document.getElementById("help-menu"),
        moonsContainer: document.getElementById("moon-menu-moon-container"),
        moonsTotal: document.getElementById("moon-menu-total"),
        toaster: document.getElementById("toaster"),
        selectionMenu: document.getElementById("selection-menu"),
        selectionMenuHeader: document.getElementById("selection-menu-header"),
        selectionMenuIcon: document.getElementById("selection-menu-header-icon"),
        selectionMenuTitle: document.getElementById("selection-menu-header-title"),
        selectionMenuPicture: document.getElementById("selection-menu-content-picture"),
        selectionMenuDescription: document.getElementById("selection-menu-content-description"),
        selectionMenuButtons: document.getElementById("selection-menu-content-buttons")
    }
}
function initListeners() {
    nodes.sidebarDragbar.onmousedown = sidebarDrag;
    nodes.sidebarTabCaptures.onclick = setSidebarContentCaptures;
    nodes.sidebarTabAbilities.onclick = setSidebarContentAbilities;
    nodes.sidebarTabSubAreas.onclick = setSidebarContentSubAreas;
    nodes.sidebarTabLoadingZones.onclick = setSidebarContentLoadingZones;
    nodes.sidebarTabMoons.onclick = setSidebarContentMoons;
    nodes.sidebarTabMiscellaneous.onclick = setSidebarContentMiscellaneous;
    nodes.hamburgerButton.onclick = openHamburger;
    nodes.linkButton.onclick = createLinkToast;
    nodes.settingsButton.onclick = openSettings;
    nodes.resetButton.onclick = confirmReset;
    nodes.helpButton.onclick = openHelp;
    nodes.selectionMenuHeader.onclick = openSelectionMenu;
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
    ablySubGetAll(ably, clientId);
}
// PubSub Handlers
function ablySubUpdateMoonTotals(ably, cliendId) {
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
}
function ablySubUpdateMoons(ably, clientId) {
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
    });

    checkAvailability();
}
function ablySubUpdateCaptures(ably, cliendId) {
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

        checkAvailability();
    });
}
function ablySubUpdateAbilities(ably, cliendId) {
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

        checkAvailability();
    });
}
function ablySubPostReset(ably, clientId) {
    ably.subscribe("post:reset", (msg) => {
        resetProgress(0);
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

// ---- MAP ----
// Map Setup
function leafletInit() {
    document.getElementById("map").style.width = `calc(100vw - ${parseFloat(window.getComputedStyle(nodes.sidebar).width)}px)`;

    const mapBounds = [fractionToLatLng([0, 0]), fractionToLatLng([1, 1])];
    let options = { paddingTopLeft: [250, 60], paddingBottomRight: [60, 60], animate: false };

    window.leafletMap = L.map("map", {
        attributionControl: false,
        zoomControl: false,
        zoomSnap: 0.1,
        maxZoom: Infinity,
        minZoom: -Infinity,
        maxBounds: mapBounds,
        trackResize: true
    })
    leafletMap.invalidateSize({ animate: false });
    
    let minZoom = leafletMap.getBoundsZoom(mapBounds, false, [100, 100]);
    leafletMap.setMinZoom(minZoom);
    leafletMap.fitBounds(mapBounds, options);
    // let testIcon = L.icon({
    //     iconUrl: `/resource/icons/moon-Cap.png`,
    //     iconSize: [36, 36],
    //     iconAnchor: [18, 18]
    // });
    // const testMarker = L.marker(fractionToLatLng([0.5, 0.5]), { icon: testIcon, draggable: true })
    // testMarker.on("moveend", (e) => {
    //     let location = testMarker.getLatLng();
    //     let [x, y] = latLngToFraction([location.lat, location.lng]);
    //     console.log(`"x": ${x},\n"y": ${y},`);
    // });
    // testMarker.addTo(leafletMap);
    window.addEventListener("resize", leafletResize(mapBounds));
    window.completedMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.availableMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.lockedMoonsLayer = L.layerGroup([]).addTo(leafletMap);
    window.linkedZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.availableZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.lockedZonesLayer = L.layerGroup([]).addTo(leafletMap);
    window.mapLayer = L.imageOverlay(`/resource/maps/${localStorage.getItem("kingdom")}.png`, mapBounds).addTo(leafletMap);
}
function leafletResize(mapBounds) {
    return (e) => {
        leafletMap.invalidateSize();
        leafletMap.setMinZoom(-Infinity);
        let options = { paddingTopLeft: [160, 20], paddingBottomRight: [20, 20], animate: false };
        leafletMap.fitBounds(mapBounds, options);
        let zoom = leafletMap.getBoundsZoom(mapBounds, false, [90, 20]);
        // console.log(zoom)
        leafletMap.setMinZoom(zoom);
    }
    
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
        iconUrl: `/resource/icons/${name}.png`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
}

// ---- SIDEBAR ----
// Tab Changing
function updateSidebarTab(newSidebarTab, keepContent) {
    if (localStorage.getItem("sidebarTab")) document.getElementById(`sidebar-tab-${localStorage.getItem("sidebarTab")}`).classList.remove("selected");
    document.getElementById(`sidebar-tab-${newSidebarTab}`).classList.add("selected");

    localStorage.setItem("sidebarTab", newSidebarTab);

    if (!keepContent) nodes.sidebarContent.innerHTML = "";
}
function setSidebarContentCaptures(force) {
    updateSidebarTab("captures");

    let savedCaptures = new Set(JSON.parse(localStorage.getItem("captures")) ?? []);

    let category = sidebarCreateCategory("", 1);

    captures.forEach((capture) => {
        let el = document.createElement("div");
        el.id = `capture-tracker-${normalizeName(capture)}`;
        if (!savedCaptures.has(normalizeName(capture))) el.classList.add("locked");
        el.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        el.onclick = clickCapture;
        category.appendChild(el);
        setTimeout(wrapText, 1, el);
    })
}
function setSidebarContentAbilities(force) {
    updateSidebarTab("abilities");

    let savedAbilties = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []);

    let category = sidebarCreateCategory("", 1);

    abilities.forEach((ability) => {
        let el = document.createElement("div");
        el.id = `ability-tracker-${normalizeName(ability)}`;
        if (!savedAbilties.has(normalizeName(ability))) el.classList.add("locked");
        el.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${ability}</p>` : `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        el.onclick = clickAbility;
        category.appendChild(el);
        setTimeout(wrapText, 1, el);
    });
}
// TODO: Show/Hide completed/locked
// TODO: Scroll to subarea on warp (and not on refresh)
function setSidebarContentSubAreas(force) {

    let subAreaList = subAreas.get(localStorage.getItem("kingdom"));
    let moonList = moons.get(localStorage.getItem("kingdom"));
    let zoneList = zones.get(localStorage.getItem("kingdom"));
    let collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
    let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

    if (localStorage.getItem("sidebarTab") == "subAreas" && !force) {
        updateSidebarTab("subAreas", 1);
    } else {
        updateSidebarTab("subAreas");

        let category = sidebarCreateCategory("", 0);

        subMapsMap.clear();

        const mapBounds = [fractionToLatLng([0, 0]), fractionToLatLng([1, 1])];

        subAreaList.forEach((subArea) => {
            let el = document.createElement("div");
            el.id = `subarea-tracker-${subArea.name}`;
            el.classList.add("sidebar-subarea");
            el.innerHTML = `<p>${subArea.name}</p><div class="subarea-map" id="map-${subArea.name}"></div>`;
            category.append(el);

            let subMap = L.map(`map-${subArea.name}`, {
                attributionControl: false,
                zoomControl: false,
                dragging: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false,
                touchZoom: false,
                tap: false,
                zoom: 1,
                maxBounds: mapBounds
            }).fitBounds(mapBounds)
            L.imageOverlay(`/resource/maps/${localStorage.getItem("kingdom")}.png`, mapBounds).addTo(subMap);

            subMapsMap.set(subArea.name, subMap);
        });
    }

    moonList.filter((moon) => moon.subarea).forEach((moon) => {
        let mark = markMap.get(moon.id);
        // console.log(mark);
        // console.log(moon)
        // console.log(subMapsMap);
        mark.remove();
        mark.addTo(subMapsMap.get(moon.subarea));

        if (collectedSet.has(moon.id)) {
            mark.off("click");
            if (Number(localStorage.getItem("display:completed"))) {
                mark.on("click", (e) => {
                    setSelection(mark.moonId);
                });
                mark.setOpacity(0.5);
                mark._icon.style.cursor = "pointer";
                mark.setZIndexOffset(0);
            } else {
                mark.setOpacity(0);
                mark._icon.style.cursor = "grab";
                mark.setZIndexOffset(-100);
            }
        } else if (evaluateLogic(moon.logic)) {
            mark.off("click");
            mark.on("click", (e) => {
                setSelection(mark.moonId);
            });
            mark.setOpacity(1);
            mark._icon.style.cursor = "pointer";
            mark.setZIndexOffset(100);
        } else {
            mark.off("click");
            if (Number(localStorage.getItem("display:locked"))) {
                mark.on("click", (e) => {
                    setSelection(mark.moonId);
                });
                mark.setOpacity(0.5);
                mark._icon.style.cursor = "pointer";
                mark.setZIndexOffset(0);
            } else {
                mark.setOpacity(0);
                mark._icon.style.cursor = "grab";
                mark.setZIndexOffset(-100);
            }
        }
    });

    zoneList.filter((zone) => zone.subarea).forEach((zone) => {
        let mark = markMap.get(zone.id);
        mark.remove();
        mark.addTo(subMapsMap.get(zone.subarea));

        if (linkMap.has(zone.id)) {
            mark.off("click");
            if (Number(localStorage.getItem("display:completed"))) {
                mark.on("click", (e) => {
                    setSelection(mark.zoneId);
                });
                mark.setOpacity(0.5);
                mark._icon.style.cursor = "pointer";
                mark.setZIndexOffset(0);
            } else {
                mark.setOpacity(0);
                mark._icon.style.cursor = "grab";
                mark.setZIndexOffset(-100);
            }
        } else {
            mark.off("click");
            mark.on("click", (e) => {
                setSelection(mark.zoneId);
            });
            mark.setOpacity(1);
            mark._icon.style.cursor = "pointer";
            mark.setZIndexOffset(100);
        }
    });
}
function setSidebarContentLoadingZones(force) {
    updateSidebarTab("loadingZones");

    let availableCategory = sidebarCreateCategory("Available Checks", 0);
    let lockedCategory = sidebarCreateCategory("Locked Checks", 0);
    let linkedCategory = sidebarCreateCategory("Completed Checks", 0);

    let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);
    let zoneList = zones.get(localStorage.getItem("kingdom"));

    zoneList.forEach((zone) => {
        let el = document.createElement("div");
        el.id = `moonlist-tracker-${zone.kingdomId}`;
        el.innerHTML = `<img src="/resource/icons/${zone.type}${linkMap.has(zone.id) ? "-linked" : ""}.png" alt="Moon" title="" draggable="false"><p>${zone.name}<br /></p>`;
        el.onclick = () => { setSelection(`${zone.type}-${zone.kingdomId}`)};
        if (linkMap.has(zone.id)) {
            el.style.backgroundColor = "var(--toast-positive-background)";
            linkedCategory.append(el);

            let target = linkMap.get(zone.id);
            let targetData = zones.get(target.split("-")[0]).find((zone) => zone.id == target.split("-")[1]);

            let el2 = document.createElement("span");
            el2.classList.add("selection-menu-moon-number");
            el2.textContent = `To: ${target.split("-")[0]} - ${targetData.name}`
            el.lastElementChild.append(el2);
        } else if (evaluateLogic(zone.logic)) {
            availableCategory.append(el);
        } else {
            el.style.backgroundColor = "var(--toast-negative-background)";
            lockedCategory.append(el);
        }
    });

    if (availableCategory.childElementCount == 1) availableCategory.remove();
    if (lockedCategory.childElementCount == 1) lockedCategory.remove();
    if (linkedCategory.childElementCount == 1) linkedCategory.remove();
}
function setSidebarContentMoons(force) {
    updateSidebarTab("moons");
    
    let availableCategory = sidebarCreateCategory("Available Checks", 0);
    let lockedCategory = sidebarCreateCategory("Locked Checks", 0);
    let collectedCategory = sidebarCreateCategory("Completed Checks", 0);
    
    let collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
    let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
    let moonList = moons.get(localStorage.getItem("kingdom"));

    moonList.forEach((moon) => {
        let actualKingdom = moonMap.get(moon.id)

        let el = document.createElement("div");
        el.id = `moonlist-tracker-${moon.kingdomId}`;
        el.innerHTML = `<img src="/resource/icons/${moon.type == "multimoon" ? "moon" : "moon"}-${actualKingdom ? actualKingdom : "unknown"}${collectedSet.has(moon.id) ? "-complete" : ""}.png" alt="Moon" title="" draggable="false"><span class="selection-menu-moon-number">(${moon.kingdomId < 900 ? moon.kingdomId : "H"})</span>${moon.name}`;
        el.onclick = () => { setSelection(`${moon.type}-${moon.kingdomId}`)};
        if (collectedSet.has(moon.id)) {
            el.style.backgroundColor = "var(--toast-positive-background)";
            collectedCategory.append(el);
        } else if (evaluateLogic(moon.logic)) {
            availableCategory.append(el);
        } else {
            el.style.backgroundColor = "var(--toast-negative-background)";
            lockedCategory.append(el);
        }
    });

    if (availableCategory.childElementCount == 1) availableCategory.remove();
    if (lockedCategory.childElementCount == 1) lockedCategory.remove();
    if (collectedCategory.childElementCount == 1) collectedCategory.remove();
}
function setSidebarContentMiscellaneous(force) {
    updateSidebarTab("miscellaneous");

    nodes.sidebarContent.textContent = "It's a bit empty in here..."
}
function sidebarDrag(event) {
    let prevX = event.screenX;

    window.onmousemove = (e) => {
        let curX = e.screenX;

        let width = parseFloat(window.getComputedStyle(nodes.sidebar).width);

        if (isNaN(width)) return;

        let clampWidth = Math.max(200, Math.min(width + (prevX - curX), 800));

        nodes.sidebar.style.width = clampWidth + "px";
        nodes.selectionMenu.style.right = (clampWidth + 70)+ "px";
        document.getElementById("map").style.width = `calc(100vw - ${clampWidth}px)`;

        prevX = curX;
    }
    window.onmouseup = (e) => {
        document.getElementById("map").style.width = `calc(100vw - ${parseFloat(window.getComputedStyle(nodes.sidebar).width)}px)`;
        leafletResize([fractionToLatLng([0, 0]), fractionToLatLng([1, 1])])();
        window.onmousemove = null;
        window.onmouseup = null;
    }
}
function sidebarCreateCategory(name, grid) {
    let el = document.createElement("div");
    el.id = `sidebar-content-category-${name}`;
    el.classList.add("sidebar-content-category");
    if (name) el.innerHTML = `<h1>${name}</h1>`;
    if (grid) {
        el.classList.add("sidebar-content-category-grid");
    } else {
        el.classList.add("sidebar-content-category-column");
    }
    nodes.sidebarContent.append(el);
    return el;
}
function refreshSidebar(force) {
    switch (localStorage.getItem("sidebarTab")) {
        case "captures":
            setSidebarContentCaptures(force);
            break;
            case "abilities":
            setSidebarContentAbilities(force);
            break;
            case "subAreas":
            setSidebarContentSubAreas(force);
            break;
            case "loadingZones":
            setSidebarContentLoadingZones(force);
            break;
            case "moons":
            setSidebarContentMoons(force);
            break;
            case "miscellaneous":
            setSidebarContentMiscellaneous(force);
            break;
    }
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

    checkAvailability();
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

    checkAvailability();
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

    nodes.moonsContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        createMoonIcon(currentKingdom, removeMoon);
    }

    if (amount < total) createMoonIcon("emptyplus", addMoon);

    for (let i = 1; i < empty; i++) {
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
    nodes.moonsContainer.appendChild(el);
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

    if (moon <= 0) moon = 0;

    if (!total || moon > total) {
        nodes.moonsContainer.lastElementChild.remove();
        updateMoonIcon("plus", -1, addMoon);
    } else if (moon == total) {
        nodes.moonsContainer.lastElementChild.remove();
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
    if (index < 0) index = nodes.moonsContainer.children.length + index;
    let el = nodes.moonsContainer.children[index];
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

    function createBlock(i) {
        let block = document.createElement("div");
        block.classList.add(`kingdom-list-block`);

        kingdoms.forEach((kingdom) => {
            let moonData = moons.get(kingdom);
            let zoneData = zones.get(kingdom);

            let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
            let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

            let availableChecks = 0;
            let completeChecks = 0;
            let totalChecks = 0;

            moonData.forEach((moon) => {
                totalChecks++
                if (collectedMap.has(moon.id)) {
                    completeChecks++;
                } else if (evaluateLogic(moon.logic)) {
                    availableChecks++;
                }
            });
            
            zoneData.forEach((zone) => {
                totalChecks++;
                if (linkMap.has(zone.id)) {
                    completeChecks++;
                } else if (evaluateLogic(zone.logic)) {
                    availableChecks++;
                }
            });

            let el = document.createElement("div");
            el.id = `kingdom-list-${normalizeName(kingdom)}`;
            el.classList.add("kingdom-list-element", `kingdom-list-elements-${kingdom}`);
            el.innerHTML = `<div class="circle"></div><div><p class="kingdom-list-name">${kingdom}</p><p class="kingdom-list-completion-${kingdom}">Completion: ${Math.round(100 * completeChecks / totalChecks)}%</p><p class="kingdom-list-checks-${kingdom}">Available Checks: ${availableChecks}</p></div>`; 
            el.onclick = clickKingdom(kingdom);
            block.appendChild(el);
        });

        return block;
    }
    
    let a = createBlock(1);
    let b = createBlock(2);
    let c = createBlock(3);

    document.getElementById("kingdom-list-content").append(a, b, c);

    requestAnimationFrame(() => {
        const currentKingdom = localStorage.getItem("kingdom") ?? "Cap";
        
        const chunkHeight = a.getBoundingClientRect().height;
        nodes.kingdomList.scrollTop = chunkHeight * (1 + (kingdoms.indexOf(currentKingdom) - 3.5) / 17);

        let ticking = false;

        nodes.kingdomList.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                if (nodes.kingdomList.scrollTop < 0.25 * chunkHeight) {
                    nodes.kingdomList.scrollTop += chunkHeight;
                } else if (nodes.kingdomList.scrollTop > 1.75 * chunkHeight) {
                    nodes.kingdomList.scrollTop -= chunkHeight;
                }

                ticking = false;
            });
        });

        const ro = new ResizeObserver(() => {
            const firstChunk = nodes.kingdomList.querySelector(".kingdom-block");
            if (!firstChunk) return;
            chunkHeight = firstChunk.getBoundingClientRect().height;
        });

        ro.observe(nodes.kingdomList);
    });
}
function clickKingdom(kingdom) {
    return (e) => {
        updateCurrentKingdom(kingdom);
    }
}
function updateCurrentKingdom(currentKingdom) {
    if (localStorage.getItem("kingdom")) [...document.getElementsByClassName(`kingdom-list-elements-${localStorage.getItem("kingdom")}`)].forEach((el) => el.classList.remove("selected"));
    [...document.getElementsByClassName(`kingdom-list-elements-${currentKingdom}`)].forEach((el) => el.classList.add("selected"));

    localStorage.setItem("kingdom", currentKingdom);

    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals")) ?? []);
    let total = !nomoonKingdoms.has(currentKingdom) ? moonTotals.get(currentKingdom) ?? 0 : 0;

    if (!nomoonKingdoms.has(currentKingdom)) {
        nodes.moonsTotal.innerHTML = `(<span id="moon-menu-total-editor" contenteditable="false">${total ? total : "??"}</span>)`;
        document.getElementById("moon-menu-total-editor").onclick = setMoonTotal;
    } else {
        nodes.moonsTotal.innerHTML = "";
    }

    leafletMap.fitBounds([fractionToLatLng([0, 0]), fractionToLatLng([1, 1])])
    mapLayer.setUrl(`/resource/maps/${currentKingdom}.png`);
    
    availableMoonsLayer.clearLayers();
    lockedMoonsLayer.clearLayers();
    completedMoonsLayer.clearLayers();
    availableZonesLayer.clearLayers();
    lockedZonesLayer.clearLayers();
    linkedZonesLayer.clearLayers();

    let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
    let collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
    let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);
    markMap.clear();

    moons.get(currentKingdom).forEach((moon) => {
        let mark = L.marker(fractionToLatLng([moon.x, moon.y]), { icon: 
            (collectedSet.has(moon.id) ?
                (icon(moonMap.has(moon.id) ? `moon-${moonMap.get(moon.id)}-complete` : "moon-unknown-complete"))
                : (icon(moonMap.has(moon.id) ? `moon-${moonMap.get(moon.id)}` : "moon-unknown"))
            )
        });
        mark.moonId = `${moon.type}-${moon.kingdomId}`;
        mark.on("click", (e) => {
            setSelection(mark.moonId);
        });
        markMap.set(moon.id, mark);

        if (moon.subarea) return;

        if (collectedSet.has(moon.id)) {
            completedMoonsLayer.addLayer(mark);
        } else if (evaluateLogic(moon.logic)) {
            availableMoonsLayer.addLayer(mark);
        } else {
            lockedMoonsLayer.addLayer(mark);
        }
    });

    zones.get(currentKingdom).forEach((zone) => {
        let mark = L.marker(fractionToLatLng([zone.x, zone.y]), { icon: (linkMap.has(zone.id) ? icon(`${zone.type}-linked`) : icon(zone.type)) });
        mark.zoneId = `${zone.type}-${zone.kingdomId}`;
        mark.on("click", (e) => {
            setSelection(mark.zoneId);
        });
        markMap.set(zone.id, mark);

        if (zone.subarea) return;

        if (linkMap.has(zone.id)) {
            linkedZonesLayer.addLayer(mark);
        } else if (evaluateLogic(zone.logic)) {
            availableZonesLayer.addLayer(mark);
        } else {
            lockedZonesLayer.addLayer(mark);
        }
    });

    updateMapWithDisplaySettings();
    refreshSidebar(1);

    if (!Number(localStorage.getItem("selectPersist"))) setSelection("");
    updateMoonCounter();
}
// Logic
function evaluateLogic(logic) {
    function predicate(logic) {
        let logicString = JSON.stringify(logic);

        if (logicCache.has(logicString)) return logicCache.get(logicString);

        if (typeof logic == "object") {
            switch (logic.op) {
                case "TRUE":
                    return true;
                case "FALSE":
                    return false;
                case "AND":
                    var result = logic.reqs.every(predicate);
                    logicCache.set(logicString, result);
                    return result;
                case "OR":
                    var result = logic.reqs.some(predicate);
                    logicCache.set(logicString, result);
                    return result;
                default:
                    return false;
            }
        } else if (typeof logic == "string") {
            if (logic.charAt(0) == "c") { // Capture
                let result = new Set(JSON.parse(localStorage.getItem("captures")) ?? []).has(normalizeName(logic.substring(1))) && predicate("gCap Throw");
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "a") { // Ability
                let result = new Set(JSON.parse(localStorage.getItem("abilities")) ?? []).has(normalizeName(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "m") { // Moon
                let result = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []).has(Number(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "l") { // Loading Zone
                let result = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []).has(Number(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "g") { // Group
                let group = groups.get(logic.substring(1));
                let result = group ? predicate(group) : false;
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "w") { // World Peace
                let peace = worldPeace.get(logic.substring(1));
                let result = peace ? predicate(peace) : false;
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "r") { // Moon Rock - Not Currently Used
                let result = new Set(JSON.parse(localStorage.getItem("moonRock")) ?? []).has(normalizeName(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "o") { // Outfit - Not Currently Used
                let result = new Set(JSON.parse(localStorage.getItem("outfits")) ?? []).has(normalizeName(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else if (logic.charAt(0) == "h") { // Hint Art - Not Currently Used
                let result = new Set(JSON.parse(localStorage.getItem("hintArt")) ?? []).has(normalizeName(logic.substring(1)));
                logicCache.set(logic, result);
                return result;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return predicate(logic);
}
// Display Settings
function updateMapWithDisplaySettings() {
    
    completedMoonsLayer.eachLayer((layer) => {
        layer.off("click");
        if (Number(localStorage.getItem("display:completed"))) {
            layer.on("click", (e) => {
                setSelection(layer.moonId);
            });
            layer.setOpacity(0.5);
            layer._icon.style.cursor = "pointer";
            layer.setZIndexOffset(0);
        } else {
            layer.setOpacity(0);
            layer._icon.style.cursor = "grab";
            layer.setZIndexOffset(-100);
        }
    });
    lockedMoonsLayer.eachLayer((layer) => {
        layer.off("click");
        if (Number(localStorage.getItem("display:locked"))) {
            layer.on("click", (e) => {
                setSelection(layer.moonId);
            });
            layer.setOpacity(0.5);
            layer._icon.style.cursor = "pointer";
            layer.setZIndexOffset(0);
        } else {
            layer.setOpacity(0);
            layer._icon.style.cursor = "grab";
            layer.setZIndexOffset(-100);
        }
    });
    availableMoonsLayer.eachLayer((layer) => {
        layer.off("click");
        layer.on("click", (e) => {
            setSelection(layer.moonId);
        });
        layer.setOpacity(1);
        layer._icon.style.cursor = "pointer";
        layer.setZIndexOffset(100);
    });

    linkedZonesLayer.eachLayer((layer) => {
        layer.off("click");
        if (Number(localStorage.getItem("display:completed"))) {
            layer.on("click", (e) => {
                setSelection(layer.zoneId);
            });
            layer.setOpacity(0.5);
            layer._icon.style.cursor = "pointer";
            layer.setZIndexOffset(0);
        } else {
            layer.on("click", (e) => {
                setSelection(layer.zoneId);
            });
            layer.setOpacity(0);
            layer._icon.style.cursor = "grab";
            layer.setZIndexOffset(-100);
        }
    });
    lockedZonesLayer.eachLayer((layer) => {
        layer.off("click");
        if (Number(localStorage.getItem("display:locked"))) {
            layer.on("click", (e) => {
                setSelection(layer.zoneId);
            });
            layer.setOpacity(0.5);
            layer._icon.style.cursor = "pointer";
            layer.setZIndexOffset(0);
        } else {
            layer.setOpacity(0);
            layer._icon.style.cursor = "grab";
            layer.setZIndexOffset(-100);
        }
    });
    availableZonesLayer.eachLayer((layer) => {
        layer.off("click");
        layer.on("click", (e) => {
            setSelection(layer.zoneId);
        });
        layer.setOpacity(1);
        layer._icon.style.cursor = "pointer";
        layer.setZIndexOffset(100);
    });
}
function checkAvailability() {
    logicCache.clear();

    let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

    let moonList = moons.get(localStorage.getItem("kingdom"));

    moonList.forEach((moon) => {
        if (moon.subarea != "") return;

        let mark = markMap.get(moon.id);

        if (collectedMap.has(moon.id)) {
            mark.removeFrom(availableMoonsLayer);
            mark.removeFrom(lockedMoonsLayer);
            mark.addTo(completedMoonsLayer);
        } else if (evaluateLogic(moon.logic)) {
            mark.removeFrom(completedMoonsLayer);
            mark.removeFrom(lockedMoonsLayer);
            mark.addTo(availableMoonsLayer);
        } else {
            mark.removeFrom(availableMoonsLayer);
            mark.removeFrom(completedMoonsLayer);
            mark.addTo(lockedMoonsLayer);
        }
    });

    let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

    let zoneList = zones.get(localStorage.getItem("kingdom"));

    zoneList.forEach((zone) => {
        if (zone.subarea != "") return;

        let mark = markMap.get(zone.id);

        if (linkMap.has(zone.id)) {
            mark.removeFrom(availableMoonsLayer);
            mark.removeFrom(lockedMoonsLayer);
            mark.addTo(completedMoonsLayer);
        } else if (evaluateLogic(zone.logic)) {
            mark.removeFrom(linkedZonesLayer);
            mark.removeFrom(lockedZonesLayer);
            mark.addTo(availableZonesLayer);
        } else {
            mark.removeFrom(availableZonesLayer);
            mark.removeFrom(linkedZonesLayer);
            mark.addTo(lockedZonesLayer);
        }
    });

    updateSelection();
    updateMapWithDisplaySettings();
    updateKingdomListChecks();
    refreshSidebar();
}
function updateKingdomListChecks() {
    kingdoms.forEach((kingdom) => {
        let moonData = moons.get(kingdom);
        let zoneData = zones.get(kingdom);

        let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);
        let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

        let availableChecks = 0;
        let completeChecks = 0;
        let totalChecks = 0;

        moonData.forEach((moon) => {
            totalChecks++
            if (collectedMap.has(moon.id)) {
                completeChecks++;
            } else if (evaluateLogic(moon.logic)) {
                availableChecks++;
            }
        });
        
        zoneData.forEach((zone) => {
            totalChecks++;
            if (linkMap.has(zone.id)) {
                completeChecks++;
            } else if (evaluateLogic(zone.logic)) {
                availableChecks++;
            }
        });

        [...document.getElementsByClassName(`kingdom-list-checks-${kingdom}`)].forEach((element) => element.innerHTML = `Available Checks: ${availableChecks}`);
        [...document.getElementsByClassName(`kingdom-list-completion-${kingdom}`)].forEach((element) => element.innerHTML = `Completion: ${Math.round(100 * completeChecks / totalChecks)}%`);
    })
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

    if (/.*\/resource\/reveal.png/.test(eye.src)) {
        link.textContent = `${window.location.origin}/overlay?roomId=${localStorage.getItem("roomId")}`;
        eye.src = "/resource/hide.png";
        eye.title = "Hide";
    } else {
        link.textContent = `${window.location.origin}/overlay?roomId=************************************`;
        eye.src = "/resource/reveal.png";
        eye.title = "Reveal";
    }
}
function copyLink() {
    navigator.clipboard.writeText(`${window.location.origin}/overlay?roomId=${localStorage.getItem("roomId")}`);
    hideToast("toast-link-div");
}

// ---- SELECTION MENU ----
// Open/Close Selection Menu
function openSelectionMenu() {
    nodes.selectionMenu.style.marginBottom = "0px";
    document.getElementById("selection-menu-header-collapse").style.transform = "rotate(0deg)";
    nodes.selectionMenuHeader.onclick = closeSelectionMenu;
}
function closeSelectionMenu() {
    nodes.selectionMenu.style.marginBottom = (-parseFloat(window.getComputedStyle(nodes.selectionMenu).height) + 50) + "px";
    document.getElementById("selection-menu-header-collapse").style.transform = "rotate(180deg)";
    nodes.selectionMenuHeader.onclick = openSelectionMenu;
}
function setSelection(selection) {
    localStorage.setItem("selection", selection);

    nodes.selectionMenuButtons.innerHTML = "";

    if (!Number(localStorage.getItem("selectPersist")) && selection == "") {
        closeSelectionMenu();
        nodes.selectionMenuTitle.textContent = "No Selection";
        nodes.selectionMenuIcon.src = `/resource/icons/moon-empty.png`;
        nodes.selectionMenuPicture.src = `/resource/icons/moon-empty.png`;
        nodes.selectionMenuDescription.textContent = "Select an icon to see details.";
        nodes.selectionMenuHeader.style.backgroundColor = "var(--medium-gray)";
        return;
    }

    let type = selection.split("-")[0];
    let kingdomId = selection.split("-")[1];

    switch (type) {
        case "multimoon":
            var multi = 1;
        case "moon":
            var data = moons.get(localStorage.getItem("kingdom")).find((value) => value.kingdomId == Number(kingdomId));
            var moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
            var collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

            nodes.selectionMenuTitle.textContent = data.name;

            var actualKingdom = moonMap.get(data.id) ?? "unknown";

            nodes.selectionMenuPicture.src = `/resource/moons/${actualKingdom}.png`;
            nodes.selectionMenuDescription.innerHTML = `<span class="selection-menu-moon-number">(${data.kingdomId < 900 ? data.kingdomId : "H"})</span>${data.name}`;

            if (collectedSet.has(data.id)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/moon-${actualKingdom}-complete.png`;
            } else if (evaluateLogic(data.logic)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/moon-${actualKingdom}.png`;
            } else {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/moon-${actualKingdom}.png`;
            }

            nodes.selectionMenuButtons.append(addMoonSelectionButtons(data.id, multi ?? 0));
            nodes.selectionMenuButtons.append(addMoonCollectionButton(data.id));
            nodes.selectionMenuButtons.append(addUnlockRequirementIcons("moon", data.id));

            if (data.subarea && (localStorage.getItem("sidebarTab") == "moons" || localStorage.getItem("sidebarTab") == "loadingZones")) {
                if (localStorage.getItem("sidebarTab") != "subAreas") setSidebarContentSubAreas();
                document.getElementById(`subarea-tracker-${data.subarea}`).scrollIntoView({ behavior: "instant", block: "center"});
            }

            break;
        case "pipe":
        case "moonpipe":
        case "capdoor":
        case "door":
        case "scarecrowdoor":
        case "rocket":
        case "vine":
        case "otherzone":
            var data = zones.get(localStorage.getItem("kingdom"))[Number(kingdomId) - 1];
            var linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

            nodes.selectionMenuTitle.textContent = data.name;
            nodes.selectionMenuPicture.src = `/resource/loadingzone.png`;

            if (linkMap.has(Number(data.id))) {
                let target = linkMap.get(Number(data.id));
                let targetData = zones.get(target.split("-")[0]).find((zone) => zone.id == Number(target.split("-")[1]));

                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/${data.type}-linked.png`;
                nodes.selectionMenuDescription.innerHTML = `${data.name}<br /><span class="selection-menu-moon-number">This loading zone links to:</span><br />${target.split("-")[0]}: ${targetData.name}`;
            } else if (evaluateLogic(data.logic)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/${data.type}.png`;
                nodes.selectionMenuDescription.innerHTML = `${data.name}<br /><span class="selection-menu-moon-number">This is a unlinked loading zone.</span>`;
            } else {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
                nodes.selectionMenuIcon.src = `/resource/icons/${data.type}.png`;
                nodes.selectionMenuDescription.innerHTML = `${data.name}<br /><span class="selection-menu-moon-number">This is a unlinked loading zone.</span>`;
            }

            nodes.selectionMenuButtons.append(addZoneLinkButton(data.id));
            nodes.selectionMenuButtons.append(addUnlockRequirementIcons("zone", data.id));

            if (data.subarea && (localStorage.getItem("sidebarTab") == "moons" || localStorage.getItem("sidebarTab") == "loadingZones")) {
                if (localStorage.getItem("sidebarTab") != "subAreas") setSidebarContentSubAreas();
                document.getElementById(`subarea-tracker-${data.subarea}`).scrollIntoView({ behavior: "instant", block: "center"});
            }
            break;
    }

    openSelectionMenu();
}
function updateSelection() {
    const selection = localStorage.getItem("selection");

    let type = selection.split("-")[0];
    let kingdomId = selection.split("-")[1];

    switch (type) {
        case "multimoon":
        case "moon":
            var data = moons.get(localStorage.getItem("kingdom")).find((value) => value.kingdomId == Number(kingdomId));
            var moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
            var collectedSet = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

            if (collectedSet.has(data.id)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";
            } else if (evaluateLogic(data.logic)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
            } else {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
            }

            if (data.subarea && (localStorage.getItem("sidebarTab") == "moons" || localStorage.getItem("sidebarTab") == "loadingZones")) {
                if (localStorage.getItem("sidebarTab") != "subAreas") setSidebarContentSubAreas();
                document.getElementById(`subarea-tracker-${data.subarea}`).scrollIntoView({ behavior: "instant", block: "center"});
            }

            document.getElementById("selection-menu-requirements").remove();
            nodes.selectionMenuButtons.append(addUnlockRequirementIcons("moon", data.id));

            break;
        case "pipe":
        case "moonpipe":
        case "capdoor":
        case "door":
        case "scarecrowdoor":
        case "rocket":
        case "vine":
        case "otherzone":
            var data = zones.get(localStorage.getItem("kingdom"))[Number(kingdomId) - 1];
            var linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

            if (linkMap.has(Number(data.id))) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";
            } else if (evaluateLogic(data.logic)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
            } else {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
            }

            if (data.subarea && (localStorage.getItem("sidebarTab") == "moons" || localStorage.getItem("sidebarTab") == "loadingZones")) {
                if (localStorage.getItem("sidebarTab") != "subAreas") setSidebarContentSubAreas();
                document.getElementById(`subarea-tracker-${data.subarea}`).scrollIntoView({ behavior: "instant", block: "center"});
            }

            document.getElementById("selection-menu-requirements").remove();
            nodes.selectionMenuButtons.append(addUnlockRequirementIcons("zone", data.id));
            break;
    }
}
// Moon Buttons
// Note: Change multimoon src path
function addMoonSelectionButtons(id, multi) {
    let container = document.createElement("div");
    container.classList.add("selection-menu-content-button-grid");

    [...(multi ? multimoonKingdoms : moonKingdoms)].forEach((kingdom) => {
        let el = document.createElement("div");
        el.innerHTML = `<img src="/resource/icons/${multi ? "moon" : "moon"}-${kingdom}.png" alt="${kingdom}" title="${kingdom}">`;
        el.onclick = moonSetKingdom(id, kingdom, multi);
        container.append(el);
    });

    let el = document.createElement("div");
    el.innerHTML = `<img src="/resource/eraser.png" alt="Eraser" title="Clear" draggable="false">`;
    el.onclick = moonSetKingdom(id, "");
    container.append(el);

    return container;
}
function addUnlockRequirementIcons(type, id) {
    const data = type == "moon" ? moons.get(localStorage.getItem("kingdom")).find((value) => value.id == id) : zones.get(localStorage.getItem("kingdom")).find((value) => value.id == id);

    const container = document.createElement("div");
    container.id = "selection-menu-requirements";

    const elementCache = new Set();

    function recursiveRequirementBuild(container, logic) {
        if (typeof logic == "object") {
            logic.reqs.forEach((req) => recursiveRequirementBuild(container, req));

        } else if (typeof logic == "string") {
            if (elementCache.has(logic)) return;
            elementCache.add(logic);

            const element = document.createElement("div");
            element.classList.add("selection-menu-requirement");

            if (logic.charAt(0) == "c") { // Capture
                element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${logic.substring(1)}</p>` : `<img src="/resource/captures/${normalizeName(logic.substring(1))}.png" draggable=false alt="${logic.substring(1)}" title="${logic.substring(1)}">`;
                element.style.backgroundColor = evaluateLogic(logic) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                setTimeout(wrapText, 1, element);
                element.onclick = (e) => {
                    setSidebarContentCaptures();
                    requestAnimationFrame(() => {
                        document.getElementById(`capture-tracker-${normalizeName(logic.substring(1))}`).scrollIntoView({ behavior: "instant", block: "center"});
                    });
                }
                recursiveRequirementBuild(container, "gCap Throw");
            } else if (logic.charAt(0) == "a") { // Ability
                element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${logic.substring(1)}</p>` : `<img src="/resource/abilities/${normalizeName(logic.substring(1))}.png" draggable=false alt="${logic.substring(1)}" title="${logic.substring(1)}">`;
                element.style.backgroundColor = evaluateLogic(logic) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                setTimeout(wrapText, 1, element);
                element.onclick = (e) => {
                    setSidebarContentAbilities();
                    requestAnimationFrame(() => {
                        document.getElementById(`ability-tracker-${normalizeName(logic.substring(1))}`).scrollIntoView({ behavior: "instant", block: "center"});
                    });
                }
            } else if (logic.charAt(0) == "m") { // Moon
                let data = moons.get(localStorage.getItem("kingdom")).find((value) => value.id == logic.substring(1));
                element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${data.name}</p>` : `<img src="/resource/moons/${localStorage.getItem("kingdom")}.png" draggable=false alt="(${data.kingdomId}) ${data.name}" title="(${data.kingdomId}) ${data.name}">`;
                element.style.backgroundColor = evaluateLogic(logic) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                setTimeout(wrapText, 1, element);
                element.onclick = (e) => {
                    setSelection(`${data.type}-${data.kingdomId}`);
                }
            } else if (logic.charAt(0) == "l") { // Loading Zone
                let data = zones.get(localStorage.getItem("kingdom")).find((value) => value.id == logic.substring(1));
                if (!data) console.log("AAAA")
                element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${data.name}</p>` : `<img src="/resource/loadingzone.png" draggable=false alt="${data.name}" title="${data.name}">`;
                element.style.backgroundColor = evaluateLogic(logic) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                setTimeout(wrapText, 1, element);
                element.onclick = (e) => {
                    setSelection(`${data.type}-${data.kingdomId}`);
                }
            } else if (logic.charAt(0) == "g") { // Group
                let group = groups.get(logic.substring(1));
                if (group.img) {
                    element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${group.alt}</p>` : `<img src="${group.img}" draggable=false alt="${group.alt}" title="${group.alt}">`;
                    element.style.backgroundColor = evaluateLogic(group) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                    setTimeout(wrapText, 1, element);
                } else {
                    group.reqs.forEach((req) => recursiveRequirementBuild(container, req));
                    return;
                }
            } else if (logic.charAt(0) == "w") { // World Peace
                element.innerHTML = Number(localStorage.getItem("display:captions")) ? `<p>${logic.substring(1)} World Peace</p>` : `<img src="/resource/moonrock.png" draggable=false alt="${logic.substring(1)} World Peace" title="${logic.substring(1)} World Peace">`;
                element.style.backgroundColor = evaluateLogic(worldPeace.get(logic.substring(1))) ? "var(--toast-positive-background)" : "var(--toast-negative-background)";
                setTimeout(wrapText, 1, element);
            // } else if (logic.charAt(0) == "r") { // Moon Rock - Not Currently Used
            //     let peace = new Set(JSON.parse(localStorage.getItem("moonRock")) ?? []).has(normalizeName(logic.substring(1)));
            //     return peace ? evaluateLogic(peace) : false;
            // } else if (logic.charAt(0) == "o") { // Outfit - Not Currently Used
            //     return new Set(JSON.parse(localStorage.getItem("outfits")) ?? []).has(normalizeName(logic.substring(1)));
            // } else if (logic.charAt(0) == "h") { // Hint Art - Not Currently Used
            //     let result = new Set(JSON.parse(localStorage.getItem("hintArt")) ?? []).has(normalizeName(logic.substring(1)));
            //     logicCache.set(logic, result);
            //     return result;
            }
            container.appendChild(element);
        }
    }

    recursiveRequirementBuild(container, data.logic);
    

    return container;
}
function moonSetKingdom(id, kingdom, multi) {
    return (e) => {
        let data = moons.get(localStorage.getItem("kingdom")).find((moon) => moon.id == id);
        let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
        let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

        let oldKingdom = moonMap.get(id);
        let mark = markMap.get(id);

        if (kingdom == "") {
            moonMap.delete(id);
            mark.setIcon(icon("moon-unknown"));
            nodes.selectionMenuPicture.src = `/resource/${multi ? "moon" : "moon"}s/unknown.png`;
        } else {
            moonMap.set(id, kingdom);
            mark.setIcon(icon(`moon-${kingdom}`));
            nodes.selectionMenuPicture.src = `/resource/${multi ? "moon" : "moon"}s/${kingdom}.png`;
        }

        

        if (collectedMap.has(id)) {
            let moonList = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);

            if (oldKingdom) {
                let oldMoon = moonList.get(oldKingdom) ?? 0;

                if (data.type == "multimoon") {
                    oldMoon -= 3;
                } else {
                    oldMoon--;
                }

                moonList.set(oldKingdom, oldMoon >= 0 ? oldMoon : 0);

                ably.publish("update:moons", { kingdom: oldKingdom, value: oldMoon >= 0 ? oldMoon : 0 });
            }

            if (kingdom) {
                let newMoon = moonList.get(kingdom) ?? 0;

                if (data.type == "multimoon") {
                    newMoon += 3;
                } else {
                    newMoon++;
                }
            
                moonList.set(kingdom, newMoon);

                ably.publish("update:moons", { kingdom: kingdom, value: newMoon });
            }
            
            localStorage.setItem("moons", JSON.stringify([...moonList]));

            mark.setIcon(icon(`${multi ? "moon" : "moon"}-${kingdom ? kingdom : "unknown"}-complete`));
            nodes.selectionMenuIcon.src = `/resource/icons/${multi ? "moon" : "moon"}-${kingdom ? kingdom : "unknown"}-complete.png`;
        } else {
            mark.setIcon(icon(`${multi ? "moon" : "moon"}-${kingdom ? kingdom : "unknown"}`));
            nodes.selectionMenuIcon.src = `/resource/icons/${multi ? "moon" : "moon"}-${kingdom ? kingdom : "unknown"}.png`;
        }

        localStorage.setItem("moonMap", JSON.stringify([...moonMap]));

        if (kingdom == localStorage.getItem("kingdom") || oldKingdom == localStorage.getItem("kingdom")) updateMoonCounter();
        refreshSidebar();
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
        let data = moons.get(localStorage.getItem("kingdom")).find((moon) => moon.id == id);
        let savedMoons = new Map(JSON.parse(localStorage.getItem("moons")) ?? []);
        let moonMap = new Map(JSON.parse(localStorage.getItem("moonMap")) ?? []);
        let collectedMap = new Set(JSON.parse(localStorage.getItem("collectedMap")) ?? []);

        let kingdom = moonMap.get(id) ?? "unknown";
        let moon = savedMoons.get(kingdom) ?? 0;

        let mark = markMap.get(id);

        let button = container.firstElementChild;
        let eraser = container.lastElementChild;

        if (state) {
            collectedMap.add(id);

            if (data.type == "multimoon") {
                moon += 3;
            } else {
                moon++;
            }
            
            if (!data.subarea) {
                mark.removeFrom(availableMoonsLayer);
                mark.removeFrom(lockedMoonsLayer);
                mark.addTo(completedMoonsLayer);
            } else {
                if (Number(localStorage.getItem("display:completed"))) {
                    mark.on("click", (e) => {
                        setSelection(mark.moonId);
                    });
                    mark.setOpacity(0.5);
                    mark._icon.style.cursor = "pointer";
                    mark.setZIndexOffset(0);
                } else {
                    mark.setOpacity(0);
                    mark._icon.style.cursor = "grab";
                    mark.setZIndexOffset(-100);
                }
            }
            
            nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";

            mark.setIcon(icon(`moon-${kingdom}-complete`));
            nodes.selectionMenuIcon.src = `/resource/icons/moon-${kingdom}-complete.png`;

            button.onclick = null;

            button.textContent = "Collected";
            button.style.cursor = "auto";
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
            
            if (data.type == "multimoon") {
                moon -= 3;
            } else {
                moon--;
            }

            if (!data.subarea) {
                mark.removeFrom(completedMoonsLayer);
                if (evaluateLogic(data.logic)) {
                    mark.addTo(availableMoonsLayer);
                    nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
                } else {
                    mark.addTo(lockedMoonsLayer);
                    nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
                }
            } else {
                if (evaluateLogic(data.logic)) {
                    mark.off("click");
                    mark.on("click", (e) => {
                        setSelection(mark.moonId);
                    });
                    mark.setOpacity(1);
                    mark._icon.style.cursor = "pointer";
                    mark.setZIndexOffset(100);
                } else {
                    mark.off("click");
                    if (Number(localStorage.getItem("display:locked"))) {
                        mark.on("click", (e) => {
                            setSelection(mark.moonId);
                        });
                        mark.setOpacity(0.5);
                        mark._icon.style.cursor = "pointer";
                        mark.setZIndexOffset(0);
                    } else {
                        mark.setOpacity(0);
                        mark._icon.style.cursor = "grab";
                        mark.setZIndexOffset(-100);
                    }
                }
            }

            mark.setIcon(icon(`moon-${kingdom}`));
            nodes.selectionMenuIcon.src = `/resource/icons/moon-${kingdom}.png`;

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
        if (kingdom != "unknown") {
            savedMoons.set(kingdom, moon >= 0 ? moon : 0);

            localStorage.setItem("moons", JSON.stringify([...savedMoons]));

            if (localStorage.getItem("kingdom") == kingdom) updateMoonCounter();

            ably.publish("update:moons", { kingdom: kingdom, value: moon >= 0 ? moon : moon });
        }

        localStorage.setItem("collectedMap", JSON.stringify([...collectedMap]));

        updateMapWithDisplaySettings();
        checkAvailability();
        refreshSidebar();
    }
}
// Loading Zone Buttons
function addZoneLinkButton(id) {
    let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

    let container = document.createElement("div");
    container.classList.add("selection-menu-content-button-line");

    let button = document.createElement("div");
    let eraser = document.createElement("div");

    eraser.classList.add("selection-menu-content-button");
    eraser.innerHTML = `<img src="/resource/eraser.png" alt="Eraser" title="Clear">`;

    if (linkMap.has(id)) {
        container.style.gap = "5px";
        button.innerText = "Warp";
        button.onclick =  zoneWarp(id);
        button.style.cursor = "pointer";
        eraser.onclick = zoneUnlink(id, container);
        eraser.style.width = "38px";
        eraser.style.borderWidth = "1px";
        eraser.style.padding = "7px";
        eraser.style.opacity = "1" ;
    } else {
        container.style.gap = "0";
        let linkingZoneId = localStorage.getItem("linking");
        if (linkingZoneId == id) {
            button.innerText = "Cancel Linking";
            button.onclick = cancelZoneLink(container);
        } else if (linkingZoneId) {
            button.innerText = "Finish Linking";
            button.onclick = zoneLinkFinish(id, container);
        } else {
            button.innerText = "Link";
            button.onclick = zoneLinkStart(id, container);
        }
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
function zoneLinkStart(id, container) {
    return (e) => {
        localStorage.setItem("selectPersist", 1);

        let data = zones.get(localStorage.getItem("kingdom")).find((zone) => zone.id == id);

        localStorage.setItem("linking", `${localStorage.getItem("kingdom")}-${id}`);

        if (!document.getElementById("toast-linking-div")) {
            let el = document.createElement("div");
            el.classList.add("toast");
            el.id = "toast-linking-div";
            el.innerHTML = `<p class="toast-noborder">Linking to ${data.name}...<img id="toast-cancel" src="/resource/cancel.png" alt="Cancel" title="Cancel"></p>`;
            nodes.toaster.appendChild(el);
            el.style.top = "-200px";
            let cancel = document.getElementById("toast-cancel");

            cancel.onclick = cancelZoneLink(container);

            setTimeout(showToast, 1, "toast-linking-div");
        };

        let button = container.firstElementChild;
        let eraser = container.lastElementChild;

        button.textContent = "Cancel Linking";
        button.onclick = cancelZoneLink(container);
    }
}
function zoneLinkFinish(id, container) {
    return (e) => {
        localStorage.setItem("selectPersist", 0);

        hideToast("toast-linking-div");

        let targetZoneId = localStorage.getItem("linking");
        let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

        let data = zones.get(localStorage.getItem("kingdom")).find((zone) => zone.id == id);
        let targetData = zones.get(targetZoneId.split("-")[0]).find((zone) => zone.id == Number(targetZoneId.split("-")[1]));

        linkMap.set(id, targetZoneId);
        linkMap.set(targetData.id, `${localStorage.getItem("kingdom")}-${id}`);

        localStorage.setItem("linkMap", JSON.stringify([...linkMap]));
        localStorage.setItem("linking", "");

        let mark = markMap.get(id);

        mark.setIcon(icon(`${data.type}-linked`));
        nodes.selectionMenuIcon.src = `/resource/icons/${data.type}-linked.png`;
        nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-positive-background)";
        nodes.selectionMenuDescription.innerHTML = `<span class="selection-menu-moon-number">This loading zone links to:</span><br />${targetZoneId.split("-")[0]}: ${targetData.name}`;

        if (!data.subarea) {
            mark.removeFrom(availableZonesLayer);
            mark.removeFrom(lockedZonesLayer);
            mark.addTo(linkedZonesLayer);
        } else {
            mark.off("click");
            if (Number(localStorage.getItem("display:completed"))) {
                mark.on("click", (e) => {
                    setSelection(mark.zoneId);
                });
                mark.setOpacity(1);
                mark._icon.style.cursor = "pointer";
                mark.setZIndexOffset(100);
            } else {
                mark.setOpacity(0.5);
                mark._icon.style.cursor = "grab";
                mark.setZIndexOffset(0);
            }
        }
        
            
        if (localStorage.getItem("kingdom") == targetZoneId.split("-")[0]) {
            let targetMark = markMap.get(targetData.id);
            targetMark.setIcon(icon(`${targetData.type}-linked`));

            if (!targetData.subarea) {
                targetMark.removeFrom(availableZonesLayer);
                targetMark.removeFrom(lockedZonesLayer);
                targetMark.addTo(linkedZonesLayer);
            } else {
                targetMark.off("click");
                if (Number(localStorage.getItem("display:completed"))) {
                    targetMark.on("click", (e) => {
                        setSelection(mark.zoneId);
                    });
                    targetMark.setOpacity(1);
                    targetMark._icon.style.cursor = "pointer";
                    targetMark.setZIndexOffset(100);
                } else {
                    targetMark.setOpacity(0.5);
                    targetMark._icon.style.cursor = "grab";
                    targetMark.setZIndexOffset(0);
                }
            }
        }

        let button = container.firstElementChild;
        let eraser = container.lastElementChild;

        button.onclick = zoneWarp(id);

        button.textContent = "Warp";
        button.style.cursor = "pointer";
        eraser.style.width = "38px";
        container.style.gap = "5px";
        eraser.style.borderWidth = "1px";
        eraser.style.padding = "7px";
        
        setTimeout(() => {
            eraser.style.opacity = "1" ;
            eraser.onclick = zoneUnlink(id, container);
        }, 300);

        updateMapWithDisplaySettings();
        checkAvailability();
        refreshSidebar();
    }
}
function cancelZoneLink(container) {
    return (e) => {
        localStorage.setItem("selectPersist", 0);
        localStorage.setItem("linking", "");

        hideToast('toast-linking-div');

        const selection = localStorage.getItem("selection");

        if (["pipe", "moonpipe", "capdoor", "door", "scarecrowdoor", "rocket", "vine", "otherzone"].includes(selection.split("-")[0])) {
                const data = zones.get(localStorage.getItem("kingdom")).find((value) => value.kingdomId == selection.split("-")[1]);

                const button = container.firstElementChild;
                button.innerText = "Link";
                button.onclick = zoneLinkStart(data.id, container);
        }
    }
    
}
function zoneUnlink(id, container) {
    return (e) => {
        let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

        let targetZoneId = linkMap.get(id);

        let data = zones.get(localStorage.getItem("kingdom")).find((zone) => zone.id == id);
        let targetData = zones.get(targetZoneId.split("-")[0]).find((zone) => zone.id == Number(targetZoneId.split("-")[1]));

        linkMap.delete(id);
        linkMap.delete(targetData.id);

        localStorage.setItem("linkMap", JSON.stringify([...linkMap]));

        let mark = markMap.get(id);

        mark.setIcon(icon(`${data.type}`));
        nodes.selectionMenuIcon.src = `/resource/icons/${data.type}.png`;

        if (!data.subarea) {
            mark.removeFrom(linkedZonesLayer);
            if (evaluateLogic(data.logic)) {
                mark.addTo(availableZonesLayer);
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
            } else {
                mark.addTo(lockedZonesLayer);
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
            }
        } else {
            mark.off("click");
            mark.on("click", (e) => {
                setSelection(mark.zoneId);
            });
            mark.setOpacity(1);
            mark._icon.style.cursor = "pointer";
            mark.setZIndexOffset(100);
            if (evaluateLogic(data.logic)) {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-incomplete-background)";
            } else {
                nodes.selectionMenuHeader.style.backgroundColor = "var(--toast-negative-background)";
            }
        }
        
        if (localStorage.getItem("kingdom") == targetZoneId.split("-")[0]) {
            let targetMark = markMap.get(targetData.id);
            targetMark.setIcon(icon(`${targetData.type}`));

            if (!targetData.subarea) {
                targetMark.removeFrom(linkedZonesLayer);
                if (evaluateLogic(targetData.logic)) {
                    targetMark.addTo(availableZonesLayer);
                } else {
                    targetMark.addTo(lockedZonesLayer);
                }
            } else {
                targetMark.off("click");
                targetMark.on("click", (e) => {
                    setSelection(targetMark.zoneId);
                });
                targetMark.setOpacity(1);
                targetMark._icon.style.cursor = "pointer";
                targetMark.setZIndexOffset(100);
            }
        }

        let button = container.firstElementChild;
        let eraser = container.lastElementChild;

        eraser.onclick = null;

        button.textContent = localStorage.getItem("linking") ? "Finish Linking" : "Link";
        button.style.cursor = "pointer"
        eraser.style.opacity = "0";
        
        setTimeout(() => {
            eraser.style.width = "0";
            container.style.gap = "0";
            eraser.style.borderWidth = "0px";
            eraser.style.padding = "7px 0px";
            button.onclick = localStorage.getItem("linking") ? zoneLinkFinish(id, container) : zoneLinkStart(id, container);
        }, 300);

        updateMapWithDisplaySettings();
        checkAvailability();
        refreshSidebar();
    }
}
function zoneWarp(id) {
    return (e) => {
        let linkMap = new Map(JSON.parse(localStorage.getItem("linkMap")) ?? []);

        let target = linkMap.get(id);
        let targetData = zones.get(target.split("-")[0]).find((zone) => zone.id == target.split("-")[1])

        if (localStorage.getItem("kingdom") != target.split("-")[0]) {
            localStorage.setItem("selectPersist", 1);
            updateCurrentKingdom(target.split("-")[0]);
            localStorage.setItem("selectPersist", 0);
        }

        setSelection(`${targetData.type}-${targetData.kingdomId}`);

        if (targetData.subarea) {
            if (localStorage.getItem("sidebarTab") != "subAreas") setSidebarContentSubAreas();
            document.getElementById(`subarea-tracker-${targetData.subarea}`).scrollIntoView({ behavior: "instant", block: "center"});
        }

        // setTimeout(() => {
        //     leafletMap.setView(fractionToLatLng([targetData.x, targetData.y]), 3);
        // }, 50)
    }
}

// ---- HAMBURGER MENU ----
// Open/Close Hamburger Menu
function openHamburger() {
    nodes.hamburgerMover.style.marginTop = "0";
    setTimeout(() => {document.addEventListener("click", clickOffHamburger)}, 1);
    nodes.hamburgerButton.onclick = closeHamburger;
}
function closeHamburger() {
    nodes.hamburgerMover.style.marginTop = window.getComputedStyle(nodes.hamburgerMover).height;
    nodes.hamburgerButton.onclick = openHamburger;
}
function clickOffHamburger(event) {
    if (!nodes.hamburgerMover.contains(event.target)) {
        closeHamburger();
        document.removeEventListener("click", clickOffHamburger);
    }
}
// Hamburger Menu Buttons
function initMenus() {
    // Default settings
    if (!localStorage.getItem("display:captions")) localStorage.setItem("display:captions", 0);
    if (!localStorage.getItem("display:theme")) localStorage.setItem("display:theme", 1);
    if (!localStorage.getItem("display:completed")) localStorage.setItem("display:completed", 1);
    if (!localStorage.getItem("display:locked")) localStorage.setItem("display:locked", 1);

    createSettingsToggle("display:captions", "Show Icons", "Show Captions", toggleImageText);
    createSettingsToggle("display:theme", "Theme: Light", "Dark", toggleLightDarkMode);
    createSettingsToggle("display:completed", "Completed Checks: Hide", "Show", toggleCompletedIcons);
    createSettingsToggle("display:locked", "Locked Checks: Hide", "Show", toggleLockedIcons);

    createSettingsDropdown("preset", "Preset:", presets, confirmPreset)

    if (Number(localStorage.getItem("display:theme"))) {
        nodes.root.style.setProperty("--background", "#0F0F13");
        nodes.root.style.setProperty("--selection-background-color", "#F2F2F2");
        nodes.root.style.setProperty("--selection-color", "#0F0F13");
    }
    localStorage.removeItem("linking");
    localStorage.removeItem("selectPersist");
}
function createLinkToast() {
    closeHamburger();

    if (document.getElementById("toast-link-div")) return;

    let el = document.createElement("div");
    el.classList.add("toast");
    el.id = "toast-link-div";
    el.innerHTML = `<h1 class="toast-title">Copy this link into an OBS browser source.</h1><p id="toast-link"><span id="toast-link-text">${window.location.origin}/overlay?roomId=************************************</span><img id="toast-reveal" src="/resource/reveal.png" alt="Eye" title="Reveal"><img id="toast-copy" src="/resource/link.png" alt="Link" title="Copy"></p>`;
    nodes.toaster.appendChild(el);
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

// ---- MENUS ----
// Settings Menu
function createSettingsToggle(name, opt1, opt2, callback) {
    let el = document.createElement("div");
    el.classList.add("setting-menu-line");
    el.id = `setting-menu-${name}`;
    el.innerHTML = `<span>${opt1}</span><label class="toggle-switch"><input type="checkbox" id="setting-menu-${name}-toggle"><span class="slider"></span></label><span>${opt2}</span>`;
    nodes.settingsMenu.append(el);
    if (Number(localStorage.getItem(name))) {
        document.getElementById(`setting-menu-${name}-toggle`).checked = true;
    }
    document.getElementById(`setting-menu-${name}-toggle`).onclick = callback;
}
function createSettingsDropdown(name, label, options, callback) {
    let el = document.createElement("div");
    el.classList.add("setting-menu-line");
    el.id = `setting-menu-${name}`;

    const labelEl = document.createElement("span");
    labelEl.textContent = label;

    const wrap = document.createElement("div");
    wrap.id = `setting-menu-${name}-dropdown`;
    wrap.classList.add("setting-menu-dropdown");

    const button = document.createElement("div");
    button.classList.add("setting-menu-dropdown-button");
    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = `<span></span><img src="/resource/dropdown.png" draggable=false class="setting-menu-dropdown-arrow">`;
    
    const list = document.createElement("div");
    list.classList.add("setting-menu-dropdown-list");
    list.setAttribute("role", "listbox");

    for (const [key] of options) {
        const opt = document.createElement("div");
        opt.classList.add("setting-menu-dropdown-item");
        opt.dataset.value = key;
        opt.textContent = key;
        opt.title = options.get(key).description ?? "";
        list.appendChild(opt);
    }

    wrap.appendChild(button);
    wrap.appendChild(list);

    el.appendChild(labelEl);
    el.appendChild(wrap);
    nodes.settingsMenu.append(el);

    const getStoredOrDefault = () => {
        const stored = localStorage.getItem(name);
        if (stored && options.has(stored)) return stored;
        return keys.length ? keys[0] : "";
    };

    const setSelected = (key, triggerCallback) => {
        if (!options.has(key)) return;

        localStorage.setItem(name, key);
        button.firstElementChild.textContent = key;

        // Set tooltip on the closed button too
        const data = options.get(key);
        button.title = data?.description ?? "";

        if (triggerCallback) callback(key);
    };

    const open = () => {
        if (wrap.classList.contains("open")) return;
        wrap.classList.add("open");
        button.setAttribute("aria-expanded", "true");
    };

    const close = () => {
        if (!wrap.classList.contains("open")) return;
        wrap.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    };

    const toggle = () => (wrap.classList.contains("open") ? close() : open());

    // ----- Initialize selection -----
    setSelected(getStoredOrDefault(), false);

    // ----- Mouse interactions -----
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
    });

    list.addEventListener("click", (e) => {
        const target = e.target;
        const item = target?.closest(".setting-menu-dropdown-item");
        if (!item) return;
        const key = item.dataset.value;
        if (!key) return;

        setSelected(key, true);
        close();
        button.focus();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (!wrap.classList.contains("open")) return;
        if (wrap.contains(e.target)) return;
        close();
    });
}
function toggleImageText() {
    if (document.getElementById(`setting-menu-display:captions-toggle`).checked) {
        localStorage.setItem("display:captions", 1);

        switch (localStorage.getItem("sidebarTab")) {
            case "captures":
                captures.forEach((capture) => {
                    let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
                    div.innerHTML = `<p>${capture}</p>`;
                    wrapText(div);
                });
                break;
            case "abilities":
                abilities.forEach((ability) => {
                    let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
                    div.innerHTML = `<p>${ability}</p>`;
                    wrapText(div);
                });
                break;
        }
    } else {
        localStorage.setItem("display:captions", 0);

        switch (localStorage.getItem("sidebarTab")) {
            case "captures":
                captures.forEach((capture) => {
                    let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
                    div.innerHTML = `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
                    wrapText(div);
                });
                break;
            case "abilities":
                abilities.forEach((ability) => {
                    let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
                    div.innerHTML = `<img src="/resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
                    wrapText(div);
                });
                break;
        }
    }
    updateSelection();
}
function toggleLightDarkMode() {
    if (document.getElementById(`setting-menu-display:theme-toggle`).checked) {
        localStorage.setItem("display:theme", 1);

        nodes.root.style.setProperty("--background", "#0F0F13");
        nodes.root.style.setProperty("--selection-background-color", "#F2F2F2");
        nodes.root.style.setProperty("--selection-color", "#0F0F13");

    } else {
        localStorage.setItem("display:theme", 0);

        nodes.root.style.setProperty("--background", "#F2F2F2");
        nodes.root.style.setProperty("--selection-background-color", "#0F0F13");
        nodes.root.style.setProperty("--selection-color", "#F2F2F2");
    }
}
function toggleCompletedIcons() {
    if (document.getElementById(`setting-menu-display:completed-toggle`).checked) {
        localStorage.setItem("display:completed", 1);
    } else {
        localStorage.setItem("display:completed", 0);
    }

    updateMapWithDisplaySettings();
    if (localStorage.getItem("sidebarTab") == "subAreas") refreshSidebar();
}
function toggleLockedIcons() {
    if (document.getElementById(`setting-menu-display:locked-toggle`).checked) {
        localStorage.setItem("display:locked", 1);
    } else {
        localStorage.setItem("display:locked", 0);
    }

    updateMapWithDisplaySettings();
    if (localStorage.getItem("sidebarTab") == "subAreas") refreshSidebar();
}
// Preset Popup
function confirmPreset(option) {
    nodes.popupMenu.innerHTML = `<h1>Load Preset</h1><p>Loading a preset will overwrite your progress. Are you sure you want to continue?</p><div class="menu-button-container"><p class="menu-button" id="popup-yes">Yes</p><p class="menu-button" id="popup-no">No</p></div>`
    nodes.popupMenu.style.opacity = 1;
    nodes.popupMenu.style.zIndex = 300;

    document.getElementById("popup-yes").onclick = (e) => {
        nodes.popupMenu.style.opacity = 0;
        setTimeout(() => {nodes.popupMenu.style.zIndex = -1}, 200);
        document.getElementById("popup-yes").onclick = null;
        document.getElementById("popup-no").onclick = null;
        applyPreset(option, 1);
    }
    document.getElementById("popup-no").onclick = (e) => {
        nodes.popupMenu.style.opacity = 0;
        setTimeout(() => {nodes.popupMenu.style.zIndex = -1}, 200);
        document.getElementById("popup-no").onclick = null;
        document.getElementById("popup-yes").onclick = null;
    }
}
function applyPreset(preset, reset) {
    let data = presets.get(preset);

    if (!data) {
        console.log("Preset not found");
        return;
    }

    localStorage.setItem("moonMap", JSON.stringify(data.moons));
    localStorage.setItem("linkMap", JSON.stringify(data.zones));

    updateCurrentKingdom(localStorage.getItem("kingdom"));

    if (reset) resetProgress(1);
}
// Reset Popup
function confirmReset() {
    nodes.popupMenu.innerHTML = `<h1>Reset</h1><p>Are you sure you want to reset your progress?</p><div class="menu-button-container"><p class="menu-button" id="reset-yes">Yes</p><p class="menu-button" id="reset-no">No</p></div>`
    nodes.popupMenu.style.opacity = 1;
    nodes.popupMenu.style.zIndex = 300;

    closeHamburger();

    document.getElementById("reset-yes").onclick = (e) => {
        nodes.popupMenu.style.opacity = 0;
        setTimeout(() => {nodes.popupMenu.style.zIndex = -1}, 200);
        document.getElementById("reset-yes").onclick = null;
        document.getElementById("reset-no").onclick = null;
        resetProgress(1);
    }
    document.getElementById("reset-no").onclick = (e) => {
        nodes.popupMenu.style.opacity = 0;
        setTimeout(() => {nodes.popupMenu.style.zIndex = -1}, 200);
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

    logicCache.clear();

    updateMoonCounter();

    updateCurrentKingdom(localStorage.getItem("kingdom"));

    applyPreset(localStorage.getItem("preset") ?? "None", 0);

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

    let targetWidth = target.clientWidth - 2 * parseFloat(style.padding);

    if (child.scrollWidth <= targetWidth) return;

    child.style.fontSize = (parseFloat(childStyle.fontSize) * (targetWidth / child.scrollWidth)) + "px";
}