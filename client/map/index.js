if (localStorage.getItem("SHA") !== window.__COMMIT_SHA__) {
    clearCache();
}
localStorage.setItem("SHA", window.__COMMIT_SHA__);

function clearCache() {}

const params = new URLSearchParams(location.search);
const roomId = params.get("roomId");

if (!roomId) {
    (async () => {
        let res = await fetch("/api/create", { method: "POST" });

        if (res.ok) {
            let data = await res.json();
            if (data.roomId) location.href = `/map?roomId=${encodeURIComponent(data.roomId)}`;
        }
    })();
}

const kingdoms = [
    "cap",
    "cascade",
    "sand",
    "lake",
    "wooded",
    "cloud",
    "lost",
    "metro",
    "snow",
    "seaside",
    "luncheon",
    "ruined",
    "bowser",
    "moon",
    "mushroom",
    "dark",
    "darker"
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

const kingdomList = document.getElementById("kingdom-list");
const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
const tabCaptures = document.getElementById("sidebar-tab-captures");
const tabAbilities = document.getElementById("sidebar-tab-abilities");
const tabSubAreas = document.getElementById("sidebar-tab-subAreas");
const tabLoadingZones = document.getElementById("sidebar-tab-loadingZones");
const tabAvailableChecks = document.getElementById("sidebar-tab-availableChecks");
const sidebarDragbar = document.getElementById("sidebar-dragbar");

let showText = false;

let currentKingdom = "sand";
let currentSidebarTab = "captures";
setSidebarContentCaptures();

tabCaptures.onclick = updateSidebarTab;
tabAbilities.onclick = updateSidebarTab;
tabSubAreas.onclick = updateSidebarTab;
tabLoadingZones.onclick = updateSidebarTab;
tabAvailableChecks.onclick = updateSidebarTab;
sidebarDragbar.onmousedown = sidebarDrag;


kingdoms.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `kingdom-list-${kingdom}`;
    newDiv.innerHTML = `<img src="/resource/kingdoms/${kingdom}.png" alt="${prettyName(kingdom)}" title="${prettyName(kingdom)}" draggable="false">`;
    newDiv.onclick = updateCurrentKingdom;
    kingdomList.appendChild(newDiv);
});

// Event handlers
function updateCurrentKingdom(event) {
    let target = event.target.tagName == "IMG" ? event.target.parentElement : event.target;

    let newKingdom = target.id.split("-")[2];

    document.getElementById(`kingdom-list-${currentKingdom}`).classList.remove("selected");
    document.getElementById(`kingdom-list-${newKingdom}`).classList.add("selected");

    currentKingdom = newKingdom;
}

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
        case "availableChecks":
            setSidebarContentAvailableChecks();
            return;
    }
}

function setSidebarContentCaptures() {
    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = "repeat(auto-fit, minmax(90px, 1fr))";

    captures.forEach((capture) => {
        let newDiv = document.createElement("div");
        newDiv.id = `capture-tracker-${normalizeName(capture)}`;
        /* if (!savedCaptures.has(normalizeName(capture))) */ newDiv.classList.add("locked");
        newDiv.innerHTML = showText ? `<p>${capture}</p>` : `<img src="/resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        newDiv.addEventListener("click", toggleUnlock);
        sidebarContent.appendChild(newDiv);
        setTimeout(wrapText, 1, newDiv);
    })
}

function setSidebarContentAbilities() {
    sidebarContent.innerHTML = "";
    sidebarContent.style.gridTemplateColumns = "repeat(auto-fit, minmax(90px, 1fr))";

    abilities.forEach((ability) => {
        let newDiv = document.createElement("div");
        newDiv.id = `ability-tracker-${normalizeName(ability)}`;
        /* if (!savedAbilties.has(normalizeName(ability))) */ newDiv.classList.add("locked");
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

function setSidebarContentAvailableChecks() {
    sidebarContent.innerHTML = "";
}

function sidebarDrag(event) {
    let prevX = event.screenX;

    window.onmousemove = (e) => {
        let curX = e.screenX;

        let width = parseFloat(window.getComputedStyle(sidebar).width);

        if (isNaN(width)) return;

        sidebar.style.width = Math.max(200, Math.min(width + (prevX - curX), 800)) + "px";

        prevX = curX;
    }
    window.onmouseup = (e) => {
        window.onmousemove = null;
        window.onmouseup = null;
    }
}



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
}

function setAbility(ability, state) {
    let abilities = new Set(JSON.parse(localStorage.getItem("abilities") ?? "[]"));

    if (state) {
        abilities.add(ability);
    } else {
        abilities.delete(ability);
    }

    localStorage.setItem("abilities", JSON.stringify([...abilities]));
}


// String conversions
function normalizeName(input) {
    return input.replace(/\s+/g, "_").replace(/\-/, "_");
}

function prettyName(input) {
    return input.charAt(0).toUpperCase() + input.substring(1);
}

function wrapText(target) {
    let child = target.firstElementChild;

    let style = window.getComputedStyle(target);
    let childStyle = window.getComputedStyle(child);

    let targetWidth = target.clientWidth * 0.95 - 2 * parseFloat(style.padding);

    if (child.scrollWidth <= targetWidth) return;

    child.style.fontSize = (parseFloat(childStyle.fontSize) * (targetWidth / child.scrollWidth)) + "px";
}