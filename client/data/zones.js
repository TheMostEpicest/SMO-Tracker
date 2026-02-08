export const zones = new Map([
    ["Cap", [
        {
            "id": 2001,
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
            "id": 2002,
            "kingdomId": 2,
            "name": "Top Hat Tower Interior (Bottom)",
            "subarea": "Top Hat Tower",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2003"
                ]
            }
        },
        {
            "id": 2003,
            "kingdomId": 3,
            "name": "Top Hat Tower Interior (Top)",
            "subarea": "Top Hat Tower",
            "type": "capdoor",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2002"
                ]
            }
        },
        {
            "id": 2004,
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
            "id": 2005,
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
            "id": 2006,
            "kingdomId": 6,
            "name": "Poison Tide Interior (Start)",
            "subarea": "Poison Tide",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2007"
                ]
            }
        },
        {
            "id": 2007,
            "kingdomId": 7,
            "name": "Poison Tide Interior (End)",
            "subarea": "Poison Tide",
            "type": "capdoor",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2006"
                ]
            }
        },
        {
            "id": 2008,
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
            "id": 2009,
            "kingdomId": 9,
            "name": "Push-Block Room Interior (Start)",
            "subarea": "Push-Block Room",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2010"
                ]
            }
        },
        {
            "id": 2010,
            "kingdomId": 10,
            "name": "Push-Block Room Interior (End)",
            "subarea": "Push-Block Room",
            "type": "capdoor",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2009"
                ]
            }
        },
        {
            "id": 2011,
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
            "id": 2012,
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
            "id": 2013,
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
            "id": 2014,
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
            "id": 2015,
            "kingdomId": 15,
            "name": "Rolling Room Interior (End)",
            "subarea": "Rolling Room",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2014"
                ]
            }
        }
    ]],
    ["Cascade", [
        {
            "id": 2101,
            "kingdomId": 1,
            "name": "Dinosaur Nest Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.4840643101677439,
            "y": 0.8078359090256934,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 2102,
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
            "id": 2103,
            "kingdomId": 3,
            "name": "Chain Chomp Room Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.37993531923893975,
            "y": 0.12648921566375237,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 2104,
            "kingdomId": 4,
            "name": "Chain Chomp Room Interior (Start)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2105"
                ]
            }
        },
        {
            "id": 2105,
            "kingdomId": 5,
            "name": "Chain Chomp Room Interior (End)",
            "subarea": "Chain Chomp Room",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2104"
                ]
            }
        },
        {
            "id": 2106,
            "kingdomId": 6,
            "name": "2D Chasm Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.6021456183541694,
            "y": 0.33636430814403323,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 2107,
            "kingdomId": 7,
            "name": "2D Chasm Interior (Start)",
            "subarea": "2D Chasm",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2108"
                ]
            }
        },
        {
            "id": 2108,
            "kingdomId": 8,
            "name": "2D Chasm Interior (End)",
            "subarea": "2D Chasm",
            "type": "capdoor",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2107"
                ]
            }
        },
        {
            "id": 2109,
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
            "id": 2110,
            "kingdomId": 10,
            "name": "Mysterious Clouds Interior (Start)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2111"
                ]
            }
        },
        {
            "id": 2111,
            "kingdomId": 11,
            "name": "Mysterious Clouds Interior (End)",
            "subarea": "Mysterious Clouds",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2110"
                ]
            }
        },
        {
            "id": 2112,
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
            "id": 2113,
            "kingdomId": 13,
            "name": "Gusty Bridges Interior (Start)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2114"
                ]
            }
        },
        {
            "id": 2114,
            "kingdomId": 14,
            "name": "Gusty Bridges Interior (End)",
            "subarea": "Gusty Bridges",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2113"
                ]
            }
        }
    ]],
    ["Sand", [
        {
            "id": 2201,
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
            "id": 2201,
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
            "id": 2203,
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
            "id": 2204,
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
            "id": 2205,
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
            "id": 2206,
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
            "id": 2207,
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
            "id": 2208,
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
            "id": 2209,
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
            "id": 2210,
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
            "id": 2211,
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
            "id": 2212,
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
            "id": 2213,
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
            "id": 2214,
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
            "id": 2215,
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
            "id": 2216,
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
            "id": 2217,
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
            "id": 2218,
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
            "id": 2219,
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
            "id": 2220,
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
            "id": 2221,
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
            "id": 2222,
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
            "id": 2223,
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
            "id": 2224,
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
            "id": 2225,
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
            "id": 2226,
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
            "id": 2227,
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
            "id": 2228,
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
            "id": 2229,
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
            "id": 2230,
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
            "id": 2231,
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
            "id": 2232,
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
            "id": 2233,
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
            "id": 2234,
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
            "id": 2235,
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
            "id": 2236,
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
            "id": 2237,
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
            "id": 2238,
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
            "id": 2239,
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
            "id": 2240,
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
            "id": 2241,
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
            "id": 2242,
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
            "id": 2243,
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
            "id": 2244,
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
            "id": 2245,
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
            "id": 2246,
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
            "id": 2247,
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
            "id": 2301,
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
            "id": 2302,
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
            "id": 2303,
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
            "id": 2304,
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
            "id": 2305,
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
            "id": 2306,
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
            "id": 2307,
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
            "id": 2308,
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
            "id": 2309,
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
            "id": 2310,
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
            "id": 2311,
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
            "id": 2312,
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
            "id": 2313,
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
            "id": 2314,
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
            "id": 2315,
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
        }
    ]],
    ["Wooded", [
        {
            "id": 2401,
            "kingdomId": 1,
            "name": "Sky Garden Tower Exterior (Bottom)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4257111275102872,
            "y": 0.11435483532145412,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2402,
            "kingdomId": 2,
            "name": "Sky Garden Tower Interior (Bottom)",
            "subarea": "Sky Garden Tower",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2403,
            "kingdomId": 3,
            "name": "Sky Garden Tower Interior (Top)",
            "subarea": "Sky Garden Tower",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2404,
            "kingdomId": 4,
            "name": "Sky Garden Tower Exterior (Top)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.42587633252972806,
            "y": 0.14168267143824775,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2405,
            "kingdomId": 5,
            "name": "Secret Flower Field Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5888819484601686,
            "y": 0.1072720255077413,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2406,
            "kingdomId": 6,
            "name": "Secret Flower Field Interior",
            "subarea": "Secret Flower Field",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2407,
            "kingdomId": 7,
            "name": "Spinning-Platforms Treasure Exterior (Entrance)",
            "subarea": "",
            "type": "pipe",
            "x": 0.6510560272636765,
            "y": 0.47740839514185307,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },

        {
            "id": 2408,
            "kingdomId": 8,
            "name": "Spinning-Platforms Treasure Interior (Entrance)",
            "subarea": "Spinning-Platforms Treasure",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2409,
            "kingdomId": 9,
            "name": "Spinning-Platforms Treasure Interior (Exit)",
            "subarea": "Spinning-Platforms Treasure",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },{
            "id": 2410,
            "kingdomId": 10,
            "name": "Spinning-Platforms Treasure Exterior (Exit)",
            "subarea": "",
            "type": "pipe",
            "x": 0.6565325005261616,
            "y": 0.4780511097550251,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2411,
            "kingdomId": 11,
            "name": "Deep Woods (Zone 1)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.29508526520214134,
            "y": 0.30473195067684045,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2412,
            "kingdomId": 12,
            "name": "Deep Woods (Zone 2)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.1662270707907259,
            "y": 0.8945896815397557,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2413,
            "kingdomId": 13,
            "name": "Deep Woods (Zone 3)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5901705304042827,
            "y": 0.936844461872205,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2414,
            "kingdomId": 14,
            "name": "Deep Woods (Stalk 1)",
            "subarea": "Deep Woods",
            "type": "vine",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2415,
            "kingdomId": 15,
            "name": "Deep Woods (Stalk 2)",
            "subarea": "Deep Woods",
            "type": "vine",
            "x": 0.25,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2416,
            "kingdomId": 16,
            "name": "Deep Woods (Stalk 3)",
            "subarea": "Deep Woods",
            "type": "vine",
            "x": 0.5,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2417,
            "kingdomId": 17,
            "name": "Deep Woods Treasure Trap Exterior",
            "subarea": "Deep Woods",
            "type": "door",
            "x": 0.75,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2418,
            "kingdomId": 18,
            "name": "Deep Woods Treasure Trap Interior",
            "subarea": "Deep Woods Treasure Trap",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2419,
            "kingdomId": 19,
            "name": "Outfit Room Exterior",
            "subarea": "Deep Woods",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2420,
            "kingdomId": 20,
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
            "id": 2421,
            "kingdomId": 21,
            "name": "Flooding Pipeway Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.4578834919889033,
            "y": 0.3488182464130812,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2422,
            "kingdomId": 22,
            "name": "Flooding Pipeway Interior (Start)",
            "subarea": "Flooding Pipeway",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2423,
            "kingdomId": 23,
            "name": "Flooding Pipeway Interior (End)",
            "subarea": "Flooding Pipeway",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2424,
            "kingdomId": 24,
            "name": "Foggy Subarea Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.3297792322120165,
            "y": 0.47370166503075295,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2425,
            "kingdomId": 25,
            "name": "Foggy Subarea Interior",
            "subarea": "Foggy Subarea",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2426,
            "kingdomId": 26,
            "name": "Flower Road Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.6296145894607051,
            "y": 0.5401945282216232,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2427,
            "kingdomId": 27,
            "name": "Flower Road Interior (Start)",
            "subarea": "Flower Road",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2428,
            "kingdomId": 28,
            "name": "Flower Road Interior (End)",
            "subarea": "Flower Road",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2429,
            "kingdomId": 29,
            "name": "Elevator Escalation Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.6536093501929083,
            "y": 0.5944113267029935,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2430,
            "kingdomId": 30,
            "name": "Elevator Escalation Interior (Start)",
            "subarea": "Elevator Escalation",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2431,
            "kingdomId": 31,
            "name": "Elevator Escalation Interior (End)",
            "subarea": "Elevator Escalation",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2432,
            "kingdomId": 32,
            "name": "Uproot Subarea Exterior",
            "subarea": "",
            "type": "vine",
            "x": 0.601053953369492,
            "y": 0.5656147053261685,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2433,
            "kingdomId": 33,
            "name": "Uproot Subarea Interior",
            "subarea": "Uproot Subarea",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2434,
            "kingdomId": 34,
            "name": "Invisible Road Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5721489541975503,
            "y": 0.2126454296024387,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2435,
            "kingdomId": 35,
            "name": "Invisible Road Interior (Start)",
            "subarea": "Invisible Road",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },

        {
            "id": 2436,
            "kingdomId": 36,
            "name": "Invisible Road Interior (End)",
            "subarea": "Invisible Road",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2437,
            "kingdomId": 37,
            "name": "Herding Sheep Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.4004192532348383,
            "y": 0.7203198637735132,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2438,
            "kingdomId": 38,
            "name": "Herding Sheep Interior",
            "subarea": "Herding Sheep",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },{
            "id": 2439,
            "kingdomId": 39,
            "name": "Breakdown Road Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5117885147502604,
            "y": 0.34704593343408624,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2440,
            "kingdomId": 40,
            "name": "Breakdown Road Interior",
            "subarea": "Breakdown Road",
            "type": "capdoor",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Cloud", [
        {
            "id": 2501,
            "kingdomId": 1,
            "name": "Picture Match Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.5047990817858062,
            "y": 0.6209956215446675,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2502,
            "kingdomId": 2,
            "name": "Picture Match Interior",
            "subarea": "Picture Match",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2503,
            "kingdomId": 3,
            "name": "Cube Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.40520254890841934,
            "y": 0.7735278246729524,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2504,
            "kingdomId": 4,
            "name": "Cube Room Interior",
            "subarea": "Cube Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Lost", [
        {
            "id": 2601,
            "kingdomId": 1,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.374488565749151,
            "y": 0.4732577278759391,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2602,
            "kingdomId": 2,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2603,
            "kingdomId": 3,
            "name": "Poison Platforms Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.6564651340306263,
            "y": 0.7862668402855509,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2604,
            "kingdomId": 4,
            "name": "Poison Platforms Interior (Start)",
            "subarea": "Poison Platforms",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2605,
            "kingdomId": 5,
            "name": "Poison Platforms Interior (End)",
            "subarea": "Poison Platforms",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2606,
            "kingdomId": 6,
            "name": "Klepto Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.4307358602094977,
            "y": 0.46074446815071296,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2607,
            "kingdomId": 7,
            "name": "Klepto Room Interior",
            "subarea": "Klepto Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Metro", [
        {
            "id": 2701,
            "kingdomId": 1,
            "name": "City Hall Exterior (Middle)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4999348343153192,
            "y": 0.10693903380036905,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2702,
            "kingdomId": 2,
            "name": "City Hall Interior (Middle)",
            "subarea": "City Hall Interior",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2703,
            "kingdomId": 3,
            "name": "City Hall Exterior (Top)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4999348343153192,
            "y": 0.10031348861536157,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2704,
            "kingdomId": 4,
            "name": "City Hall Interior (Top)",
            "subarea": "City Hall Interior",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2705,
            "kingdomId": 5,
            "name": "Sewer Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.3500653984176846,
            "y": 0.150496394496589,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2706,
            "kingdomId": 6,
            "name": "Sewer Interior",
            "subarea": "Sewer",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2707,
            "kingdomId": 7,
            "name": "Power Station Exterior",
            "subarea": "Sewer",
            "type": "pipe",
            "x": 0.5,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2708,
            "kingdomId": 8,
            "name": "Power Station Interior",
            "subarea": "Sewer",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2709,
            "kingdomId": 9,
            "name": "Yellow Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4185242765437645,
            "y": 0.5594684473493381,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },

        {
            "id": 2710,
            "kingdomId": 10,
            "name": "Yellow Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2711,
            "kingdomId": 11,
            "name": "Purple Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.43184600417910984,
            "y": 0.5580133892866854,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2712,
            "kingdomId": 12,
            "name": "Purple Shop Interior",
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
            "id": 2713,
            "kingdomId": 13,
            "name": "Slots Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.33748376676208075,
            "y": 0.23413841188820225,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2714,
            "kingdomId": 14,
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
            "id": 2715,
            "kingdomId": 15,
            "name": "RC Car Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4085329808172556,
            "y": 0.6721328419991988,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2716,
            "kingdomId": 16,
            "name": "RC Car Room Interior",
            "subarea": "RC Car Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2717,
            "kingdomId": 17,
            "name": "Notes Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.3696779418808318,
            "y": 0.42292401479439967,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2718,
            "kingdomId": 18,
            "name": "Notes Room Interior",
            "subarea": "Notes Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2719,
            "kingdomId": 19,
            "name": "Crowded Hallway Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.33896395872156354,
            "y": 0.09826934654884327,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2720,
            "kingdomId": 20,
            "name": "Crowded Hallway Interior (Start)",
            "subarea": "Crowded Hallway",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2721,
            "kingdomId": 21,
            "name": "Crowded Hallway Exterior (End)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.1457989080090568,
            "y": 0.08350116855880943,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2722,
            "kingdomId": 22,
            "name": "Crowded Hallway Interior (End)",
            "subarea": "Crowded Hallway",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2723,
            "kingdomId": 23,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.38447986147565993,
            "y": 0.10965556547704765,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2724,
            "kingdomId": 24,
            "name": "Outfit Room Interior (Start)",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2725,
            "kingdomId": 25,
            "name": "Outfit Room Interior (End)",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2726,
            "kingdomId": 26,
            "name": "Under Siege Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.508815986072216,
            "y": 0.3496353836980839,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2727,
            "kingdomId": 27,
            "name": "Under Siege Interior (Start)",
            "subarea": "Under Siege",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2728,
            "kingdomId": 28,
            "name": "Under Siege Interior (End)",
            "subarea": "Under Siege",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2729,
            "kingdomId": 29,
            "name": "Rotating Maze Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.3479171249108217,
            "y": 0.5975943973152781,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2730,
            "kingdomId": 30,
            "name": "Rotating Maze Interior",
            "subarea": "Rotating Maze",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2731,
            "kingdomId": 31,
            "name": "High-Rise Athletics Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.12322598062694388,
            "y": 0.08330945605808159,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2732,
            "kingdomId": 32,
            "name": "High-Rise Athletics Interior",
            "subarea": "High-Rise Athletics",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },

        {
            "id": 2733,
            "kingdomId": 33,
            "name": "Bullet Billding Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.598367599620926,
            "y": 0.3496353836980839,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2734,
            "kingdomId": 34,
            "name": "Bullet Billding Interior (Start)",
            "subarea": "Bullet Billding",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2735,
            "kingdomId": 35,
            "name": "Bullet Billding Interior (End)",
            "subarea": "Bullet Billding",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2736,
            "kingdomId": 36,
            "name": "Dino Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.40631269287803146,
            "y": 0.16638486617762321,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2737,
            "kingdomId": 37,
            "name": "Dino Room Interior (Start)",
            "subarea": "Dino Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2738,
            "kingdomId": 38,
            "name": "Dino Room Interior (End)",
            "subarea": "Dino Room",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2739,
            "kingdomId": 39,
            "name": "Theater Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.47255128306488714,
            "y": 0.42364271947906196,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2740,
            "kingdomId": 40,
            "name": "Theater Interior",
            "subarea": "Theater",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2741,
            "kingdomId": 41,
            "name": "Pitchblack Mountain Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5432304491301914,
            "y": 0.06961223331761117,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2742,
            "kingdomId": 42,
            "name": "Pitchblack Mountain Interior",
            "subarea": "Pitchblack Mountain",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2743,
            "kingdomId": 43,
            "name": "Swinging Scaffolding Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5661734245021749,
            "y": 0.2910086588416027,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2744,
            "kingdomId": 44,
            "name": "Swinging Scaffolding Interior (Start)",
            "subarea": "Swinging Scaffolding",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2745,
            "kingdomId": 45,
            "name": "Swinging Scaffolding Interior (End)",
            "subarea": "Swinging Scaffolding",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2746,
            "kingdomId": 46,
            "name": "Vanishing Road Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.41889432453363534,
            "y": 0.35626034164988507,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2747,
            "kingdomId": 47,
            "name": "Vanishing Road Interior (Start)",
            "subarea": "Vanishing Road",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2748,
            "kingdomId": 48,
            "name": "Vanising Road Interior (End)",
            "subarea": "Vanishing Road",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Snow", [
        {
            "id": 2801,
            "kingdomId": 1,
            "name": "Shiveria Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.447265625,
            "y": 0.33168323398126637,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2802,
            "kingdomId": 2,
            "name": "Shiveria Interior",
            "subarea": "Shiveria",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2803,
            "kingdomId": 3,
            "name": "Icicle Cavern Exterior",
            "subarea": "Shiveria",
            "type": "otherzone",
            "x": 0.125,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2804,
            "kingdomId": 4,
            "name": "Icicle Cavern Interior (Start)",
            "subarea": "Icicle Cavern",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2805,
            "kingdomId": 5,
            "name": "Icicle Cavern Interior (End)",
            "subarea": "Icicle Cavern",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2806,
            "kingdomId": 6,
            "name": "Hollow Crevasse Exterior",
            "subarea": "Shiveria",
            "type": "otherzone",
            "x": 0.25,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2807,
            "kingdomId": 7,
            "name": "Hollow Crevasse Interior (Start)",
            "subarea": "Hollow Crevasse",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2808,
            "kingdomId": 8,
            "name": "Hollow Crevasse Interior (End)",
            "subarea": "Hollow Crevasse",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2809,
            "kingdomId": 9,
            "name": "Wind-Chill Cavern Exterior",
            "subarea": "Shiveria",
            "type": "otherzone",
            "x": 0.375,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2810,
            "kingdomId": 10,
            "name": "Wind-Chill Cavern Interior (Start)",
            "subarea": "Wind-Chill Cavern",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2811,
            "kingdomId": 11,
            "name": "Wind-Chill Cavern Interior (End)",
            "subarea": "Wind-Chill Cavern",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2812,
            "kingdomId": 12,
            "name": "Snowy Mountain Exterior",
            "subarea": "Shiveria",
            "type": "otherzone",
            "x": 0.5,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2813,
            "kingdomId": 13,
            "name": "Snowy Mountain Interior (Start)",
            "subarea": "Snowy Mountain",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2814,
            "kingdomId": 14,
            "name": "Snowy Mountain Interior (End)",
            "subarea": "Snowy Mountain",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2815,
            "kingdomId": 15,
            "name": "Race Room Exterior",
            "subarea": "Shiveria",
            "type": "otherzone",
            "x": 0.625,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2816,
            "kingdomId": 16,
            "name": "Race Room Interior",
            "subarea": "Race Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2817,
            "kingdomId": 17,
            "name": "Race Room Side Door Exterior",
            "subarea": "Race Room",
            "type": "otherzone",
            "x": 0.5,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2818,
            "kingdomId": 18,
            "name": "Race Room Side Door Interior",
            "subarea": "Race Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2819,
            "kingdomId": 19,
            "name": "Shop Exterior",
            "subarea": "Shiveria",
            "type": "door",
            "x": 0.75,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2820,
            "kingdomId": 20,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2821,
            "kingdomId": 21,
            "name": "Trace Walking Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.671673338369503,
            "y": 0.20781706309722875,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2822,
            "kingdomId": 22,
            "name": "Trace Walking Interior",
            "subarea": "Trace Walking",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2823,
            "kingdomId": 23,
            "name": "Rocket Flower Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.31494140624999994,
            "y": 0.44077440025764014,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2824,
            "kingdomId": 24,
            "name": "Rocket Flower Room Interior (Start)",
            "subarea": "Rocket Flower Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2825,
            "kingdomId": 25,
            "name": "Rocket Flower Room Interior (End)",
            "subarea": "Rocket Flower Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2826,
            "kingdomId": 26,
            "name": "Freezing Water Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.58056640625,
            "y": 0.64858672434555,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2827,
            "kingdomId": 27,
            "name": "Freezing Water Interior (Start)",
            "subarea": "Freezing Water",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2828,
            "kingdomId": 28,
            "name": "Freezing Water Interior (End)",
            "subarea": "Freezing Water",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2829,
            "kingdomId": 29,
            "name": "Puzzle Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.392578125,
            "y": 0.828254103165664,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2830,
            "kingdomId": 30,
            "name": "Puzzle Room Interior",
            "subarea": "Puzzle Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2831,
            "kingdomId": 31,
            "name": "Outfit Room Exterior",
            "subarea": "Shiveria",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2832,
            "kingdomId": 32,
            "name": "Outfit Room Interior",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2833,
            "kingdomId": 33,
            "name": "Spinning Nut Room Exterior",
            "subarea": "",
            "type": "vine",
            "x": 0.5693011866806594,
            "y": 0.6349307572023489,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2834,
            "kingdomId": 34,
            "name": "Spinning Nut Room Interior",
            "subarea": "Spinning Nut Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2835,
            "kingdomId": 35,
            "name": "Iceburn Race Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.7616857256279169,
            "y": 0.12620324016490672,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2836,
            "kingdomId": 36,
            "name": "Iceburn Race Room Interior",
            "subarea": "Iceburn Race Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2837,
            "kingdomId": 37,
            "name": "Flower Road Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5106662260215695,
            "y": 0.19668499670218847,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2838,
            "kingdomId": 38,
            "name": "Flower Road Room Interior (Start)",
            "subarea": "Flower Road Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2839,
            "kingdomId": 39,
            "name": "Flower Road Room Interior (End)",
            "subarea": "Flower Road Room",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Seaside", [
        {
            "id": 2901,
            "kingdomId": 1,
            "name": "Lighthouse Tunnel Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.23165004165905975,
            "y": 0.17663539471568251,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2902,
            "kingdomId": 2,
            "name": "Lighthouse Tunnel Interior (Start)",
            "subarea": "Lighthouse Tunnel",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2903,
            "kingdomId": 3,
            "name": "Lighthouse Tunnel Interior (End)",
            "subarea": "Lighthouse Tunnel",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2904,
            "kingdomId": 4,
            "name": "Lighthouse Tunnel Exterior (End)",
            "subarea": "",
            "type": "pipe",
            "x": 0.1891818325497677,
            "y": 0.4217239477356673,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2905,
            "kingdomId": 5,
            "name": "Sandy Bottom Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.2052849599262279,
            "y": 0.2962819048960441,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2906,
            "kingdomId": 6,
            "name": "Sandy Bottom Interior",
            "subarea": "Sandy Bottom",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2907,
            "kingdomId": 7,
            "name": "Sphynx Vault Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.5179695457232634,
            "y": 0.16343966409531663,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2908,
            "kingdomId": 8,
            "name": "Sphynx Vault Interior",
            "subarea": "Sphynx Vault",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2909,
            "kingdomId": 9,
            "name": "Rumbling Floor Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.4520756221326222,
            "y": 0.911652218087051,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2910,
            "kingdomId": 10,
            "name": "Rumbling Floor Interior",
            "subarea": "Rumbling Floor",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2911,
            "kingdomId": 11,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.25163263311207773,
            "y": 0.8773218496713869,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2912,
            "kingdomId": 12,
            "name": "Outfit Room Interior",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2913,
            "kingdomId": 13,
            "name": "Cloud Sea Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.30158911174462255,
            "y": 0.8727927435952956,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2914,
            "kingdomId": 14,
            "name": "Cloud Sea Interior (Start)",
            "subarea": "Cloud Sea",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2915,
            "kingdomId": 15,
            "name": "Cloud Sea Interior (End)",
            "subarea": "Cloud Sea",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2916,
            "kingdomId": 16,
            "name": "Narrow Valley Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.11273846159882994,
            "y": 0.9069226331402555,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2917,
            "kingdomId": 17,
            "name": "Narrow Valley Interior (Start)",
            "subarea": "Narrow Valley",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2918,
            "kingdomId": 18,
            "name": "Narrow Valley Interior (End)",
            "subarea": "Narrow Valley",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2919,
            "kingdomId": 19,
            "name": "Lava Rising Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.733347071894642,
            "y": 0.3411949505938867,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2920,
            "kingdomId": 20,
            "name": "Lava Rising Interior (Start)",
            "subarea": "Lava Rising",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2921,
            "kingdomId": 21,
            "name": "Lava Rising Interior (End)",
            "subarea": "Lava Rising",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2922,
            "kingdomId": 22,
            "name": "Pokio Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.7583203984160112,
            "y": 0.6845163718573839,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2923,
            "kingdomId": 23,
            "name": "Pokio Room Interior (Start)",
            "subarea": "Pokio Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2924,
            "kingdomId": 24,
            "name": "Pokio Room Interior (End)",
            "subarea": "Pokio Room",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2925,
            "kingdomId": 25,
            "name": "Spinning Maze Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.11105579799287733,
            "y": 0.3595822471021533,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 2926,
            "kingdomId": 26,
            "name": "Spinning Maze Interior",
            "subarea": "Spinning Maze",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
    ["Luncheon", [
        {
            "id": 3001,
            "kingdomId": 1,
            "name": "Cascading Magma Exterior (Start)",
            "subarea": "",
            "type": "door",
            "x": 0.15744174424856716,
            "y": 0.3454548297084797,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3002,
            "kingdomId": 2,
            "name": "Cascading Magma Interior (Start)",
            "subarea": "Cascading Magma",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3003,
            "kingdomId": 3,
            "name": "Cascading Magma Interior (End)",
            "subarea": "Cascading Magma",
            "type": "door",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3004,
            "kingdomId": 4,
            "name": "Cascading Magma Exterior (End)",
            "subarea": "",
            "type": "door",
            "x": 0.17767718100554425,
            "y": 0.21419345913451346,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3005,
            "kingdomId": 5,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.39145171640800974,
            "y": 0.38577842559999714,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3006,
            "kingdomId": 6,
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
            "id": 3007,
            "kingdomId": 7,
            "name": "Slots Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.2835744450169475,
            "y": 0.3616434404943418,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3008,
            "kingdomId": 8,
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
            "id": 3009,
            "kingdomId": 9,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.3668620442526941,
            "y": 0.38577842559999714,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3010,
            "kingdomId": 10,
            "name": "Outfit Room Interior (Start)",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3011,
            "kingdomId": 11,
            "name": "Outfit Room Interior (End)",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3012,
            "kingdomId": 12,
            "name": "Treasure Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.5249657937845279,
            "y": 0.16627385344841292,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3013,
            "kingdomId": 13,
            "name": "Treasure Room Interior",
            "subarea": "Treasure Room",
            "type": "door",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3014,
            "kingdomId": 14,
            "name": "Magma Swamp Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.2953198260986241,
            "y": 0.6925599158945851,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3015,
            "kingdomId": 15,
            "name": "Magma Swamp Interior (Start)",
            "subarea": "Magma Swamp",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3016,
            "kingdomId": 16,
            "name": "Magma Swamp Interior (End)",
            "subarea": "Magma Swamp",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3017,
            "kingdomId": 17,
            "name": "Magma Path Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.525692154893052,
            "y": 0.0984315704890271,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3018,
            "kingdomId": 18,
            "name": "Magma Path Interior (Start)",
            "subarea": "Magma Path",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3019,
            "kingdomId": 19,
            "name": "Magma Path Interior (End)",
            "subarea": "Magma Path",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3020,
            "kingdomId": 20,
            "name": "Fork Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.54696334830141,
            "y": 0.5218595332474979,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3021,
            "kingdomId": 21,
            "name": "Fork Room Interior (Start)",
            "subarea": "Fork Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3022,
            "kingdomId": 22,
            "name": "Fork Room Interior (End)",
            "subarea": "Fork Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3023,
            "kingdomId": 23,
            "name": "Cheese Room Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.6027542474384296,
            "y": 0.31499395536001723,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3024,
            "kingdomId": 24,
            "name": "Cheese Room Interior",
            "subarea": "Cheese Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3025,
            "kingdomId": 25,
            "name": "Spinning Athletics Exterior",
            "subarea": "",
            "type": "scarecrowdoor",
            "x": 0.6644961758167314,
            "y": 0.07222474753885343,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3026,
            "kingdomId": 26,
            "name": "Spinning Athletics Interior (Start)",
            "subarea": "Spinning Athletics",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3027,
            "kingdomId": 27,
            "name": "Spinning Athletics Interior (End)",
            "subarea": "Spinning Athletics",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3028,
            "kingdomId": 28,
            "name": "Gear Steps Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.4999697943162919,
            "y": 0.09202320380425515,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3029,
            "kingdomId": 29,
            "name": "Gear Steps Interior (Start)",
            "subarea": "Gear Steps",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3030,
            "kingdomId": 30,
            "name": "Gear Steps Interior (End)",
            "subarea": "Gear Steps",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3031,
            "kingdomId": 31,
            "name": "Volcano Cave Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.14990234374999997,
            "y": 0.3794540805730416,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3032,
            "kingdomId": 32,
            "name": "Volcano Cave Interior (Start)",
            "subarea": "Volcano Cave",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3033,
            "kingdomId": 33,
            "name": "Volcano Cave Interior (End)",
            "subarea": "Volcano Cave",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3034,
            "kingdomId": 34,
            "name": "Lava Islands Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.363037109375,
            "y": 0.9156774122420294,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3035,
            "kingdomId": 35,
            "name": "Lava Islands Interior (Start)",
            "subarea": "Lava Islands",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3036,
            "kingdomId": 36,
            "name": "Lava Islands Interior (End)",
            "subarea": "Lava Islands",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Ruined", [
        {
            "id": 3101,
            "kingdomId": 1,
            "name": "Roulette Tower Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.35139434725176977,
            "y": 0.08774685167121853,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3102,
            "kingdomId": 2,
            "name": "Roulette Tower Interior",
            "subarea": "Roulette Tower",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3103,
            "kingdomId": 3,
            "name": "Chargin' Chuck Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.6095607593416724,
            "y": 0.9502302787872261,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3104,
            "kingdomId": 4,
            "name": "Chargin' Chuck Room Interior",
            "subarea": "Chargin' Chuck Room",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Bowser", [
        {
            "id": 3201,
            "kingdomId": 1,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.3731605930585238,
            "y": 0.33313456114762435,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3202,
            "kingdomId": 2,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3203,
            "kingdomId": 3,
            "name": "Treasure Vault Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.7234051285924928,
            "y": 0.1638836047873627,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser"
                ]
            }
        },
        {
            "id": 3204,
            "kingdomId": 4,
            "name": "Treasure Vault Interior",
            "subarea": "Treasure Vault",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3205,
            "kingdomId": 5,
            "name": "Outfit Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.37331087924179346,
            "y": 0.3159820586789726,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3206,
            "kingdomId": 6,
            "name": "Outfit Room Interior",
            "subarea": "Outfit Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3207,
            "kingdomId": 7,
            "name": "Spinning Tower Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6713827787751222,
            "y": 0.12394825882215232,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    {
                        "op": "OR",
                        "reqs": [
                            "aGround Pound",
                            {
                                "op": "AND",
                                "reqs": [
                                    "cPokio",
                                    "gCap Throw"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 3208,
            "kingdomId": 8,
            "name": "Spinning Tower Interior (Start)",
            "subarea": "Spinning Tower",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3209"
                ]
            }
        },
        {
            "id": 3209,
            "kingdomId": 9,
            "name": "Spinning Tower Interior (End)",
            "subarea": "Spinning Tower",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3208"
                ]
            }
        },
        {
            "id": 3210,
            "kingdomId": 10,
            "name": "Jizo Room Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.8467464463309958,
            "y": 0.049805662505779856,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser"
                ]
            }
        },
        {
            "id": 3211,
            "kingdomId": 11,
            "name": "Jizo Room Interior (Start)",
            "subarea": "Jizo Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3212"
                ]
            }
        },
        {
            "id": 3212,
            "kingdomId": 12,
            "name": "Jizo Room Interior (End)",
            "subarea": "Jizo Room",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3211"
                ]
            }
        },
        {
            "id": 3213,
            "kingdomId": 13,
            "name": "Rocket Flower Room Exterior",
            "subarea": "",
            "type": "vine",
            "x": 0.6772803334608534,
            "y": 0.1130157575521363,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aClimb"
                ]
            }
        },
        {
            "id": 3214,
            "kingdomId": 14,
            "name": "Rocket Flower Room Interior",
            "subarea": "Rocket Flower Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3215,
            "kingdomId": 15,
            "name": "Hexagon Tower Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5943584217226535,
            "y": 0.11029481676792269,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser"
                ]
            }
        },
        {
            "id": 3216,
            "kingdomId": 16,
            "name": "Hexagon Tower Interior",
            "subarea": "Hexagon Tower",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3217,
            "kingdomId": 17,
            "name": "Wooden Tower Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.7624872729078999,
            "y": 0.2963202474196421,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser"
                ]
            }
        },
        {
            "id": 3218,
            "kingdomId": 18,
            "name": "Wooden Tower Interior (Start)",
            "subarea": "Wooden Tower",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3219"
                ]
            }
        },
        {
            "id": 3219,
            "kingdomId": 19,
            "name": "Wooden Tower Interior (End)",
            "subarea": "Wooden Tower",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3218",
                    "gCap Throw",
                    "cPokio"
                ]
            }
        }
    ]],
    ["Moon", [
        {
            "id": 3301,
            "kingdomId": 1,
            "name": "Moon Cave Exterior (Bottom)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.46785423608762,
            "y": 0.3275898330923284,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3302,
            "kingdomId": 2,
            "name": "Moon Cave Interior (Bottom)",
            "subarea": "Moon Cave",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3303,
            "kingdomId": 3,
            "name": "Moon Cave Interior (Top)",
            "subarea": "Moon Cave",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3304,
            "kingdomId": 4,
            "name": "Moon Cave Exterior (Top)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4540260826466357,
            "y": 0.23020905954581322,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3305,
            "kingdomId": 5,
            "name": "Chapel Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4340005976325635,
            "y": 0.08559446716916984,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3306,
            "kingdomId": 6,
            "name": "Chapel Interior",
            "subarea": "Chapel",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3307,
            "kingdomId": 7,
            "name": "Bell Tower Hole",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4236425881425262,
            "y": 0.07573829535584843,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3308,
            "kingdomId": 8,
            "name": "Left Bowser Painting",
            "subarea": "Chapel",
            "type": "otherzone",
            "x": 0.5,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3309,
            "kingdomId": 9,
            "name": "Right Bowser Painting",
            "subarea": "Chapel",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3310,
            "kingdomId": 10,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6135394287932103,
            "y": 0.9189941141488652,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3311,
            "kingdomId": 11,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3312,
            "kingdomId": 12,
            "name": "Sphynx Vault Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.4666305152269559,
            "y": 0.21681260056786733,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3313,
            "kingdomId": 13,
            "name": "Sphynx Vault Interior",
            "subarea": "Sphynx Vault",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3314,
            "kingdomId": 14,
            "name": "Snowman Room Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.7157201316915647,
            "y": 0.9339933733430249,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3315,
            "kingdomId": 15,
            "name": "Snowman Room Interior (Start)",
            "subarea": "Snowman Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3316,
            "kingdomId": 16,
            "name": "Snowman Room Interior (End)",
            "subarea": "Snowman Room",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3317,
            "kingdomId": 17,
            "name": "Giant Swings Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5330406351087793,
            "y": 0.9362817282466251,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3318,
            "kingdomId": 18,
            "name": "Giant Swings Interior (Start)",
            "subarea": "Giant Swings",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3319,
            "kingdomId": 19,
            "name": "Giant Swings Interior (End)",
            "subarea": "Giant Swings",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Mushroom", [
        {
            "id": 3401,
            "kingdomId": 1,
            "name": "Shop Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.46785423608762,
            "y": 0.3275898330923284,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3402,
            "kingdomId": 2,
            "name": "Shop Interior",
            "subarea": "Shop",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3403,
            "kingdomId": 3,
            "name": "Picture Match Exterior",
            "subarea": "",
            "type": "rocket",
            "x": 0.6248290856770982,
            "y": 0.08807538470106806,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3404,
            "kingdomId": 4,
            "name": "Picture Match Interior",
            "subarea": "Picture Match",
            "type": "rocket",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3405,
            "kingdomId": 5,
            "name": "Peach's Castle Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6248290856770982,
            "y": 0.08807538470106806,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3406,
            "kingdomId": 6,
            "name": "Peach's Castle Interior",
            "subarea": "Peach's Castle",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3407,
            "kingdomId": 7,
            "name": "SM64 Room Exterior",
            "subarea": "",
            "type": "door",
            "x": 0.5148702977502101,
            "y": 0.10502637650879659,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3408,
            "kingdomId": 8,
            "name": "SM64 Room Interior",
            "subarea": "SM64 Room",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3409,
            "kingdomId": 9,
            "name": "Sea of Clouds Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.6427111580584666,
            "y": 0.2980739186696975,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3410,
            "kingdomId": 10,
            "name": "Sea of Clouds Interior",
            "subarea": "Sea of Clouds",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3411,
            "kingdomId": 11,
            "name": "2D Room Exterior",
            "subarea": "",
            "type": "otherzone",
            "x": 0.34845401575292856,
            "y": 0.19500515780979114,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3412,
            "kingdomId": 12,
            "name": "2D Room Interior",
            "subarea": "2D Room",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3413,
            "kingdomId": 13,
            "name": "Knucklotec Refight Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.44228899468243016,
            "y": 0.4515032509046564,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3414,
            "kingdomId": 14,
            "name": "Knucklotec Refight Interior",
            "subarea": "Knucklotec Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3415,
            "kingdomId": 15,
            "name": "Torkdrift Refight Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.4314496199929521,
            "y": 0.08320092034334642,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3416,
            "kingdomId": 16,
            "name": "Torkdrift Refight Interior",
            "subarea": "Torkdrift Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3417,
            "kingdomId": 17,
            "name": "Mechawiggler Refight Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.7568433974359126,
            "y": 0.3339983390374873,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3418,
            "kingdomId": 18,
            "name": "Mechawiggler Refight Interior",
            "subarea": "Mechawiggler Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3419,
            "kingdomId": 19,
            "name": "Mollusque-Lanceur Refight Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.40327837755999413,
            "y": 0.7205657146914433,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3420,
            "kingdomId": 20,
            "name": "Mollusque-Lanceur Refight Interior",
            "subarea": "Mollusque-Lanceur Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3421,
            "kingdomId": 21,
            "name": "Cookatiel Refight Exterior",
            "subarea": "",
            "type": "capdoor",
            "x": 0.5176995027647767,
            "y": 0.8279920081967577,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3422,
            "kingdomId": 22,
            "name": "Cookatiel Refight Interior",
            "subarea": "Cookatiel Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3423,
            "kingdomId": 23,
            "name": "Dragon Refight Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.5595125606845023,
            "y": 0.18785902992893871,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3424,
            "kingdomId": 24,
            "name": "Dragon Refight Interior",
            "subarea": "Dragon Refight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Dark", [
        {
            "id": 3501,
            "kingdomId": 1,
            "name": "Topper Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.7661728285771241,
            "y": 0.080449573980124,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3502,
            "kingdomId": 2,
            "name": "Topper Interior (Start)",
            "subarea": "Topper Fight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3503,
            "kingdomId": 3,
            "name": "Topper Interior (End)",
            "subarea": "Topper Fight",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3502"
                ]
            }
        },
        {
            "id": 3504,
            "kingdomId": 4,
            "name": "Topper Exterior (End)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.57568359375,
            "y": 0.0798409320400547,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3505"
                ]
            }
        },
        {
            "id": 3505,
            "kingdomId": 5,
            "name": "Hariet Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.7607421875,
            "y": 0.06571898750121213,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3504"
                ]
            }
        },
        {
            "id": 3506,
            "kingdomId": 6,
            "name": "Hariet Interior (Start)",
            "subarea": "Hariet Fight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3507,
            "kingdomId": 7,
            "name": "Hariet Interior (End)",
            "subarea": "Hariet Fight",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3506"
                ]
            }
        },
        {
            "id": 3508,
            "kingdomId": 8,
            "name": "Hariet Exterior (End)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.58154296875,
            "y": 0.09546625711783384,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3509"
                ]
            }
        },
        {
            "id": 3509,
            "kingdomId": 9,
            "name": "Spewart Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.74755859375,
            "y": 0.056425853332903134,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3508"
                ]
            }
        },
        {
            "id": 3510,
            "kingdomId": 10,
            "name": "Spewart Interior (Start)",
            "subarea": "Spewart Fight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3511,
            "kingdomId": 11,
            "name": "Spewart Interior (End)",
            "subarea": "Spewart Fight",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3510"
                ]
            }
        },
        {
            "id": 3512,
            "kingdomId": 12,
            "name": "Spewart Exterior (End)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.59033203125,
            "y": 0.1100000329147409,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3513"
                ]
            }
        },
        {
            "id": 3513,
            "kingdomId": 13,
            "name": "Rango Exterior (Start)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.7274243715456284,
            "y": 0.04929737225679721,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3512"
                ]
            }
        },
        {
            "id": 3514,
            "kingdomId": 14,
            "name": "Rango Interior (Start)",
            "subarea": "Rango Fight",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3515,
            "kingdomId": 15,
            "name": "Rango Interior (End)",
            "subarea": "Rango Fight",
            "type": "otherzone",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3514"
                ]
            }
        },
        {
            "id": 3516,
            "kingdomId": 16,
            "name": "Rango Exterior (End)",
            "subarea": "",
            "type": "otherzone",
            "x": 0.6123046875,
            "y": 0.12664426475888438,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3517"
                ]
            }
        },
        {
            "id": 3517,
            "kingdomId": 17,
            "name": "Mech Exterior",
            "subarea": "",
            "type": "pipe",
            "x": 0.69873046875,
            "y": 0.04473418765955633,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3516"
                ]
            }
        },
        {
            "id": 3518,
            "kingdomId": 18,
            "name": "Mech Fight",
            "subarea": "",
            "type": "pipe",
            "x": 0.67236328125,
            "y": 0.09898998024306359,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3519,
            "kingdomId": 19,
            "name": "Breakdown Road Exterior",
            "subarea": "",
            "type": "scarecrowdoor",
            "x": 0.2397493035143283,
            "y": 0.9539546918676679,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3520,
            "kingdomId": 20,
            "name": "Breakdown Road Interior",
            "subarea": "Breakdown Road",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "FALSE",
                "reqs": []
            }
        },
        {
            "id": 3521,
            "kingdomId": 21,
            "name": "Invisible Road Exterior",
            "subarea": "",
            "type": "scarecrowdoor",
            "x": 0.68701171875,
            "y": 0.679991754458189,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3522,
            "kingdomId": 22,
            "name": "Invisible Road Interior (Start)",
            "subarea": "Invisible Road",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3522"
                ]
            }
        },
        {
            "id": 3523,
            "kingdomId": 23,
            "name": "Invisible Road Interior (End)",
            "subarea": "Invisible Road",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3523"
                ]
            }
        },
        {
            "id": 3524,
            "kingdomId": 24,
            "name": "Vanishing Road Exterior",
            "subarea": "",
            "type": "scarecrowdoor",
            "x": 0.7099276315808893,
            "y": 0.5500099473140513,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3525,
            "kingdomId": 25,
            "name": "Vanishing Road Interior (Start)",
            "subarea": "Vanishing Road",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3526"
                ]
            }
        },
        {
            "id": 3526,
            "kingdomId": 26,
            "name": "Vanishing Road Interior (End)",
            "subarea": "Vanishing Road",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3525"
                ]
            }
        },
        {
            "id": 3527,
            "kingdomId": 27,
            "name": "Under Siege Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.67333984375,
            "y": 0.6922057862008009,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3528,
            "kingdomId": 28,
            "name": "Under Siege Interior (Start)",
            "subarea": "Under Siege",
            "type": "moonpipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3529"
                ]
            }
        },
        {
            "id": 3529,
            "kingdomId": 29,
            "name": "Under Siege Interior (End)",
            "subarea": "Under Siege",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3528"
                ]
            }
        },
        {
            "id": 3530,
            "kingdomId": 30,
            "name": "Lava Rising Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.632192538960859,
            "y": 0.6448835708340284,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3531,
            "kingdomId": 31,
            "name": "Lava Rising Interior (Start)",
            "subarea": "Lava Rising",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3532",
                ]
            }
        },
        {
            "id": 3532,
            "kingdomId": 32,
            "name": "Lava Rising Interior (End)",
            "subarea": "Lava Rising",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3531"
                ]
            }
        },
        {
            "id": 3533,
            "kingdomId": 33,
            "name": "Magma Swamp Exterior",
            "subarea": "",
            "type": "moonpipe",
            "x": 0.5988774992665602,
            "y": 0.7972734920675227,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wDark"
                ]
            }
        },
        {
            "id": 3534,
            "kingdomId": 34,
            "name": "Magma Swamp Interior (Start)",
            "subarea": "Magma Swamp",
            "type": "otherzone",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3535"
                ]
            }
        },
        {
            "id": 3535,
            "kingdomId": 35,
            "name": "Magma Swamp Interior (End)",
            "subarea": "Magma Swamp",
            "type": "moonpipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3534"
                ]
            }
        }
    ]],
    ["Darker", [
        {
            "id": 3601,
            "kingdomId": 1,
            "name": "Darker Side Exterior (Start)",
            "subarea": "",
            "type": "pipe",
            "x": 0.5284062203760651,
            "y": 0.8739403698201954,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3602,
            "kingdomId": 2,
            "name": "Darker Side Interior (Start)",
            "subarea": "Darker Side",
            "type": "pipe",
            "x": 0,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3603,
            "kingdomId": 3,
            "name": "Darker Side Exterior (End)",
            "subarea": "",
            "type": "pipe",
            "x": 0.5279132170089019,
            "y": 0.2108159439532684,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 3604,
            "kingdomId": 4,
            "name": "Darker Side Interior (End)",
            "subarea": "Darker Side",
            "type": "pipe",
            "x": 1,
            "y": 1,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
]);