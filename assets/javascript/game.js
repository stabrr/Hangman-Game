//initialize variables

//lists of words for hangman
var wordList = ['hammer', 'plaster', 'painting', 'drilling', 'repairs', 'toilet', 'electrician', 'contractor', 'hangman','bathroom','nails','drywall','garage','ceiling'];
//declaring global variables
var userGuess = "";
var currentWord = "";
var unsolvedWord = [];
var lettersGuessed = [];
var usedLetters = "";
var alreadyGuessed = false;	
var winCounter = 0;
var lossCounter = 0;
var lettersLeft =12;
var letterInWord = false;
var startNewGame = true;

//function will start new game and reset all variables
function newWord(){
	startNewGame = false;	
	currentWord = "";
	unsolvedWord = [];
	lettersGuessed = [];
	usedLetters = "";
	alreadyGuessed = false;	
	lettersLeft =12;
	//selects new word from the word list
	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(currentWord);	
	//splits word so you can look at each letter
 	currentLetters =currentWord.split("");
 	console.log(currentLetters);
 	blanks = currentLetters.length;
 	console.log(blanks);
 	//creates the underscores for the unsolved puzzle
 	for (var i=0; i < blanks; i++){
 		unsolvedWord.push("_");
 	}
 	console.log(unsolvedWord);
}


	
//Function for reading each key
document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);

// Function for checking each letter
    function checkLetter(letter){
      letterInWord = false;
      alreadyGuessed = false;
      //determins if the letter is in the word
      for (var i=0; i<currentWord.length; i++){
      	if (letter == currentWord[i]){
      		letterInWord = true;
      		unsolvedWord[i] = letter;
      	}
      }
      console.log("letterInWord: " + letterInWord)
      
      //if letter is not in the word see if it has been guessed before
      if (!letterInWord) {
      	console.log("why")
      	for (var i=0; i<lettersGuessed.length; i++){
      		if (letter == lettersGuessed[i]){
      			alreadyGuessed = true;
      		}
      	}
      	console.log("alreadyGuessed: " + alreadyGuessed);
      	//if already guessed skip it
      	if (alreadyGuessed){
      		console.log("usedLetters: " + usedLetters);
      		}
      		//else change the amount of guesses and add to the list of guessed letters
      	else {
      		console.log("leters left= " + lettersLeft);
      		lettersLeft--;
      		lettersGuessed.push(userGuess);
      		}
      	}      	
      }
      
  	 
	
  	
 //start new game or check the letters in game
     	if (startNewGame){
  		newWord();
  		}
  		//check for letters in game
  		else{

		
   		checkLetter(userGuess);
   		console.log("used letter " + userGuess);
    	console.log("usedLetters: " + usedLetters);
    	//if word matches add the win and start game over
    	if (currentLetters.toString() == unsolvedWord.toString()) {
    		//if (currentLetters == unsolvedWord){
    		console.log("we have a winner");
    		winCounter++;
    		console.log("winCounter" + winCounter);
    		startNewGame=true;
    	};
    	//if no guesses left start add the loss and start game over
    	if (lettersLeft === 0){
    		console.log("you lose");
    		lossCounter++;
    		console.log("losscounter: " + lossCounter);
    		startNewGame=true;
    	}

      	console.log("currentLetters: " + currentLetters + " unsolvedWord: " + unsolvedWord);
      	console.log(unsolvedWord);
      	console.log(lettersGuessed);
      	console.log("leters left= " + lettersLeft);
      	console.log("startNewGame" + startNewGame);
      	document.getElementById('guessesLeft').innerHTML = "Number of Guesses Left " + lettersLeft;
      	document.getElementById('unsolve').innerHTML = unsolvedWord.join(" ");
      	document.getElementById('guesses').innerHTML = "Guessed Letters: " + lettersGuessed.join(" ");
      	document.getElementById('wins').innerHTML = "Wins= " + winCounter;
      //	document.getElementById('loss').innerHTML = "Losses= " + lossCounter; 




	}
  }
 

	
	


	
	