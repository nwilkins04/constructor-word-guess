var word = require("./word.js");

var Letter = function() {
    this.underlyer = "_";
    this.guess = false;

    this.character = function() {
        if (this.guess = true) {
            console.log("you guessed")
            // for (var i = 0; i < numBlanks; i++) {
            //     if (chosenWord[i] === letter) {
            //         letterInWord = true;
            //     }
            // }
        }       
        else {
            console.log("TYPE SOMETHING PLEASE!")
        }
    };

    this.check = function() {
        if (this.underlyer = true) {
            console.log("you guessed correct")
            
        }
        else {

        }
    };
};