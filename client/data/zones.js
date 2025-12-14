export const zones = new Map([
    ["Cap", [
        {
            "id": 1001,
            "kingdomId": 1,
            "name": "Top Hat Tower Exterior (Bottom)",
            "subarea": "",
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
            "type": "capdoor",
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
    ["Sand", [
        {
            "id": 1030,
            "kingdomId": 1,
            "name": "Inverted Pyramid Exterior (Bottom)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5906149256893933,
            "y": 0.12048182656873554,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1031,
            "kingdomId": 2,
            "name": "Inverted Pyramid Interior (Bottom)",
            "subarea": "Inverted Pyramid",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1032,
            "kingdomId": 3,
            "name": "Inverted Pyramid Interior (Top)",
            "subarea": "Inverted Pyramid",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1033,
            "kingdomId": 4,
            "name": "Inverted Pyramid Exterior (Top)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6185779303378509,
            "y": 0.12061231822968621,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1034,
            "kingdomId": 5,
            "name": "Underground Temple Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6638107925483354,
            "y": 0.12971422255599435,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1035,
            "kingdomId": 6,
            "name": "Underground Temple Interior (Start)",
            "subarea": "Underground Temple",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1036,
            "kingdomId": 7,
            "name": "Underground Temple Interior (End)",
            "subarea": "Underground Temple",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1037,
            "kingdomId": 8,
            "name": "Knucklotec Arena Interior (Start)",
            "subarea": "Knucklotec Arena",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1038,
            "kingdomId": 9,
            "name": "Knucklotec Arena Interior (End)",
            "subarea": "Knucklotec Arena",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1039,
            "kingdomId": 10,
            "name": "Knucklotec Arena Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5154559512901733,
            "y": 0.09980632253346518,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1040,
            "kingdomId": 11,
            "name": "Ice Cave Exterior (Quicksand)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6156110306912178,
            "y": 0.3327682229050727,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1041,
            "kingdomId": 12,
            "name": "Ice Cave Interior (Start)",
            "subarea": "Ice Cave",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1042,
            "kingdomId": 13,
            "name": "Ice Cave Interior (End)",
            "subarea": "Ice Cave",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1043,
            "kingdomId": 14,
            "name": "Ice Cave Exterior (Jaxi Ruins)",
            "subarea": "",
            "type": "pipe",
            "x": 0.7484130859375,
            "y": 0.4627319223962692,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1044,
            "kingdomId": 15,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.497314453125,
            "y": 0.9008604976811527,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1045,
            "kingdomId": 16,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1046,
            "kingdomId": 17,
            "name": "Employees Only Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4757080078125,
            "y": 0.8847563846194845,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1047,
            "kingdomId": 18,
            "name": "Employees Only Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1048,
            "kingdomId": 19,
            "name": "Slots Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.529296875,
            "y": 0.8800852900521625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1049,
            "kingdomId": 20,
            "name": "Slots Interior",
            "subarea": "Slots",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1050,
            "kingdomId": 21,
            "name": "Sphynx's Vault Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5338134765625,
            "y": 0.30200310517236695,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1051,
            "kingdomId": 22,
            "name": "Sphynx's Vault Interior",
            "subarea": "Sphynx's Vault",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1052,
            "kingdomId": 23,
            "name": "Sandy Floor Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.4814453125,
            "y": 0.8658708693282955,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1053,
            "kingdomId": 24,
            "name": "Sandy Floor Interior",
            "subarea": "Sandy Floor",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1054,
            "kingdomId": 25,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.4810791015625,
            "y": 0.8426056909404002,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1055,
            "kingdomId": 26,
            "name": "Outfit Room Interior",
            "subarea": "Outfit Room",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1056,
            "kingdomId": 27,
            "name": "Invisible Maze Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.35931659816445216,
            "y": 0.2144930057848262,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1057,
            "kingdomId": 28,
            "name": "Invisible Maze Interior (Start)",
            "subarea": "Invisible Maze",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1058,
            "kingdomId": 29,
            "name": "Invisible Maze Interior (End)",
            "subarea": "Invisible Maze",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1059,
            "kingdomId": 30,
            "name": "Bullet Bill Maze Exterior (Bottom)",
            "subarea": "",
            "type": "capdoor",
            "x": 0.22241210937499997,
            "y": 0.06764820474881109,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1060,
            "kingdomId": 31,
            "name": "Bullet Bill Maze Interior (Start)",
            "subarea": "Bullet Bill Maze",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1061,
            "kingdomId": 32,
            "name": "Bullet Bill Maze Interior (End)",
            "subarea": "Bullet Bill Maze",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1062,
            "kingdomId": 33,
            "name": "Bullet Bill Maze Exterior (Top)",
            "subarea": "",
            "type": "pipe",
            "x": 0.222900390625,
            "y": 0.05694482180503021,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1063,
            "kingdomId": 34,
            "name": "Jaxi Ruins Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.76171875,
            "y": 0.4641871236141241,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1064,
            "kingdomId": 35,
            "name": "Jaxi Ruins Interior (Start)",
            "subarea": "Jaxi Ruins",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1065,
            "kingdomId": 36,
            "name": "Jaxi Ruins Interior (End)",
            "subarea": "Jaxi Ruins",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1066,
            "kingdomId": 37,
            "name": "Strange Neighborhood Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.527587890625,
            "y": 0.8662697435286224,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1067,
            "kingdomId": 38,
            "name": "Strange Neighborhood Interior (Start)",
            "subarea": "Strange Neighborhood",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1068,
            "kingdomId": 39,
            "name": "Strange Neighborhood Interior (End)",
            "subarea": "Strange Neighborhood",
            "type": "rocket",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1069,
            "kingdomId": 40,
            "name": "Transparent Platforms Exterior",
            "subarea": "",
            "type": "moonpipe",
        "x": 0.4921791047411611,
        "y": 0.9279554645518864,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1070,
            "kingdomId": 41,
            "name": "Transparent Platforms Interior (Start)",
            "subarea": "Transparent Platforms",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1071,
            "kingdomId": 42,
            "name": "Transparent Platforms Interior (End)",
            "subarea": "Transparent Platforms",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1072,
            "kingdomId": 43,
            "name": "Colossal Ruins Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.49579411860655254,
            "y": 0.6275008646595894,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1073,
            "kingdomId": 44,
            "name": "Colossal Ruins Interior",
            "subarea": "Colossal Ruins",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1074,
            "kingdomId": 45,
            "name": "Freezing Waterway Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.7708456160548235,
            "y": 0.1273414485064569,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1075,
            "kingdomId": 46,
            "name": "Freezing Waterway Interior (Start)",
            "subarea": "Freezing Waterway",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1076,
            "kingdomId": 47,
            "name": "Freezing Waterway Interior (End)",
            "subarea": "Freezing Waterway",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Lake", [
        {
            "id": 1077,
            "kingdomId": 1,
            "name": "Captain Toad Pipe",
            "subarea": "",
            "type": "pipe",
            "x": 0.15228812382717835,
            "y": 0.24604234512115128,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1078,
            "kingdomId": 2,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.12498664784645028,
            "y": 0.21683217503250876,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1079,
            "kingdomId": 3,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1080,
            "kingdomId": 4,
            "name": "Puzzle Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.2726533076081097,
            "y": 0.5215176744103955,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1081,
            "kingdomId": 5,
            "name": "Puzzle Room Interior",
            "subarea": "Puzzle Room",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1082,
            "kingdomId": 6,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.11117596852640048,
            "y": 0.34974500284858906,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1083,
            "kingdomId": 7,
            "name": "Outfit Room Interior",
            "subarea": "",
            "type": "door",
            "x": 0.11031280106889735,
            "y": 0.3168795290769232,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1084,
            "kingdomId": 8,
            "name": "Zipper Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.25486019348397193,
            "y": 0.12730178935636183,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1085,
            "kingdomId": 9,
            "name": "Zipper Room Interior (Start)",
            "subarea": "Zipper Room",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1086,
            "kingdomId": 10,
            "name": "Jump, Grab, Cling, and Climb Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.20776077374360752,
            "y": 0.12487878106084828,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1087,
            "kingdomId": 11,
            "name": "Jump, Grab, Cling, and Climb Interior (Start)",
            "subarea": "Jump, Grab, Cling, and Climb",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1088,
            "kingdomId": 12,
            "name": "Jump, Grab, Cling, and Climb Interior (End)",
            "subarea": "Jump, Grab, Cling, and Climb",
            "type": "capdoor",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1089,
            "kingdomId": 13,
            "name": "Waves of Poison Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.8232421875,
            "y": 0.7948201480132633,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1090,
            "kingdomId": 14,
            "name": "Waves of Poison Interior (Start)",
            "subarea": "Waves of Poison",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 1091,
            "kingdomId": 15,
            "name": "Waves of Poison Interior (End)",
            "subarea": "Waves of Poison",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
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