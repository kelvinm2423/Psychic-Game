var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",  "y", "z"];
var wins = 0;
var loses = 0;
var guesses = 9;
var guessesLeft = 9;
var getRandomLetter = "";
var guessedLetters = [];
var gameOver = false;
var letterPressed = String.fromCharCode(e.keyCode);

function getRandomLetter(alphabet) {
  Math.floor(Math.random() * alphabet.length);
}
  
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses: " + guessesLeft;
}
  
window.addEventListener("keyup",eventKeyPressed,true);

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateguessedLetters();
}

getRandomLetter();
updateGuessesLeft();
  
};

if (guessesLeft > 0){
            if (letterPressed == guessedLetters) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0) { 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
};
