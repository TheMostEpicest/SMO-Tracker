const moons = [
    "cascade",
    "sand",
    "lake",
    "wooded",
    "lost",
    "metro",
    "snow",
    "seaside",
    "luncheon",
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

    // Unlocks a lot of moons
    "Rocket",
    "Lakitu",
    "Yoshi",
    "Goomba",
    "Paragoomba",
    "Binoculars",
];

const captures = [ // How many moons each capture unlocks from memory (probably wildly wrong)
    "Frog",
    "Chain Chomp",
    "Big Chain Chomp", //2
    "T-Rex", //3
    "Glydon", // not many
    "Moe-Eye", //0

    "Zipper", //5
    "Tropical Wiggler", //2
    "Pole", //0
    "Taxi", //2
    "RC Car", //3
    "Chargin' Chuck", //0
    
    "Coin Coffer", //1
    "Poison Piranha Plant", //0
    "Fire Bro",
    "Fire Piranha Plant", //0
    "Cheep Cheep",
    "Snow Cheep Cheep",

    "Cactus", //1
    "Tree", //1
    "Boulder", //1
    "Letter", //1
    "Bowser Statue", //1
    "Jizo", //4

    "Puzzle Part (Metro Kingdom)",
    "Puzzle Part (Lake Kingdom)", //1
    "Picture Match Part (Goomba)", //2
    "Picture Match Part (Mario)", //2
];

const divMoon = document.getElementById("moon-tracker");
const divAbility = document.getElementById("ability-tracker");
const divCapture = document.getElementById("capture-tracker");
const divOverflow = document.getElementById("capture-overflow");
const hamburger = document.getElementById("capture-overflow-hamburger");
const settingsMenu = document.getElementById("settings-menu");
const resetMenu = document.getElementById("reset-menu");
const helpMenu = document.getElementById("help-menu");
const settingsButton = document.getElementById("settings-button");
const resetButton = document.getElementById("reset-button");
const helpButton = document.getElementById("help-button");
const showTextToggle = document.getElementById("setting-menu-showText-toggle");

const moonRequirements = [
    "AND",
    "aJump",
    "cBowser",
    [
        "OR",
        [
            "AND",
            "aGround Pound",
            "aWall Jump",
            "aCap Throw",
            "aCap Bounce"
        ],
        [
            "AND",
            "aCap Throw",
            [
                "OR",
                "cParabones",
                [  
                    "AND",
                    "aTriple Jump",
                    "aCap Bounce",
                    "aDive"
                ]
            ],
            "cSpark Pylon",
            "cBanzai Bill",
            "cGolden Chain Chomp"
        ]
    ]
    
]

let showText = parseInt(localStorage.getItem("showText"));
if (isNaN(showText)) {
    localStorage.setItem("showText", 0);
    showText = 0;
}

// Setup
moons.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `moon-tracker-${kingdom}`;
    newDiv.innerHTML = showText ? `<p>${prettyName(kingdom)}</p><p class="moon-counter"><span id="moon-tracker-${kingdom}-amount">0</span> / <span id="moon-tracker-${kingdom}-total" contenteditable="false">??</span></p>` : `<img src="./resource/moons/${kingdom}.png" alt="${prettyName(kingdom)} Moons" title="${prettyName(kingdom)}" draggable="false"><p class="moon-counter"><span id="moon-tracker-${kingdom}-amount">0</span> / <span id="moon-tracker-${kingdom}-total" contenteditable="false">??</span></p>`;
    newDiv.onwheel = scrollMoonCount;
    newDiv.onclick = setMoonTotal;
    divMoon.appendChild(newDiv);
    setTimeout(wrapText, 1, newDiv);
});

abilities.forEach((ability) => {
    let newDiv = document.createElement("div");
    newDiv.id = `ability-tracker-${normalizeName(ability)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = showText ? `<p>${ability}</p>` : `<img src="./resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
    newDiv.onclick = toggleUnlock;
    divAbility.appendChild(newDiv);
    setTimeout(wrapText, 1, newDiv);
});

primaryCaptures.forEach((capture) => {
    let newDiv = document.createElement("div");
    newDiv.id = `capture-tracker-${normalizeName(capture)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = showText ? `<p>${capture}</p>` : `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    newDiv.addEventListener("click", toggleUnlock)
    divCapture.appendChild(newDiv);
    setTimeout(wrapText, 1, newDiv);
});

