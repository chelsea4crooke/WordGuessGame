window.onload = function(){
    var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var word ; //words in array to be guessed
    var guess ; //user guesses
    var guesses ; //stored guesses
    var lives ; //lives left counter
    var wins ; //wins counter
    var space ; //# spaces in word marked by "_"

    //get elements
    var showLives= document.getElementById("myLives");
    var showWins= document.getElementById("myWins");

    //create alphabet ul
    var buttons= function(){
        myButtons= document.getElementById("buttons");
        letters= document.createElement("ul");

        for(var i = 0; i < alphabet.length; i++){
            letters.id = "alphabet";
            list= document.createElement("li");
            list.id= "letters";
            list.innerHTML= alphabet[i];
            check();
            myButtons.appendChild("letters");
            letters.appendChild("list");
        }
    }
    
}