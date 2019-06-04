// Create array of alphabet.
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var userGuess = document.onkeyup;

// Create function to select computer's answer.
function computerAnswer() {
    const answer = letterList[Math.floor(Math.random() * letterList.length)];
    return answer;
};    
console.log(computerAnswer());


// Create a function to move on to next round
function nextRound() {
}


// Capture user's guess and check against answer.
document.onkeyup = function (keypress) {
    var userGuess = keypress.key;

    // Create a function to display user's wrong guesses in guesses element.
    function displayGuesses() {
        if (guessesLeft == 10) {
            document.getElementById("guesses").innerHTML += userGuess;
        } else {
            document.getElementById("guesses").innerHTML += "  " + userGuess;
        }    
    }    
    // Only run the code if a letter is chosen from letterList
    for (var i = 0; i < letterList.length; i++) {
        if (userGuess === letterList[i]) {
            
            // If user's guess equals the answer, add 1 to wins and move to next round.
            if (userGuess === computerAnswer()) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                console.log(wins);
                nextRound();

                // If user's guess is wrong, push guessed letter to guesses array and subtract 1 guess from guesses left.        
            } else if (userGuess !== computerAnswer()) {
                guessesLeft--;
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                displayGuesses();

                // If user has no remaining guesses, add 1 to losses and move to next round.
            } else {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                console.log(losses);
                nextRound();
            }    
        }    
    }    
}    





