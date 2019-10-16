'use strict';
//Quiz DATA
 const DATA = {
     //quiz variables
    score: 0,
    current: 0,

    //result comments
    perfect: "Wow you sure know your games! Maybe go outside a little",
    good: "Awesome! thanks for trying!",
    veryBad: "Wow even people in the mountains know a thing or two about video games, maybe play a litte",

    //result sources
    correctCmnt: "Nice you got it right!",
    correct:"https://media.giphy.com/media/26tknCqiJrBQG6bxC/giphy.gif" ,
    correctAlt:"president saying correct",
    wrongCmnt: "OOPS! you got it wrong",
    wrong: "https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif",
    wrongAlt: "president saying wrong",

    //Questions Array
    questions: [
    {
        img: "Images/cloud.jpg" ,
        alt: "A man with yellow hair and blue clothing",
        hint: "He wields the Buster Sword",
        choices: 
        [
            "Lightning",
            "Cloud",
            "Sonic",
            "Link"
        ],
        answer: "Cloud"
    },
    {
        img: "Images/Genji.png" ,
        alt: "A Cyborg in a white suit with a katana drawn with his left hand",
        hint: "He has a brother that wields a bow",
        choices: 
        [
            "Hanzo",
            "Zelda",
            "Ryu Hayabusa",
            "Genji"
        ],
        answer: "Genji"
    },
    {
        img: "Images/masterchief.jpg" ,
        alt: "A man with a full metallic green suit",
        hint: "He is a cybernetically enhanced super-soldier that has an AI partner called Cortana",
        choices: 
        [
            "Zavala",
            "MasterChief",
            "Megaman",
            "Robocop"
        ],
        answer: "MasterChief"
    },
    {
        img: "Images/sonic.jpg" ,
        alt: "A blue humanoid creature, with pointy ears, white gloves and spikes in the back",
        hint: "He runs faster than the speed of sound",
        choices: 
        [
            "Snorlax",
            "Sonic",
            "Shadow",
            "Flash"
        ],
        answer: "Sonic"
    },
    {
        img: "Images/Sheriff.png" ,
        alt: "a pixel character of a cowboy shooting 3 pixel bandits",
        hint: "A cowboy tasked with the defense of a town against bandits",
        choices: 
        [
            "Clint Eastwood",
            "Accel",
            "SheriffBandido",
            "Arthur Morgan"
        ],
        answer: "SheriffBandido"
    }]
 }