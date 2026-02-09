export const groups = new Map([
    ["Cap Throw", {
        "op": "OR",
        "reqs": [
            "aCap Throw",
            "aDown Throw",
            "aUp Throw",
            "aSpin Throw"
        ],
        "alt": "Any Cap Throw",
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
        "alt": "Any Jump",
        "img": "/resource/abilities/Jump.png"
    }],
    ["High Jump", {
        "op": "OR",
        "reqs": [
            "aTriple Jump",
            "aBackflip",
            "aSideflip",
            {
                "op": "AND",
                "reqs": [
                    "aJump",
                    "aGround Pound"
                ]
            }
        ],
        "alt": "Any Jump",
        "img": "/resource/abilities/Jump.png"
    }],
    ["2D Jump", {
        "op": "OR",
        "reqs": [
            "aJump",
            "aDouble Jump",
            "aTriple Jump",
            "aBackflip",
        ],
        "alt": "Any 2D Jump",
        "img": "/resource/abilities/Jump.png"
    }],
    ["Open Treasure Chest", {
        "op": "OR",
        "reqs": [
            "gCap Throw",
            "aGround Pound"
        ],
        "alt": "",
        "img": ""
    }],
    ["Roll Cancel Clip", {
        "op": "OR",
        "reqs": [
            "gCap Throw",
            "aRoll",
            "aGround Pound"
        ],
        "alt": "",
        "img": ""
    }],
    ["Unlock Jaxi", {
        "op": "OR",
        "reqs": [
            "l2214",
            {
                "op": "AND",
                "reqs": [
                    "gHigh Jump",
                    "aDive"
                ]
            }
        ],
        "alt": "",
        "img": ""
    }]
])