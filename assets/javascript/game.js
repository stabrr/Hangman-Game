//initialize variables

//lists of words for hangman
var wordList = ['words', 'hangman','bathroom','nails','drywall','garage','ceiling'];
var userGuess = "g";
var currentWord = "";
var unsolvedWord = [];
var lettersGuessed = ["a","b"];
var winCounter = 0;
var lossCounter = 0;
var lettersLeft =0;

function newWord(){
 currentWord = wordList[Math.floor(Math.random() * wordList.length)];
 console.log(currentWord);	
 currentLetters =currentWord.split("");
 console.log(currentLetters);
 blanks = currentLetters.length;
 console.log(blanks);
 for (var i=0; i < blanks; i++){
 	unsolvedWord.push("_");
 }
 console.log(unsolvedWord);
}


//List variables
newWord();
document.getElementById('listVariables').innerHTML = "userGuess: ";
document.write("currentWord: " + currentWord + "; lettersGuessed: " + lettersGuessed + "; winCounter:" + winCounter + "; lossCounter:" + lossCounter + "; lettersLeft" + lettersLeft);
console.log(wordList);


