// var word = require("./word.js");

// var Letter = function() {
//     this.underlyer = "_";
//     this.guess = false;

//     this.character = function() {
//         if (this.guess = true) {
//             console.log("you guessed")
//             // for (var i = 0; i < numBlanks; i++) {
//             //     if (chosenWord[i] === letter) {
//             //         letterInWord = true;
//             //     }
//             // }
//         }       
//         else {
//             console.log("TYPE SOMETHING PLEASE!")
//         }
//     };

//     this.check = function() {
//         if (this.underlyer = true) {
//             console.log("you guessed correct")
            
//         }
//         else {

//         }
//     };
// };

//array of word options
var wordList = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white"];

//solution held here
var chosenWord = "";

//should break solution into individual letters for array
var lettersInChosenWord = [];

//number of blanks shown based on solution
var numBlanks = 0;

//mix of blank spots and solved letters
var blanksAndSuccesses = [];

//wrong guesses
var wrongGuesses = [];

//defining starting the game
function startGame () {
    numGuesses = 10;

    //word to guess randomly choosen
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

    //word broken down to individul letters
    lettersInChosenWord = chosenWord.split("");

    //counts the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    //resets guesses and success each round
    blanksAndSuccesses = [];

    //resets wrong gusses for new round
    wrongGuesses = [];

    //puts appropriate numbers of blanks in blanksAndSuccesses for word to guess
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //prints intial blanks
    console.log(blanksAndSuccesses);
    
};

//compare for matches, defining the function
function checkLetters(letter) {

    //does letter exist in word
    var letterInWord = false;

    //letter exists in array
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    //if letter exist finds out where
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if(chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
}

startGame();

checkLetters();

//displays guesses left
console.log("Guesses left: " + numGuesses);