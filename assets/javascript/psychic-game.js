

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guesses = []; //guess counter
var triesLeft= 7; //turn counter
var wins =0; //wins counters
var used= []; //holds guesses that are wrong
var losses = 0; //losses counter

document.getElementById("tries-left").textContent= triesLeft;



var random= alphabet[Math.floor(Math.random() * alphabet.length)]; 

document.onkeyup = function(event) {
    var userGuess = event.key;
 
        if (userGuess === random) {//if its right add 1 win
            wins ++; 
            document.getElementById("wins").textContent = "Wins: " + wins; 
            used = [];
            triesLeft=7;
           document.getElementById("correct").textContent="Correct! You're psychic!";
            random;
        
        } 
        if (userGuess !== random) {
            triesLeft--;
            document.getElementById("tries-left").textContent = triesLeft; 
        }
    
        if (triesLeft ===0)  {
            losses++;
            document.getElementById("correct").textContent="You lose! Guess again.";
            // $("#correct").onkeyup(function() { //was trying to clear the message once key was pressed again.
            //     $(this).hide();
            // }
            document.getElementById("losses").textContent = "Losses: " + losses; 
            used=[];
            triesLeft=7; 
            random;
           
            
        }
    

        if (used.indexOf(userGuess) >= 0) {
            

        } else {
            used.push(" " + userGuess);
            document.getElementById("guesses").textContent = used;
            console.log(used);
        }
    }
