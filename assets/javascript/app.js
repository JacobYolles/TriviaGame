






// Making sure the document has a ready function.
$(document).ready(function() {

// CREATING FUNCTIONS

// Creating an initialization function: 
// The start screen = the paragraph text that I sent to the main screen. I'll also need to call this function.
// EDIT THIS TO RUN THE BUTTON.
function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $(".mainArea").html(startScreen);
}

    initialScreen();


    // Creating a function that will allow the HTML be ran when the start button is clicked that adds it to the screen.
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
   
        generateHTML();
    
        timerWrapper();
    
    });  // END START BUTTON CLICK.

    //Creating Variables for the answers that can be clicked on. Changing the results are based on whether the answer is true or false.
    $("body").on("click", ".answer", function(event){
        //answeredQuestion = true;
      
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
         //Sounds off if the answer matches my array of correct answers.
    
            clearInterval(theClock);
            generateWin();
        }
        else {
        // Sounds off if the answer doesn't match my array of correct answers.
            clearInterval(theClock);
            generateLoss();
        }
    }); // END ANSWER CLICK

    //Creating a simple reset button
    $("body").on("click", ".reset-button", function(event){
                            //EXTRAS GO HERE.
        resetGame();
    }); // Closes reset-button click

    }); // End result for the document ready function.

//CREATING ADVANCED FUNCTIONS:


// 1. What happens when the user loses as a result of a timeout.

function generateTimeOutLoss() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 2000); 
}

// 2. What happens when the user wins.

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 2000);  
}

// 3. What happens when the user loses.

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 2000); 
}

// 4. What happens to generate the HTML


function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
}

// Creating the time loop!

function wait() {
    if (questionCounter < 4) {
    questionCounter++;
    generateHTML();
    counter = 30;
    timerWrapper();
    }
    else {
        finalScreen();
    }
}

// CREATING THE CLOCK!

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

// Creating the Final Screen

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainArea").html(gameHTML);
}

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


    // Setting variables first!
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["What website do users send tweets on", "What does HTML stand for?", "What does CSS stand for?", "What is a boolean?", "var stands for?"];
    var answerArray = [ ["Facebook", "Twitter", "Steam", "Google",], ["Hyper Textual Marking Laundry", "Hyper Text Markup Language", "Hydrated Types Make Liquid", "Happy Typos Master Libraries"], ["Cascading Style Sheets", "Casablancas Super Soakers", "Controling Style Sheets", "Constable Selective Syntax",], ["A yes or no variable", "A true or false variable", "A string value", "A picnic in the park",], ["A variable", "A varsety team", "A variety of things", "A varied type of item",], ];
    var imageArray = ["<img class='center-block img-right' src='assets/images/twitter.jpeg'>", "<img class='center-block img-right' src='assets/images/html.jpeg'>", "<img class='center-block img-right' src='assets/images/css.jpeg'>", "<img class='center-block img-right' src='assets/images/boolean.jpeg'>", "<img class='center-block img-right' src='assets/images/variable.png'>"];
    var correctAnswers = ["B. Twitter", "B. Hyper Text Markup Language", "A. Cascading Style Sheets", "B. A true or false variable", "A. A variable"];
    var questionCounter = 0;
    var selecterAnswer; 
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound;