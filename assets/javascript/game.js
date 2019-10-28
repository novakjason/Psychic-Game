// create an array of the alphabet
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var userGuess = document.onkeyup;

// create function to select computer's answer using Math.random to select from the letter list array
function compAnswer() {
    answer = letterList[Math.floor(Math.random() * letterList.length)];
    return answer;
}

// capturing computer's answer
compAnswer();

// create a function to start next round
function nextRound() {

    // clear guesses array
    guesses = [];
    document.getElementById("guesses").innerHTML = guesses;

    // reset ramaining guesses left
    guessesLeft = 10;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    
    // generating a new answer for the new round
    compAnswer();
}

// capture user's guess and check against computer's answer
document.onkeyup = function (keypress) {

    // user's guess is a letter pressed on the keyboard
    let userGuess = keypress.key;

    // Create a function to display user's wrong guesses in guesses element
    function displayGuesses() {
        document.getElementById("guesses").innerHTML += userGuess + " ";
    }

    // verify the user's guess is a letter from the letter list
    for (var i = 0; i < letterList.length; i++) {
        if (userGuess === letterList[i]) {

            // if user's guess equals the computer's answer...
            if (userGuess === answer) {

                // add 1 to wins
                wins++;
                document.getElementById("wins").innerHTML = wins;
                
                // alert user and move to next round
                alert("You guessed right!  Press ok to move on to the next round.");
                nextRound();

              // if user's guess is wrong and has not already been guessed...          
            } else if (userGuess !== answer && !guesses.includes(userGuess)) {

                // subtract 1 guess from guesses left
                guessesLeft--;
                document.getElementById("guesses-left").innerHTML = guessesLeft;

                // push guessed letter to guesses array
                guesses.push(userGuess);

                // then display the wrong guess to the user
                displayGuesses();

            }
        // if user has no remaining guesses...
        } else if (guessesLeft < 1) {

            // add 1 to losses
            losses++;
            document.getElementById("losses").innerHTML = losses;

            // alert user and move to next round
            alert("You ran out of guesses! Press ok to try again!");
            nextRound();
        }
    }
}
