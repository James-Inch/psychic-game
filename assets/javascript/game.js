// Array that holds all posible computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to hold game info; wins, losses, guesses left, guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Create a variable for computerChoice 
document.onkeyup = function (event) {

    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // var for useerChoice
    var userChoice = event.key;
    console.log(userChoice);
    // if statement to compare userChoice to computerchoice
    if (userChoice === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
        console.log("win");
    }
    if (userChoice !== computerChoice) {
        guessesLeft--;
        guessesSoFar.push(userChoice)
        console.log("lose");
        
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        userChoice;
    }



    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + userChoice + ", " + "</p>"

    document.querySelector("#game").innerHTML = html;


};
 // Random loop, might need later who knows at this piont   
// for (var i = 0; i < computerChoice.length; i++) {

  // };
  // ok lets write some shit on this god damn page...
  // do I need an array for the user input???
  // I'll need something that captures the user input...
  // Something that compares the computerChoice tho the userChoice...
  // ill need an "if" that writes to the var wins = +1 when the computerChoice === userChoice...
  // I either need a the below sentence or just a esle for if the computerChoice and userchoice arn't the same 
  // ill need an "if" that writes to the var losses = +1 when the computerChoice !== userChoice...  