window.onload = function(){
    var gameScreen = document.getElementById ("gameScreen");
    var showLives = document.getElementById ("showLives");
    var showWins = document.getElementById ("myWins");

    var buttons = document.getElementsByClassName ("letter");

        for(var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", alphaButtons);
        }

        function alphaButtons(){
            comments();
            checkGuess(this.id);
            console.log(checkGuess(this.id));
        }   
        
    var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var word = ["wonder woman", "captain marvel", "supergirl", "scarlet witch", "storm", "mystique", "black widow", "batgirl", "killer frost"]
    var wins= 0;
    var lives= 14;
    var guesses= [] ; //stored guesses
    var correct= [];
    var xes= [];
    var hidden= [];
    function randomWord(){
        return word[Math.floor(Math.random() * word.length)];
    }

    //Init Game//
    var game = {
        wins,
        lives,
        gameWorld: randomWord(),
    }

    gameScreenLoopInt();

    //Game Screen Initialize//

    function gameScreenLoopInt(){
        for(var j=0; j< word.length; j++){
            hidden[j]= "_";
            gameScreen.textContent += hidden[j];
        }
    }
    // Create Guesses//
    function checkGuess(x){
        var wordLength= randomWord.length();
        for(h=0; h < wordLength; h++){
            if(x == game.computerGuess[h]){
                hidden[h]= x;
                gameScreen.textContent= "";
                for(var k=0; k < wordLength; k++){
                    gameScreen.textContent += hidden[k];
                }
            }else {;}
        }
    }
    //show lives//
    function comments(){
        showLives.textContent("You have" + lives + "lives left!");
        if(lives < 1){
            showLives.textContent("Game Over!");
        }else{
            ;
        }
    }
}
