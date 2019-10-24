var wordList = ["wonder woman", "captain marvel", "supergirl", "scarlet witch", "storm", "mystique", "black widow", "batgirl", "killer frost"];

var chosenWord = " ";
var lettersinWord = [];
var blanks = 0; 
var blanksAndYes = [];
var wrongGuess = [];
var lettersGuessed = [];

//Game Counter//
var winCount = 0;
var lossCount = 0;
var numLives = 14;

//To start or restart the game //

function startGame(){
    numLives = 14;
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersinWord = chosenWord.split(" ");
    blanks = lettersinWord.length;
    console.log(chosenWord);

    blanksAndYes = [];
    wrongGuess = [];

    // To fill blanksAndYes with # of blanks needed for word//
    for(var i = 0; i < blanks; i++){
        blanksAndYes.push("_");
    }
    console.log(blanksAndYes);

    document.getElementById("wordBlanks").innerHTML = blanksAndYes.join(" ");
    
    document.getElementById("lives").innerHTML = numLives;

    document.getElementById("guessed").innerHTML = wrongGuess.join(" ");
}

// To compare to matches//
function checkLetters(letter){
    var wordLetter = false;

    for(var i = 0; i < blanks; i++){
        if(chosenWord[i] === letter){
            wordLetter = true;
        }
    }
    if(wordLetter){
        for( var j = 0; j < blanks, j++){
            if(chosenWord[j] === letter){
                blanksAndYes[j] = letter;
            }
        }
        console.log(blanksAndYes);
    } else{
        wrongGuess.push(letter);
        numLives--;
    }
}

function roundComplete(){
    console.log("Wins: " + winCount + "| Losses: " + lossCount + "| Lives: " + numLives);
}