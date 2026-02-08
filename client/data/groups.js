export const groups = new Map([
    ["Cap Throw", {
        "op": "OR",
        "reqs": [
            "aCap Throw",
            "aDown Throw",
            "aUp Throw",
            "aSpin Throw"
        ]
    }],
    ["Jump", {
        "op": "OR",
        "reqs": [
            "aJump",
            "aDouble Jump",
            "aTriple Jump",
            "aBackflip",
            "aSideflip",
        ]
    }],
    ["2D Jump", {
        "op": "OR",
        "reqs": [
            "aJump",
            "aDouble Jump",
            "aTriple Jump",
            "aBackflip",
        ]
    }],
    ["Open Treasure Chest", {
        "op": "OR",
        "reqs": [
            "gCap Throw",
            "aGround Pound"
        ]
    }]
])