captures.forEach((capture) => {
    let newDiv = document.createElement("div");
    newDiv.id = `capture-tracker-${normalizeName(capture)}`;
    newDiv.classList.add("locked");
    newDiv.innerHTML = showText ? `<p>${capture}</p>` : `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
    newDiv.addEventListener("click", toggleUnlock)
    divOverflow.appendChild(newDiv);
    setTimeout(wrapText, 1, newDiv);
});

let newDiv = document.createElement("div");
newDiv.id = `moon-tracker-moon`;
newDiv.innerHTML = showText ? '<p>Moon Requirements</p>' : '<img src="./resource/moons/mushroom.png" alt="Moon Requirements" title="Moon Requirements">';
divMoon.appendChild(newDiv);
setTimeout(wrapText, 1, newDiv);

if (showText) {
    showTextToggle.checked = true;
}

const captureRect = divCapture.getBoundingClientRect();
divOverflow.style.height = (divCapture.clientHeight + 2*divCapture.style.borderWidth )+ "px";
divOverflow.style.bottom = (window.innerHeight - captureRect.bottom) + "px";
divOverflow.style.right = (window.innerWidth - captureRect.right) + "px";
divOverflow.style.borderBottomRightRadius = (8 + hamburger.clientWidth / 2) + "px"; // 8 = padding

hamburger.onclick = clickOnHamburger;
window.onresize = resizer;
settingsButton.onclick = openSettings;
resetButton.onclick = confirmReset;
helpButton.onclick = openHelp;
showTextToggle.onchange = toggleImageText;

// Event handlers
function toggleUnlock(event) {
    let target = event.target.tagName == "IMG" || event.target.tagName == "P" ? event.target.parentElement : event.target;
    if (target.classList.contains("locked")) {
        target.classList.remove("locked");

    } else {
        target.classList.add("locked");
    }
    if (moonRequirements.flat(10).map((value) => normalizeName(value.substring(1))).includes(target.id.split("-")[2])) checkMoonReqs();
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

    let total = document.getElementById(target.id + "-total");

    if (!isNaN(Number(total.textContent))) {
        target.style.backgroundPositionY = Math.min(Math.max(0, amount / Number(total.textContent) * 100), 100) + "%";
        fullMoons(target);
    }

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
        validateTotalMoons(target);
    });
    span.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            span.contentEditable = "false";
            validateTotalMoons(target);
        }
    });
}

function validateTotalMoons(target) {
    let span = document.getElementById(target.id + "-total");

    let newValue = span.textContent.trim();

    let num = Number(newValue)

    if (isNaN(num) || num >= 100 || num <= 0) {
        span.textContent = "??";
        target.style.backgroundPositionY = "0%";
        target.style.color = "black";
    } else {
        span.textContent = String(num);

        let amount = document.getElementById(target.id + "-amount");
        target.style.backgroundPositionY = Math.min(Math.max(0, Number(amount.textContent) / num * 100), 100) + "%";
        fullMoons(target);
    }
}

function fullMoons(target) {
    let total = document.getElementById(target.id + "-total");
    let amount = document.getElementById(target.id + "-amount");

    if (Number(amount.textContent) >= Number(total.textContent)) {
        target.style.color = "green";
        target.style.backgroundPositionY = "100%";
    } else {
        target.style.color = "black";
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

function resizer(event) {
    const captureRect = divCapture.getBoundingClientRect();
    divOverflow.style.height = (divCapture.clientHeight + 2*divCapture.style.borderWidth )+ "px";
    divOverflow.style.bottom = (window.innerHeight - captureRect.bottom) + "px";
    divOverflow.style.right = (window.innerWidth - captureRect.right) + "px";
    divOverflow.style.borderBottomRightRadius = (8 + hamburger.clientWidth / 2) + "px"; // 8 = padding
}

function checkMoonReqs() {
    let state = checkMoonRecursive(moonRequirements);

    let div = document.getElementById("moon-tracker-moon");

    if (state && div.style.backgroundPositionY != "100%") {
        div.style.backgroundPositionY = "100%";
        div.style.color = "green";
    } else if (!state && div.style.backgroundPositionY != "0%") {
        div.style.backgroundPositionY = "0%";
        div.style.color = "black";
    }
}

function checkMoonRecursive(array) {
    function predicate (value) {
        if (typeof value == "object") {
            return checkMoonRecursive(value);
        } else if (typeof value == "string") {
            if (value.charAt(0) == "c") {
                return !document.getElementById(`capture-tracker-${normalizeName(value.substring(1))}`).classList.contains("locked");
            } else if (value.charAt(0) == "a") {
                return !document.getElementById(`ability-tracker-${normalizeName(value.substring(1))}`).classList.contains("locked");
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return array[0] == "AND" ? array.slice(1).every(predicate) : array.slice(1).some(predicate);
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

function resetProgress() {
    console.log("Clearing progress...")
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
    showText = localStorage.getItem("showText");

    if (showText == 0) {
        localStorage.setItem("showText", 1);

        moons.forEach((kingdom) => {
            let div = document.getElementById(`moon-tracker-${kingdom}`);
            div.innerHTML = div.innerHTML.replace(/<img.*?>/, `<p>${prettyName(kingdom)}</p>`);
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

        captures.forEach((capture) => {
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
            let div = document.getElementById(`moon-tracker-${kingdom}`);
            div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="./resource/moons/${kingdom}.png" alt="${prettyName(kingdom)} Moons" title="${prettyName(kingdom)}" draggable="false">`);
            wrapText(div);
        });
        

        abilities.forEach((ability) => {
            let div = document.getElementById(`ability-tracker-${normalizeName(ability)}`);
            div.innerHTML = `<img src="./resource/abilities/${normalizeName(ability)}.png" alt="${ability}" title="${ability}" draggable="false">`;
        });

        primaryCaptures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
            
        });

        captures.forEach((capture) => {
            let div = document.getElementById(`capture-tracker-${normalizeName(capture)}`);
            div.innerHTML = `<img src="./resource/captures/${normalizeName(capture)}.png" alt="${capture}" title="${capture}" draggable="false">`;
        });

        let div = document.getElementById(`moon-tracker-moon`);
        div.innerHTML = div.innerHTML.replace(/<p.*?>.*?<\/p>/, `<img src="./resource/moons/mushroom.png" alt="Moon Requirements" title="Moon Requirements" draggable="false">`);
        wrapText(div);
    }
}

// String conversions
function normalizeName(input) {
    return input.replace(/\s+/g, "_")
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