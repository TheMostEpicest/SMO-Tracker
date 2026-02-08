export const groups = new Map([
    ["Cap Throw", {
        "op": "OR",
        "reqs": [
            "aCap Throw",
            "aDown Throw",
            "aUp Throw",
            "aSpin Throw"
        ],
        "img": "/resource/abilities/Cap_Throw.png"
    }],
    ["Jump", {
        "op": "OR",
        "reqs": [
            "aJump",
            "aDouble Jump",
            "aTriple Jump",
            "aBackflip",
            "aSideflip",
        ],
        "img": "/resource/abilities/Cap_Throw.png"
    }],
    ["2D Jump", {
        "op": "OR",
        "reqs": [
            "aJump",
            "aDouble Jump",
            "aTriple Jump",
            "aBackflip",
        ],
        "img": "/resource/abilities/Cap_Throw.png"
    }],
    ["Open Treasure Chest", {
        "op": "OR",
        "reqs": [
            "gCap Throw",
            "aGround Pound"
        ],
        "img": ""
    }]
])