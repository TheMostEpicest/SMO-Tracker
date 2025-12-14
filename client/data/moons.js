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
    ["Sand", [
        {
            "id": 72,
            "kingdomId": 1,
            "name": "Atop the Highest Tower",
            "subarea": "",
            "type": "moon",
            "x": 0.545166015625,
            "y": 0.3393242706532151,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 73,
            "kingdomId": 2,
            "name": "Moon Shards in the Sand",
            "subarea": "",
            "type": "moon",
            "x": 0.2908577200383722,
            "y": 0.2840340837821174,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 74,
            "kingdomId": 3,
            "name": "Showdown on the Inverted Pyramid",
            "subarea": "",
            "type": "multimoon",
            "x": 0.6646061898077817,
            "y": 0.11982980560641134,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 75,
            "kingdomId": 4,
            "name": "The Hole in the Desert",
            "subarea": "Knucklotec Arena",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 76,
            "kingdomId": 5,
            "name": "Overlooking the Desert Town",
            "subarea": "",
            "type": "moon",
            "x": 0.4903564453125,
            "y": 0.8547779771966405,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 77,
            "kingdomId": 6,
            "name": "Alcove in the Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.5372314453125,
            "y": 0.43335367554479876,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 78,
            "kingdomId": 7,
            "name": "On the Leaning Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.671875,
            "y": 0.5258504439904114,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 79,
            "kingdomId": 8,
            "name": "Hidden Room in the Flowing Sands",
            "subarea": "",
            "type": "moon",
            "x": 0.5614013671875,
            "y": 0.34210893841292056,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 80,
            "kingdomId": 9,
            "name": "Secret of the Mural",
            "subarea": "",
            "type": "moon",
            "x": 0.5545654296875,
            "y": 0.3505417950762232,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 81,
            "kingdomId": 10,
            "name": "Secret of the Inverted Mural",
            "subarea": "",
            "type": "moon",
            "x": 0.7227037242174821,
            "y": 0.16381668255697196,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 82,
            "kingdomId": 11,
            "name": "On Top of the Stone Archway",
            "subarea": "",
            "type": "moon",
            "x": 0.5191089089423702,
            "y": 0.6703238989536787,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 83,
            "kingdomId": 12,
            "name": "From a Crate in the Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.5398249279224449,
            "y": 0.4030278565991414,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 84,
            "kingdomId": 13,
            "name": "On the Lone Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.6959228515625,
            "y": 0.28431893902123817,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 85,
            "kingdomId": 14,
            "name": "On the Statue's Tail",
            "subarea": "",
            "type": "moon",
            "x": 0.591796875,
            "y": 0.0943189357140388,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },

        {
            "id": 86,
            "kingdomId": 15,
            "name": "Hang Your Hat on the Fountain",
            "subarea": "",
            "type": "moon",
            "x": 0.5068359375,
            "y": 0.8817802253883239,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 87,
            "kingdomId": 16,
            "name": "Where the Birds Gather",
            "subarea": "",
            "type": "moon",
            "x": 0.7648422438949182,
            "y": 0.9281266611885207,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 88,
            "kingdomId": 17,
            "name": "Top of a Dune",
            "subarea": "",
            "type": "moon",
            "x": 0.3442554101744201,
            "y": 0.7776402654129664,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 89,
            "kingdomId": 18,
            "name": "Lost in the Luggage",
            "subarea": "",
            "type": "moon",
            "x": 0.5469309290288984,
            "y": 0.12510673624390434,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 90,
            "kingdomId": 19,
            "name": "Bullet Bill Breakthrough",
            "subarea": "",
            "type": "moon",
            "x": 0.5750810423420614,
            "y": 0.46580550228776135,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 91,
            "kingdomId": 20,
            "name": "Inside a Block Is a Hard Place",
            "subarea": "",
            "type": "moon",
            "x": 0.6280281589990718,
            "y": 0.564446581291834,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 92,
            "kingdomId": 21,
            "name": "Bird Traveling the Desert",
            "subarea": "",
            "type": "moon",
            "x": 0.6657163337773939,
            "y": 0.9278792859008433,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 93,
            "kingdomId": 22,
            "name": "Bird Traveling the Wastes",
            "subarea": "",
            "type": "moon",
            "x": 0.7628075013652184,
            "y": 0.7118382126940616,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 94,
            "kingdomId": 23,
            "name": "The Lurker Under the Stone",
            "subarea": "",
            "type": "moon",
            "x": 0.646961893230811,
            "y": 0.12064148949090704,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 95,
            "kingdomId": 24,
            "name": "The Treasure of Jaxi Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.7412882125036707,
            "y": 0.475403740438698,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 96,
            "kingdomId": 25,
            "name": "Desert Gardening: Plaza Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.4791259765625,
            "y": 0.8799055352255342,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 97,
            "kingdomId": 26,
            "name": "Desert Gardening: Ruins Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.482421875,
            "y": 0.8773618915446589,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 98,
            "kingdomId": 27,
            "name": "Desert Gardening: Seed on the Cliff",
            "subarea": "",
            "type": "moon",
            "x": 0.486083984375,
            "y": 0.8747671194914318,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 99,
            "kingdomId": 28,
            "name": "Sand Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.22211159598575472,
            "y": 0.05494608892119438,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 100,
            "kingdomId": 29,
            "name": "Sand Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.24256645736024546,
            "y": 0.47879264011287487,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 101,
            "kingdomId": 30,
            "name": "Sand Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.8564757754299182,
            "y": 0.6178644226453938,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 102,
            "kingdomId": 31,
            "name": "Found in the Sand! Good Dog!",
            "subarea": "",
            "type": "moon",
            "x": 0.49755859375,
            "y": 0.9147132583742064,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 103,
            "kingdomId": 32,
            "name": "Taking Notes: Jump on the Palm",
            "subarea": "",
            "type": "moon",
            "x": 0.7101220925618782,
            "y": 0.9436696195433576,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 104,
            "kingdomId": 33,
            "name": "Herding Sheep in the Dunes",
            "subarea": "",
            "type": "moon",
            "x": 0.4296143120210982,
            "y": 0.1762820488807522,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 105,
            "kingdomId": 34,
            "name": "Fishing in the Oasis",
            "subarea": "",
            "type": "moon",
            "x": 0.7443956153506818,
            "y": 0.9405795048537536,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 106,
            "kingdomId": 35,
            "name": "Love in the Heart of the Desert",
            "subarea": "",
            "type": "moon",
            "x": 0.6054784542086421,
            "y": 0.47932477184142086,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 107,
            "kingdomId": 36,
            "name": "Among the Five Cactuses",
            "subarea": "",
            "type": "moon",
            "x": 0.5137732876842207,
            "y": 0.054371052855056154,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 108,
            "kingdomId": 37,
            "name": "You're Quite a Catch, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.7437050813846794,
            "y": 0.8869563751833084,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 109,
            "kingdomId": 38,
            "name": "Jaxi Reunion!",
            "subarea": "",
            "type": "moon",
            "x": 0.8253717185168798,
            "y": 0.9037871532486106,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 110,
            "kingdomId": 39,
            "name": "Welcome Back, Jaxi!",
            "subarea": "",
            "type": "moon",
            "x": 0.6640912364826609,
            "y": 0.19066559555175175,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 111,
            "kingdomId": 40,
            "name": "Wandering Cactus",
            "subarea": "",
            "type": "moon",
            "x": 0.7715500588804148,
            "y": 0.8184889578192371,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 112,
            "kingdomId": 41,
            "name": "Sand Quiz: Wonderful!",
            "subarea": "",
            "type": "moon",
            "x": 0.5298677741855129,
            "y": 0.2848029823479598,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 113,
            "kingdomId": 42,
            "name": "Shopping in Tostarena",
            "subarea": "Shop",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 114,
            "kingdomId": 43,
            "name": "Employees Only",
            "subarea": "Shop",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 115,
            "kingdomId": 44,
            "name": "Sand Kingdom Slots",
            "subarea": "Slots",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 116,
            "kingdomId": 45,
            "name": "Walking the Desert!",
            "subarea": "",
            "type": "moon",
            "x": 0.6879192131696361,
            "y": 0.7983951102424182,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 117,
            "kingdomId": 46,
            "name": "Hidden Room in the Inverted Pyramid",
            "subarea": "Inverted Pyramid",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 118,
            "kingdomId": 47,
            "name": "Underground Treasure Chest",
            "subarea": "Underground Temple",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 119,
            "kingdomId": 48,
            "name": "Goomba Tower Assembly",
            "subarea": "Underground Temple",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 120,
            "kingdomId": 49,
            "name": "Under the Mummy's Curse",
            "subarea": "Knucklotec Arena",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 121,
            "kingdomId": 50,
            "name": "Ice Cave Treasure",
            "subarea": "Ice Cave",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 122,
            "kingdomId": 51,
            "name": "Sphynx's Treasure Vault",
            "subarea": "Sphynx's Vault",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 123,
            "kingdomId": 52,
            "name": "A Rumble from the Sandy Floor",
            "subarea": "Sandy Floor",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 124,
            "kingdomId": 53,
            "name": "Dancing with New Friends",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 125,
            "kingdomId": 54,
            "name": "The Invisible Maze",
            "subarea": "Invisible Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 126,
            "kingdomId": 55,
            "name": "Skull Sign in the Transparent Maze",
            "subarea": "Invisible Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 127,
            "kingdomId": 56,
            "name": "The Bullet Bill Maze: Break Through!",
            "subarea": "Bullet Bill Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 128,
            "kingdomId": 57,
            "name": "The Bullet Bill Maze: Side Path",
            "subarea": "Bullet Bill Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 129,
            "kingdomId": 58,
            "name": "Jaxi Driver",
            "subarea": "Jaxi Ruins",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 130,
            "kingdomId": 59,
            "name": "Jaxi Stunt Driving",
            "subarea": "Jaxi Ruins",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 131,
            "kingdomId": 60,
            "name": "Strange Neighborhood",
            "subarea": "Strange Neighborhood",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 132,
            "kingdomId": 61,
            "name": "Above a Strange Neighborhood",
            "subarea": "Strange Neighborhood",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 133,
            "kingdomId": 62,
            "name": "Secret Path to Tostarena!",
            "subarea": "",
            "type": "moon",
            "x": 0.28086642431186326,
            "y": 0.8825012008890604,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 134,
            "kingdomId": 63,
            "name": "Found with Sand Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 135,
            "kingdomId": 64,
            "name": "Jammin' in the Sand Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.540455089206161,
            "y": 0.8905062338104067,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 136,
            "kingdomId": 65,
            "name": "Hat-and-Seek: In the Sand",
            "subarea": "",
            "type": "moon",
            "x": 0.48698315466984454,
            "y": 0.9032145981779413,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 137,
            "kingdomId": 66,
            "name": "Sand Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.2525577530867545,
            "y": 0.06525637830109388,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 138,
            "kingdomId": 67,
            "name": "Binding Band Returned",
            "subarea": "Knucklotec Arena",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 139,
            "kingdomId": 68,
            "name": "'Round-the-World Tourist",
            "subarea": "",
            "type": "moon",
            "x": 0.537403318878271,
            "y": 0.912386098259444,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 140,
            "kingdomId": 69,
            "name": "Peach in the Sand Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5976260240475295,
            "y": 0.1533000939299853,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 141,
            "kingdomId": 70,
            "name": "Mighty Leap from the Palm Tree!",
            "subarea": "",
            "type": "moon",
            "x": 0.7313977807207684,
            "y": 0.9204188731560804,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 142,
            "kingdomId": 71,
            "name": "On the North Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.46923828125,
            "y": 0.08051023126495088,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 143,
            "kingdomId": 72,
            "name": "Into the Flowing Sands",
            "subarea": "",
            "type": "moon",
            "x": 0.5188786074730148,
            "y": 0.4037182370389232,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 144,
            "kingdomId": 73,
            "name": "In the Skies Above the Canyon",
            "subarea": "",
            "type": "moon",
            "x": 0.4174141325741525,
            "y": 0.29336020602367296,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 145,
            "kingdomId": 74,
            "name": "Island in the Poison Swamp",
            "subarea": "",
            "type": "moon",
            "x": 0.766384111261893,
            "y": 0.641018465995561,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 146,
            "kingdomId": 75,
            "name": "An Invisible Gleam",
            "subarea": "",
            "type": "moon",
            "x": 0.21600317219817128,
            "y": 0.43025507296079035,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 147,
            "kingdomId": 76,
            "name": "On the Eastern Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.831298828125,
            "y": 0.3606355616829734,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 148,
            "kingdomId": 77,
            "name": "Caught Hopping in the Desert!",
            "subarea": "",
            "type": "moon",
            "x": 0.36457711462308234,
            "y": 0.8577996870418033,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 149,
            "kingdomId": 78,
            "name": "Poster Cleanup",
            "subarea": "",
            "type": "moon",
            "x": 0.2838092615373533,
            "y": 0.04980524346396614,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 150,
            "kingdomId": 79,
            "name": "Taking Notes: Running Down",
            "subarea": "",
            "type": "moon",
            "x": 0.2416413373855687,
            "y": 0.9166230716661741,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 151,
            "kingdomId": 80,
            "name": "Taking Notes: In the Wall Painting",
            "subarea": "",
            "type": "moon",
            "x": 0.5487491397978926,
            "y": 0.3623629150376784,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 152,
            "kingdomId": 81,
            "name": "Love at the Edge of the Desert",
            "subarea": "",
            "type": "moon",
            "x": 0.36188912931330053,
            "y": 0.040234897204588,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 153,
            "kingdomId": 82,
            "name": "More Walking in the Desert!",
            "subarea": "",
            "type": "moon",
            "x": 0.6827385413114462,
            "y": 0.7926310883618232,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 154,
            "kingdomId": 83,
            "name": "Sand Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.2560732089905261,
            "y": 0.06586179298901335,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 155,
            "kingdomId": 84,
            "name": "Where the Transparent Platforms End",
            "subarea": "Transparent Platforms",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 156,
            "kingdomId": 85,
            "name": "Jump Onto the Transparent Lift",
            "subarea": "Transparent Platforms",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 157,
            "kingdomId": 86,
            "name": "Colossal Ruins: Dash! Jump!",
            "subarea": "Colossal Ruins",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 158,
            "kingdomId": 87,
            "name": "Sinking Colossal Ruins: Hurry!",
            "subarea": "Colossal Ruins",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 159,
            "kingdomId": 88,
            "name": "Through the Freezing Waterway",
            "subarea": "Freezing Waterway",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 160,
            "kingdomId": 89,
            "name": "Freezing Waterway: Hidden Room",
            "subarea": "Freezing Waterway",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
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