export const worldPeace = new Map([
    ["Cap", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Cascade", "m33"],
    ["Sand", "m74"],
    ["Lake", "m161"],
    ["Wooded", "m206"],
    ["Cloud", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Lost", {
        "op": "TRUE",
        "reqs": []
    }],
    ["Metro", "m329"],
    ["Snow", "m408"],
    ["Seaside", "m463"],
    ["Luncheon", "m534"],
    ["Ruined", "m598"],
    ["Bowser", "m611"],
    ["Moon", {
        "op": "AND",
        "reqs": [
            "gJump",
            "gCap Throw",
            "cBowser",
            {
                "op": "OR",
                "reqs": [
                    {
                        "op": "AND",
                        "reqs": [
                            "aGround Pound",
                            "aWall Jump",
                            "aCap Bounce"
                        ]
                    },
                    {
                        "op": "AND",
                        "reqs": [
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
    ["Dark", "m812"],
    ["Darker", {
        "op": "TRUE",
        "reqs": []
    }]
]);