export const moons = new Map([
    ["Cap", [
        {
            "id": 1,
            "kingdomId": 1,
            "name": "Frog-Jumping Above the Fog",
            "subarea": "",
            "type": "moon",
            "x": 0.363037109375,
            "y": 0.8853601735373634,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cFrog",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 2,
            "kingdomId": 2,
            "name": "Frog-Jumping from the Top Deck",
            "subarea": "",
            "type": "moon",
            "x": 0.3756103515625,
			"y": 0.40360756457750646,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cFrog",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 3,
            "kingdomId": 3,
            "name": "Cap Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.5280368279780857,
			"y": 0.2963202474196421,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 4,
            "kingdomId": 4,
            "name": "Good Evening, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.7258543908876165,
			"y": 0.29590065737981386,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 5,
            "kingdomId": 5,
            "name": "Shopping in Bonneton",
            "subarea": "",
            "type": "moon",
            "x": 0.410888671875,
			"y": 0.37628464422736685,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 6,
            "kingdomId": 6,
            "name": "Skimming the Poison Tide",
            "subarea": "Poison Tide",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1007",
                    {
                        "op": "AND",
                        "reqs": [
                            "l1006",
                            "cParagoomba",
                            "gCap Throw"
                            
                        ]
                    }
                ]
            }
        },
        {
            "id": 7,
            "kingdomId": 7,
            "name": "Slipping Through the Poison Tide",
            "subarea": "Poison Tide",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l1006",
                            "l1007"
                        ]
                    },
                    "cParagoomba",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 8,
            "kingdomId": 8,
            "name": "Push-Block Peril",
            "subarea": "Push-Block Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1010",
                    {
                        "op": "AND",
                        "reqs": [
                            "l1009",
                            "cSpark Pylon",
                            "gCap Throw"
                        ]
                    },
                ]
            }
        },
        {
            "id": 9,
            "kingdomId": 9,
            "name": "Hidden Among the Push-Blocks",
            "subarea": "Push-Block Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l1009",
                            "l1010"
                        ]
                    },
                    "cSpark Pylon",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 10,
            "kingdomId": 10,
            "name": "Searching the Frog Pond",
            "subarea": "Frog Pond",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1012",
                    "cFrog",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 11,
            "kingdomId": 11,
            "name": "Secrets of the Frog Pond",
            "subarea": "Frog Pond",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1012",
                    "cFrog",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 12,
            "kingdomId": 12,
            "name": "The Forgotten Treasure",
            "subarea": "",
            "type": "moon",
            "x": 0.4683837890625,
			"y": 0.3989577413750298,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 13,
            "kingdomId": 13,
            "name": "Taxi Flying Through Bonneton",
            "subarea": "",
            "type": "moon",
            "x": 0.3759765625,
            "y": 0.3006163884479948,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap",
                    "cBinoculars",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 14,
            "kingdomId": 14,
            "name": "Bonneter Blockade",
            "subarea": "",
            "type": "moon",
            "x": 0.46044921875,
			"y": 0.4731763347396279,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cParagoomba",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 15,
            "kingdomId": 15,
            "name": "Cap Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.754394183335455,
			"y": 0.2569358239369125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 16,
            "kingdomId": 16,
            "name": "Peach in the Cap Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.44090290145841143,
			"y": 0.2541856502891786,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 17,
            "kingdomId": 17,
            "name": "Found with Cap Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.5,
            "y": 0.7,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 18,
            "kingdomId": 18,
            "name": "Next to Glasses Bridge",
            "subarea": "",
            "type": "moon",
            "x": 0.41281347132705937,
            "y": 0.5750769957591696,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 19,
            "kingdomId": 19,
            "name": "Danger Sign",
            "subarea": "",
            "type": "moon",
            "x": 0.18901921173535186,
            "y": 0.7612646567697662,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 20,
            "kingdomId": 20,
            "name": "Under the Big One's Brim",
            "subarea": "",
            "type": "moon",
            "x": 0.6697001151691697,
            "y": 0.29628190489604395,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 21,
            "kingdomId": 21,
            "name": "Fly to the Edge of the Fog",
            "subarea": "",
            "type": "moon",
            "x": 0.8245051669168169,
			"y": 0.1244816676270828,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap",
                    "cParagoomba",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 22,
            "kingdomId": 22,
            "name": "Spin the Hat, Get a Prize",
            "subarea": "",
            "type": "moon",
            "x": 0.4330054345984916,
			"y": 0.5006239572736091,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 23,
            "kingdomId": 23,
            "name": "Hidden in a Sunken Hat",
            "subarea": "",
            "type": "moon",
            "x": 0.5756595746044542,
			"y": 0.4791595089230853,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 24,
            "kingdomId": 24,
            "name": "Fog-Shrouded Platform",
            "subarea": "",
            "type": "moon",
            "x": 0.4123815861711908,
			"y": 0.2714899257785566,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    "wCap"
                ]
            }
        },
        {
            "id": 25,
            "kingdomId": 25,
            "name": "Bird Traveling in the Fog",
            "subarea": "",
            "type": "moon",
            "x": 0.4857288942516758,
			"y": 0.8343749389001784,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 26,
            "kingdomId": 26,
            "name": "Caught Hopping Near the Ship",
            "subarea": "",
            "type": "moon",
            "x": 0.2899790280925131,
			"y": 0.7109548616223557,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 27,
            "kingdomId": 27,
            "name": "Taking Notes: In the Fog",
            "subarea": "",
            "type": "moon",
            "x": 0.2675435133464773,
			"y": 0.4470249761622632,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 28,
            "kingdomId": 28,
            "name": "Cap Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.4834853427770722,
			"y": 0.4916507093478969,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 29,
            "kingdomId": 29,
            "name": "Cap Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7572021484375,
			"y": 0.26090680079105233,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCap"
                ]
            }
        },
        {
            "id": 30,
            "kingdomId": 30,
            "name": "Roll On and On",
            "subarea": "Rolling Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1014",
                    "l1015"
                ]
            }
        },
        {
            "id": 31,
            "kingdomId": 31,
            "name": "Precision Rolling",
            "subarea": "Rolling Room",
            "type": "moon",
            "x": 1,
            "y": 0,
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
            "id": 32,
            "kingdomId": 1,
            "name": "Our First Power Moon",
            "subarea": "",
            "type": "moon",
            "x": 0.6094046692891983,
            "y": 0.6359525052095664,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 33,
            "kingdomId": 2,
            "name": "Multi Moon Atop the Falls",
            "subarea": "",
            "type": "multimoon",
            "x": 0.36726351889055237,
            "y": 0.17045635747768506,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cGolden Chain Chomp",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 34,
            "kingdomId": 3,
            "name": "Chomp Through the Rocks",
            "subarea": "",
            "type": "moon",
            "x": 0.32730660827051533,
            "y": 0.26710869525432107,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 35,
            "kingdomId": 4,
            "name": "Behind the Waterfall",
            "subarea": "",
            "type": "moon",
            "x": 0.5627973368183927,
            "y": 0.491272535880957,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 36,
            "kingdomId": 5,
            "name": "On Top of the Rubble",
            "subarea": "",
            "type": "moon",
            "x": 0.7432426712751882,
            "y": 0.7360326627282294,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 37,
            "kingdomId": 6,
            "name": "Treasure of the Waterfall Basin",
            "subarea": "",
            "type": "moon",
            "x": 0.503396862114179,
            "y": 0.6649031945160692,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 38,
            "kingdomId": 7,
            "name": "Above a High Cliff",
            "subarea": "",
            "type": "moon",
            "x": 0.4384765625,
            "y": 0.7844826855270312,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 39,
            "kingdomId": 8,
            "name": "Across the Floating Isles",
            "subarea": "",
            "type": "moon",
            "x": 0.2501559894182995,
            "y": 0.08129542070295154,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 40,
            "kingdomId": 9,
            "name": "Cascade Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.608563337486222,
            "y": 0.7320393958087392,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 41,
            "kingdomId": 10,
            "name": "Cascade Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.41561791067031384,
            "y": 0.19838858636183007,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 42,
            "kingdomId": 11,
            "name": "Good Morning, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.3612117874111769,
            "y": 0.2926979995289375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 43,
            "kingdomId": 12,
            "name": "Dinosaur Nest: Big Cleanup!",
            "subarea": "Dinosaur Nest",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1017",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 44,
            "kingdomId": 13,
            "name": "Dinosaur Nest: Running Wild!",
            "subarea": "Dinosaur Nest",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l1017",
                    "gCap Throw",
                    "cDinosaur"
                ]
            }
        },
        {
            "id": 45,
            "kingdomId": 14,
            "name": "Nice Shot with the Chain Chomp!",
            "subarea": "Chain Chomp Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l1019",
                            "l1020"
                        ]
                    },
                    "gCap Throw",
                    "cChain Chomp"
                ]
            }
        },
        {
            "id": 46,
            "kingdomId": 15,
            "name": "Very Nice Shot with the Chain Chomp!",
            "subarea": "Chain Chomp Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l1019",
                            "l1020"
                        ]
                    },
                    "gCap Throw",
                    "cChain Chomp"
                ]
            }
        },
        {
            "id": 47,
            "kingdomId": 16,
            "name": "Past the Chasm Lifts",
            "subarea": "2D Chasm",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1023",
                    {
                        "op": "AND",
                        "reqs": [
                            "l1022",
                            "g2D Jump"
                        ]
                    }
                    
                ]
            }
        },
        {
            "id": 48,
            "kingdomId": 17,
            "name": "Hidden Chasm Passage",
            "subarea": "2D Chasm",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l1022",
                            "l1023",
                        ]
                    },
                    "g2D Jump"
                ]
            }
        },
        {
            "id": 49,
            "kingdomId": 18,
            "name": "Secret Path to Fossil Falls!",
            "subarea": "",
            "type": "moon",
            "x": 0.4541015625,
            "y": 0.8364743250257877,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 50,
            "kingdomId": 19,
            "name": "A Tourist in the Cascade Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.6861311746563903,
            "y": 0.8473685589226309,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 51,
            "kingdomId": 20,
            "name": "Rolling Rock by the Falls",
            "subarea": "",
            "type": "moon",
            "x": 0.4451677318144552,
            "y": 0.5411995256444655,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 52,
            "kingdomId": 21,
            "name": "Peach in the Cascade Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5806335489577776,
            "y": 0.44890624770988913,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 53,
            "kingdomId": 22,
            "name": "Cascade Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7038312767340762,
            "y": 0.8764844650114946,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 54,
            "kingdomId": 23,
            "name": "Caveman Cave-Fan",
            "subarea": "",
            "type": "moon",
            "x": 0.41845703125,
            "y": 0.27159739561566176,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 55,
            "kingdomId": 24,
            "name": "Shopping in Fossil Falls",
            "subarea": "",
            "type": "moon",
            "x": 0.6660863817672645,
            "y": 0.5796942538779501,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 56,
            "kingdomId": 25,
            "name": "Sphynx Traveling to the Waterfall",
            "subarea": "",
            "type": "moon",
            "x": 0.6379627345370912,
            "y": 0.9118974583090383,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 57,
            "kingdomId": 26,
            "name": "Bottom of the Waterfall Basin",
            "subarea": "",
            "type": "moon",
            "x": 0.5373096812922601,
            "y": 0.6428385964508284,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 58,
            "kingdomId": 27,
            "name": "Just a Hat, Skip, and a Jump",
            "subarea": "",
            "type": "moon",
            "x": 0.8146320420486852,
            "y": 0.39361184069480876,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 59,
            "kingdomId": 28,
            "name": "Treasure Under the Cliff",
            "subarea": "",
            "type": "moon",
            "x": 0.5568370920332786,
            "y": 0.3359081707716817,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 60,
            "kingdomId": 29,
            "name": "Next to the Stone Arch",
            "subarea": "",
            "type": "moon",
            "x": 0.46006483387364894,
            "y": 0.31692444984318713,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 61,
            "kingdomId": 30,
            "name": "Guarded by a Colossal Fossil",
            "subarea": "",
            "type": "moon",
            "x": 0.4999348343153192,
            "y": 0.4946892431765693,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 62,
            "kingdomId": 31,
            "name": "Under the Old Electrical Pole",
            "subarea": "",
            "type": "moon",
            "x": 0.6536093501929081,
            "y": 0.8979798222277582,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "gCap Throw",
                    "cT_Rex"
                ]
            }
        },
        {
            "id": 63,
            "kingdomId": 32,
            "name": "Under the Ground",
            "subarea": "",
            "type": "moon",
            "x": 0.3149064466342045,
            "y": 0.671370212802692,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "gCap Throw",
                    "cT_Rex"
                ]
            }
        },
        {
            "id": 64,
            "kingdomId": 33,
            "name": "Inside the Busted Fossil",
            "subarea": "",
            "type": "moon",
            "x": 0.5869792708043107,
            "y": 0.34565204236872904,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "gCap Throw",
                    "cChain Chomp"
                ]
            }
        },
        {
            "id": 65,
            "kingdomId": 34,
            "name": "Caught Hopping at the Waterfall!",
            "subarea": "",
            "type": "moon",
            "x": 0.6997607488454985,
            "y": 0.7209171540057429,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 66,
            "kingdomId": 35,
            "name": "Taking Notes: Hurry Upward",
            "subarea": "",
            "type": "moon",
            "x": 0.6028081754993745,
            "y": 0.41575956253670576,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "g2D Jump"
                ]
            }
        },
        {
            "id": 67,
            "kingdomId": 36,
            "name": "Cascade Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7001307968353693,
            "y": 0.8742248416921247,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wCascade"
                ]
            }
        },
        {
            "id": 68,
            "kingdomId": 37,
            "name": "Across the Mysterious Clouds",
            "subarea": "Mysterious Clouds",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1025",
                    "l1026"
                ]
            }
        },
        {
            "id": 69,
            "kingdomId": 38,
            "name": "Atop a Wall Among the Clouds",
            "subarea": "Mysterious Clouds",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1025",
                    "l1026"
                ]
            }
        },
        {
            "id": 70,
            "kingdomId": 39,
            "name": "Across the Gusty Bridges",
            "subarea": "Gusty Bridges",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1028",
                    "l1029"
                ]
            }
        },
        {
            "id": 71,
            "kingdomId": 40,
            "name": "Flying Far Away from Gusty Bridges",
            "subarea": "Gusty Bridges",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l1028",
                    "l1029"
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