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
const tabMoons = document.getElementById("sidebar-tab-moons");
const sidebarDragbar = document.getElementById("sidebar-dragbar");
const hamburger = document.getElementById("hamburger-button");
const hamburgerMover = document.getElementById("button-menu-mover");
const linkButton = document.getElementById("link-button");

const kingdomName = document.getElementById("moon-menu-kingdom");
const moonsTotal = document.getElementById("moon-menu-total");
const moonsContainer = document.getElementById("moon-menu-moon-container");
const toast = document.getElementById("toast");
const toastReveal = document.getElementById("toast-reveal");
const toastCopy = document.getElementById("toast-copy");

let showText = false;

let currentKingdom = "sand";
let currentSidebarTab = "captures";
setSidebarContentCaptures();
updateMoonCounter();

tabCaptures.onclick = updateSidebarTab;
tabAbilities.onclick = updateSidebarTab;
tabSubAreas.onclick = updateSidebarTab;
tabLoadingZones.onclick = updateSidebarTab;
tabMoons.onclick = updateSidebarTab;
sidebarDragbar.onmousedown = sidebarDrag;
hamburger.onclick = toggleHamburger;
linkButton.onclick = showToast;

toastReveal.onclick = toggleLinkReveal;
toastCopy.onclick = copyLink;

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

    updateMoonCounter();
}

function updateMoonCounter() {
    kingdomName.textContent = prettyName(currentKingdom);

    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let amount = moons.get(currentKingdom) ?? 0;
    let total = moonTotals.get(currentKingdom) ?? 0;
    let empty = total ? total - amount : 1;

    moonsContainer.innerHTML = "";

    for (i = 0; i < amount; i++) {
        let el = document.createElement("img");
        el.src = `/resource/icons/moon-${currentKingdom}.png`;
        el.alt="Moon";
        el.title="";
        el.draggable=false;
        el.onclick = removeMoon;
        moonsContainer.appendChild(el);
    }

    for (i = 0; i < empty; i++) {
        let el = document.createElement("img");
        el.src = `/resource/icons/moon-empty.png`;
        el.alt="Moon";
        el.title="";
        el.draggable=false;
        el.onclick = addMoon;
        moonsContainer.appendChild(el);
    }
}

function addMoon() {
    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let moon = moons.get(currentKingdom) ?? 0;
    let total = moonTotals.get(currentKingdom) ?? 0;

    let el = moonsContainer.children[moon++];
    el.src = `/resource/icons/moon-${currentKingdom}.png`;
    el.onclick = removeMoon;

    moons.set(currentKingdom, moon)

    localStorage.setItem("moons", JSON.stringify([...moons]));

    if (!total) {
        el = document.createElement("img");
        el.src = `/resource/icons/moon-empty.png`;
        el.alt="Moon";
        el.title="";
        el.draggable=false;
        el.onclick = addMoon;
        moonsContainer.appendChild(el);
    }
    

}

function removeMoon() {
    let moons = new Map(JSON.parse(localStorage.getItem("moons") ?? "[]"));
    let moonTotals = new Map(JSON.parse(localStorage.getItem("moonTotals") ?? "[]"));

    let moon = moons.get(currentKingdom) ?? 0;
    let total = moonTotals.get(currentKingdom) ?? 0;

    if (moon <= 0) return;

    if (!total) moonsContainer.lastElementChild.remove();

    let el = moonsContainer.children[--moon];
    el.src = `/resource/icons/moon-empty.png`;
    el.onclick = addMoon;

    moons.set(currentKingdom, moon)

    localStorage.setItem("moons", JSON.stringify([...moons]));
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
        case "moons":
            setSidebarContentMoons();
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

function setSidebarContentMoons() {
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

function toggleHamburger(event) {
    let state = parseInt(window.getComputedStyle(hamburgerMover).marginTop) > 0;

    if (state) {
        hamburgerMover.style.marginTop = "0%";
    } else {
        hamburgerMover.style.marginTop = "600%";
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

function showToast() {
    toast.style.top = "30px";
}

function hideToast() {
    toast.style.top = "-200px";
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
    hideToast();
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