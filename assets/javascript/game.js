var options = ["a", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesSoFar = []

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
            toLowerCase();
                
        console.log(userGuess);

        // trying to write guessesSoFar here
        var GuessesSoFar = userGuess;

        var computerGuess = options[Math.floor(Math.random()*options.length)];

        console.log(computerGuess);
        

        if (userGuess==computerGuess) {
            wins++
            alert("You Guessed Correct " + wins);
        } else {
            losses++
            alert("You Choose Poorly" + losses);
        }


        var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left:</p>" +
        "<p>Your Guesses so far:</p>";

        document.querySelector("#game").innerHTML = html;
    }
        

