$(document).ready(function(){
    var gameScreen = document.getElementById ("gameScreen");
    var showLives = document.getElementById ("showLives");
    var showWins = document.getElementById ("showWins");

    var words = ["wonder woman", "captain marvel", "supergirl", "scarlet witch", "storm", "mystique", "black widow", "batgirl", "killer frost"]
        arrLength = words.length;

    var winMessage = "Yay! You did it!"
        loserMessage = "Sorry, you are out of guesses, press any key to try your hand again!"
        letterAlreadyGuessed = "Already tried that one, pick again."
        notLetter = "That is not actually a letter..."

    var winsCounter= 0;
    var livesCounter= 14; 
    var lettersGuessed= [];

    var chosenWord = words[Math.floor(Math.random() * arrLength)];
    var splitWord = chosenWord.split(" ");
    var chosenWordLength = chosenWord.length;
    console.log(chosenWord);

    var placeholder = " ";
        for(var i = 0; i < chosenWordLength; i++){
            placeholder +="_";
        }
    var placeholderSplit = placeholder.split(" ");
        gameScreen.innerHTML = placeholder;

    $("#letter").on("click", function(){
        console.log(letter);
    });
})