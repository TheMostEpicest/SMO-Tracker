export const worldPeace = new Map([
    ["Cap", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Cascade", {
        "op": "AND",
        "reqs": [
            "m33"
        ]
    }],
    ["Sand", {
        "op": "AND",
        "reqs": [
            "m74"
        ]
    }],
    ["Lake", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Wooded", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Cloud", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Lost", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Metro", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Snow", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Seaside", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Luncheon", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Ruined", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Bowser", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Moon", {
        "op": "AND",
        "reqs": [
            "gJump",
            "cBowser",
            {
                "op": "OR",
                "reqs": [
                    {
                        "op": "AND",
                        "reqs": [
                            "aGround Pound",
                            "aWall Jump",
                            "gCap Throw",
                            "aCap Bounce"
                        ]
                    },
                    {
                        "op": "AND",
                        "reqs": [
                            "gCap Throw",
                            {
                                "op": "OR",
                                "reqs": [
                                    "cParabones",
                                    {
                                        "op": "AND",
                                        "reqs": [
                                            "aTriple Jump",
                                            "aCap Bounce",
                                            "aDive"
                                        ]
                                    }
                                    
                                ]
                            },
                            "cSpark Pylon",
                            "cBanzai Bill",
                            "cGolden Chain Chomp"
                        ]
                    }
                ]
            }  
        ]
    }],
    ["Mushroom", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Dark", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Darker", {
        "op": "TRUE",
        "reqs": []
    }]
]);