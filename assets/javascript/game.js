var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesSoFar = []

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
            toLowerCase();
                
        console.log(userGuess);

        // trying to write guessesSoFar here
        guessesSoFar.push(userGuess);
        console.log(guessesSoFar); 

        var computerGuess = options[Math.floor(Math.random()*options.length)];

        console.log(computerGuess);
        

        if (userGuess==computerGuess) {
            wins++
            numGuesses = 9;
            guessesSoFar = [];
            alert("You Guessed Correct " + wins);
        } 
        else if (numGuesses==0){
            losses++;
            numGuesses = 9;
            guessesSoFar = [];
            alert("Try Harder - Click OK to Continue")
        }
        else {
            alert("You Choose Poorly");
            numGuesses--;
        }
    


        var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>";

        document.querySelector("#game").innerHTML = html;
    }
        

