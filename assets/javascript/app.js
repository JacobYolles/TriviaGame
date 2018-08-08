
// Making sure the document has a ready function.
$(document).ready(function() {


    // Setting variables first!
var questionArray = ["What website do users send tweets on", "What does HTML stand for?", "What does CSS stand for?", "What is a boolean?", "var stands for?"];
var answerArray = [ ["Facebook", "Twitter", "Steam", "Google",], ["Hyper Textual Marking Laundry", "Hyper Text Markup Language", "Hydrated Types Make Liquid", "Happy Typos Master Libraries"], ["Cascading Style Sheets", "Casablancas Super Soakers", "Controling Style Sheets", "Constable Selective Syntax",], ["A yes or no variable", "A true or false variable", "A string value", "A picnic in the park",], ["A variable", "A varsety team", "A variety of things", "A varied type of item",], ];
var images = [];
var correctAnswers = ["B. Twitter", "B. Hypter Text Markup Language", "A. Cascading Style Sheets", "B. A true or false variable", "A. A variable"];
var questionCounter = 0;
var selecterAnswer; 
var counter = 30;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


// CREATING FUNCTIONS




// CREATING A RESET FUNCTION: 
function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}

}); // End result for the document ready function.