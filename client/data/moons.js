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
            "logic": "cFrog"
        },
        {
            "id": 2,
            "kingdomId": 2,
            "name": "Frog-Jumping from the Top Deck",
            "subarea": "",
            "type": "moon",
            "x": 0.3756103515625,
			"y": 0.40360756457750646,
            "logic": "cFrog"
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
                            "cParagoomba"
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
                    "cBinoculars"
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
                    "wCap",
                    "cParagoomba"
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
            "logic": "wCap"
        },
        {
            "id": 18,
            "kingdomId": 18,
            "name": "Next to Glasses Bridge",
            "subarea": "",
            "type": "moon",
            "x": 0.41281347132705937,
            "y": 0.5750769957591696,
            "logic": "wCap"
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
            "logic": "wCap"
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
            "logic": "wCap"
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
            "logic": "wCap"
        },
        {
            "id": 26,
            "kingdomId": 26,
            "name": "Caught Hopping Near the Ship",
            "subarea": "",
            "type": "moon",
            "x": 0.2899790280925131,
			"y": 0.7109548616223557,
            "logic": "wCap"
        },
        {
            "id": 27,
            "kingdomId": 27,
            "name": "Taking Notes: In the Fog",
            "subarea": "",
            "type": "moon",
            "x": 0.2675435133464773,
			"y": 0.4470249761622632,
            "logic": "wCap"
        },
        {
            "id": 28,
            "kingdomId": 28,
            "name": "Cap Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.4834853427770722,
			"y": 0.4916507093478969,
            "logic": "wCap"
        },
        {
            "id": 29,
            "kingdomId": 29,
            "name": "Cap Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7572021484375,
			"y": 0.26090680079105233,
            "logic": "wCap"
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
            "logic": "l1014"
        },
        {
            "id": 748,
            "kingdomId": 998,
            "name": "Found with Mushroom Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.4403880368180866,
            "y": 0.614393696282799,
            "logic": {
                "op": "TRUE",
                "reqs": []
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
            "logic": "cGolden Chain Chomp"
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
            "logic": "g2D Jump"
        },
        {
            "id": 36,
            "kingdomId": 5,
            "name": "On Top of the Rubble",
            "subarea": "",
            "type": "moon",
            "x": 0.7432426712751882,
            "y": 0.7360326627282294,
            "logic": "wCascade"
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
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "gOpen Treasure Chest"
                ]
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
            "logic": "wCascade"
        },
        {
            "id": 39,
            "kingdomId": 8,
            "name": "Across the Floating Isles",
            "subarea": "",
            "type": "moon",
            "x": 0.2501559894182995,
            "y": 0.08129542070295154,
            "logic": "wCascade"
        },
        {
            "id": 40,
            "kingdomId": 9,
            "name": "Cascade Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.608563337486222,
            "y": 0.7320393958087392,
            "logic": "wCascade"
        },
        {
            "id": 41,
            "kingdomId": 10,
            "name": "Cascade Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.41561791067031384,
            "y": 0.19838858636183007,
            "logic": "wCascade"
        },
        {
            "id": 42,
            "kingdomId": 11,
            "name": "Good Morning, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.3612117874111769,
            "y": 0.2926979995289375,
            "logic": "wCascade"
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
                    "wCascade",
                    "l2102",
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
                    "wCascade",
                    "l2102",
                    "cT-Rex"
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
                    "wCascade",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2105",
                            {
                                "op": "AND",
                                "reqs": [
                                    "l2104",
                                    "cChain Chomp"
                                ]
                            }
                        ]
                    }
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
                    "wCascade",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2104",
                            "l2105"
                        ]
                    },
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
                "op": "AND",
                "reqs": [
                    "wCascade",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2108",
                            {
                                "op": "AND",
                                "reqs": [
                                    "l2107",
                                    "g2D Jump"
                                ]
                            }
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
                    "wCascade",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2107",
                            "l2108",
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
            "logic": "m374"
        },
        {
            "id": 51,
            "kingdomId": 20,
            "name": "Rolling Rock by the Falls",
            "subarea": "",
            "type": "moon",
            "x": 0.4451677318144552,
            "y": 0.5411995256444655,
            "logic": "wCascade"
        },
        {
            "id": 52,
            "kingdomId": 21,
            "name": "Peach in the Cascade Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5806335489577776,
            "y": 0.44890624770988913,
            "logic": "wCascade"
        },
        {
            "id": 53,
            "kingdomId": 22,
            "name": "Cascade Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7038312767340762,
            "y": 0.8764844650114946,
            "logic": "wCascade"
        },
        {
            "id": 54,
            "kingdomId": 23,
            "name": "Caveman Cave-Fan",
            "subarea": "",
            "type": "moon",
            "x": 0.41845703125,
            "y": 0.27159739561566176,
            "logic": "wCascade"
        },
        {
            "id": 55,
            "kingdomId": 24,
            "name": "Shopping in Fossil Falls",
            "subarea": "",
            "type": "moon",
            "x": 0.6660863817672645,
            "y": 0.5796942538779501,
            "logic": "wCascade"
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
                "op": "AND",
                "reqs": [
                    "wCascade",
                    "cBinoculars"
                ]
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
            "logic": "wCascade"
        },
        {
            "id": 59,
            "kingdomId": 28,
            "name": "Treasure Under the Cliff",
            "subarea": "",
            "type": "moon",
            "x": 0.5568370920332786,
            "y": 0.3359081707716817,
            "logic": "wCascade"
        },
        {
            "id": 60,
            "kingdomId": 29,
            "name": "Next to the Stone Arch",
            "subarea": "",
            "type": "moon",
            "x": 0.46006483387364894,
            "y": 0.31692444984318713,
            "logic": "wCascade"
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
            "logic": "wCascade"
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
            "logic": "wCascade"
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
                    "l2110",
                    "l2111"
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
                    "l2110",
                    "l2111"
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
                    "l2113",
                    "l2114"
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
                    "l2113",
                    "l2114"
                ]
            }
        },
        {
            "id": 187,
            "kingdomId": 998,
            "name": "Found with Lake Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.6304379643636071,
            "y": 0.8577996870418033,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLake",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 826,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 1",
            "subarea": "",
            "type": "moon",
            "x": 0.42095824422852035,
            "y": 0.10365301505058942,
            "logic": {
                "op": "TRUE",
                "reqs": []
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
            "logic": "g2D Jump"
        },
        {
            "id": 73,
            "kingdomId": 2,
            "name": "Moon Shards in the Sand",
            "subarea": "",
            "type": "moon",
            "x": 0.2908577200383722,
            "y": 0.2840340837821174,
            "logic": "m72"
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
                "op": "AND",
                "reqs": [
                    "l2204",
                    "m73",
                    
                ]
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
                "op": "AND",
                "reqs": [
                    "m74",
                    "l2208",
                    "cBullet Bill",
                    "cKnucklotec's Fist"
                ]
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
            "logic": "gJump"
        },
        {
            "id": 77,
            "kingdomId": 6,
            "name": "Alcove in the Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.5372314453125,
            "y": 0.43335367554479876,
            "logic": "gJump"
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "cBullet Bill",
                            "aWall Jump"
                        ]
                    }
                ]
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
            "logic": "gJump"
        },
        {
            "id": 80,
            "kingdomId": 9,
            "name": "Secret of the Mural",
            "subarea": "",
            "type": "moon",
            "x": 0.5545654296875,
            "y": 0.3505417950762232,
            "logic": "g2D Jump"
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
                "op": "AND",
                "reqs": [
                    "g2D Jump",
                    "cBullet Bill",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2202",
                            "l2203",
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gHigh Jump",
                    {
                        "op": "OR",
                        "reqs": [
                            "cBullet Bill",
                            "aWall Jump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    "gOpen Treasure Chest"
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "cBullet Bill",
                            "cGlydon",
                            "l2204"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "l2204",
                    "gCap Throw"
                ]
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
            "logic": "gCap Throw"
        },
        {
            "id": 87,
            "kingdomId": 16,
            "name": "Where the Birds Gather",
            "subarea": "",
            "type": "moon",
            "x": 0.7648422438949182,
            "y": 0.9281266611885207,
            "logic": "aGround Pound"
        },
        {
            "id": 88,
            "kingdomId": 17,
            "name": "Top of a Dune",
            "subarea": "",
            "type": "moon",
            "x": 0.3442554101744201,
            "y": 0.7776402654129664,
            "logic": "aGround Pound"
        },
        {
            "id": 89,
            "kingdomId": 18,
            "name": "Lost in the Luggage",
            "subarea": "",
            "type": "moon",
            "x": 0.5469309290288984,
            "y": 0.12510673624390434,
            "logic": "aGround Pound"
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
                "op": "AND",
                "reqs": [
                    "m74",
                    "cBullet Bill"
                ]
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
            "logic": "gJump"
        },
        {
            "id": 92,
            "kingdomId": 21,
            "name": "Bird Traveling the Desert",
            "subarea": "",
            "type": "moon",
            "x": 0.6657163337773939,
            "y": 0.9278792859008433,
            "logic": "gCap Throw"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gCap Throw"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "aGround Pound"
                ]
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
            "logic": "gUnlock Jaxi"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gJump",
                    "aWall Jump"
                ]
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
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gJump"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "aGround Pound"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cLakitu"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cGoomba"
                ]
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
            "logic": "gUnlock Jaxi"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cLakitu"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gUnlock Jaxi"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gUnlock Jaxi"
                ]
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
            "logic": "cCactus"
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
            "logic": "l2216"
        },
        {
            "id": 114,
            "kingdomId": 43,
            "name": "Employees Only",
            "subarea": "Shop",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": "l2218"
        },
        {
            "id": 115,
            "kingdomId": 44,
            "name": "Sand Kingdom Slots",
            "subarea": "Slots",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l2220"
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2203",
                            {
                                "op": "AND",
                                "reqs": [
                                    "l2202",
                                    {
                                        "op": "OR",
                                        "reqs": [
                                            "cBullet Bill",
                                            {
                                                "op": "AND",
                                                "reqs": [
                                                    "aLong Jump",
                                                    {
                                                        "op": "OR",
                                                        "reqs": [
                                                            "aWall Jump",
                                                            "aCap Bounce",
                                                        ]
                                                    },
                                                    
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            }
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    "gOpen Treasure Chest",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2206",
                            "l2207",
                            
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cGoomba",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2206",
                            "l2207",
                            
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2209",
                            {
                                "op": "AND",
                                "reqs": [
                                    "l2208",
                                    "cBullet Bill"
                                ]
                            }
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    "aWall Jump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2212",
                            "l2213",
                            
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "l2222",
                    "gOpen Treasure Chest"
                ]
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
                "op": "AND",
                "reqs": [
                    "l2224",
                    "aGround Pound"
                ]
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
            "logic": "l2226"
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
                "op": "OR",
                "reqs": [
                    "l2229",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2228",
                            "gJump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2228",
                            "l2229"
                        ]
                    }
                ]
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
                "op": "OR",
                "reqs": [
                    "l2232",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2231",
                            {
                                "op": "OR",
                                "reqs": [
                                    "cBullet Bill",
                                    "gHigh Jump"
                                ]
                            }
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l2231",
                            "l2232"
                        ]
                    },
                    {
                        "op": "OR",
                        "reqs": [
                            "cBullet Bill",
                            "gHigh Jump"
                        ]
                    }
                ]
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
                "op": "OR",
                "reqs": [
                    "l2235",
                    "l2236"
                ]
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
            "logic": "l2235"
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
                "op": "OR",
                "reqs": [
                    "l2239",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2238",
                            "gJump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2238",
                            "l2239"
                        ]
                    }
                ]
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
            "id": 135,
            "kingdomId": 64,
            "name": "Jammin' in the Sand Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.540455089206161,
            "y": 0.8905062338104067,
            "logic": "wSand"
        },
        {
            "id": 136,
            "kingdomId": 65,
            "name": "Hat-and-Seek: In the Sand",
            "subarea": "",
            "type": "moon",
            "x": 0.48698315466984454,
            "y": 0.9032145981779413,
            "logic": "wSand"
        },
        {
            "id": 137,
            "kingdomId": 66,
            "name": "Sand Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.2525577530867545,
            "y": 0.06525637830109388,
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "aGround Pound"
                ]
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
            "logic": "m747"
        },
        {
            "id": 140,
            "kingdomId": 69,
            "name": "Peach in the Sand Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5976260240475295,
            "y": 0.1533000939299853,
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gHigh Jump"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cSpark Pylon"
                ]
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
            "logic": "wSand"
        },
        {
            "id": 144,
            "kingdomId": 73,
            "name": "In the Skies Above the Canyon",
            "subarea": "",
            "type": "moon",
            "x": 0.4174141325741525,
            "y": 0.29336020602367296,
            "logic": "wSand"
        },
        {
            "id": 145,
            "kingdomId": 74,
            "name": "Island in the Poison Swamp",
            "subarea": "",
            "type": "moon",
            "x": 0.766384111261893,
            "y": 0.641018465995561,
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "aGround Pound"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cBullet Bill"
                ]
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
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "gCap Throw"
                ]
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
            "logic": "wSand"
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "g2D Jump"
                ]
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
                "op": "AND",
                "reqs": [
                    "wSand",
                    "cGoomba"
                ]
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
            "logic": "wSand"
        },
        {
            "id": 154,
            "kingdomId": 83,
            "name": "Sand Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.2560732089905261,
            "y": 0.06586179298901335,
            "logic": "wSand"
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
                "op": "OR",
                "reqs": [
                    "l2242",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2241",
                            "gJump"
                        ]
                    }
                ]
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
                "op": "OR",
                "reqs": [
                    "l2241",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2242",
                            "gJump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "l2244",
                    "cSpark Pylon"
                ]
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
                "op": "AND",
                "reqs": [
                    "l2244",
                    "cSpark Pylon"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2247",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2246",
                            "cGushen"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cGushen",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2246",
                            "l2247"
                        ]
                    }
                ]
            }
        },
        {
            "id": 652,
            "kingdomId": 997,
            "name": "Found with Bowser's Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.18256900124586659,
            "y": 0.4120238408435419,
            "logic": "aGround Pound"
        },
        {
            "id": 252,
            "kingdomId": 998,
            "name": "Found with Wooded Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.6829004167772582,
            "y": 0.05883296762875479,
            "logic": "aGround Pound"
        }
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
            "logic": "gJump"
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
            "logic": "cZipper"
        },
        {
            "id": 165,
            "kingdomId": 5,
            "name": "What's in the Box?",
            "subarea": "",
            "type": "moon",
            "x": 0.12300727915768447,
            "y": 0.42996043940934064,
            "logic": "gOpen Treasure Chest"
        },
        {
            "id": 166,
            "kingdomId": 6,
            "name": "On the Lakeshore",
            "subarea": "",
            "type": "moon",
            "x": 0.6924854234062243,
            "y": 0.7412504699035001,
            "logic": "aGround Pound"
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
                "op": "OR",
                "reqs": [
                    "aGround Pound",
                    "cCheep Cheep"
                ]
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
            "logic": "gOpen Treasure Chest"
        },
        {
            "id": 169,
            "kingdomId": 9,
            "name": "Lake Gardening: Spiky Passage Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7661728285771241,
            "y": 0.15382051643005387,
            "logic": "wLake"
        },
        {
            "id": 170,
            "kingdomId": 10,
            "name": "Lake Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.5075377795779161,
            "y": 0.35463066587338476,
            "logic": "wLake"
        },
        {
            "id": 171,
            "kingdomId": 11,
            "name": "Lake Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.3710891805456623,
            "y": 0.21370089081240767,
            "logic": "gJump"
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
            "logic": "g2D Jump"
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
                "op": "AND",
                "reqs": [
                    "wLake",
                    "cLakitu"
                ]
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
                "op": "AND",
                "reqs": [
                    "wLake",
                    "cCheep Cheep"
                ]
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
            "logic": "l2303"
        },
        {
            "id": 180,
            "kingdomId": 20,
            "name": "A Successful Repair Job",
            "subarea": "Puzzle Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l2305"
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
                "op": "AND",
                "reqs": [
                    "l2307",
                    "gCap Throw"
                ]
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
                "op": "AND",
                "reqs": [
                    "cZipper",
                    "l2309"
                ]
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
                "op": "AND",
                "reqs": [
                    "cZipper",
                    "l2309"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2311",
                    "l2312"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2311",
                    "l2312"
                ]
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
            "logic": "gOpen Treasure Chest"
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
                "op": "AND",
                "reqs": [
                    "wLake",
                    "cBinoculars"
                ]
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
            "logic": "wLake"
        },
        {
            "id": 190,
            "kingdomId": 30,
            "name": "Space Is \"In\" Right Now",
            "subarea": "",
            "type": "moon",
            "x": 0.17309570312499997,
            "y": 0.2935537969625735,
            "logic": "wLake"
        },
        {
            "id": 191,
            "kingdomId": 31,
            "name": "That \"Old West\" Style",
            "subarea": "",
            "type": "moon",
            "x": 0.17333984374999997,
            "y": 0.26648347593088106,
            "logic": "wLake"
        },
        {
            "id": 192,
            "kingdomId": 32,
            "name": "Lake Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7301046840148963,
            "y": 0.7488211477053696,
            "logic": "wLake"
        },
        {
            "id": 193,
            "kingdomId": 33,
            "name": "Peach in the Lake Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.4307618831238881,
            "y": 0.2521095268752124,
            "logic": "wLake"
        },
        {
            "id": 194,
            "kingdomId": 34,
            "name": "Behind the Floodgate",
            "subarea": "",
            "type": "moon",
            "x": 0.7729034830009346,
            "y": 0.37496508239609844,
            "logic": "wLake"
        },
        {
            "id": 195,
            "kingdomId": 35,
            "name": "High-Flying Leap",
            "subarea": "",
            "type": "moon",
            "x": 0.16041393043415617,
            "y": 0.4894081554656895,
            "logic": "wLake"
        },
        {
            "id": 196,
            "kingdomId": 36,
            "name": "Deep, Deep Down",
            "subarea": "",
            "type": "moon",
            "x": 0.15368327601034543,
            "y": 0.3174702427172671,
            "logic": "wLake"
        },
        {
            "id": 197,
            "kingdomId": 37,
            "name": "Rooftop of the Water Plaza",
            "subarea": "",
            "type": "moon",
            "x": 0.13853930355677116,
            "y": 0.27866902912255964,
            "logic": "wLake"
        },
        {
            "id": 198,
            "kingdomId": 38,
            "name": "Bird Traveling Over the Lake",
            "subarea": "",
            "type": "moon",
            "x": 0.6955009571271109,
            "y": 0.42068968626368325,
            "logic": "wLake"
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
                "op": "AND",
                "reqs": [
                    "wLake",
                    "cGoomba"
                ]
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
            "logic": "wLake"
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2314",
                            "l2315"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2314",
                            "l2315"
                        ]
                    }
                ]
            }
        },
        {
            "id": 375,
            "kingdomId": 998,
            "name": "Found with Metro Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.1398638322274412,
            "y": 0.317705409678303,
            "logic": "aGround Pound"
        },
        {
            "id": 834,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 9",
            "subarea": "",
            "type": "moon",
            "x": 0.16849028770460706,
            "y": 0.18586325567837803,
            "logic": "aGround Pound"
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
            "logic": "gJump"
        },
        {
            "id": 204,
            "kingdomId": 2,
            "name": "Flower Thieves of Sky Garden",
            "subarea": "",
            "type": "multimoon",
            "x": 0.443359375,
            "y": 0.12664426475888438,
            "logic": "m203"
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
                "op": "AND",
                "reqs": [
                    "m204",
                    "cSherm"
                ]
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
                "op": "AND",
                "reqs": [
                    "m205",
                    "l2406",
                    "cUproot",
                ]
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
            "logic": "gJump"
        },
        {
            "id": 208,
            "kingdomId": 6,
            "name": "Back Way Up the Mountain",
            "subarea": "",
            "type": "moon",
            "x": 0.65478515625,
            "y": 0.25158047926654814,
            "logic": "g2D Jump"
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
            "logic": "aGround Pound"
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
                "op": "OR",
                "reqs": [
                    "gJump",
                    "cUproot"
                ]
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
            "logic": "gJump"
        },
        {
            "id": 214,
            "kingdomId": 12,
            "name": "Over the Cliff's Edge",
            "subarea": "",
            "type": "moon",
            "x": 0.666015625,
            "y": 0.6598203283649513,
            "logic": "gJump"
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
                "op": "OR",
                "reqs": [
                    "gJump",
                    "cUproot"
                ]
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
            "logic": "wWooded"
        },
        {
            "id": 223,
            "kingdomId": 21,
            "name": "Love in the Forest Ruins",
            "subarea": "",
            "type": "moon",
            "x": 0.38041140035802434,
            "y": 0.7657621903105266,
            "logic": "cGoomba"
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
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l2402",
                            "l2405"
                        ]
                    },
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "cUproot"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "l2402",
                            "l2405"
                        ]
                    },
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "cUproot"
                        ]
                    }
                ]
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
            "logic": "wWooded"
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
                "op": "OR",
                "reqs": [
                    "l2414",
                    "l2415",
                    "l2416",
                    "l2417",
                    "l2419"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2414",
                    "l2415",
                    "l2416",
                    "l2417",
                    "l2419"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2414",
                    "l2415",
                    "l2416",
                    "l2417",
                    "l2419"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2414",
                    "l2415",
                    "l2416",
                    "l2417",
                    "l2419"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2414",
                    "l2415",
                    "l2416",
                    "l2417",
                    "l2419"
                ]
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
                "op": "AND",
                "reqs": [
                    "cCoin Coffer",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2414",
                            "l2415",
                            "l2416",
                            "l2417",
                            "l2419"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cTree",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2414",
                            "l2415",
                            "l2416",
                            "l2417",
                            "l2419"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "l2418",
                    "gOpen Treasure Chest"
                ]
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
                "op": "AND",
                "reqs": [
                    "l2420",
                    "gOpen Treasure Chest"
                ]
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gJump"
                ]
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gJump"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2423",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2422",
                            "gJump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2422",
                            "l2423"
                            
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "l2425",
                    "cParagoomba"
                ]
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
                "op": "AND",
                "reqs": [
                    "l2425",
                    "cParagoomba"
                ]
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
                "op": "OR",
                "reqs": [
                    "l2428",
                    {
                        "op": "AND",
                        "reqs": [
                            "l2427",
                            "gJump",
                            "aWall Jump"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "gJump",
                    "aWall Jump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2427",
                            "l2428"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cSherm",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2430",
                            "l2431"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cSherm",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2430",
                            "l2431"
                        ]
                    }
                ]
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
                "op": "AND",
                "reqs": [
                    "cUproot",
                    "l2433"
                ]
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
                "op": "AND",
                "reqs": [
                    "cUproot",
                    "l2433"
                ]
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
            "id": 253,
            "kingdomId": 51,
            "name": "Swing Around Secret Flower Field",
            "subarea": "",
            "type": "moon",
            "x": 0.615572206672458,
            "y": 0.1758583779168906,
            "logic": "wWooded"
        },
        {
            "id": 254,
            "kingdomId": 52,
            "name": "Jammin' in the Wooded Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.581908101620058,
            "y": 0.8046339637302788,
            "logic": "wWooded"
        },
        {
            "id": 255,
            "kingdomId": 53,
            "name": "Wooded Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.32702273479474336,
            "y": 0.6030550109895796,
            "logic": "wWooded"
        },
        {
            "id": 256,
            "kingdomId": 54,
            "name": "Peach in the Wooded Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.6248523018888348,
            "y": 0.5110653144470394,
            "logic": "wWooded"
        },
        {
            "id": 257,
            "kingdomId": 55,
            "name": "High Up in the Cave",
            "subarea": "",
            "type": "moon",
            "x": 0.5222802322320412,
            "y": 0.7194516565536124,
            "logic": "wWooded"
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gOpen Treasure Chest"
                ]
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gOpen Treasure Chest"
                ]
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
            "logic": "wWooded"
        },
        {
            "id": 261,
            "kingdomId": 59,
            "name": "The Nut in the Robot Storeroom",
            "subarea": "",
            "type": "moon",
            "x": 0.3696779418808318,
            "y": 0.5117085630764439,
            "logic": "wWooded"
        },
        {
            "id": 262,
            "kingdomId": 60,
            "name": "Above the Iron Mountain Path",
            "subarea": "",
            "type": "moon",
            "x": 0.49559056104583465,
            "y": 0.32312473547253,
            "logic": "wWooded"
        },
        {
            "id": 263,
            "kingdomId": 61,
            "name": "The Nut Under the Observation Deck",
            "subarea": "",
            "type": "moon",
            "x": 0.6515419730750414,
            "y": 0.5152483235364366,
            "logic": "wWooded"
        },
        {
            "id": 264,
            "kingdomId": 62,
            "name": "Bird Traveling the Forest",
            "subarea": "",
            "type": "moon",
            "x": 0.37784201169492354,
            "y": 0.2963202474196421,
            "logic": "wWooded"
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gJump"
                ]
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "cFire Bro"
                ]
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
                "op": "AND",
                "reqs": [
                    "wWooded",
                    "gJump"
                ]
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
            "logic": "wWooded"
        },
        {
            "id": 269,
            "kingdomId": 67,
            "name": "Taking Notes: On Top of the Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.4453449677088115,
            "y": 0.9551918974436461,
            "logic": "wWooded"
        },
        {
            "id": 270,
            "kingdomId": 68,
            "name": "Taking Notes: Stretching",
            "subarea": "",
            "type": "moon",
            "x": 0.46471427477159577,
            "y": 0.6103159194982862,
            "logic": "wWooded"
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
        {
            "id": 696,
            "kingdomId": 998,
            "name": "Found with Moon Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.5327469547709193,
            "y": 0.30120871865103066,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Cloud", [
        {
            "id": 279,
            "kingdomId": 1,
            "name": "Picture Match: Basically a Goomba",
            "subarea": "Picture Match",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 280,
            "kingdomId": 2,
            "name": "Peach in the Cloud Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5945411407699496,
            "y": 0.4283220942135882,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 281,
            "kingdomId": 3,
            "name": "Digging in the...Cloud?",
            "subarea": "",
            "type": "moon",
            "x": 0.5939802529012987,
            "y": 0.7643075042065368,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 282,
            "kingdomId": 4,
            "name": "High, High Above the Clouds",
            "subarea": "",
            "type": "moon",
            "x": 0.43665662804742894,
            "y": 0.6191047792303237,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 283,
            "kingdomId": 5,
            "name": "Crossing the Cloud Sea",
            "subarea": "",
            "type": "moon",
            "x": 0.4977478389890579,
            "y": 0.10855335332378281,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 284,
            "kingdomId": 6,
            "name": "Taking Notes: Up and Down",
            "subarea": "",
            "type": "moon",
            "x": 0.7622466134965675,
            "y": 0.6220366428855447,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 285,
            "kingdomId": 7,
            "name": "Picture Match: A Stellar Goomba!",
            "subarea": "Picture Match",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 286,
            "kingdomId": 8,
            "name": "King of the Cube!",
            "subarea": "Cube Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 287,
            "kingdomId": 9,
            "name": "The Sixth Face",
            "subarea": "Cube Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 829,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 4",
            "subarea": "",
            "type": "moon",
            "x": 0.4017635144086262,
            "y": 0.4271206044732127,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Lost", [
        {
            "id": 288,
            "kingdomId": 1,
            "name": "Atop a Propeller Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.33423647159168623,
            "y": 0.3330044718202567,
            "logic": {
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 289,
            "kingdomId": 2,
            "name": "Below the Cliff's Edge",
            "subarea": "",
            "type": "moon",
            "x": 0.6515419730750414,
            "y": 0.15604501917744343,
            "logic": {
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 290,
            "kingdomId": 3,
            "name": "Inside the Stone Cage",
            "subarea": "",
            "type": "moon",
            "x": 0.5355090906349292,
            "y": 0.2681273823373807,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 291,
            "kingdomId": 4,
            "name": "On a Tree in the Swamp",
            "subarea": "",
            "type": "moon",
            "x": 0.4343458646155648,
            "y": 0.224778509621592,
            "logic": {
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 292,
            "kingdomId": 5,
            "name": "Over the Fuzzies, Above the Swamp",
            "subarea": "",
            "type": "moon",
            "x": 0.3013678339363271,
            "y": 0.5990490875984852,
            "logic": {
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 293,
            "kingdomId": 6,
            "name": "Avoiding Fuzzies Inside the Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.3148075181405926,
            "y": 0.5981813017378828,
            "logic": "g2D Jump"
        },
        {
            "id": 294,
            "kingdomId": 7,
            "name": "Inside the Rising Stone Pillar",
            "subarea": "",
            "type": "moon",
            "x": 0.5413786293459504,
            "y": 0.14614072535834513,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 295,
            "kingdomId": 8,
            "name": "Enjoying the View of Forgotten Isle",
            "subarea": "",
            "type": "moon",
            "x": 0.4025813021794504,
            "y": 0.5074883655699929,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2601",
                            {
                                "op": "AND",
                                "reqs": [
                                    "aGround Pound",
                                    "aWall Jump"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 296,
            "kingdomId": 9,
            "name": "On the Mountain Road",
            "subarea": "",
            "type": "moon",
            "x": 0.32834890083418294,
            "y": 0.6500646961896971,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 297,
            "kingdomId": 10,
            "name": "A Propeller Pillar's Secret",
            "subarea": "",
            "type": "moon",
            "x": 0.45885982040865314,
            "y": 0.3327682229050727,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 298,
            "kingdomId": 11,
            "name": "Wrecked Rock Block",
            "subarea": "",
            "type": "moon",
            "x": 0.6206656868008025,
            "y": 0.1585269233870556,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 299,
            "kingdomId": 12,
            "name": "A Butterfly's Treasure",
            "subarea": "",
            "type": "moon",
            "x": 0.28466796874999994,
            "y": 0.44413665146353204,
            "logic":{
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 300,
            "kingdomId": 13,
            "name": "Caught Hopping in the Jungle!",
            "subarea": "",
            "type": "moon",
            "x": 0.47301576671170414,
            "y": 0.3327682229050727,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 301,
            "kingdomId": 14,
            "name": "Cave Gardening",
            "subarea": "",
            "type": "moon",
            "x": 0.396240234375,
            "y": 0.4853567301435188,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 302,
            "kingdomId": 15,
            "name": "Moon Shards in the Jungle",
            "subarea": "",
            "type": "moon",
            "x": 0.3178712232989334,
            "y": 0.2834583177292489,
            "logic": "gJump"
        },
        {
            "id": 303,
            "kingdomId": 16,
            "name": "Peeking Out from Under the Bridge",
            "subarea": "",
            "type": "moon",
            "x": 0.5518508649661295,
            "y": 0.5195292038966235,
            "logic": {
                "op": "OR",
                "reqs": [
                    "aDive",
                    "cTropical Wiggler"
                ]
            }
        },
        {
            "id": 304,
            "kingdomId": 17,
            "name": "Twist 'n' Turn-Up Treasure",
            "subarea": "",
            "type": "moon",
            "x": 0.6177698908808156,
            "y": 0.900913170428191,
            "logic": {
                "op": "OR",
                "reqs": [
                    "cTropical Wiggler",
                    {
                        "op": "AND",
                        "reqs": [
                            "cGlydon",
                            {
                                "op": "OR",
                                "reqs": [
                                    "gJump",
                                    "l2601",
                                    "l2606"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 305,
            "kingdomId": 18,
            "name": "Soaring Over Forgotten Isle!",
            "subarea": "",
            "type": "moon",
            "x": 0.3207300908407775,
            "y": 0.9474339466356008,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 306,
            "kingdomId": 19,
            "name": "The Caged Gold",
            "subarea": "",
            "type": "moon",
            "x": 0.4977478389890579,
            "y": 0.4631166756121028,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 307,
            "kingdomId": 20,
            "name": "Get Some Rest, Captain Toad",
            "subarea": "",
            "type": "moon",
            "x": 0.42981848415117924,
            "y": 0.1467580306787905,
            "logic": {
                "op": "OR",
                "reqs": [
                    "gJump",
                    "l2601",
                    "l2606"
                ]
            }
        },
        {
            "id": 308,
            "kingdomId": 21,
            "name": "Shopping on Forgotten Isle",
            "subarea": "Shop",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l2602"
        },
        {
            "id": 309,
            "kingdomId": 22,
            "name": "Taxi Flying Through Forgotten Isle",
            "subarea": "",
            "type": "moon",
            "x": 0.6556779184528972,
            "y": 0.907245453274926,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "cBinoculars"
                ]
            }
        },
        {
            "id": 310,
            "kingdomId": 23,
            "name": "I Met a Tropical Wiggler!",
            "subarea": "",
            "type": "moon",
            "x": 0.6194089675042316,
            "y": 0.14341060133047043,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cTropical Wiggler",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 311,
            "kingdomId": 24,
            "name": "Lost Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6713827787751223,
            "y": 0.8885518661690333,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "gJump",
                    "aGround Pound",
                    "aWall Jump"
                ]
            }
        },
        {
            "id": 312,
            "kingdomId": 25,
            "name": "Peach in the Lost Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.3604267421340643,
            "y": 0.5717827944386884,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2601",
                            {
                                "op": "AND",
                                "reqs": [
                                    "aGround Pound",
                                    "aWall Jump"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 313,
            "kingdomId": 26,
            "name": "The Shining Fruit",
            "subarea": "",
            "type": "moon",
            "x": 0.6331521106687721,
            "y": 0.5696170530685453,
            "logic": "wLost"
        },
        {
            "id": 314,
            "kingdomId": 27,
            "name": "Jump Down to the Top of a Tree",
            "subarea": "",
            "type": "moon",
            "x": 0.38981706871237265,
            "y": 0.1466809376684522,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 315,
            "kingdomId": 28,
            "name": "Line It Up, Blow It Up",
            "subarea": "",
            "type": "moon",
            "x": 0.4917937785381637,
            "y": 0.24527141648157214,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 316,
            "kingdomId": 29,
            "name": "Taking Notes: Stretch and Shrink",
            "subarea": "",
            "type": "moon",
            "x": 0.29233791199785497,
            "y": 0.33274172097885196,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "l2601",
                            "l2606"
                        ]
                    }
                ]
            }
        },
        {
            "id": 317,
            "kingdomId": 30,
            "name": "Lost Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6753089938556787,
            "y": 0.8928935969801516,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "gJump",
                    "aGround Pound",
                    "aWall Jump"
                ]
            }
        },
        {
            "id": 318,
            "kingdomId": 31,
            "name": "Lost Kingdom Timer Challenge",
            "subarea": "",
            "type": "moon",
            "x": 0.47292133105475787,
            "y": 0.6218556161467054,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wLost",
                    "gJump"
                ]
            }
        },
        {
            "id": 319,
            "kingdomId": 32,
            "name": "Stretch and Traverse the Jungle",
            "subarea": "Poison Platforms",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2604",
                            "l2605"
                        ]
                    }
                ]
            }
        },
        {
            "id": 320,
            "kingdomId": 33,
            "name": "Aglow in the Jungle",
            "subarea": "Poison Platforms",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gJump",
                    {
                        "op": "OR",
                        "reqs": [
                            "l2604",
                            "l2605"
                        ]
                    }
                ]
            }
        },
        {
            "id": 321,
            "kingdomId": 34,
            "name": "Chasing Klepto",
            "subarea": "Klepto Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2607",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 322,
            "kingdomId": 35,
            "name": "Extremely Hot Bath",
            "subarea": "Klepto Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l2607",
                    "aGround Pound",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "cLava Bubble"
                        ]
                    }
                ]
            }
        },
        {
            "id": 437,
            "kingdomId": 998,
            "name": "Found with Snow Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.41038322076660905,
            "y": 0.34389565999198124,
            "logic": "aGround Pound"
        },
        {
            "id": 832,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 7",
            "subarea": "",
            "type": "moon",
            "x": 0.6408155204503087,
            "y": 0.6307108980162915,
            "logic": "aGround Pound"
        }
    ]],
    ["Metro", [
        {
            "id": 323,
            "kingdomId": 1,
            "name": "New Donk City's Pest Problem",
            "subarea": "",
            "type": "multimoon",
            "x": 0.5002918583688024,
            "y": 0.1470614471962341,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 324,
            "kingdomId": 2,
            "name": "Drummer on Board!",
            "subarea": "",
            "type": "moon",
            "x": 0.5254963481278931,
            "y": 0.11887097959171097,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 325,
            "kingdomId": 3,
            "name": "Guitarist on Board!",
            "subarea": "",
            "type": "moon",
            "x": 0.5986859575886325,
            "y": 0.5752492255496003,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 326,
            "kingdomId": 4,
            "name": "Bassist on Board!",
            "subarea": "",
            "type": "moon",
            "x": 0.9280618200554642,
            "y": 0.0795129208698752,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 327,
            "kingdomId": 5,
            "name": "Trumpeter on Board!",
            "subarea": "",
            "type": "moon",
            "x": 0.41113080772110666,
            "y": 0.17719147656277198,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 328,
            "kingdomId": 6,
            "name": "Powering Up the Station",
            "subarea": "Sewer",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 329,
            "kingdomId": 7,
            "name": "A Traditional Festival!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.49975109096794823,
            "y": 0.0960697445587315,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 330,
            "kingdomId": 8,
            "name": "Inside an Iron Girder",
            "subarea": "",
            "type": "moon",
            "x": 0.2602519710540156,
            "y": 0.321253962788252,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 331,
            "kingdomId": 9,
            "name": "Swaying in the Breeze",
            "subarea": "",
            "type": "moon",
            "x": 0.560326980782245,
            "y": 0.06827161825288333,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 332,
            "kingdomId": 10,
            "name": "Girder Sandwich",
            "subarea": "",
            "type": "moon",
            "x": 0.6629694607453589,
            "y": 0.24112483935146437,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 333,
            "kingdomId": 11,
            "name": "Glittering Above the Pool",
            "subarea": "",
            "type": "moon",
            "x": 0.39093884444967436,
            "y": 0.06996323448557844,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 334,
            "kingdomId": 12,
            "name": "Dizzying Heights",
            "subarea": "",
            "type": "moon",
            "x": 0.5014337545739009,
            "y": 0.08301328841399606,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 335,
            "kingdomId": 13,
            "name": "Secret Girder Tunnel!",
            "subarea": "",
            "type": "moon",
            "x": 0.5477660685314735,
            "y": 0.9238849167653389,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 336,
            "kingdomId": 14,
            "name": "Who Piled Garbage on This?",
            "subarea": "",
            "type": "moon",
            "x": 0.31488348849713443,
            "y": 0.6729902868995571,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 337,
            "kingdomId": 15,
            "name": "Hidden in the Scrap",
            "subarea": "",
            "type": "moon",
            "x": 0.9260060484093362,
            "y": 0.10826663810280716,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 338,
            "kingdomId": 16,
            "name": "Left at the Café?",
            "subarea": "",
            "type": "moon",
            "x": 0.3832463511313807,
            "y": 0.09485629778300024,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 339,
            "kingdomId": 17,
            "name": "Caught Hopping on a Building!",
            "subarea": "",
            "type": "moon",
            "x": 0.4281310589215424,
            "y": 0.5136996307678879,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 340,
            "kingdomId": 18,
            "name": "How Do They Take Out the Trash?",
            "subarea": "",
            "type": "moon",
            "x": 0.6024908853371705,
            "y": 0.05730439314949491,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 341,
            "kingdomId": 19,
            "name": "Metro Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.3197527273484741,
            "y": 0.33754599858890016,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 342,
            "kingdomId": 20,
            "name": "Metro Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.47513592325916504,
            "y": 0.1016749420522513,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 343,
            "kingdomId": 21,
            "name": "City Gardening: Building Planter",
            "subarea": "",
            "type": "moon",
            "x": 0.41133493239918273,
            "y": 0.6866914531453712,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 344,
            "kingdomId": 22,
            "name": "City Gardening: Plaza Planter",
            "subarea": "",
            "type": "moon",
            "x": 0.615432417940762,
            "y": 0.5402660275014741,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 345,
            "kingdomId": 23,
            "name": "City Gardening: Rooftop Planter",
            "subarea": "",
            "type": "moon",
            "x": 0.3631888588868102,
            "y": 0.24385757379954068,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 346,
            "kingdomId": 24,
            "name": "How You Doin', Captain Toad?",
            "subarea": "",
            "type": "moon",
            "x": 0.4929739266158144,
            "y": 0.03755453704168848,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 347,
            "kingdomId": 25,
            "name": "Free Parking: Rooftop Hop",
            "subarea": "",
            "type": "moon",
            "x": 0.6575754263469913,
            "y": 0.06365777178550379,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 348,
            "kingdomId": 26,
            "name": "Bench Friends",
            "subarea": "",
            "type": "moon",
            "x": 0.4037223569489365,
            "y": 0.4732577278759391,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 349,
            "kingdomId": 27,
            "name": "Shopping in New Donk City",
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
            "id": 350,
            "kingdomId": 28,
            "name": "Metro Kingdom Slots",
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
            "id": 351,
            "kingdomId": 29,
            "name": "Jump-Rope Hero",
            "subarea": "",
            "type": "moon",
            "x": 0.5395846607630169,
            "y": 0.6720507866317332,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 352,
            "kingdomId": 30,
            "name": "Jump-Rope Genius",
            "subarea": "",
            "type": "moon",
            "x": 0.5455337749941417,
            "y": 0.6717106086106059,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 353,
            "kingdomId": 31,
            "name": "Remotely Captured Car",
            "subarea": "",
            "type": "moon",
            "x": 0.42337862944837973,
            "y": 0.6445272449564853,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 354,
            "kingdomId": 32,
            "name": "RC Car Pro!",
            "subarea": "RC Car Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 355,
            "kingdomId": 33,
            "name": "Taking Notes: In the Private Room",
            "subarea": "Notes Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 356,
            "kingdomId": 34,
            "name": "City Hall Lost & Found",
            "subarea": "City Hall Interior",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 357,
            "kingdomId": 35,
            "name": "Sewer Treasure",
            "subarea": "Sewer",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 358,
            "kingdomId": 36,
            "name": "Celebrating in the Streets!",
            "subarea": "",
            "type": "moon",
            "x": 0.4778764640905633,
            "y": 0.13377421934377465,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 359,
            "kingdomId": 37,
            "name": "Pushing Through the Crowd",
            "subarea": "Crowded Hallway",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 360,
            "kingdomId": 38,
            "name": "High Over the Crowd",
            "subarea": "Crowded Hallway",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 361,
            "kingdomId": 39,
            "name": "Rewiring the Neighborhood",
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
            "id": 362,
            "kingdomId": 40,
            "name": "Off the Beaten Wire",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 363,
            "kingdomId": 41,
            "name": "Moon Shards Under Siege",
            "subarea": "Under Siege",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 364,
            "kingdomId": 42,
            "name": "Sharpshooting Under Siege",
            "subarea": "Under Siege",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 365,
            "kingdomId": 43,
            "name": "Inside the Rotating Maze",
            "subarea": "Rotating Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 366,
            "kingdomId": 44,
            "name": "Outside the Rotating Maze",
            "subarea": "Rotating Maze",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 367,
            "kingdomId": 45,
            "name": "Hanging from a High-Rise",
            "subarea": "High-Rise Athletics",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 368,
            "kingdomId": 46,
            "name": "Vaulting up a High-Rise",
            "subarea": "High-Rise Athletics",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 369,
            "kingdomId": 47,
            "name": "Bullet Billding",
            "subarea": "Bullet Billding",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 370,
            "kingdomId": 48,
            "name": "One Man's Trash...",
            "subarea": "Bullet Billding",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 371,
            "kingdomId": 49,
            "name": "Motor Scooter: Escape!",
            "subarea": "Dino Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 372,
            "kingdomId": 50,
            "name": "Big Jump: Escape!",
            "subarea": "Dino Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 373,
            "kingdomId": 51,
            "name": "Secret Path to New Donk City!",
            "subarea": "",
            "type": "moon",
            "x": 0.8848850470916586,
            "y": 0.963452053278157,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 374,
            "kingdomId": 52,
            "name": "A Tourist in the Metro Kingdom!",
            "subarea": "",
            "type": "moon",
            "x": 0.5137732876842206,
            "y": 0.8042882677130532,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        
        {
            "id": 376,
            "kingdomId": 54,
            "name": "Bird Traveling in the City",
            "subarea": "",
            "type": "moon",
            "x": 0.5001524179213722,
            "y": 0.21298580045008753,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 377,
            "kingdomId": 55,
            "name": "Mario Signs His Name",
            "subarea": "",
            "type": "moon",
            "x": 0.5648140837314521,
            "y": 0.5739858310460005,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 378,
            "kingdomId": 56,
            "name": "Surprise Clown!",
            "subarea": "",
            "type": "moon",
            "x": 0.3186067085316433,
            "y": 0.06017357126481302,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 379,
            "kingdomId": 57,
            "name": "A Request from the Mayor",
            "subarea": "",
            "type": "moon",
            "x": 0.49956478632544843,
            "y": 0.13388913004357128,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 380,
            "kingdomId": 58,
            "name": "Jammin' in the Metro Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5665434724920456,
            "y": 0.7040661334448217,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 381,
            "kingdomId": 59,
            "name": "Sphynx in the City",
            "subarea": "",
            "type": "moon",
            "x": 0.481432434821784,
            "y": 0.8168845920580711,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 382,
            "kingdomId": 60,
            "name": "Free Parking: Leap of Faith",
            "subarea": "",
            "type": "moon",
            "x": 0.5761647202286839,
            "y": 0.38687417365307614,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 383,
            "kingdomId": 61,
            "name": "Metro Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6387028305168326,
            "y": 0.44610207551365305,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 384,
            "kingdomId": 62,
            "name": "Hat-and-Seek: In the City",
            "subarea": "",
            "type": "moon",
            "x": 0.5276884335556218,
            "y": 0.7626897358374006,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 385,
            "kingdomId": 63,
            "name": "Powering Up the Power Plant",
            "subarea": "Sewer",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 386,
            "kingdomId": 64,
            "name": "Up on the Big Screen",
            "subarea": "Theater",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 387,
            "kingdomId": 65,
            "name": "Down Inside the Big Screen",
            "subarea": "Theater",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 388,
            "kingdomId": 66,
            "name": "Peach in the Metro Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.34044415068104633,
            "y": 0.1932808657830915,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 389,
            "kingdomId": 67,
            "name": "Hanging Between Buildings",
            "subarea": "",
            "type": "moon",
            "x": 0.5003048823051899,
            "y": 0.19711416151771174,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 390,
            "kingdomId": 68,
            "name": "Crossing Lines",
            "subarea": "",
            "type": "moon",
            "x": 0.3315629989241494,
            "y": 0.2939501665730081,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 391,
            "kingdomId": 69,
            "name": "Out of a Crate in the City",
            "subarea": "",
            "type": "moon",
            "x": 0.3293427109849253,
            "y": 0.08803134056104456,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 392,
            "kingdomId": 70,
            "name": "Bird Traveling in the Park",
            "subarea": "",
            "type": "moon",
            "x": 0.9391668332868973,
            "y": 0.09399929182542092,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 393,
            "kingdomId": 71,
            "name": "Metro Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.41167870479383406,
            "y": 0.6128213728597302,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 394,
            "kingdomId": 72,
            "name": "Found in the Park! Good Dog!",
            "subarea": "",
            "type": "moon",
            "x": 0.897919641284432,
            "y": 0.11601773205026902,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 395,
            "kingdomId": 73,
            "name": "RC Car Champ!",
            "subarea": "RC Car Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 396,
            "kingdomId": 74,
            "name": "Metro Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6387028305168326,
            "y": 0.43446899438062636,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 397,
            "kingdomId": 75,
            "name": "Hat-and-Seek: In the Crowd",
            "subarea": "Crowded Hallway",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 398,
            "kingdomId": 76,
            "name": "Scaling Pitchblack Mountain",
            "subarea": "Pitchblack Mountain",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 399,
            "kingdomId": 77,
            "name": "Reaching Pitchblack Island",
            "subarea": "Pitchblack Mountain",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 400,
            "kingdomId": 78,
            "name": "Swinging Scaffolding: Jump!",
            "subarea": "Swinging Scaffolding",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 401,
            "kingdomId": 79,
            "name": "Swinging Scaffolding: Break!",
            "subarea": "Swinging Scaffolding",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 402,
            "kingdomId": 80,
            "name": "Motor Scooter Daredevil!",
            "subarea": "Vanishing Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 403,
            "kingdomId": 81,
            "name": "Full-Throttle Scooting!",
            "subarea": "Vanishing Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 508,
            "kingdomId": 998,
            "name": "Found with Seaside Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.4936879573387353,
            "y": 0.6110133761509963,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 827,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 2",
            "subarea": "",
            "type": "moon",
            "x": 0.6024381275095038,
            "y": 0.07528738474134913,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Snow", [
        {
            "id": 404,
            "kingdomId": 1,
            "name": "The Icicle Barrier",
            "subarea": "Icicle Cavern",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 405,
            "kingdomId": 2,
            "name": "The Ice Wall Barrier",
            "subarea": "Hollow Crevasse",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 406,
            "kingdomId": 3,
            "name": "The Gusty Barrier",
            "subarea": "Wind-Chill Cavern",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 407,
            "kingdomId": 4,
            "name": "The Snowy Mountain Barrier",
            "subarea": "Snowy Mountain",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 408,
            "kingdomId": 5,
            "name": "The Bound Bowl Grand Prix",
            "subarea": "Race Room",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 409,
            "kingdomId": 6,
            "name": "Entrance to Shiveria",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 410,
            "kingdomId": 7,
            "name": "Behind Snowy Mountain",
            "subarea": "Snowy Mountain",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 411,
            "kingdomId": 8,
            "name": "Shining in the Snow in Town",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 0.25,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 412,
            "kingdomId": 9,
            "name": "Atop a Blustery Arch",
            "subarea": "Wind-Chill Cavern",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 413,
            "kingdomId": 10,
            "name": "Caught Hopping in the Snow!",
            "subarea": "",
            "type": "moon",
            "x": 0.5476710250086397,
            "y": 0.8800743311412604,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 414,
            "kingdomId": 11,
            "name": "The Shiverian Treasure Chest",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 415,
            "kingdomId": 12,
            "name": "Treasure in the Ice Wall",
            "subarea": "Hollow Crevasse",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 416,
            "kingdomId": 13,
            "name": "Snow Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.77490234375,
            "y": 0.3094047563539553,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 417,
            "kingdomId": 14,
            "name": "Snow Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.4833984375,
            "y": 0.7335165240691188,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 418,
            "kingdomId": 15,
            "name": "Moon Shards in the Snow",
            "subarea": "",
            "type": "moon",
            "x": 0.43798828125,
            "y": 0.7442288368828902,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 419,
            "kingdomId": 16,
            "name": "Taking Notes: Snow Path Dash",
            "subarea": "",
            "type": "moon",
            "x": 0.35498046875,
            "y": 0.14870206993152396,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 420,
            "kingdomId": 17,
            "name": "Fishing in the Glacier!",
            "subarea": "",
            "type": "moon",
            "x": 0.818359375,
            "y": 0.8076617247111694,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 421,
            "kingdomId": 18,
            "name": "Ice-Dodging Goomba Stack",
            "subarea": "Icicle Cavern",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 422,
            "kingdomId": 19,
            "name": "Captain Toad is Chilly!",
            "subarea": "",
            "type": "moon",
            "x": 0.6845887812607997,
            "y": 0.10216496404165798,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 423,
            "kingdomId": 20,
            "name": "I'm Not Cold!",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 0.75,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 424,
            "kingdomId": 21,
            "name": "Shopping in Shiveria",
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
            "id": 425,
            "kingdomId": 22,
            "name": "Walking on Ice!",
            "subarea": "Trace Walking",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 426,
            "kingdomId": 23,
            "name": "Snowline Circuit Class S",
            "subarea": "Race Room",
            "type": "moon",
            "x": 0.33,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 427,
            "kingdomId": 24,
            "name": "Dashing Over Cold Water!",
            "subarea": "Rocket Flower Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 428,
            "kingdomId": 25,
            "name": "Dashing Above and Beyond!",
            "subarea": "Rocket Flower Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 429,
            "kingdomId": 26,
            "name": "Jump 'n' Swim in the Freezing Water",
            "subarea": "Freezing Water",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 430,
            "kingdomId": 27,
            "name": "Freezing Water Near the Ceiling",
            "subarea": "Freezing Water",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 431,
            "kingdomId": 28,
            "name": "Blowing and Sliding",
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
            "id": 432,
            "kingdomId": 29,
            "name": "Moon Shards in the Cold Room",
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
            "id": 433,
            "kingdomId": 30,
            "name": "Slip Behind the Ice",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 434,
            "kingdomId": 31,
            "name": "Spinning Above the Clouds",
            "subarea": "Spinning Nut Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 435,
            "kingdomId": 32,
            "name": "High-Altitude Spinning",
            "subarea": "Spinning Nut Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 436,
            "kingdomId": 33,
            "name": "Secret Path to Shiveria!",
            "subarea": "",
            "type": "moon",
            "x": 0.26757812499999994,
            "y": 0.8573381754439069,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 438,
            "kingdomId": 35,
            "name": "Snow Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.27343749999999994,
            "y": 0.13890033777436658,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 439,
            "kingdomId": 36,
            "name": "Hat-and-Seek in the Snow",
            "subarea": "Race Room",
            "type": "moon",
            "x": 0.67,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 440,
            "kingdomId": 37,
            "name": "Peach in the Snow Kingdom",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 441,
            "kingdomId": 38,
            "name": "Shining on High",
            "subarea": "",
            "type": "moon",
            "x": 0.38028197494530747,
            "y": 0.7390801684132795,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 442,
            "kingdomId": 39,
            "name": "Above the Freezing Fish Pond",
            "subarea": "",
            "type": "moon",
            "x": 0.818359375,
            "y": 0.8076617247111694,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 443,
            "kingdomId": 40,
            "name": "Ice Floe Swimming",
            "subarea": "",
            "type": "moon",
            "x": 0.8056640625,
            "y": 0.5048826210157357,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 444,
            "kingdomId": 41,
            "name": "Icy Jump Challenge",
            "subarea": "Wind-Chill Cavern",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 445,
            "kingdomId": 42,
            "name": "Forgotten in the Holding Room",
            "subarea": "Race Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 446,
            "kingdomId": 43,
            "name": "It Popped Out of the Ice",
            "subarea": "",
            "type": "moon",
            "x": 0.480120015565167,
            "y": 0.32411047929280073,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 447,
            "kingdomId": 44,
            "name": "Deep in the Cold, Cold Water",
            "subarea": "",
            "type": "moon",
            "x": 0.61279296875,
            "y": 0.14139755475430463,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 448,
            "kingdomId": 45,
            "name": "Water Pooling in the Crevasse",
            "subarea": "Hollow Crevasse",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 449,
            "kingdomId": 46,
            "name": "Squirming Under Ice",
            "subarea": "Snowy Mountain",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 450,
            "kingdomId": 47,
            "name": "Snow Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.64111328125,
            "y": 0.24950535797316092,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 451,
            "kingdomId": 48,
            "name": "Stacked-Up Ice Climb",
            "subarea": "Icicle Cavern",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 452,
            "kingdomId": 49,
            "name": "I Met a Snow Cheep Cheep!",
            "subarea": "",
            "type": "moon",
            "x": 0.21240234375,
            "y": 0.2850805013332665,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 453,
            "kingdomId": 50,
            "name": "Even More Walking on Ice!",
            "subarea": "Trace Walking",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 454,
            "kingdomId": 51,
            "name": "Snow Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.25781249999999994,
            "y": 0.15225921761044311,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 455,
            "kingdomId": 52,
            "name": "Iceburn Circuit Class A",
            "subarea": "Iceburn Race Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 456,
            "kingdomId": 53,
            "name": "Iceburn Circuit Class S",
            "subarea": "Iceburn Race Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 457,
            "kingdomId": 54,
            "name": "Running the Flower Road",
            "subarea": "Flower Road Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 458,
            "kingdomId": 55,
            "name": "Looking Back on the Flower Road",
            "subarea": "Flower Road Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 830,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 5",
            "subarea": "Shiveria",
            "type": "moon",
            "x": 0,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Seaside", [
        {
            "id": 459,
            "kingdomId": 1,
            "name": "The Stone Pillar Seal",
            "subarea": "",
            "type": "moon",
            "x": 0.352783203125,
            "y": 0.6950107447624781,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 460,
            "kingdomId": 2,
            "name": "The Lighthouse Seal",
            "subarea": "",
            "type": "moon",
            "x": 0.2154465973927761,
            "y": 0.40930483360568365,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 461,
            "kingdomId": 3,
            "name": "The Hot Spring Seal",
            "subarea": "",
            "type": "moon",
            "x": 0.7443171454689383,
            "y": 0.23030567049693443,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 462,
            "kingdomId": 4,
            "name": "The Seal Above the Canyon",
            "subarea": "",
            "type": "moon",
            "x": 0.6649082831629037,
            "y": 0.9010914956023262,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 463,
            "kingdomId": 5,
            "name": "The Glass Is Half Full!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.5,
            "y": 0.4207534272913186,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 464,
            "kingdomId": 6,
            "name": "On the Cliff Overlooking the Beach",
            "subarea": "",
            "type": "moon",
            "x": 0.5068359375,
            "y": 0.9312094947377596,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 465,
            "kingdomId": 7,
            "name": "Ride the Jetstream",
            "subarea": "",
            "type": "moon",
            "x": 0.4038392654286451,
            "y": 0.8991897384705141,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 466,
            "kingdomId": 8,
            "name": "Ocean-Bottom Maze: Treasure",
            "subarea": "",
            "type": "moon",
            "x": 0.3592486798708988,
            "y": 0.48772657902791,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 467,
            "kingdomId": 9,
            "name": "Ocean-Bottom Maze: Hidden Room",
            "subarea": "",
            "type": "moon",
            "x": 0.37355132052149664,
            "y": 0.5146409891610155,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 468,
            "kingdomId": 10,
            "name": "Underwater Highway Tunnel",
            "subarea": "",
            "type": "moon",
            "x": 0.10966896744648424,
            "y": 0.2839352913838347,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 469,
            "kingdomId": 11,
            "name": "Shh! It's a Shortcut!",
            "subarea": "",
            "type": "moon",
            "x": 0.6189070410933382,
            "y": 0.24744616695935645,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 470,
            "kingdomId": 12,
            "name": "Gap in the Ocean Trench",
            "subarea": "",
            "type": "moon",
            "x": 0.5228404261983558,
            "y": 0.10530216883669649,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 471,
            "kingdomId": 13,
            "name": "Slip Through the Nesting Spot",
            "subarea": "",
            "type": "moon",
            "x": 0.8031914279080831,
            "y": 0.1408073136336068,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 472,
            "kingdomId": 14,
            "name": "Merci, Dorrie!",
            "subarea": "",
            "type": "moon",
            "x": 0.5066876325434472,
            "y": 0.24153988251005062,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 473,
            "kingdomId": 15,
            "name": "Bonjour, Dorrie!",
            "subarea": "",
            "type": "moon",
            "x": 0.14792558399758357,
            "y": 0.17045635747768506,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 474,
            "kingdomId": 16,
            "name": "Under a Dangerous Ceiling",
            "subarea": "",
            "type": "moon",
            "x": 0.6172067470244005,
            "y": 0.19932361933871334,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 475,
            "kingdomId": 17,
            "name": "What the Waves Left Behind",
            "subarea": "",
            "type": "moon",
            "x": 0.7449558222267642,
            "y": 0.6449827329329108,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 476,
            "kingdomId": 18,
            "name": "The Back Canyon: Excavate!",
            "subarea": "",
            "type": "moon",
            "x": 0.8709467700322391,
            "y": 0.8810454153472203,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 477,
            "kingdomId": 19,
            "name": "Bubblaine Northern Reaches",
            "subarea": "",
            "type": "moon",
            "x": 0.49133777293818487,
            "y": 0.09182848045834685,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 478,
            "kingdomId": 20,
            "name": "Wriggling on the Sandy Bottom",
            "subarea": "Sandy Bottom",
            "type": "moon",
            "x": 0.20079785697702077,
            "y": 0.309062719160909,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 479,
            "kingdomId": 21,
            "name": "Glass Palace Treasure Chest",
            "subarea": "",
            "type": "moon",
            "x": 0.5344732896859256,
            "y": 0.42531968237787365,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 480,
            "kingdomId": 22,
            "name": "Treasure Trap Hidden in the Inlet",
            "subarea": "",
            "type": "moon",
            "x": 0.3495823598507049,
            "y": 0.8987506760204736,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 481,
            "kingdomId": 23,
            "name": "Sea Gardening: Inlet Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.24517864609289702,
            "y": 0.8866470354546403,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 482,
            "kingdomId": 24,
            "name": "Sea Gardening: Canyon Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.2580001547999963,
            "y": 0.8877366726308545,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 483,
            "kingdomId": 25,
            "name": "Sea Gardening: Hot-Spring Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.2430853385488809,
            "y": 0.893895342836636,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 484,
            "kingdomId": 26,
            "name": "Sea Gardening: Ocean Trench Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.25512185692697403,
            "y": 0.893895342836636,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 485,
            "kingdomId": 27,
            "name": "Seaside Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.7676827721253908,
            "y": 0.40921354050306463,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 486,
            "kingdomId": 28,
            "name": "Seaside Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.5466445431634842,
            "y": 0.2960245612492939,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 487,
            "kingdomId": 29,
            "name": "Found on the Beach! Good Dog!",
            "subarea": "",
            "type": "moon",
            "x": 0.5210648299766822,
            "y": 0.8653592456604001,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 488,
            "kingdomId": 30,
            "name": "Moon Shards in the Sea",
            "subarea": "",
            "type": "moon",
            "x": 0.8559148875612673,
            "y": 0.8174704784307919,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 489,
            "kingdomId": 31,
            "name": "Taking Notes: Ocean Surface Dash",
            "subarea": "",
            "type": "moon",
            "x": 0.2095924178446217,
            "y": 0.8109207259540209,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 490,
            "kingdomId": 32,
            "name": "Love by the Seaside",
            "subarea": "",
            "type": "moon",
            "x": 0.8043132036453848,
            "y": 0.944689025449625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 491,
            "kingdomId": 33,
            "name": "Lighthouse Leaper",
            "subarea": "",
            "type": "moon",
            "x": 0.46441515524294186,
            "y": 0.4581178521870271,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 492,
            "kingdomId": 34,
            "name": "Good Job, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.6349250673128143,
            "y": 0.9078878332639718,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 493,
            "kingdomId": 35,
            "name": "Ocean Quiz: Good!",
            "subarea": "",
            "type": "moon",
            "x": 0.501433754573901,
            "y": 0.16346980161335678,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 494,
            "kingdomId": 36,
            "name": "Shopping in Bubblaine",
            "subarea": "",
            "type": "moon",
            "x": 0.15592682748494904,
            "y": 0.2036868434821758,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 495,
            "kingdomId": 37,
            "name": "Beach Volleyball: Champ",
            "subarea": "",
            "type": "moon",
            "x": 0.20163591807272635,
            "y": 0.864123085662049,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 496,
            "kingdomId": 38,
            "name": "Beach Volleyball: Hero of the Beach!",
            "subarea": "",
            "type": "moon",
            "x": 0.20094538410672388,
            "y": 0.8506726838709473,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 497,
            "kingdomId": 39,
            "name": "Looking Back in the Dark Waterway",
            "subarea": "Lighthouse Tunnel",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 498,
            "kingdomId": 40,
            "name": "The Sphynx's Underwater Vault",
            "subarea": "Sphynx Vault",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 499,
            "kingdomId": 41,
            "name": "A Rumble on the Seaside Floor",
            "subarea": "Rumbling Floor",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 500,
            "kingdomId": 42,
            "name": "A Relaxing Dance",
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
            "id": 501,
            "kingdomId": 43,
            "name": "Wading in the Cloud Sea",
            "subarea": "Cloud Sea",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 502,
            "kingdomId": 44,
            "name": "Sunken Treasure in the Cloud Sea",
            "subarea": "Cloud Sea",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 503,
            "kingdomId": 45,
            "name": "Fly Through the Narrow Valley",
            "subarea": "Narrow Valley",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 504,
            "kingdomId": 46,
            "name": "Treasure Chest in the Narrow Valley",
            "subarea": "Narrow Valley",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 505,
            "kingdomId": 47,
            "name": "Hurry and Stretch",
            "subarea": "Lava Rising",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 506,
            "kingdomId": 48,
            "name": "Stretch on the Side Path",
            "subarea": "Lava Rising",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 507,
            "kingdomId": 49,
            "name": "Secret Path to Bubblaine!",
            "subarea": "",
            "type": "moon",
            "x": 0.12744140624999992,
            "y": 0.8961155162020806,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 509,
            "kingdomId": 51,
            "name": "Seaside Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6276939028181792,
            "y": 0.18337641551751027,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 510,
            "kingdomId": 52,
            "name": "Peach in the Seaside Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.48957349059893945,
            "y": 0.420770317908246,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 511,
            "kingdomId": 53,
            "name": "Above the Parasol: Catch!",
            "subarea": "",
            "type": "moon",
            "x": 0.2756857524536733,
            "y": 0.8861833897610323,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 512,
            "kingdomId": 54,
            "name": "What Shines Inside the Glass",
            "subarea": "",
            "type": "moon",
            "x": 0.5121464179810523,
            "y": 0.42292401479439967,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 513,
            "kingdomId": 55,
            "name": "A Fine Detail on the Glass",
            "subarea": "",
            "type": "moon",
            "x": 0.5269483375758804,
            "y": 0.4243618212957647,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 514,
            "kingdomId": 56,
            "name": "Underwater Highway West: Explore!",
            "subarea": "",
            "type": "moon",
            "x": 0.2042664904086277,
            "y": 0.23364222954597544,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 515,
            "kingdomId": 57,
            "name": "Underwater Highway East: Explore!",
            "subarea": "",
            "type": "moon",
            "x": 0.8553539996926162,
            "y": 0.31558917310854234,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 516,
            "kingdomId": 58,
            "name": "Rapid Ascent on Hot Spring Island",
            "subarea": "",
            "type": "moon",
            "x": 0.748224416780295,
            "y": 0.27438664773261545,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 517,
            "kingdomId": 59,
            "name": "A Light Next to the Lighthouse",
            "subarea": "",
            "type": "moon",
            "x": 0.23868095346660312,
            "y": 0.42724213068215466,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 518,
            "kingdomId": 60,
            "name": "The Tall Rock Shelf in the Deep Ocean",
            "subarea": "",
            "type": "moon",
            "x": 0.5945411407699496,
            "y": 0.11700696508578277,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 519,
            "kingdomId": 61,
            "name": "At the Base of the Lighthouse",
            "subarea": "",
            "type": "moon",
            "x": 0.23757080949699103,
            "y": 0.35095486543698734,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 520,
            "kingdomId": 62,
            "name": "Bird Traveling Over the Ocean",
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
            "id": 521,
            "kingdomId": 63,
            "name": "Caught Hopping at Glass Palace!",
            "subarea": "",
            "type": "moon",
            "x": 0.5019946424425518,
            "y": 0.37186239853487185,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 522,
            "kingdomId": 64,
            "name": "Seaside Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.21201561435003863,
            "y": 0.38016405890703786,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 523,
            "kingdomId": 65,
            "name": "Taking Notes: Ocean-Bottom Maze",
            "subarea": "",
            "type": "moon",
            "x": 0.40215660182269236,
            "y": 0.41851732154446764,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 524,
            "kingdomId": 66,
            "name": "Taking Notes in the Sea",
            "subarea": "",
            "type": "moon",
            "x": 0.6203419827278909,
            "y": 0.49950218213883296,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 525,
            "kingdomId": 67,
            "name": "Seaside Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.6337996946510458,
            "y": 0.18519864943626013,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 526,
            "kingdomId": 68,
            "name": "Aim! Poke!",
            "subarea": "Pokio Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 527,
            "kingdomId": 69,
            "name": "Poke! Roll!",
            "subarea": "Pokio Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 528,
            "kingdomId": 70,
            "name": "The Spinning Maze: Search!",
            "subarea": "Spinning Maze",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 529,
            "kingdomId": 71,
            "name": "The Spinning Maze: Open!",
            "subarea": "Spinning Maze",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 578,
            "kingdomId": 998,
            "name": "Found with Luncheon Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.3955946568430454,
            "y": 0.13975322114878014,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 831,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 6",
            "subarea": "",
            "type": "moon",
            "x": 0.733311799013174,
            "y": 0.8028660158827114,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Luncheon", [
        {
            "id": 530,
            "kingdomId": 1,
            "name": "The Broodals Are After Some Cookin'",
            "subarea": "",
            "type": "moon",
            "x": 0.3181827466904619,
            "y": 0.7250634419197192,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 531,
            "kingdomId": 2,
            "name": "Under the Cheese Rocks",
            "subarea": "",
            "type": "moon",
            "x": 0.4793674275797092,
            "y": 0.2381071465629311,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 532,
            "kingdomId": 3,
            "name": "Big Pot on the Volcano: Dive In!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.3380691683586158,
            "y": 0.18945946214531137,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 533,
            "kingdomId": 4,
            "name": "Climb Up the Cascading Magma",
            "subarea": "Cascading Magma",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 534,
            "kingdomId": 5,
            "name": "Cookatiel Showdown!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.3171360929184538,
            "y": 0.21554268761775497,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 535,
            "kingdomId": 6,
            "name": "Piled on the Salt",
            "subarea": "",
            "type": "moon",
            "x": 0.36345533888578063,
            "y": 0.9555055816277814,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 536,
            "kingdomId": 7,
            "name": "Lurking in the Pillar's Shadow",
            "subarea": "",
            "type": "moon",
            "x": 0.3512541193724991,
            "y": 0.8300853515125068,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 537,
            "kingdomId": 8,
            "name": "Atop the Jutting Crag",
            "subarea": "",
            "type": "moon",
            "x": 0.5897160069661246,
            "y": 0.3232938496638242,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 538,
            "kingdomId": 9,
            "name": "Is This an Ingredient Too?!",
            "subarea": "",
            "type": "moon",
            "x": 0.37626592768133316,
            "y": 0.35567908880321525,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 539,
            "kingdomId": 10,
            "name": "Atop a Column in a Row",
            "subarea": "",
            "type": "moon",
            "x": 0.41234622211652944,
            "y": 0.5044494805272218,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 540,
            "kingdomId": 11,
            "name": "Surrounded by Tall Mountains",
            "subarea": "",
            "type": "moon",
            "x": 0.43900696888608154,
            "y": 0.09659491573936316,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 541,
            "kingdomId": 12,
            "name": "Island of Salt Floating in the Lava",
            "subarea": "",
            "type": "moon",
            "x": 0.5188212785020787,
            "y": 0.6854539883182121,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 542,
            "kingdomId": 13,
            "name": "Overlooking a Bunch of Ingredients",
            "subarea": "",
            "type": "moon",
            "x": 0.23893823204528164,
            "y": 0.450346652886944,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 543,
            "kingdomId": 14,
            "name": "Light the Lantern on the Small Island",
            "subarea": "",
            "type": "moon",
            "x": 0.47958219487243053,
            "y": 0.16638486617762321,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 544,
            "kingdomId": 15,
            "name": "Golden Turnip Recipe 1",
            "subarea": "",
            "type": "moon",
            "x": 0.37158821298121847,
            "y": 0.428868928819451,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 545,
            "kingdomId": 16,
            "name": "Golden Turnip Recipe 2",
            "subarea": "",
            "type": "moon",
            "x": 0.382421121947459,
            "y": 0.4297443496445632,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 546,
            "kingdomId": 17,
            "name": "Golden Turnip Recipe 3",
            "subarea": "",
            "type": "moon",
            "x": 0.39458847204705316,
            "y": 0.43076597882112566,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 547,
            "kingdomId": 18,
            "name": "Luncheon Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.21986804451115113,
            "y": 0.907245453274926,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 548,
            "kingdomId": 19,
            "name": "Luncheon Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.35621160744245695,
            "y": 0.7375824512063613,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 549,
            "kingdomId": 20,
            "name": "Luncheon Kingdom Timer Challenge 3",
            "subarea": "",
            "type": "moon",
            "x": 0.29997122180620756,
            "y": 0.09014591696847134,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 550,
            "kingdomId": 21,
            "name": "Beneath the Rolling Vegetables",
            "subarea": "",
            "type": "moon",
            "x": 0.8109442449229942,
            "y": 0.0681040694431948,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 551,
            "kingdomId": 22,
            "name": "All the Cracks Are Fixed",
            "subarea": "",
            "type": "moon",
            "x": 0.7808870082690655,
            "y": 0.09567997456532504,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 552,
            "kingdomId": 23,
            "name": "Taking Notes: Swimming in Magma",
            "subarea": "",
            "type": "moon",
            "x": 0.652242035390251,
            "y": 0.13492476388392566,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 553,
            "kingdomId": 24,
            "name": "Love Above the Lava",
            "subarea": "",
            "type": "moon",
            "x": 0.24286247216374324,
            "y": 0.8677728087188885,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 554,
            "kingdomId": 25,
            "name": "Shopping in Mount Volbono",
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
            "id": 555,
            "kingdomId": 26,
            "name": "Luncheon Kingdom Slots",
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
            "id": 556,
            "kingdomId": 27,
            "name": "A Strong Simmer",
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
            "id": 557,
            "kingdomId": 28,
            "name": "An Extreme Simmer",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 558,
            "kingdomId": 29,
            "name": "Alcove Behind the Pillars of Magma",
            "subarea": "Cascading Magma",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 559,
            "kingdomId": 30,
            "name": "Treasure Beneath the Cheese Rocks",
            "subarea": "",
            "type": "moon",
            "x": 0.35076795175134695,
            "y": 0.9302184207342215,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 560,
            "kingdomId": 31,
            "name": "Light the Two Flames",
            "subarea": "",
            "type": "moon",
            "x": 0.398230386742136,
            "y": 0.883841668611707,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 561,
            "kingdomId": 32,
            "name": "Light the Far-Off Lanterns",
            "subarea": "",
            "type": "moon",
            "x": 0.17768073020399405,
            "y": 0.20538046030865068,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 562,
            "kingdomId": 33,
            "name": "Bon Appétit, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.3453576491536398,
            "y": 0.04607612371243835,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 563,
            "kingdomId": 34,
            "name": "The Treasure Chest in the Veggies",
            "subarea": "Treasure Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 564,
            "kingdomId": 35,
            "name": "Caught Hopping at the Volcano!",
            "subarea": "",
            "type": "moon",
            "x": 0.31890776077918226,
            "y": 0.6196349917566292,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 565,
            "kingdomId": 36,
            "name": "Taking Notes: Big Pot Swim",
            "subarea": "",
            "type": "moon",
            "x": 0.28929489727825813,
            "y": 0.21334304527678227,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 566,
            "kingdomId": 37,
            "name": "Magma Swamp: Floating and Sinking",
            "subarea": "Magma Swamp",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 567,
            "kingdomId": 38,
            "name": "Corner of the Magma Swamp",
            "subarea": "Magma Swamp",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 568,
            "kingdomId": 39,
            "name": "Magma Narrow Path",
            "subarea": "Magma Path",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 569,
            "kingdomId": 40,
            "name": "Crossing to the Magma",
            "subarea": "Magma Path",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 570,
            "kingdomId": 41,
            "name": "Fork Flickin' to the Summit",
            "subarea": "Fork Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 571,
            "kingdomId": 42,
            "name": "Fork Flickin' Detour",
            "subarea": "Fork Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 572,
            "kingdomId": 43,
            "name": "Excavate 'n' Search the Cheese Rocks",
            "subarea": "Cheese Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 573,
            "kingdomId": 44,
            "name": "Climb the Cheese Rocks",
            "subarea": "Cheese Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 574,
            "kingdomId": 45,
            "name": "Spinning Athletics End Goal",
            "subarea": "Spinning Athletics",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 575,
            "kingdomId": 46,
            "name": "Taking Notes: Spinning Athletics",
            "subarea": "Spinning Athletics",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 576,
            "kingdomId": 47,
            "name": "Secret Path to Mount Volbono!",
            "subarea": "",
            "type": "moon",
            "x": 0.7998261006961775,
            "y": 0.8956370304412935,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 577,
            "kingdomId": 48,
            "name": "A Tourist in the Luncheon Kingdom!",
            "subarea": "",
            "type": "moon",
            "x": 0.332275390625,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 579,
            "kingdomId": 50,
            "name": "The Rooftop Lantern",
            "subarea": "",
            "type": "moon",
            "x": 0.3632208661173086,
            "y": 0.3559252382511774,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 580,
            "kingdomId": 51,
            "name": "Jammin' in the Luncheon Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.2815498646701785,
            "y": 0.7569746845173374,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 581,
            "kingdomId": 52,
            "name": "Mechanic: Repairs Complete!",
            "subarea": "",
            "type": "moon",
            "x": 0.31770499143202546,
            "y": 0.3314458033884515,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 582,
            "kingdomId": 53,
            "name": "Diving from the Big Pot!",
            "subarea": "",
            "type": "moon",
            "x": 0.2684111233195825,
            "y": 0.3435075504110015,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 583,
            "kingdomId": 54,
            "name": "Hat-and-Seek: Among the Food",
            "subarea": "",
            "type": "moon",
            "x": 0.37601603054064703,
            "y": 0.3330044718202567,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 584,
            "kingdomId": 55,
            "name": "Luncheon Kingdom: Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.19180023898290818,
            "y": 0.1958750923707816,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 585,
            "kingdomId": 56,
            "name": "Peach in the Luncheon Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.40729076876655557,
            "y": 0.4433571354672386,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 586,
            "kingdomId": 57,
            "name": "From Inside a Bright Stone",
            "subarea": "",
            "type": "moon",
            "x": 0.3562655270418864,
            "y": 0.7703128041777269,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 587,
            "kingdomId": 58,
            "name": "Under the Meat Plateau",
            "subarea": "",
            "type": "moon",
            "x": 0.5556270567908599,
            "y": 0.09280065194065672,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 588,
            "kingdomId": 59,
            "name": "On Top of a Tall, Tall Roof",
            "subarea": "",
            "type": "moon",
            "x": 0.17022946813554687,
            "y": 0.21359960577633091,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 589,
            "kingdomId": 60,
            "name": "From a Crack in the Hard Ground",
            "subarea": "",
            "type": "moon",
            "x": 0.5182603906334278,
            "y": 0.16624653498646888,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 590,
            "kingdomId": 61,
            "name": "By the Cannon Pointed at the Big Pot",
            "subarea": "",
            "type": "moon",
            "x": 0.26698262547782636,
            "y": 0.10404282575152766,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 591,
            "kingdomId": 62,
            "name": "Luncheon Kingdom: Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.18929453514821443,
            "y": 0.1890133119218997,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 592,
            "kingdomId": 63,
            "name": "Stepping Over the Gears",
            "subarea": "Gear Steps",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 593,
            "kingdomId": 64,
            "name": "Lanterns on the Gear Steps",
            "subarea": "Gear Steps",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 594,
            "kingdomId": 65,
            "name": "Volcano Cave Cruisin'",
            "subarea": "Volcano Cave",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 595,
            "kingdomId": 66,
            "name": "Volcano Cave and Mysterious Clouds",
            "subarea": "Volcano Cave",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 596,
            "kingdomId": 67,
            "name": "Treasure of the Lava Islands",
            "subarea": "Lava Islands",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 597,
            "kingdomId": 68,
            "name": "Flying Over the Lava Islands",
            "subarea": "Lava Islands",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 833,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 8",
            "subarea": "",
            "type": "moon",
            "x": 0.39318239592427795,
            "y": 0.4916507093478969,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Ruined", [
        {
            "id": 598,
            "kingdomId": 1,
            "name": "Battle with the Lord of Lightning!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.3959868352675326,
            "y": 0.07608189135835874,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cSpark Pylon",
                    "gJump",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 599,
            "kingdomId": 2,
            "name": "In the Ancient Treasure Chest",
            "subarea": "",
            "type": "moon",
            "x": 0.6728953752440744,
            "y": 0.9075268642351502,
            "logic": "gOpen Treasure Chest"
        },
        {
            "id": 600,
            "kingdomId": 3,
            "name": "Roulette Tower: Climbed",
            "subarea": "Roulette Tower",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3103",
                    {
                        "op": "AND",
                        "reqs": [
                            "l3102",
                            "g2D Jump",
                            {
                                "op": "OR",
                                "reqs": [
                                    "gCap Throw",
                                    "aRoll"
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": 601,
            "kingdomId": 4,
            "name": "Roulette Tower: Stopped",
            "subarea": "Roulette Tower",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    {
                        "op": "OR",
                        "reqs": [
                            "gCap Throw",
                            "aRoll"
                        ]
                    },
                    {
                        "op": "OR",
                        "reqs": [
                            "l3102",
                            "l3103"
                        ]
                    },
                ]
            }
        },
        {
            "id": 602,
            "kingdomId": 5,
            "name": "Peach in the Ruined Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.44244252354582925,
            "y": 0.0638978151448926,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wRuined",
                    {
                        "op": "OR",
                        "reqs": [
                            "cSpark Pylon",
                            "l3101"
                        ]
                    }
                ]
            }
        },
        {
            "id": 603,
            "kingdomId": 6,
            "name": "Caught on a Big Horn",
            "subarea": "",
            "type": "moon",
            "x": 0.3442554101744201,
            "y": 0.05779620049187741,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wRuined",
                    "gCap Throw",
                    {
                        "op": "OR",
                        "reqs": [
                            "cSpark Pylon",
                            "l3101"
                        ]
                    }
                ]
            }
        },
        {
            "id": 604,
            "kingdomId": 7,
            "name": "Upon the Broken Arch",
            "subarea": "",
            "type": "moon",
            "x": 0.6877095746418868,
            "y": 0.9227961780587919,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wRuined",
                    "gJump",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 605,
            "kingdomId": 8,
            "name": "Rolling Rock on the Battlefield",
            "subarea": "",
            "type": "moon",
            "x": 0.4191359141669252,
            "y": 0.09839370872925741,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wRuined",
                    {
                        "op": "OR",
                        "reqs": [
                            "cSpark Pylon",
                            "l3101"
                        ]
                    }
                ]
            }
        },
        {
            "id": 606,
            "kingdomId": 9,
            "name": "Charging Through an Army",
            "subarea": "Chargin' Chuck Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3105",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 607,
            "kingdomId": 10,
            "name": "The Mummy Army's Curse",
            "subarea": "Chargin' Chuck Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3105",
                    {
                        "op": "OR",
                        "reqs": [
                            "gJump",
                            "aClimb"
                        ]
                    }
                ]
            }
        },
        {
            "id": 835,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 10",
            "subarea": "",
            "type": "moon",
            "x": 0.650634765625,
            "y": 0.9463458990505809,
            "logic": "aGround Pound"
        }
    ]],
    ["Bowser", [
        {
            "id": 608,
            "kingdomId": 1,
            "name": "Infiltrate Bowser's Castle!",
            "subarea": "",
            "type": "moon",
            "x": 0.41387939453125,
            "y": 0.8435876823865139,
            "logic": {
                "op": "OR",
                "reqs": [
                    "aGround Pound",
                    "cPokio",
                ]
            }
        },
        {
            "id": 609,
            "kingdomId": 2,
            "name": "Smart Bombing",
            "subarea": "",
            "type": "moon",
            "x": 0.3089900715420366,
            "y": 0.544133344177046,
            "logic": "m608"
        },
        {
            "id": 610,
            "kingdomId": 3,
            "name": "Big Broodal Battle",
            "subarea": "",
            "type": "moon",
            "x": 0.6076187993676936,
            "y": 0.24372880035050812,
            "logic": "m609"
        },
        {
            "id": 611,
            "kingdomId": 4,
            "name": "Showdown at Bowser's Castle",
            "subarea": "",
            "type": "multimoon",
            "x": 0.8696127761961511,
            "y": 0.04990266422267524,
            "logic": "m610"
        },
        {
            "id": 612,
            "kingdomId": 5,
            "name": "Behind the Big Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.2061731110582646,
            "y": 0.8757558870013737,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 613,
            "kingdomId": 6,
            "name": "Treasure Inside the Turret",
            "subarea": "",
            "type": "moon",
            "x": 0.2773632495821461,
            "y": 0.5454518705877466,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 614,
            "kingdomId": 7,
            "name": "From the Side Above the Castle Gate",
            "subarea": "",
            "type": "moon",
            "x": 0.33178924572656726,
            "y": 0.529863405688555,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 615,
            "kingdomId": 8,
            "name": "Sunken Treasure in the Moat",
            "subarea": "",
            "type": "moon",
            "x": 0.6525886268470494,
            "y": 0.17473460872149135,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 616,
            "kingdomId": 9,
            "name": "Past the Moving Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.6782769881059436,
            "y": 0.11490474152229524,
            "logic": "wBowser"
        },
        {
            "id": 617,
            "kingdomId": 10,
            "name": "Above the Poison Swamp",
            "subarea": "",
            "type": "moon",
            "x": 0.7816844495148162,
            "y": 0.11650054268976212,
            "logic": "wBowser"
        },
        {
            "id": 618,
            "kingdomId": 11,
            "name": "Knocking Down the Nice Frame",
            "subarea": "",
            "type": "moon",
            "x": 0.7504377875532037,
            "y": 0.10408455501751064,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    "gJump"
                ]
            }
        },
        {
            "id": 619,
            "kingdomId": 12,
            "name": "Caught on the Iron Fence",
            "subarea": "",
            "type": "moon",
            "x": 0.26165419072564283,
            "y": 0.9608617209352065,
            "logic": "gCap Throw"
        },
        {
            "id": 620,
            "kingdomId": 13,
            "name": "On the Giant Bowser Statue's Nose",
            "subarea": "",
            "type": "moon",
            "x": 0.7912702516381226,
            "y": 0.08098452195384351,
            "logic": {
                "op": "AND",
                "reqs": [
                    "aGround Pound",
                    "cSpark Pylon"
                ]
            }
        },
        {
            "id": 621,
            "kingdomId": 14,
            "name": "Inside a Block in the Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.690268162639341,
            "y": 0.15902762537016923,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 622,
            "kingdomId": 15,
            "name": "Caught Hopping at Bowser's Castle!",
            "subarea": "",
            "type": "moon",
            "x": 0.8122033270782845,
            "y": 0.07109217650980655,
            "logic": "wBowser"
        },
        {
            "id": 623,
            "kingdomId": 16,
            "name": "Exterminate the Ogres!",
            "subarea": "",
            "type": "moon",
            "x": 0.7275133247467365,
            "y": 0.8590089639854729,
            "logic": {
                "op": "OR",
                "reqs": [
                    "aGround Pound",
                    "cPokio",
                ]
            }
        },
        {
            "id": 624,
            "kingdomId": 17,
            "name": "Bowser's Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.8844224373468432,
            "y": 0.045869493687852585,
            "logic": {
                "op": "AND",
                "reqs": [
                    "gCap Throw",
                    "gJump"
                ]
            }
        },
        {
            "id": 625,
            "kingdomId": 18,
            "name": "Taking Notes: Between Spinies",
            "subarea": "",
            "type": "moon",
            "x": 0.3805343553712111,
            "y": 0.8547567294708964,
            "logic": "gJump"
        },
        {
            "id": 626,
            "kingdomId": 19,
            "name": "Stack Up Above the Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.25342596552291297,
            "y": 0.9407075264030834,
            "logic": "cGoomba"
        },
        {
            "id": 627,
            "kingdomId": 20,
            "name": "Hidden Corridor Under the Floor",
            "subarea": "",
            "type": "moon",
            "x": 0.6573486328125,
            "y": 0.168020027503576,
            "logic": "gCap Throw"
        },
        {
            "id": 628,
            "kingdomId": 21,
            "name": "Poking Your Nose in the Plaster Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.3741497091858219,
            "y": 0.8480077206305152,
            "logic": "cPokio"
        },
        {
            "id": 629,
            "kingdomId": 22,
            "name": "Poking the Turret Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.28641714415992375,
            "y": 0.5768229020278781,
            "logic": "cPokio"
        },
        {
            "id": 630,
            "kingdomId": 23,
            "name": "Poking Your Nose by the Great Gate",
            "subarea": "",
            "type": "moon",
            "x": 0.7423391877967439,
            "y": 0.10445563907719983,
            "logic": "cPokio"
        },
        {
            "id": 631,
            "kingdomId": 24,
            "name": "Jizo All in a Row",
            "subarea": "",
            "type": "moon",
            "x": 0.3919733332705416,
            "y": 0.3290726639643694,
            "logic": "cJizo"
        },
        {
            "id": 632,
            "kingdomId": 25,
            "name": "Underground Jizo",
            "subarea": "",
            "type": "moon",
            "x": 0.39141826128573565,
            "y": 0.31930756863848714,
            "logic": "cJizo"
        },
        {
            "id": 633,
            "kingdomId": 26,
            "name": "Found Behind Bars!",
            "subarea": "",
            "type": "moon",
            "x": 0.6356201171875,
            "y": 0.2073164290984587,
            "logic": "cSpark Pylon"
        },
        {
            "id": 634,
            "kingdomId": 27,
            "name": "Fishing(?) in Bowser's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.6936697873983673,
            "y": 0.11636388848000082,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cLakitu"
                ]
            }
        },
        {
            "id": 635,
            "kingdomId": 28,
            "name": "Good to See You, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.7174811607115515,
            "y": 0.18027295711041988,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 636,
            "kingdomId": 29,
            "name": "Shopping at Bowser's Castle",
            "subarea": "Shop",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l3202"
        },
        {
            "id": 637,
            "kingdomId": 30,
            "name": "Bowser's Castle Treasure Vault",
            "subarea": "Treasure Vault",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3204",
                    "gOpen Treasure Chest"
                ]
            }
        },
        {
            "id": 638,
            "kingdomId": 31,
            "name": "Scene of Crossing the Poison Swamp",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l3206"
        },
        {
            "id": 639,
            "kingdomId": 32,
            "name": "Taking Notes: In the Folding Screen",
            "subarea": "Outfit Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": "l3206"
        },
        {
            "id": 640,
            "kingdomId": 33,
            "name": "On Top of the Spinning Tower",
            "subarea": "Spinning Tower",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3209",
                    {
                        "op": "AND",
                        "reqs": [
                            "l3208",
                            "cPokio"
                        ]
                    }
                ]
            }
        },
        {
            "id": 641,
            "kingdomId": 34,
            "name": "Down and Up the Spinning Tower",
            "subarea": "Spinning Tower",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cPokio",
                    {
                        "op": "OR",
                        "reqs": [
                            "l3211",
                            "l3212"
                        ]
                    }
                ]
            }
        },
        {
            "id": 642,
            "kingdomId": 35,
            "name": "Jizo's Big Adventure",
            "subarea": "Jizo Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3212",
                    {
                        "op": "AND",
                        "reqs": [
                            "l3211",
                            "cJizo"
                        ]
                    }
                ]
            }
        },
        {
            "id": 643,
            "kingdomId": 36,
            "name": "Jizo and the Hidden Room",
            "subarea": "Jizo Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cJizo",
                    {
                        "op": "OR",
                        "reqs": [
                            "l3211",
                            "l3212"
                        ]
                    }
                ]
            }
        },
        {
            "id": 644,
            "kingdomId": 37,
            "name": "Dashing Above the Clouds",
            "subarea": "Rocket Flower Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": "l3214"
        },
        {
            "id": 645,
            "kingdomId": 38,
            "name": "Dashing Through the Clouds",
            "subarea": "Rocket Flower Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": "l3214"
        },
        {
            "id": 646,
            "kingdomId": 39,
            "name": "Sphynx Over Bowser's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.6414136660191021,
            "y": 0.17458173271883454,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cBinoculars"
                ]
            }
        },
        {
            "id": 647,
            "kingdomId": 40,
            "name": "I Met a Pokio!",
            "subarea": "",
            "type": "moon",
            "x": 0.6923614701833571,
            "y": 0.29548147976803757,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cPokio"
                ]
            }
        },
        {
            "id": 648,
            "kingdomId": 41,
            "name": "Bowser's Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7389548399769051,
            "y": 0.1194227981960577,
            "logic": "wBowser"
        },
        {
            "id": 649,
            "kingdomId": 42,
            "name": "A Rumble Under the Arena Floor",
            "subarea": "",
            "type": "moon",
            "x": 0.86947923063867,
            "y": 0.042993148216131434,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "aGround Pound"
                ]
            }
        },
        {
            "id": 650,
            "kingdomId": 43,
            "name": "Secret Path to Bowser's Castle!",
            "subarea": "",
            "type": "moon",
            "x": 0.6803332293772867,
            "y": 0.8584791688608852,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 651,
            "kingdomId": 44,
            "name": "Peach in Bowser's Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.36708478132951966,
            "y": 0.3379777527503486,
            "logic": "wBowser"
        },
        {
            "id": 653,
            "kingdomId": 46,
            "name": "Behind the Tall Wall: Poke, Poke!",
            "subarea": "",
            "type": "moon",
            "x": 0.4344363401082048,
            "y": 0.8236170437335785,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cPokio"
                ]
            }
        },
        {
            "id": 654,
            "kingdomId": 47,
            "name": "From Crates in the Moat",
            "subarea": "",
            "type": "moon",
            "x": 0.6631146868857195,
            "y": 0.1848563161658873,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "gOpen Treasure Chest"
                ]
            }
        },
        {
            "id": 655,
            "kingdomId": 48,
            "name": "Caught on the Giant Horn",
            "subarea": "",
            "type": "moon",
            "x": 0.8018201147250327,
            "y": 0.0622492303441685,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "gCap Throw"
                ]
            }
        },
        {
            "id": 656,
            "kingdomId": 49,
            "name": "Inside a Block at the Gate",
            "subarea": "",
            "type": "moon",
            "x": 0.635272371506864,
            "y": 0.1985774697928482,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cPokio"
                ]
            }
        },
        {
            "id": 657,
            "kingdomId": 50,
            "name": "Small Bird in Bowser's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.21575454278212497,
            "y": 0.9491479658348556,
            "logic": "wBowser"
        },
        {
            "id": 658,
            "kingdomId": 51,
            "name": "Invader in Bowser's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.6138974394999256,
            "y": 0.27053472013858487,
            "logic": "wBowser"
        },
        {
            "id": 659,
            "kingdomId": 52,
            "name": "Jumping from Flag to Flag",
            "subarea": "",
            "type": "moon",
            "x": 0.5808677071335102,
            "y": 0.3063536963685033,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "aClimb"
                ]
            }
        },
        {
            "id": 660,
            "kingdomId": 53,
            "name": "Bowser's Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.6925510279542042,
            "y": 0.16755077217935366,
            "logic": "wBowser"
        },
        {
            "id": 661,
            "kingdomId": 54,
            "name": "Taking Notes: On the Wall",
            "subarea": "",
            "type": "moon",
            "x": 0.39291382665541547,
            "y": 0.8370170564582581,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cPokio"
                ]
            }
        },
        {
            "id": 662,
            "kingdomId": 55,
            "name": "Taking Notes with a Spinning Throw",
            "subarea": "",
            "type": "moon",
            "x": 0.5911183137299839,
            "y": 0.23546850797733765,
            "logic": "wBowser"
        },
        {
            "id": 663,
            "kingdomId": 56,
            "name": "Third Courtyard Outskirts",
            "subarea": "",
            "type": "moon",
            "x": 0.3204589532499209,
            "y": 0.8795537739336251,
            "logic": {
                "op": "AND",
                "reqs": [
                    "wBowser",
                    "cSpark Pylon"
                ]
            }
        },
        {
            "id": 664,
            "kingdomId": 57,
            "name": "Stone Wall Circuit",
            "subarea": "",
            "type": "moon",
            "x": 0.37360437371463556,
            "y": 0.6575787961548354,
            "logic": "wBowser"
        },
        {
            "id": 665,
            "kingdomId": 58,
            "name": "Bowser's Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.7433154624516547,
            "y": 0.1157066436206637,
            "logic": "wBowser"
        },
        {
            "id": 666,
            "kingdomId": 59,
            "name": "Searching Hexagon Tower",
            "subarea": "Hexagon Tower",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3216",
                    "cParabones"
                ]
            }
        },
        {
            "id": 667,
            "kingdomId": 60,
            "name": "Center of Hexagon Tower",
            "subarea": "Hexagon Tower",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3216",
                    "cParabones"
                ]
            }
        },
        {
            "id": 668,
            "kingdomId": 61,
            "name": "Climb the Wooden Tower",
            "subarea": "Wooden Tower",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3219",
                    {
                        "op": "AND",
                        "reqs": [
                            "l3218",
                            "cPokio"
                        ]
                    }
                ]
            }
        },
        {
            "id": 669,
            "kingdomId": 62,
            "name": "Poke the Wooden Tower",
            "subarea": "Wooden Tower",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "cPokio",
                    {
                        "op": "OR",
                        "reqs": [
                            "l3218",
                            "l3219"
                        ]
                    }
                ]
            }
        },
        {
            "id": 134,
            "kingdomId": 998,
            "name": "Found with Sand Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.38107840820067146,
            "y": 0.3362141468187266,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Moon", [
        {
            "id": 670,
            "kingdomId": 1,
            "name": "Shining Above the Moon",
            "subarea": "",
            "type": "moon",
            "x": 0.692416073849531,
            "y": 0.9553490131893079,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 671,
            "kingdomId": 2,
            "name": "Along the Cliff Face",
            "subarea": "",
            "type": "moon",
            "x": 0.5903344817550679,
            "y": 0.9290795588078009,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 672,
            "kingdomId": 3,
            "name": "The Tip of a White Spire",
            "subarea": "",
            "type": "moon",
            "x": 0.4507184516625158,
            "y": 0.06755537193378922,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 673,
            "kingdomId": 4,
            "name": "Rolling Rock on the Moon",
            "subarea": "",
            "type": "moon",
            "x": 0.5325630312840256,
            "y": 0.871662580213963,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 674,
            "kingdomId": 5,
            "name": "Caught Hopping on the Moon!",
            "subarea": "",
            "type": "moon",
            "x": 0.5031581415867651,
            "y": 0.9045003728642248,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 675,
            "kingdomId": 6,
            "name": "Cliffside Treasure Chest",
            "subarea": "",
            "type": "moon",
            "x": 0.36401622675443135,
            "y": 0.6110393325596609,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 676,
            "kingdomId": 7,
            "name": "Moon Kingdom Timer Challenge 1",
            "subarea": "",
            "type": "moon",
            "x": 0.681698127311101,
            "y": 0.817408605972036,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 677,
            "kingdomId": 8,
            "name": "Taking Notes: On the Moon's Surface",
            "subarea": "",
            "type": "moon",
            "x": 0.6505718319895315,
            "y": 0.5811159995630881,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 678,
            "kingdomId": 9,
            "name": "Under the Bowser Statue",
            "subarea": "Moon Cave",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 679,
            "kingdomId": 10,
            "name": "In a Hole in the Magma",
            "subarea": "Moon Cave",
            "type": "moon",
            "x": 0.25,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 680,
            "kingdomId": 11,
            "name": "Around the Barrier Wall",
            "subarea": "Moon Cave",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 681,
            "kingdomId": 12,
            "name": "On Top of the Cannon",
            "subarea": "Moon Cave",
            "type": "moon",
            "x": 0.75,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 682,
            "kingdomId": 13,
            "name": "Fly to the Treasure Chest and Back",
            "subarea": "Moon Cave",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 683,
            "kingdomId": 14,
            "name": "Up in the Rafters",
            "subarea": "Chapel",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 684,
            "kingdomId": 15,
            "name": "Sneaking Around in the Crater",
            "subarea": "",
            "type": "moon",
            "x": 0.6925187325065154,
            "y": 0.9444965732704755,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 685,
            "kingdomId": 16,
            "name": "Found on the Moon, Good Dog!",
            "subarea": "",
            "type": "moon",
            "x": 0.680495837844944,
            "y": 0.83724934619713,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 686,
            "kingdomId": 17,
            "name": "Moon Shards on the Moon",
            "subarea": "",
            "type": "moon",
            "x": 0.4109354288897462,
            "y": 0.10467809175857283,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 687,
            "kingdomId": 18,
            "name": "Moon Quiz: Amazing!",
            "subarea": "",
            "type": "moon",
            "x": 0.46672302722442355,
            "y": 0.20509002884107452,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 688,
            "kingdomId": 19,
            "name": "Thanks, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.6612592063864295,
            "y": 0.9583004010565535,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 689,
            "kingdomId": 20,
            "name": "Shopping in Honeylune Ridge",
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
            "id": 690,
            "kingdomId": 21,
            "name": "Walking on the Moon!",
            "subarea": "",
            "type": "moon",
            "x": 0.6468317327925439,
            "y": 0.854046044592365,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 691,
            "kingdomId": 22,
            "name": "Moon Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.4792728061995708,
            "y": 0.10206171506810312,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 692,
            "kingdomId": 23,
            "name": "Doctor in the House",
            "subarea": "Chapel",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 693,
            "kingdomId": 24,
            "name": "Sphynx's Hidden Vault",
            "subarea": "Sphynx Vault",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 694,
            "kingdomId": 25,
            "name": "A Tourist in the Moon Kingdom!",
            "subarea": "",
            "type": "moon",
            "x": 0.6124895525667784,
            "y": 0.9529337488618905,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 695,
            "kingdomId": 26,
            "name": "Peach in the Moon Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.4287005962652089,
            "y": 0.08085600646738816,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        
        {
            "id": 697,
            "kingdomId": 28,
            "name": "Mysterious Flying Object",
            "subarea": "",
            "type": "moon",
            "x": 0.45440358992361163,
            "y": 0.04279526380875767,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 698,
            "kingdomId": 29,
            "name": "Hidden on the Side of the Cliff",
            "subarea": "",
            "type": "moon",
            "x": 0.46673072192341025,
            "y": 0.2295053058044787,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 699,
            "kingdomId": 30,
            "name": "Jumping High as a Frog",
            "subarea": "",
            "type": "moon",
            "x": 0.6824182593492802,
            "y": 0.5650362629329503,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 700,
            "kingdomId": 31,
            "name": "Moon Kingdom Timer Challenge 2",
            "subarea": "",
            "type": "moon",
            "x": 0.4945439072738266,
            "y": 0.796083989555953,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 701,
            "kingdomId": 32,
            "name": "Walking on the Moon: Again!",
            "subarea": "",
            "type": "moon",
            "x": 0.6465311604260046,
            "y": 0.8478057650404676,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 702,
            "kingdomId": 33,
            "name": "Moon Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.48382863135355914,
            "y": 0.09445299254610799,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 703,
            "kingdomId": 34,
            "name": "Taking Notes: In Low Gravity",
            "subarea": "",
            "type": "moon",
            "x": 0.5903127274125676,
            "y": 0.9390500674352033,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 704,
            "kingdomId": 35,
            "name": "Center of the Galaxy",
            "subarea": "Snowman Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 705,
            "kingdomId": 36,
            "name": "Edge of the Galaxy",
            "subarea": "Snowman Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 706,
            "kingdomId": 37,
            "name": "Navigating Giant Swings",
            "subarea": "Giant Swings",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 707,
            "kingdomId": 38,
            "name": "A Swing on Top of a Swing",
            "subarea": "Giant Swings",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 17,
            "kingdomId": 998,
            "name": "Found with Cap Kingdom Art",
            "subarea": "",
            "type": "moon",
            "x": 0.6552477590556439,
            "y": 0.9567815410113754,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Mushroom", [
        {
            "id": 708,
            "kingdomId": 1,
            "name": "Perched on the Castle Roof",
            "subarea": "",
            "type": "moon",
            "x": 0.5600230464280176,
            "y": 0.16767511456493928,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 709,
            "kingdomId": 2,
            "name": "Pops Out of the Tail",
            "subarea": "",
            "type": "moon",
            "x": 0.4343613153833609,
            "y": 0.6607605025390509,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 710,
            "kingdomId": 3,
            "name": "Caught Hopping at Peach's Castle!",
            "subarea": "",
            "type": "moon",
            "x": 0.7263443725743419,
            "y": 0.26443046531558323,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 711,
            "kingdomId": 4,
            "name": "Gardening for Toad: Garden Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7012650350575101,
            "y": 0.22852489336998025,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 712,
            "kingdomId": 5,
            "name": "Gardening for Toad: Field Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7125294832642227,
            "y": 0.2286647412902524,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 713,
            "kingdomId": 6,
            "name": "Gardening for Toad: Pasture Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7009462299195843,
            "y": 0.24418367041467728,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 714,
            "kingdomId": 7,
            "name": "Gardening for Toad: Lake Seed",
            "subarea": "",
            "type": "moon",
            "x": 0.7122106781262968,
            "y": 0.24403619073095248,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 715,
            "kingdomId": 8,
            "name": "Grow a Flower Garden",
            "subarea": "",
            "type": "moon",
            "x": 0.6966954947472399,
            "y": 0.1476806736711065,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 716,
            "kingdomId": 9,
            "name": "Mushroom Kingdom Timer Challenge",
            "subarea": "",
            "type": "moon",
            "x": 0.6724663042648771,
            "y": 0.13317296682645371,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 717,
            "kingdomId": 10,
            "name": "Found at Peach's Castle! Good Dog!",
            "subarea": "",
            "type": "moon",
            "x": 0.6596834822975085,
            "y": 0.7832426832902871,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 718,
            "kingdomId": 11,
            "name": "Taking Notes: Around the Well",
            "subarea": "",
            "type": "moon",
            "x": 0.3252859159947658,
            "y": 0.1932605692918789,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 719,
            "kingdomId": 12,
            "name": "Herding Sheep at Peach's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.32101128746395763,
            "y": 0.6277775940622916,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 720,
            "kingdomId": 13,
            "name": "Gobbling Fruit with Yoshi",
            "subarea": "",
            "type": "moon",
            "x": 0.5368678522670921,
            "y": 0.17573422850557813,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 721,
            "kingdomId": 14,
            "name": "Yoshi's Second Helping!",
            "subarea": "",
            "type": "moon",
            "x": 0.5367696902989073,
            "y": 0.187526195544025,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 722,
            "kingdomId": 15,
            "name": "Yoshi's All Filled Up!",
            "subarea": "",
            "type": "moon",
            "x": 0.536489246364582,
            "y": 0.19871620086616598,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 723,
            "kingdomId": 16,
            "name": "Love at Peach's Castle",
            "subarea": "",
            "type": "moon",
            "x": 0.5115297362096171,
            "y": 0.1530404914964913,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 724,
            "kingdomId": 17,
            "name": "Toad Defender",
            "subarea": "",
            "type": "moon",
            "x": 0.5883713742147898,
            "y": 0.12490996161210212,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 725,
            "kingdomId": 18,
            "name": "Forever Onward, Captain Toad!",
            "subarea": "",
            "type": "moon",
            "x": 0.6396179959956011,
            "y": 0.5765039954887723,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 726,
            "kingdomId": 19,
            "name": "Jammin' in the Mushroom Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.5795035226877437,
            "y": 0.7036197723508045,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 727,
            "kingdomId": 20,
            "name": "Shopping Near Peach's Castle",
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
            "id": 728,
            "kingdomId": 21,
            "name": "Mushroom Kingdom Regular Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.4418413788127507,
            "y": 0.8395870501920224,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 729,
            "kingdomId": 22,
            "name": "Mushroom Kingdom Master Cup",
            "subarea": "",
            "type": "moon",
            "x": 0.43507855410292506,
            "y": 0.8440421505805396,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 730,
            "kingdomId": 23,
            "name": "Picture Match: Basically Mario",
            "subarea": "Picture Match",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 731,
            "kingdomId": 24,
            "name": "Picture Match: A Stellar Mario!",
            "subarea": "Picture Match",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 732,
            "kingdomId": 25,
            "name": "Light from the Ceiling",
            "subarea": "Peach's Castle",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 733,
            "kingdomId": 26,
            "name": "Loose-Tile Trackdown",
            "subarea": "Peach's Castle",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 734,
            "kingdomId": 27,
            "name": "Totally Classic!",
            "subarea": "SM64 Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 735,
            "kingdomId": 28,
            "name": "Courtyard Chest Trap",
            "subarea": "SM64 Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 736,
            "kingdomId": 29,
            "name": "Yoshi's Feast in the Sea of Clouds",
            "subarea": "Sea of Clouds",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 737,
            "kingdomId": 30,
            "name": "Sunken Star in the Sea of Clouds",
            "subarea": "Sea of Clouds",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 738,
            "kingdomId": 31,
            "name": "Secret 2D Treasure",
            "subarea": "2D Room",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 739,
            "kingdomId": 32,
            "name": "2D Boost from Bullet Bill",
            "subarea": "2D Room",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 740,
            "kingdomId": 33,
            "name": "Tussle in Tostarena: Rematch",
            "subarea": "Knucklotec Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 741,
            "kingdomId": 34,
            "name": "Struggle in Steam Gardens: Rematch",
            "subarea": "Torkdrift Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 742,
            "kingdomId": 35,
            "name": "Dust-Up in New Donk City: Rematch",
            "subarea": "Mechawiggler Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 743,
            "kingdomId": 36,
            "name": "Battle in Bubblaine: Rematch",
            "subarea": "Mollusque-Lanceur Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 744,
            "kingdomId": 37,
            "name": "Blowup at Mount Volbono: Rematch",
            "subarea": "Cookatiel Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 745,
            "kingdomId": 38,
            "name": "Rumble in Crumbleden: Rematch",
            "subarea": "Dragon Refight",
            "type": "multimoon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 746,
            "kingdomId": 39,
            "name": "Secret Path to Peach's Castle!",
            "subarea": "",
            "type": "moon",
            "x": 0.5333923884917526,
            "y": 0.9531473265347595,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 747,
            "kingdomId": 40,
            "name": "A Tourist in the Mushroom Kingdom!",
            "subarea": "",
            "type": "moon",
            "x": 0.6091892972671766,
            "y": 0.5593879758739893,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 749,
            "kingdomId": 42,
            "name": "Hat-and-Seek: Mushroom Kingdom",
            "subarea": "",
            "type": "moon",
            "x": 0.37122472802218565,
            "y": 0.10318009344570377,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 750,
            "kingdomId": 43,
            "name": "Princess Peach, Home Again!",
            "subarea": "",
            "type": "moon",
            "x": 0.511406322001311,
            "y": 0.23117414989376786,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 751,
            "kingdomId": 44,
            "name": "Rescue Princess Peach",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 752,
            "kingdomId": 45,
            "name": "Achieve World Peace",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 753,
            "kingdomId": 46,
            "name": "Power Moon Knight",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 754,
            "kingdomId": 47,
            "name": "Power Moon Wizard",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 755,
            "kingdomId": 48,
            "name": "Power Moon Ruler",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 756,
            "kingdomId": 49,
            "name": "Regional Coin Shopper",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 757,
            "kingdomId": 50,
            "name": "Flat Moon Finder",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 758,
            "kingdomId": 51,
            "name": "Flat Moon Fanatic",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 759,
            "kingdomId": 52,
            "name": "Treasure Chest Hunter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 760,
            "kingdomId": 53,
            "name": "Super Treasure Chest Hunter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 761,
            "kingdomId": 54,
            "name": "Note-Collecting World Tour",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 762,
            "kingdomId": 55,
            "name": "Note-Collecting Space Tour",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 763,
            "kingdomId": 56,
            "name": "Timer Challenge Amateur",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 764,
            "kingdomId": 57,
            "name": "Timer Challenge Professional",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 765,
            "kingdomId": 58,
            "name": "Captain Toad Meeter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 766,
            "kingdomId": 59,
            "name": "Captain Toad Greeter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 767,
            "kingdomId": 60,
            "name": "Touring with Princess Peach",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 768,
            "kingdomId": 61,
            "name": "Globe-Trotting with Princess Peach",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0.125,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 769,
            "kingdomId": 62,
            "name": "Master Sheep Herder",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 770,
            "kingdomId": 63,
            "name": "Gaga for Goombette",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 771,
            "kingdomId": 64,
            "name": "Lakitu Fishing Trip",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 772,
            "kingdomId": 65,
            "name": "Flower-Growing Guru",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 773,
            "kingdomId": 66,
            "name": "Flower-Growing Sage",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 774,
            "kingdomId": 67,
            "name": "Running with Rabbits",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 775,
            "kingdomId": 68,
            "name": "Racing with Rabbits",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 776,
            "kingdomId": 69,
            "name": "Ground Pound Instructor",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 777,
            "kingdomId": 70,
            "name": "Ground Pound Professor",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0.25,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 778,
            "kingdomId": 71,
            "name": "Rad Hatter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 779,
            "kingdomId": 72,
            "name": "Super Rad Hatter",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 780,
            "kingdomId": 73,
            "name": "Traveling-Bird Herder",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 781,
            "kingdomId": 74,
            "name": "Wearing It Well!",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 782,
            "kingdomId": 75,
            "name": "Wearing It Great!",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 783,
            "kingdomId": 76,
            "name": "Wearing It Perfect!",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 784,
            "kingdomId": 77,
            "name": "Hat-Seeking Missile",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 785,
            "kingdomId": 78,
            "name": "Music Maestro",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 786,
            "kingdomId": 79,
            "name": "Art Enthusiast",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0.375,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 787,
            "kingdomId": 80,
            "name": "Art Investigator",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 788,
            "kingdomId": 81,
            "name": "Slots Machine",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 789,
            "kingdomId": 82,
            "name": "Koopa Freerunning MVP",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 790,
            "kingdomId": 83,
            "name": "Koopa Freerunning Hall of Famer",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 791,
            "kingdomId": 84,
            "name": "Supernaturally Sure-Footed",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 792,
            "kingdomId": 85,
            "name": "Quizmaster",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 793,
            "kingdomId": 86,
            "name": "Souvenir Sampler",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 794,
            "kingdomId": 87,
            "name": "Souvenir Sleuth",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 795,
            "kingdomId": 88,
            "name": "Souvenir Savant",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0.5,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 796,
            "kingdomId": 89,
            "name": "Capturing Novice",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 797,
            "kingdomId": 90,
            "name": "Capturing Apprentice",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 798,
            "kingdomId": 91,
            "name": "Capturing Master",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 799,
            "kingdomId": 92,
            "name": "Hat Maven",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 800,
            "kingdomId": 93,
            "name": "Hat Icon",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 801,
            "kingdomId": 94,
            "name": "Fashion Maven",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 802,
            "kingdomId": 95,
            "name": "Fashion Icon",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 803,
            "kingdomId": 96,
            "name": "Moon Rock Liberator",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.875,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 804,
            "kingdomId": 97,
            "name": "World Warper",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 1,
            "y": 0.625,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 805,
            "kingdomId": 98,
            "name": "Checkpoint Flagger",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 806,
            "kingdomId": 99,
            "name": "Checkpoint Flag Enthusiast",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.125,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 807,
            "kingdomId": 100,
            "name": "Loaded with Coins",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.25,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 808,
            "kingdomId": 101,
            "name": "Rolling in Coins",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.375,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 809,
            "kingdomId": 102,
            "name": "Swimming in Coins",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.5,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 810,
            "kingdomId": 103,
            "name": "Jump! Jump! Jump!",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.625,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 811,
            "kingdomId": 104,
            "name": "Fly, Cappy, Fly!",
            "subarea": "Toadette's ***",
            "type": "moon",
            "x": 0.75,
            "y": 0.75,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
        {
            "id": 828,
            "kingdomId": 999,
            "name": "Found with Dark Side Art 3",
            "subarea": "",
            "type": "moon",
            "x": 0.6868090692000239,
            "y": 0.23663217056203842,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        }
    ]],
    ["Dark", [
        {
            "id": 812,
            "kingdomId": 1,
            "name": "Arrival at Rabbit Ridge!",
            "subarea": "",
            "type": "multimoon",
            "x": 0.6719436666437734,
            "y": 0.07715151432515846,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3518"
                ]
            }
        },
        {
            "id": 813,
            "kingdomId": 2,
            "name": "Captain Toad on the Dark Side!",
            "subarea": "",
            "type": "moon",
            "x": 0.6474609375,
            "y": 0.04459760377509628,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3516",
                    "l3517",
                    "wDark"
                ]
            }
        },
        {
            "id": 814,
            "kingdomId": 3,
            "name": "Breakdown Road: Hurry!",
            "subarea": "Breakdown Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3520"
                ]
            }
        },
        {
            "id": 815,
            "kingdomId": 4,
            "name": "Breakdown Road: Final Challenge!",
            "subarea": "Breakdown Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3520"
                ]
            }
        },
        {
            "id": 816,
            "kingdomId": 5,
            "name": "Invisible Road: Rush!",
            "subarea": "Invisible Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3522",
                    "l3523"
                ]
            }
        },
        {
            "id": 817,
            "kingdomId": 6,
            "name": "Invisible Road: Secret!",
            "subarea": "Invisible Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3522",
                    "l3523"
                ]
            }
        },
        {
            "id": 818,
            "kingdomId": 7,
            "name": "Vanishing Road Rush",
            "subarea": "Vanishing Road",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3525",
                    "l3526"
                ]
            }
        },
        {
            "id": 819,
            "kingdomId": 8,
            "name": "Vanishing Road Challenge",
            "subarea": "Vanishing Road",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "AND",
                "reqs": [
                    "l3525"
                ]
            }
        },
        {
            "id": 820,
            "kingdomId": 9,
            "name": "Yoshi Under Siege",
            "subarea": "Under Siege",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3528",
                    "l3529"
                ]
            }
        },
        {
            "id": 821,
            "kingdomId": 10,
            "name": "Fruit Feast Under Siege",
            "subarea": "Under Siege",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3528",
                    "l3529"
                ]
            }
        },
        {
            "id": 822,
            "kingdomId": 11,
            "name": "Yoshi on the Sinking Island",
            "subarea": "Lava Rising",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3531",
                    "l3532"
                ]
            }
        },
        {
            "id": 823,
            "kingdomId": 12,
            "name": "Fruit Feast on the Sinking Island",
            "subarea": "Lava Rising",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3531",
                    "l3532"
                ]
            }
        },
        {
            "id": 824,
            "kingdomId": 13,
            "name": "Yoshi's Magma Swamp",
            "subarea": "Magma Swamp",
            "type": "moon",
            "x": 0,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3534",
                    "l3535"
                ]
            }
        },
        {
            "id": 825,
            "kingdomId": 14,
            "name": "Fruit Feast in the Magma Swamp!",
            "subarea": "Magma Swamp",
            "type": "moon",
            "x": 1,
            "y": 0,
            "logic": {
                "op": "OR",
                "reqs": [
                    "l3534",
                    "l3535"
                ]
            }
        }
    ]],
    ["Darker", [
        {
            "id": 836,
            "kingdomId": 1,
            "name": "Long Journey's End",
            "subarea": "",
            "type": "multimoon",
            "x": 0.5295333667505874,
            "y": 0.1111461197227602,
            "logic": {
                "op": "TRUE",
                "reqs": []
            }
        },
    ]],
]);