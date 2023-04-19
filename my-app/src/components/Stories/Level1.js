const LEVEL1 = {
  "pancakeIntro": {
    "type": "comic",
    "background": "beige",
    "previousScene": undefined,
    "nextScene": "pancakeNorthAmerica",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-1",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "pancake-bowl",
        "x": "18",
        "y": "35",
        "size": "15",
        "flipX": false
      },
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hello there! I’m Pancake the Flapjack Octopus. \nPress the Next button in the bottom right to keep going!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": " I will lead you around your adventure today and help you learn about the ocean, sea creatures and the impact humans have on the ocean.",
        "type": "left"
      }
    ]
  },
  "pancakeNorthAmerica": {
    "type": "comic",
    "background": "north-america-blank",
    "previousScene": "pancakeIntro",
    "nextScene": "clickMap",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is a map of North America. Do you know where the Pacific Ocean is? Click on where you think the Pacific Ocean is.",
        "type": "nospeaker"
      }
    ]
  },
  "pacificOcean_correct": {
    "type": "comic",
    "background": "north-america",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "pancakeWashingtonState",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Correct! The Pacific Ocean is on the west side of the United States, near Washington, Oregon and California.",
        "type": "nospeaker"
      },
    ]
  },
  "pacificOcean_incorrect": {
    "type": "comic",
    "background": "north-america",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "pancakeWashingtonState",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "10",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Uh Oh! Looks like you weren’t sure where the Pacific Ocean is. Its on the west side of the United States, near Washington, Oregon and California.",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeWashingtonState": {
    "type": "comic",
    "background": "washington-state",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "beginningScene",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is Washington state. The area circled in red is where we will be exploring and meeting new friends!",
        "type": "nospeaker"
      }
    ]
  },
  "beginningScene": {
    "type": "comic",
    "background": "beige",
    "previousScene": "pancakeWashingtonState",
    "nextScene": "shawnIntro", // flapGuideShawn
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-bowl",
        "x": "15",
        "y": "30",
        "size": "10",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Today, we will be exploring several different ocean environments, starting with this beach! We’re on the beach of the Pacific Ocean, in Washington.",
        "type": "right"
      },
      {
        "speaker": "",
        "message": "You can explore the beach by using the arrow keys to move around. When an exclamation point appears above a character when you’re near them, click on them to interact!",
        "type": "right"
      }
    ]
  },
  "shawnIntro": {
    "type": "comic",
    "background": "beige",
    "previousScene": undefined,
    "nextScene": {
      "How is life on the beach?": "shawnBeach1",
      "What's that thing around your foot?": "shawnTrash1",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hello! I’m Shawn the Seagull. I’m a ring billed seagull.",
        "type": "left",
        "keyword": "ring billed seagull",
      }
    ]
  },

  // First path
  "shawnBeach1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnIntro",
    "nextScene": "trashIsland1",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet,\nbut I’ve noticed there’s more and more litter on the beach. \nNowadays, I prefer to fly over the open ocean.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "trashIsland1": {
    "type": "comic",
    "background": "trash-island",
    "previousScene": "lifeOnBeach1",
    "nextScene": "shawnCardGame1",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
        "type": "nospeaker"
      }
    ]
  },
  "shawnCardGame1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashIsland1",
    "nextScene": "animalImpactTrash1",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Can you help to identify the images that have trash islands in them? Click on the images you think have trash islands in them!",
        "type": "nospeaker",
      }
    ]
  },
  "animalImpactTrash1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnCardGame1",
    "nextScene": "shawnQuestion1", // quiz1
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I’ve had this thing stuck around my foot for a couple of days\nnow and its making it hard to walk!",
        "type": "left"
      }
    ]
  },
  "shawnQuestion1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash1",
    "nextScene": {
      "Would you like help removing the soda can rings from your leg?": "trashHelp1",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It's gotten really tangled up that I can't get out of it easily.",
        "type": "left"
      }
    ]
  },
  "trashHelp1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnQuestion1",
    "nextScene": "trashHelpContinued1", // clickSodaCanRings
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp1",
    "nextScene": {
      "What were you doing when you couldn't walk as well?": "couldntWalk1",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I can finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "couldntWalk1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued1",
    "nextScene": "couldntWalkContinued1",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since it was hard to walk, I would fly over the open ocean\ninstead!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "couldntWalkContinued1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalk1",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp1",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "howToHelp1": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalkContinued1",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that's on the beach right now!",
        "type": "left"
      }
    ]
  },

  // Second path
  "shawnTrash1": {
    "type": "comic",
    "background": "beige",
    "nextScene": "shawnQuestion2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Oh this? I don’t really know. I got caught in it a couple of days\nago and its making it hard for me to walk!",
        "type": "left"
      }
    ]
  },
  "shawnQuestion2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnTrash1",
    "nextScene": {
      "How is life on the beach?": "shawnBeach3",
      "Would you like help removing the soda can rings from your leg?": "trashHelp3",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It's gotten really tangled up that I can't get out of it easily.",
        "type": "left"
      }
    ]
  },

  // Path 2 - How is life on the beach
  "shawnBeach2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnQuestion2",
    "nextScene": "trashIsland2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet,\nbut I’ve noticed there’s more and more litter on the beach. \nNowadays, I prefer to fly over the open ocean.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "trashIsland2": {
    "type": "comic",
    "background": "trash-island",
    "previousScene": "shawnBeach2",
    "nextScene": "shawnCardGame2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
        "type": "nospeaker"
      }
    ]
  },
  "shawnCardGame2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashIsland2",
    "nextScene": "animalImpactTrash2",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Can you help to identify the images that have trash islands in them? Click on the images you think have trash islands in them!",
        "type": "nospeaker",
      }
    ]
  },
  "animalImpactTrash2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnCardGame2",
    "nextScene": "shawnQuestion3", // quiz2
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I’ve had this thing stuck around my foot for a couple of days\nnow and its making it hard to walk!",
        "type": "left"
      }
    ]
  },
  "shawnQuestion3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash2",
    "nextScene": {
      "Would you like help removing the soda can rings from your leg?": "trashHelp2",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It's gotten really tangled up that I can't get out of it easily.",
        "type": "left"
      }
    ]
  },
  "trashHelp2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnQuestion3",
    "nextScene": "trashHelpContinued2", // clickSodaCanRings
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp2",
    "nextScene": {
      "What were you doing when you couldn't walk as well?": "couldntWalk2",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I can finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "couldntWalk2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued2",
    "nextScene": "couldntWalkContinued2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since it was hard to walk, I would fly over the open ocean\ninstead!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "couldntWalkContinued2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalk2",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp2",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "howToHelp2": {
    "type": "comic",
    "background": "beige",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that’s\non the beach right now!",
        "type": "left"
      }
    ]
  },

  // Path 2 - Would you like help removing the soda rings from your leg?
  "trashHelp3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnQuestion2",
    "nextScene": "trashHelpContinued4", // clickSodaCanRings
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp2",
    "nextScene": {
      "How is life on the beach?": "shawnBeach3", 
      "What were you doing when you couldn't walk as well?": "couldntWalk2",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I can finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "shawnBeach3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued3",
    "nextScene": "trashIsland3",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet,\nbut I’ve noticed there’s more and more litter on the beach. \nNowadays, I prefer to fly over the open ocean.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "trashIsland3": {
    "type": "comic",
    "background": "trash-island",
    "previousScene": "shawnBeach3",
    "nextScene": "shawnCardGame3",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
        "type": "nospeaker"
      }
    ]
  },
  "shawnCardGame3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashIsland3",
    "nextScene": "animalImpactTrash3",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Can you help to identify the images that have trash islands in them? Click on the images you think have trash islands in them!",
        "type": "nospeaker",
      }
    ]
  },
  "animalImpactTrash3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalk3",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp5",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "howToHelp5": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash3",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
  },
  "shawnQuestion4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash3",
    "nextScene": {
      "Would you like help removing the soda can rings from your leg?": "trashHelp3",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It's gotten really tangled up that I can't get out of it easily.",
        "type": "left"
      }
    ]
  },
  "trashHelp3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash3",
    "nextScene": "trashHelpContinued3", // clickSodaCanRings
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp2",
    "nextScene": {
      "What were you doing when you couldn't walk as well?": "couldntWalk3",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I can finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "couldntWalk3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued3",
    "nextScene": "couldntWalkContinued3",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since it was hard to walk, I would fly over the open ocean\ninstead!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "couldntWalkContinued3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalk3",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp3",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "howToHelp3": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalkContinued3",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that’s\non the beach right now!",
        "type": "left"
      }
    ]
  },
  "couldntWalk2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued2",
    "nextScene": "couldntWalkContinued2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since it was hard to walk, I would fly over the open ocean\ninstead!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "couldntWalkContinued2": {
    "type": "comic",
    "background": "beige",
    "previousScene": "couldntWalk2",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp2",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp3",
    "nextScene": {
      "How is life on the beach?": "shawnBeach4", 
      "What were you doing when you couldn't walk as well?": "couldntWalk4",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I can finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "shawnBeach4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelpContinued4",
    "nextScene": "trashIsland4",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet,\nbut I’ve noticed there’s more and more litter on the beach. \nNowadays, I prefer to fly over the open ocean.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "trashIsland4": {
    "type": "comic",
    "background": "trash-island",
    "previousScene": "shawnBeach4",
    "nextScene": "shawnCardGame4",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
        "type": "nospeaker"
      }
    ]
  },
  "shawnCardGame4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashIsland4",
    "nextScene": "animalImpactTrash4",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Can you help to identify the images that have trash islands in them? Click on the images you think have trash islands in them!",
        "type": "nospeaker",
      }
    ]
  },
  "animalImpactTrash4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnCardGame4",
    "nextScene": {
      "How can I help with all of the trash on the beach?": "howToHelp4",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "howToHelp4": {
    "type": "comic",
    "background": "beige",
    "previousScene": "animalImpactTrash4",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that’s\non the beach right now!",
        "type": "left"
      }
    ]
  },
  "howToHelp2": {
    "type": "comic",
    "background": "beige",
    "nextScene": "minigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that’s\non the beach right now!",
        "type": "left"
      }
    ]
  },
  
}

export default LEVEL1;