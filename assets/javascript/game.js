var userGuesses = [];
var wins = 0;
var losses = 0;
var ties = 0;
var unknownWord = "";

function wordGenerator() {
    var computerChoices = ["lowly", "start", "chilly", "bun", "bead", "friend", "return", "view", "cloth", "frogs", "celery", "basin", "stand", "special", "broad", "abaft", "plead", "quartz", "mark", "tempt", "shop", "stone", "scorch", "taboo", "hoax", "spiffy", "insure"];
    var cpuWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(cpuWord);
    return cpuWord;
};
var computerWord = wordGenerator();

function scrambledWord(string) {
    var knownWord = ""
    if (string.length == 3) {
        knownWord = "___"
    } else if (string.length == 4) {
        knownWord = "____"
    } else if (string.length == 5) {
        knownWord = "_____"
    } else if (string.length == 6) {
        knownWord = "______"
    } else if (string.length == 7) {
        knownWord = "_______"
    }
    return knownWord;
}
var unknownWord = scrambledWord(computerWord);

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var userGuessList = document.getElementById("userguesslist-text");
var unscrambledWordText = document.getElementById("unscrambledword-text");
var winsText = document.getElementById("wins-text");
var tiesText = document.getElementById("ties-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function (event) {

    var userGuess = event.key;

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        userGuesses.push(userGuess);
        directionsText.textContent = "";

        userChoiceText.textContent = "You chose: " + userGuess;
        userGuessList.textContent = "You have guessed: " + userGuesses;
        unscrambledWordText.textContent = "The word is: " + unknownWord;
        winsText.textContent = "Wins: " + wins;
        tiesText.textContent = "Ties: " + ties;
        lossesText.textContent = "Losses: " + losses;
        wordChecker(userGuess)
    } else {
        alert("You did not enter an alphabetical character.")
    }
};

function wordChecker(input) {
    if (computerWord.includes(input)) {
        alert("You guessed a correct character")
        unscrambledWord(input, unknownWord, computerWord)
    } else {
        alert("You guessed an incorrect character")
    }
}

function unscrambledWord(character, scrmbldword, word) {
    for (k = 0; k < word.length; k++) {
        if (character == word[k]) {
            var tempLetter = word[k];
            tempWord = scrmbldword.replace(scrmbldword[k], character);
            console.log(tempWord);
        }
    }
}
