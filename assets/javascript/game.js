var options = ["r", "p", "s"];
        var wins = 0;
        var losses = 0;
        var ties = 0;

        document.onkeyup = function() {
            var userguess = String.fromCharCode(event.keyCode).
                toLowerCase();
                
            console.log(userguess)

            var computerGuess = options[Math.floor(Math.random()*options.length)];

            console.log(computerGuess);

            if (userguess=="r" || userguess=="s" || userguess=="p") {
                if ((userguess==computerGuess)) {
                    ties++
                    alert("Tie: " + ties);
                }
                if ((userguess=="r") && (computerGuess=="p")) {
                    losses++
                    alert("Losses: " + losses);
                }
                if ((userguess=="r") && (computerGuess=="s")) {
                    wins++
                    alert("Wins: " + wins);
                }
                if ((userguess=="p") && (computerGuess=="r")) {
                    wins++
                    alert("Wins: " + wins);
                }
                if ((userguess=="p") && (computerGuess=="s")) {
                    losses++
                    alert("Losses: " + losses);
                }
                if ((userguess=="s") && (computerGuess=="r")) {
                    losses++
                    alert("Losses: " + losses);
                }
                    if ((userguess=="s") && (computerGuess=="p")) {
                    wins++
                    alert("Wins: " + wins);
                }
            
            } else {
                alert("Please choose r, p, or s");
            }

            var html = "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" + 
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + ties + "</p>" +
            "<p>Your Guesses so far:</p>"

            document.querySelector("#game").innerHTML = html;
        }
