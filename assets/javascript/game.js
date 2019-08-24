var ladies = ["wonder woman", "captain marvel", "supergirl", "scarlet witch", "storm", "mystique", "black widow", "batgirl", "killer frost"];

var wins= 0;
var losses= 0;
var guessesLeft= 14;

var randWord= Math.floor(Math.random() * ladies.length);
var choosenWord= ladies[randWord];
var lettersOfWord= [];
var randWord= "";
var underScore= [];
var numbLetters= [];
var underScore= 0;
var userGuesses= [];

var docunderScore= document.getElementsByClassName("underScore");
var doclettersOfWord= document.getElementsByClassName("lettersOfWord");
var docwins= document.getElementsByClassName("wins");
var doclosses= document.getElementsByClassName("losses");
var docguessesLeft= document.getElementsByClassName("guessesLeft");
var docuserGuesses= document.getElementsByClassName("userGuesses");

console.log(choosenWord);

document.onkeyup= function (){
    var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuesses);
    
    var generateUnderscore = () => {
    for(var i= 0; i < choosenWord.length; i++){
        underScore.push("_");
     }   
        return underScore;
    }
} 
    
    var randWord= ladies[Math.floor(Math.random() * ladies.length)];
    console.log(randWord);

    numbLetters= randWord.split("");
    console.log(numbLetters);

    underScore= numbLetters.length;
    console.log(underScore);

    for(var i= 0; i< numbLetters.length; i++){
        userGuesses.push("_");

        document.addEventListener("keypress", (event) => {
            var keyWord= String.fromCharCode(event.keyCode);
                
            if(choosenWord.indexOf(keyWord) > -1){
                userGuesses.push(keyWord);
                underScore[choosenWord.indexOf(keyWord)]= keyWord;
                docunderScore[0].innerHTML= underScore.join(" ");
                docuserGuesses[0].innerHTML= wins;
                if(underScore.join(" ") == choosenWord){
                    alert("You Win!");
                }
            }
        });
    }








