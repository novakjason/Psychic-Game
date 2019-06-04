// Create array of alphabet.
const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create function to select computer's answer.
function answer() {
    return letter[Math.floor(Math.random() * letter.length)];
}
console.log(answer());

// Event to capture user's guess.
document.onkeyup = function (event) {
    userText.textContent = event.key;
};

