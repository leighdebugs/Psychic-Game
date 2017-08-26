

//set variables
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesList = [];



//game

$(function(generateletter) {
	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"];
	var  randomLetter = letters[Math.floor(Math.random() * letters.length + 1)];
	console.log(randomLetter);
			

    $(document).keypress(function(compare) {
    	var userGuessOrig = event.key;
    	var userGuess = userGuessOrig.toUpperCase();
    	console.log(userGuess);
    	guessesList.push(userGuess);
    	$("#guesses-list").append(userGuess);

        if (userGuess == randomLetter) {
            wins++;
            $("#wins").append(wins)
            guessesLeft = 9;
            guessesList.length = 0;
        } else if (guessesLeft == 0) {
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;
        } else if (userGuess !== randomLetter) {
            guessesLeft--;
            $("#losses").append(losses);
        } else {
            alert("What happened?");
        }
    });

});