const moons = [
    "cascade",
    "sand",
    "lake",
    "wooded",
    "lost",
    "metro",
    "snow",
    "seaside",
    "ruined",
    "bowser",
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
    "Dive",
    "Climb",
    "Ground Pound",
    "Cap Throw",
    "Down Throw",
    "Up Throw",
    "Spin Throw",
    "Ledge Grab"
];

const primaryCaptures = [
    // Required to beat the game
    "Spark Pylon",
    "Golden Chain Chomp",
    "Parabones",
    "Banzai Bill",
    "Bowser",

    // Required for world peace
    "Bullet Bill",
    "Knucklotec's Fist",
    "Uproot",
    "Manhole",
    "Puzzle Part (Metro Kingdom)",
    "Sherm",
    "Gushen",
    "Lava Bubble",
    "Volbonan",
    "Pokio",

    // Unlocks a lot of moons
    "Rocket",
    "Lakitu",
    "Yoshi",
    "Goomba",
    "Binoculars",

    // Extra space
    "Frog",
    "Paragoomba",
    "Chain Chomp",
    "Cheep Cheep"
];

const captures = [
    "Big Chain Chomp", //2
    "T-Rex", //3
    "Moe-Eye", //0
    "Tropical Wiggler", //2
    "Glydon", // not many
    "Zipper", //5

    "Hammer Bro", //2
    "Poison Piranha Plant", //0
    "Fire Bro",
    "Fire Piranha Plant", //0
    "Shiverian", //6
    "Snow Cheep Cheep",

    "Cactus", //1
    "Tree", //1
    "Boulder", //1
    "Letter", //1
    "Meat", //3
    "Bowser Statue", //1

    "Pole", //0
    "Taxi", //2
    "RC Car", //3
    "Ty-Foo",  //2
    "Jizo", //4
    "Chargin' Chuck", //0

    "Puzzle Part (Lake Kingdom)", //1
    "Picture Match Part (Goomba)", //2
    "Picture Match Part (Mario)", //2
    "Coin Coffer", //1    
];

const divMoon = document.getElementById("moon-tracker");
const divAbility = document.getElementById("ability-tracker");
const divCapture = document.getElementById("capture-tracker");
const divOverflow = document.getElementById("capture-overflow");
const hamburger = document.getElementById("capture-overflow-hamburger")


// Setup
moons.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `moon-tracker-${kingdom}`;
    newDiv.innerHTML = `<img src="./resource/moons/${kingdom}.png" alt="${prettyName(kingdom)} Moons" title="${prettyName(kingdom)}" draggable="false"><p class="moon-counter"><span id="moon-tracker-${kingdom}-amount">0</span> / <span id="moon-tracker-${kingdom}-total" contenteditable="false">??</span></p>`;
    newDiv.onwheel = scrollMoonCount;
    newDiv.onclick = setMoonTotal;
    divMoon.appendChild(newDiv);
});

abilities.forEach((ability) => {
    let newDiv = document.createElement("div");
    newDiv.id = `ability-tracker-${normalizeName(ability)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = `<img src="./resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
    newDiv.onclick = toggleUnlock;
    divAbility.appendChild(newDiv);
});

primaryCaptures.forEach((capture) => {
    let newDiv = document.createElement("div");
    newDiv.id = `capture-tracker-${normalizeName(capture)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    newDiv.addEventListener("click", toggleUnlock)
    divCapture.appendChild(newDiv);
});

captures.forEach((capture) => {
    let newDiv = document.createElement("div");
    newDiv.id = `capture-tracker-${normalizeName(capture)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    newDiv.addEventListener("click", toggleUnlock)
    divOverflow.appendChild(newDiv);
});

const captureRect = divCapture.getBoundingClientRect();
divOverflow.style.height = (divCapture.clientHeight + 2*divCapture.style.borderWidth )+ "px";
divOverflow.style.bottom = (window.innerHeight - captureRect.bottom) + "px";
divOverflow.style.right = (window.innerWidth - captureRect.right) + "px";
divOverflow.style.borderBottomRightRadius = (8 + hamburger.clientWidth / 2) + "px"; // 8 = padding

hamburger.onclick = clickOnHamburger;


// Event handlers
function toggleUnlock(event) {
    let target = event.target.tagName == "IMG" ? event.target.parentElement : event.target;
    if (target.classList.contains("locked")) {
        target.classList.remove("locked");
    } else {
        target.classList.add("locked");
    }
}

function scrollMoonCount(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;
    if (target.tagName == "SPAN") target = target.parentElement.parentElement;

    event.preventDefault();

    let span = document.getElementById(target.id + "-amount");

    let delta = event.deltaY > 0 ? -1 : 1;

    let amount = parseInt(span.textContent);
    if (isNaN(amount)) amount = 0;

    amount+= delta;

    if (amount < 0) amount = 0;
    if (amount > 99) amount = 99;

    span.textContent = amount;

}

function setMoonTotal(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;
    if (target.tagName == "SPAN") target = target.parentElement.parentElement;

    event.preventDefault();

    let span = document.getElementById(target.id + "-total");

    span.contentEditable = true;
    span.focus();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(span);
    sel.removeAllRanges();
    sel.addRange(range);

    span.addEventListener("blur", () => {
        span.contentEditable = "false";
        validateTotalMoons(span);
    });
    span.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            span.contentEditable = "false";
            validateTotalMoons(span);
        }
    });
}

function validateTotalMoons(el) {
    let newValue = el.textContent.trim();

    let num = Number(newValue)

    if (isNaN(num) || num >= 100 || num <= 0) {
        el.textContent = "??";
    } else {
        el.textContent = String(num);
    }
}

function clickOnHamburger(event) {
    if (divOverflow.style.zIndex > 0) {
        closeHamburger();
    } else {
        divOverflow.style.zIndex = 100;
        divOverflow.style.opacity = 1;
        setTimeout(() => {document.addEventListener("click", clickOffHamburger)}, 0);
    }
    
}

function clickOffHamburger(event) {
    if (!divOverflow.contains(event.target)) {
        closeHamburger();
        document.removeEventListener("click", clickOffHamburger);
    }
}

function closeHamburger() {
    divOverflow.style.opacity = 0;
    setTimeout(() => {divOverflow.style.zIndex = -100;}, 200);
}


// String conversions
function normalizeName(input) {
    return input.replace(/\s+/g, "_")
}

function prettyName(input) {
    return input.charAt(0).toUpperCase() + input.substring(1);
}