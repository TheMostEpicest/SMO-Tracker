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
            "x": 0,
            "y": 0,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
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
            "x": 0.5,
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
            "x": 1,
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
            "x": 1,
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
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
    ["Lake", [
        {
            "id": 161,
            "kingdomId": 1,
            "name": "Broodals Over the Lake",
            "subarea": "",
            "type": "multimoon",
            "x": 0.417020130341941,
            "y": 0.21325108454702602,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 162,
            "kingdomId": 2,
            "name": "Dorrie-Back Rider",
            "subarea": "",
            "type": "moon",
            "x": 0.2933007268917605,
            "y": 0.29060758456191865,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 163,
            "kingdomId": 3,
            "name": "Cheep Cheep Crossing",
            "subarea": "",
            "type": "moon",
            "x": 0.5963781446799132,
            "y": 0.3248616098721947,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 164,
            "kingdomId": 4,
            "name": "End of the Hidden Passage",
            "subarea": "",
            "type": "moon",
            "x": 0.5985035122660853,
            "y": 0.1914889907232072,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 165,
            "kingdomId": 5,
            "name": "What's in the Box?",
            "subarea": "",
            "type": "moon",
            "x": 0.12300727915768447,
            "y": 0.42996043940934064,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 166,
            "kingdomId": 6,
            "name": "On the Lakeshore",
            "subarea": "",
            "type": "moon",
            "x": 0.6924854234062243,
            "y": 0.7412504699035001,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 167,
            "kingdomId": 7,
            "name": "From the Broken Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.2933951399168477,
            "y": 0.4000907754940144,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 168,
            "kingdomId": 8,
            "name": "Treasure in the Spiky Waterway",
            "subarea": "",
            "type": "moon",
            "x": 0.5849679497721,
            "y": 0.10007051438611943,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 169,
            "kingdomId": 9,
            "name": "Lake Gardening: Spiky Passage Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7661728285771241,
            "y": 0.15382051643005387,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 170,
            "kingdomId": 10,
            "name": "Lake Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.5075377795779161,
            "y": 0.35463066587338476,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 171,
            "kingdomId": 11,
            "name": "Lake Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.3710891805456623,
            "y": 0.21370089081240767,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 172,
            "kingdomId": 12,
            "name": "	Moon Shards in the Lake",
            "subarea": "",
            "type": "moon",
            "x": 0.3234809466154055,
            "y": 0.30151117217272627,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 173,
            "kingdomId": 13,
            "name": "Taking Notes: Dive and Swim",
            "subarea": "",
            "type": "moon",
            "x": 0.7744839484011418,
            "y": 0.5564347617464527,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 174,
            "kingdomId": 14,
            "name": "Taking Notes: In the Cliffside",
            "subarea": "",
            "type": "moon",
            "x": 0.3600372690975669,
            "y": 0.5396270661848699,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 175,
            "kingdomId": 15,
            "name": "Lake Fishing",
            "subarea": "",
            "type": "moon",
            "x": 0.5653477779217994,
            "y": 0.6224572087112732,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 176,
            "kingdomId": 16,
            "name": "I Met a Lake Cheep Cheep!",
            "subarea": "",
            "type": "moon",
            "x": 0.25334381627172353,
            "y": 0.38344760066370326,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 177,
            "kingdomId": 17,
            "name": "Our Secret Little Room",
            "subarea": "",
            "type": "moon",
            "x": 0.15302646620439678,
            "y": 0.293307324966216,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 178,
            "kingdomId": 18,
            "name": "Let's Go Swimming, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.15295410156249997,
            "y": 0.2695796655540099,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 179,
            "kingdomId": 19,
            "name": "Shopping in Lake Lamode",
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
            "id": 180,
            "kingdomId": 20,
            "name": "A Successful Repair Job",
            "subarea": "Puzzle Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 181,
            "kingdomId": 21,
            "name": "I Feel Underdressed",
            "subarea": "",
            "type": "moon",
            "x": 0.1198707318601108,
            "y": 0.2946637613595746,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 182,
            "kingdomId": 22,
            "name": "Unzip the Chasm",
            "subarea": "Zipper Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 183,
            "kingdomId": 23,
            "name": "Super-Secret Zipper",
            "subarea": "Zipper Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 184,
            "kingdomId": 24,
            "name": "Jump, Grab, Cling, and Climb",
            "subarea": "Jump, Grab, Cling, and Climb",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 185,
            "kingdomId": 25,
            "name": "Jump, Grab, and Climb Some More",
            "subarea": "Jump, Grab, Cling, and Climb",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 186,
            "kingdomId": 26,
            "name": "Secret Path to Lake Lamode!",
            "subarea": "",
            "type": "moon",
            "x": 0.5808928434644947,
            "y": 0.15166740228055875,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 187,
            "kingdomId": 27,
            "name": "Found with Lake Kingdom Art",
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
            "id": 188,
            "kingdomId": 28,
            "name": "Taxi Flying Through Lake Lamode",
            "subarea": "",
            "type": "moon",
            "x": 0.7091079305354869,
            "y": 0.6944723893753115,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 189,
            "kingdomId": 29,
            "name": "That Trendy \"Pirate\" Look",
            "subarea": "",
            "type": "moon",
            "x": 0.17382812499999997,
            "y": 0.31754070204469825,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 190,
            "kingdomId": 30,
            "name": "Space Is \"In\" Right Now",
            "subarea": "",
            "type": "moon",
            "x": 0.17309570312499997,
            "y": 0.2935537969625735,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 191,
            "kingdomId": 31,
            "name": "That \"Old West\" Style",
            "subarea": "",
            "type": "moon",
            "x": 0.17333984374999997,
            "y": 0.26648347593088106,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 192,
            "kingdomId": 32,
            "name": "Lake Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7301046840148963,
            "y": 0.7488211477053696,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 193,
            "kingdomId": 33,
            "name": "Peach in the Lake Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.4307618831238881,
            "y": 0.2521095268752124,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 194,
            "kingdomId": 34,
            "name": "Behind the Floodgate",
            "subarea": "",
            "type": "moon",
            "x": 0.7729034830009346,
            "y": 0.37496508239609844,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 195,
            "kingdomId": 35,
            "name": "High-Flying Leap",
            "subarea": "",
            "type": "moon",
            "x": 0.16041393043415617,
            "y": 0.4894081554656895,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 196,
            "kingdomId": 36,
            "name": "Deep, Deep Down",
            "subarea": "",
            "type": "moon",
            "x": 0.15368327601034543,
            "y": 0.3174702427172671,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 197,
            "kingdomId": 37,
            "name": "Rooftop of the Water Plaza",
            "subarea": "",
            "type": "moon",
            "x": 0.13853930355677116,
            "y": 0.27866902912255964,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 198,
            "kingdomId": 38,
            "name": "Bird Traveling Over the Lake",
            "subarea": "",
            "type": "moon",
            "x": 0.6955009571271109,
            "y": 0.42068968626368325,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 199,
            "kingdomId": 39,
            "name": "Love by the Lake",
            "subarea": "",
            "type": "moon",
            "x": 0.7338051639136032,
            "y": 0.8678074617984015,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 200,
            "kingdomId": 40,
            "name": "Lake Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7360254518528274,
            "y": 0.7456540938361352,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 201,
            "kingdomId": 41,
            "name": "Waves of Poison: Hoppin' Over",
            "subarea": "Waves of Poison",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 202,
            "kingdomId": 42,
            "name": "Waves of Poison: Hop to It!",
            "subarea": "Waves of Poison",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Wooded", [
        {
            "id": 203,
            "kingdomId": 1,
            "name": "Road to Sky Garden",
            "subarea": "",
            "type": "moon",
            "x": 0.55517578125,
            "y": 0.11438198690570797,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 204,
            "kingdomId": 2,
            "name": "Flower Thieves of Sky Garden",
            "subarea": "",
            "type": "multimoon",
            "x": 0.443359375,
            "y": 0.12664426475888438,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 205,
            "kingdomId": 3,
            "name": "Path to the Secret Flower Field",
            "subarea": "",
            "type": "moon",
            "x": 0.58984375,
            "y": 0.17325699046828988,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 206,
            "kingdomId": 4,
            "name": "Defend the Secret Flower Field!",
            "subarea": "Secret Flower Field",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 207,
            "kingdomId": 5,
            "name": "Behind the Rock Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.559882608674373,
            "y": 0.7046588654434676,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 208,
            "kingdomId": 6,
            "name": "Back Way Up the Mountain",
            "subarea": "",
            "type": "moon",
            "x": 0.65478515625,
            "y": 0.25158047926654814,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 209,
            "kingdomId": 7,
            "name": "Rolling Rock in the Woods",
            "subarea": "",
            "type": "moon",
            "x": 0.38037109375,
            "y": 0.8009024109337101,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 210,
            "kingdomId": 8,
            "name": "Caught Hopping in the Forest!",
            "subarea": "",
            "type": "moon",
            "x": 0.3896484375,
            "y": 0.8163609676713978,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 211,
            "kingdomId": 9,
            "name": "Thanks for the Charge!",
            "subarea": "",
            "type": "moon",
            "x": 0.392578125,
            "y": 0.5078117157524176,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 212,
            "kingdomId": 10,
            "name": "Atop the Tall Tree",
            "subarea": "",
            "type": "moon",
            "x": 0.65380859375,
            "y": 0.8961155162020806,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 213,
            "kingdomId": 11,
            "name": "Tucked Away Inside the Tunnel",
            "subarea": "",
            "type": "moon",
            "x": 0.60302734375,
            "y": 0.6962075907179882,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 214,
            "kingdomId": 12,
            "name": "Over the Cliff's Edge",
            "subarea": "",
            "type": "moon",
            "x": 0.666015625,
            "y": 0.6598203283649513,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 215,
            "kingdomId": 13,
            "name": "The Nut 'Round the Corner",
            "subarea": "",
            "type": "moon",
            "x": 0.32263102522149634,
            "y": 0.5568161915559424,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 216,
            "kingdomId": 14,
            "name": "Climb the Cliff to Get the Nut",
            "subarea": "",
            "type": "moon",
            "x": 0.528677951339288,
            "y": 0.4883487802020545,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 217,
            "kingdomId": 15,
            "name": "The Nut in the Red Maze",
            "subarea": "",
            "type": "moon",
            "x": 0.5528710158791954,
            "y": 0.27805536349285087,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 218,
            "kingdomId": 16,
            "name": "The Nut at the Dead End",
            "subarea": "",
            "type": "moon",
            "x": 0.6345721846533089,
            "y": 0.17468515139169866,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 219,
            "kingdomId": 17,
            "name": "Cracked Nut on a Crumbling Tower",
            "subarea": "",
            "type": "moon",
            "x": 0.46244447956609885,
            "y": 0.04476175542396869,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 220,
            "kingdomId": 18,
            "name": "The Nut that Grew on the Tall Fence",
            "subarea": "",
            "type": "moon",
            "x": 0.5144000771845885,
            "y": 0.6441707242962628,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 221,
            "kingdomId": 19,
            "name": "Fire in the Cave",
            "subarea": "",
            "type": "moon",
            "x": 0.571114966187978,
            "y": 0.2792734736793137,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 222,
            "kingdomId": 20,
            "name": "Hey Out There, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.8927637422841239,
            "y": 0.47014609131966245,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 223,
            "kingdomId": 21,
            "name": "Love in the Forest Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.38041140035802434,
            "y": 0.7657621903105266,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 224,
            "kingdomId": 22,
            "name": "Inside a Rock in the Forest",
            "subarea": "",
            "type": "moon",
            "x": 0.2933007268917605,
            "y": 0.8923156184114712,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 225,
            "kingdomId": 23,
            "name": "Shopping in Steam Gardens",
            "subarea": "",
            "type": "moon",
            "x": 0.43973608902230255,
            "y": 0.8662772365082569,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 226,
            "kingdomId": 24,
            "name": "Nut Planted in the Tower",
            "subarea": "Sky Garden Tower",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 227,
            "kingdomId": 25,
            "name": "Stretching Your Legs",
            "subarea": "Sky Garden Tower",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 228,
            "kingdomId": 26,
            "name": "Spinning-Platforms Treasure",
            "subarea": "Spinning-Platforms Treasure",
            "type": "moon",
            "x": 0.6576523379879582,
            "y": 0.43817815353548356,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 229,
            "kingdomId": 27,
            "name": "Make the Secret Flower Field Bloom",
            "subarea": "Secret Flower Field",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 230,
            "kingdomId": 28,
            "name": "Rolling Rock in the Deep Woods",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 231,
            "kingdomId": 29,
            "name": "Glowing in the Deep Woods",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0.2,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 232,
            "kingdomId": 30,
            "name": "Past the Peculiar Pipes",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0.4,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 233,
            "kingdomId": 31,
            "name": "By the Babbling Brook in Deep Woods",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0.6,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 234,
            "kingdomId": 32,
            "name": "The Hard Rock in Deep Woods",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0.8,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 235,
            "kingdomId": 33,
            "name": "A Treasure Made from Coins",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 236,
            "kingdomId": 34,
            "name": "Beneath the Roots of the Moving Tree",
            "subarea": "Deep Woods",
            "type": "moon",
            "x": 0,
            "y": 0.2,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 237,
            "kingdomId": 35,
            "name": "Deep Woods Treasure Trap",
            "subarea": "Deep Woods Treasure Trap",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 238,
            "kingdomId": 36,
            "name": "Exploring for Treasure",
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
            "id": 239,
            "kingdomId": 37,
            "name": "Wooded Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.5512497202330509,
            "y": 0.1829225185391292,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 240,
            "kingdomId": 38,
            "name": "Wooded Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.3919463659672292,
            "y": 0.48468098965490763,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 241,
            "kingdomId": 39,
            "name": "Flooding Pipeway",
            "subarea": "Flooding Pipeway",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 242,
            "kingdomId": 40,
            "name": "Flooding Pipeway Ceiling Secret",
            "subarea": "Flooding Pipeway",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 243,
            "kingdomId": 41,
            "name": "Wandering in the Fog",
            "subarea": "Foggy Subarea",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 244,
            "kingdomId": 42,
            "name": "Nut Hidden in the Fog",
            "subarea": "Foggy Subarea",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 245,
            "kingdomId": 43,
            "name": "Flower Road Run",
            "subarea": "Flower Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 246,
            "kingdomId": 44,
            "name": "Flower Road Reach",
            "subarea": "Flower Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 247,
            "kingdomId": 45,
            "name": "Elevator Escalation",
            "subarea": "Elevator Escalation",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 248,
            "kingdomId": 46,
            "name": "Elevator Blind Spot",
            "subarea": "Elevator Escalation",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 249,
            "kingdomId": 47,
            "name": "Walking on Clouds",
            "subarea": "Uproot Subarea",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 250,
            "kingdomId": 48,
            "name": "Above the Clouds",
            "subarea": "Uproot Subarea",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 251,
            "kingdomId": 49,
            "name": "Secret Path to the Steam Gardens!",
            "subarea": "",
            "type": "moon",
            "x": 0.4646848786697364,
            "y": 0.6431066559315899,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 252,
            "kingdomId": 50,
            "name": "Found with Wooded Kingdom Art",
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
            "id": 253,
            "kingdomId": 51,
            "name": "Swing Around Secret Flower Field",
            "subarea": "",
            "type": "moon",
            "x": 0.615572206672458,
            "y": 0.1758583779168906,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 254,
            "kingdomId": 52,
            "name": "Jammin' in the Wooded Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.581908101620058,
            "y": 0.8046339637302788,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 255,
            "kingdomId": 53,
            "name": "Wooded Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.32702273479474336,
            "y": 0.6030550109895796,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 256,
            "kingdomId": 54,
            "name": "Peach in the Wooded Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.6248523018888348,
            "y": 0.5110653144470394,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 257,
            "kingdomId": 55,
            "name": "High Up in the Cave",
            "subarea": "",
            "type": "moon",
            "x": 0.5222802322320412,
            "y": 0.7194516565536124,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 258,
            "kingdomId": 56,
            "name": "Lost in the Tall Trees",
            "subarea": "",
            "type": "moon",
            "x": 0.4542477370515148,
            "y": 0.8909456615544261,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 259,
            "kingdomId": 57,
            "name": "Looking Down on the Goombas",
            "subarea": "",
            "type": "moon",
            "x": 0.4241473218363122,
            "y": 0.7623786942617755,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 260,
            "kingdomId": 58,
            "name": "High Up on a Rock Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.5552498260502963,
            "y": 0.31343795886822434,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 261,
            "kingdomId": 59,
            "name": "The Nut in the Robot Storeroom",
            "subarea": "",
            "type": "moon",
            "x": 0.3696779418808318,
            "y": 0.5117085630764439,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 262,
            "kingdomId": 60,
            "name": "Above the Iron Mountain Path",
            "subarea": "",
            "type": "moon",
            "x": 0.49559056104583465,
            "y": 0.32312473547253,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 263,
            "kingdomId": 61,
            "name": "The Nut Under the Observation Deck",
            "subarea": "",
            "type": "moon",
            "x": 0.6515419730750414,
            "y": 0.5152483235364366,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 264,
            "kingdomId": 62,
            "name": "Bird Traveling the Forest",
            "subarea": "",
            "type": "moon",
            "x": 0.37784201169492354,
            "y": 0.2963202474196421,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 265,
            "kingdomId": 63,
            "name": "Invader in the Sky Garden",
            "subarea": "",
            "type": "moon",
            "x": 0.4443045262174378,
            "y": 0.13876477620515013,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 266,
            "kingdomId": 64,
            "name": "Hot, Hot, Hot from the Campfire",
            "subarea": "",
            "type": "moon",
            "x": 0.3658054933168304,
            "y": 0.3160609901874976,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 267,
            "kingdomId": 65,
            "name": "Wooded Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.5615297486823448,
            "y": 0.6239864438667978,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 268,
            "kingdomId": 66,
            "name": "Moon Shards in the Forest",
            "subarea": "",
            "type": "moon",
            "x": 0.541643327014191,
            "y": 0.20779358092685282,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 269,
            "kingdomId": 67,
            "name": "Taking Notes: On Top of the Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.4453449677088115,
            "y": 0.9551918974436461,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 270,
            "kingdomId": 68,
            "name": "Taking Notes: Stretching",
            "subarea": "",
            "type": "moon",
            "x": 0.46471427477159577,
            "y": 0.6103159194982862,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 271,
            "kingdomId": 69,
            "name": "Wooded Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.33517046833935243,
            "y": 0.6043338272422283,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 272,
            "kingdomId": 70,
            "name": "I Met an Uproot!",
            "subarea": "",
            "type": "moon",
            "x": 0.4699475436316362,
            "y": 0.041573590291198,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 273,
            "kingdomId": 71,
            "name": "Invisible Road: Danger!",
            "subarea": "Invisible Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 274,
            "kingdomId": 72,
            "name": "Invisible Road: Hidden Room",
            "subarea": "Invisible Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 275,
            "kingdomId": 73,
            "name": "Herding Sheep Above the Forest Fog",
            "subarea": "Herding Sheep",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 276,
            "kingdomId": 74,
            "name": "Herding Sheep on the Iron Bridge",
            "subarea": "Herding Sheep",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 277,
            "kingdomId": 75,
            "name": "Down and Back Breakdown Road",
            "subarea": "Breakdown Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 278,
            "kingdomId": 76,
            "name": "Below Breakdown Road",
            "subarea": "Breakdown Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
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