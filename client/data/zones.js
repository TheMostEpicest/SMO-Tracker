export const zones = new Map([
    ["Cap", [
        {
            "id": 1001,
            "kingdomId": 1,
            "name": "Top Hat Tower Exterior (Bottom)",
            "subarea": "",
            "type": "door",
            "x": 0.6744384765625,
            "y": 0.2962865615614008,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1002,
            "kingdomId": 2,
            "name": "Top Hat Tower Interior (Bottom)",
            "subarea": "Top Hat Tower",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1003"
                ]
            }
        },
        {
            "id": 1003,
            "kingdomId": 3,
            "name": "Top Hat Tower Interior (Top)",
            "subarea": "Top Hat Tower",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1002"
                ]
            }
        },
        {
            "id": 1004,
            "kingdomId": 4,
            "name": "Top Hat Tower Exterior (Top)",
            "subarea": "",
            "type": "door",
            "x": 0.6893310546875,
            "y": 0.29667839370516547,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1005,
            "kingdomId": 5,
            "name": "Poison Tide Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.7625732421875,
            "y": 0.29433278777017713,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1006,
            "kingdomId": 6,
            "name": "Poison Tide Interior (Start)",
            "subarea": "Poison Tide",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1007"
                ]
            }
        },
        {
            "id": 1007,
            "kingdomId": 7,
            "name": "Poison Tide Interior (End)",
            "subarea": "Poison Tide",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1006"
                ]
            }
        },
        {
            "id": 1008,
            "kingdomId": 8,
            "name": "Push-Block Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.7283935546875,
            "y": 0.2410041053546027,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1009,
            "kingdomId": 9,
            "name": "Push-Block Room Interior (Start)",
            "subarea": "Push-Block Room",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1010"
                ]
            }
        },
        {
            "id": 1010,
            "kingdomId": 10,
            "name": "Push-Block Room Interior (End)",
            "subarea": "Push-Block Room",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1009"
                ]
            }
        },
        {
            "id": 1011,
            "kingdomId": 11,
            "name": "Frog Pond Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.3790283203125,
            "y": 0.27809201965569874,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1012,
            "kingdomId": 12,
            "name": "Frog Pond Interior",
            "subarea": "Frog Pond",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        
        {
            "id": 1013,
            "kingdomId": 13,
            "name": "Rolling Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.3583984375,
            "y": 0.38880752530365914,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 1014,
            "kingdomId": 14,
            "name": "Rolling Room Interior (Start)",
            "subarea": "Rolling Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 1015,
            "kingdomId": 15,
            "name": "Rolling Room Interior (End)",
            "subarea": "Rolling Room",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1014"
                ]
            }
        }
    ]],
    ["Cascade", [
        {
            "id": 1016,
            "kingdomId": 1,
            "name": "Dinosaur Nest Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.4840643101677439,
            "y": 0.8078359090256934,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1017,
            "kingdomId": 2,
            "name": "Dinosaur Nest Interior",
            "subarea": "Dinosaur Nest",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 1018,
            "kingdomId": 3,
            "name": "Chain Chomp Room Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.37993531923893975,
            "y": 0.12648921566375237,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1019,
            "kingdomId": 4,
            "name": "Chain Chomp Room Interior (Start)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1020"
                ]
            }
        },
        {
            "id": 1020,
            "kingdomId": 5,
            "name": "Chain Chomp Room Interior (End)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1019"
                ]
            }
        },
        {
            "id": 1021,
            "kingdomId": 6,
            "name": "2D Chasm Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.6021456183541694,
            "y": 0.33636430814403323,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1022,
            "kingdomId": 7,
            "name": "2D Chasm Interior (Start)",
            "subarea": "2D Chasm",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1023"
                ]
            }
        },
        {
            "id": 1023,
            "kingdomId": 8,
            "name": "2D Chasm Interior (End)",
            "subarea": "2D Chasm",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1022"
                ]
            }
        },
        {
            "id": 1024,
            "kingdomId": 9,
            "name": "Mysterious Clouds Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.4668009610176818,
            "y": 0.2159639479185545,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 1025,
            "kingdomId": 10,
            "name": "Mysterious Clouds Interior (Start)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1026"
                ]
            }
        },
        {
            "id": 1026,
            "kingdomId": 11,
            "name": "Mysterious Clouds Interior (End)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1025"
                ]
            }
        },
        {
            "id": 1027,
            "kingdomId": 12,
            "name": "Gusty Bridges Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.47025363084769417,
            "y": 0.550775976847842,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 1028,
            "kingdomId": 13,
            "name": "Gusty Bridges Interior (Start)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1029"
                ]
            }
        },
        {
            "id": 1029,
            "kingdomId": 14,
            "name": "Gusty Bridges Interior (End)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1028"
                ]
            }
        }
    ]],
    ["Sand", []],
    ["Lake", []],
    ["Wooded", []],
    ["Cloud", []],
    ["Lost", []],
    ["Metro", []],
    ["Snow", []],
    ["Seaside", []],
    ["Luncheon", []],
    ["Ruined", []],
    ["Bowser", []],
    ["Moon", []],
    ["Mushroom", []],
    ["Dark", []],
    ["Darker", []],
]);