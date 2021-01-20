var countdownClock = document.querySelector("#countdownClock");
var startScreen = document.querySelector(".start");

//Questions and screens
var startButton = document.querySelector("#startButton");
var question1 = document.querySelector("#Q1");
var question2 = document.querySelector("#Q2");
var question3 = document.querySelector("#Q3");
var question4 = document.querySelector("#Q4");
var initialForm = document.querySelector("#initialForm");
var initialInput = document.querySelector("#initialInput");
var highscores = document.querySelector("#highscores");
var scoreboard = document.querySelector("#scoreboard");
var userClock = document.querySelector("#userClock");
var finalScore = document.querySelector("#finalScore");
var viewHighscores = document.querySelector("#viewHighscores");
var answerConfirm1 = document.querySelector("#answerConfirm1")
var answerConfirm2 = document.querySelector("#answerConfirm2")
var answerConfirm3 = document.querySelector("#answerConfirm3")
var answerConfirm4 = document.querySelector("#answerConfirm4")


//Answer buttons
var q1Correct = document.querySelector("#q1Correct");
var q1Wrong1 = document.querySelector("#q1Wrong1");
var q1Wrong2 = document.querySelector("#q1Wrong2");
var q1Wrong3 = document.querySelector("#q1Wrong3");
var q2Correct = document.querySelector("#q2Correct");
var q2Wrong1 = document.querySelector("#q2Wrong1");
var q2Wrong2 = document.querySelector("#q2Wrong2");
var q2Wrong3 = document.querySelector("#q2Wrong3");
var q3Correct = document.querySelector("#q3Correct");
var q3Wrong1 = document.querySelector("#q3Wrong1");
var q3Wrong2 = document.querySelector("#q3Wrong2");
var q3Wrong3 = document.querySelector("#q3Wrong3");
var q4Correct = document.querySelector("#q4Correct");
var q4Wrong1 = document.querySelector("#q4Wrong1");
var q4Wrong2 = document.querySelector("#q4Wrong2");
var q4Wrong3 = document.querySelector("#q4Wrong3");

//End of game buttons
var submit = document.querySelector("#submit");
var goBack = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");
var boardInitials = document.querySelector("#boardInitials");
var boardScore = document.querySelector("#boardScore");

//Start time
var timeLeft = 60;

var savedHighscores = [];

var localStorageContent = localStorage.getItem("savedHighscores")
console.log(localStorageContent)

if (localStorageContent !== null) {
    savedHighscores = JSON.parse(localStorageContent)
}

var gameFinished = false;

//get stored scores
// localStorage.getItem("initials", initials);
// localStorage.getItem("score", timeLeft);
// boardInitials.append.textContent = (localStorage.getItem("initials") + " -");
// boardScore.append.textContent = localStorage.getItem("score");   

//view highscores menu
viewHighscores.addEventListener("click", function(){
    startScreen.setAttribute("style", "display:none;");
    question1.setAttribute("style", "display:none;");
    question2.setAttribute("style", "display:none;");
    question3.setAttribute("style", "display:none;");
    question4.setAttribute("style", "display:none;");
    initialForm.setAttribute("style", "display:none;");
    highscores.setAttribute("style", "display:block;");
    gameFinished = true
    displayScores()
});

//When you click start button you hide the start menu and start the quiz timer.
function hideStart(){
    startScreen.setAttribute("style", "display:none;");
    question1.setAttribute("style", "display:block;");
    gameFinished = false;
};

startButton.addEventListener("click", function(){
    hideStart();
    quizTimer();
});

//Moves to question 2 after answering question 1
function hideQ1(){
    // question1.setAttribute("style", "display:none;");
    // question2.setAttribute("style", "display:block;");
    $(question1).delay(350).fadeOut();
    $(question2).delay(750).fadeIn();
    $(answerConfirm1).delay(350).fadeOut();
    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
};

q1Correct.addEventListener("click", function(){
    correctAnswer1()
    hideQ1();
});

q1Wrong1.addEventListener("click", function(){
    wrongAnswer1();
    hideQ1();
    timeLeft -= 10;
    
});

q1Wrong2.addEventListener("click", function(){
    wrongAnswer1();
    hideQ1();
    timeLeft -= 10;
});

q1Wrong3.addEventListener("click", function(){
    wrongAnswer1();
    hideQ1();
    timeLeft -= 10;
});

//Moves to question 3 after answering question 2
function hideQ2(){
    //question2.setAttribute("style", "display:none;");
    //question3.setAttribute("style", "display:block;");
    $(question2).delay(350).fadeOut();
    $(question3).delay(750).fadeIn();
    $(answerConfirm2).delay(350).fadeOut();

    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
};

q2Correct.addEventListener("click", function(){
    correctAnswer2()
    hideQ2();
});

q2Wrong1.addEventListener("click", function(){
    wrongAnswer2();
    hideQ2();
    timeLeft -= 10;
});

q2Wrong2.addEventListener("click", function(){
    wrongAnswer2();
    hideQ2();
    timeLeft -= 10;
});

q2Wrong3.addEventListener("click", function(){
    wrongAnswer2();
    hideQ2();
    timeLeft -= 10;
});

//Moves to question 4 after answering question 3
function hideQ3() {
    // question3.setAttribute("style", "display:none;");
    // question4.setAttribute("style", "display:block;");
    $(question3).delay(350).fadeOut();
    $(question4).delay(750).fadeIn();
    $(answerConfirm3).delay(350).fadeOut();

    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
}

 q3Correct.addEventListener("click", function(){
    correctAnswer3() 
    hideQ3();
 });

 q3Wrong1.addEventListener("click", function(){
    wrongAnswer3(); 
    hideQ3();
     timeLeft -= 10;
 });

 q3Wrong2.addEventListener("click", function(){
    wrongAnswer3();
    hideQ3();
    timeLeft -= 10;
});

q3Wrong3.addEventListener("click", function(){
    wrongAnswer3();
    hideQ3();
    timeLeft -= 10;
});

//Moves to initial page after answering question 4
function finishQuiz() {
    // question4.setAttribute("style", "display:none;");
    // initialForm.setAttribute("style", "display:block;");
    // userClock.setAttribute("style", "display:none;")
    $(question4).delay(350).fadeOut();
    $(initialForm).delay(750).fadeIn();
    $(userClock).delay(350).fadeOut();
    $(answerConfirm4).delay(350).fadeOut();
    gameFinished = true
    finalScore.textContent = timeLeft;

    if (timeleft = 0) {
        timeRunsOut();
        finalScore.textContent = timeLeft;
    };
};

 q4Correct.addEventListener("click", function(){
    correctAnswer4() 
    finishQuiz();
 });

 q4Wrong1.addEventListener("click", function(){
    wrongAnswer4(); 
    timeLeft -= 10;
     finishQuiz();
 });

 q4Wrong2.addEventListener("click", function(){
    wrongAnswer4();
    timeLeft -= 10;
    finishQuiz();
});

q4Wrong3.addEventListener("click", function(){
    wrongAnswer4();
    timeLeft -= 10;
    finishQuiz();
});

//Caches and stores initials.
submit.addEventListener("click", function (event) {

    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("You can't leave initials blank!");
    } else {
        alert("Highscore submitted, hooray!")

        initialForm.setAttribute("style", "display:none;");
        highscores.setAttribute("style", "display:block;");
        savedHighscores.push([initials, timeLeft])
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores))
        displayScores()
    }
})

function displayScores() {
    scoreboard.innerHTML = ""
    for (var i = 0; i < savedHighscores.length; i++) {
        var currentScore = document.createElement("p")
        currentScore.textContent = savedHighscores[i][0] + " - " + savedHighscores[i][1]
        scoreboard.append(currentScore)
    }
}

//Back button
goBack.addEventListener("click", function (event) {
    startScreen.setAttribute("style", "display:block;");
    userClock.setAttribute("style", "display:block;");
    highscores.setAttribute("style", "display:none;");
    timeLeft = 60;
    countdownClock.textContent = timeLeft
})

//Clear high scores button
clearHighscores.addEventListener("click", function (event) {
    scoreboard.innerHTML = ""
    localStorage.setItem("savedHighscores", JSON.stringify([]))
})

//This function runs the timer
function quizTimer() {
    var timer = setInterval(function () {
        timeLeft--;
        console.log(timer);

         if (gameFinished === true) {
              clearInterval(timer);
          }

        else if (timeLeft <= 0) {
            clearInterval(timer);
            timeRunsOut();
        }
        // else if (gameFinished = true) {
        //      clearInterval(timer);
        //  }
        else {
            countdownClock.textContent = timeLeft;
        }
    }, 1000);
}

//Time runs out function
function timeRunsOut() {
    question1.setAttribute("style", "display:none;");
    question2.setAttribute("style", "display:none;");
    question3.setAttribute("style", "display:none;");
    question4.setAttribute("style", "display:none;");
    highscores.setAttribute("style", "display:block;");
};

//wrong answer function
function wrongAnswer1(){
    answerConfirm1.setAttribute("style", "color: red;")
    answerConfirm1.textContent = "Wrong!"
}

function correctAnswer1() {
    answerConfirm1.textContent = "Correct!"
}

function wrongAnswer2(){
    answerConfirm2.setAttribute("style", "color: red;")
    answerConfirm2.textContent = "Wrong!"
}

function correctAnswer2() {
    answerConfirm2.textContent = "Correct!"
}

function wrongAnswer3(){
    answerConfirm3.setAttribute("style", "color: red;")
    answerConfirm3.textContent = "Wrong!"
}

function correctAnswer3() {
    answerConfirm3.textContent = "Correct!"
}

function wrongAnswer4(){
    answerConfirm4.setAttribute("style", "color: red;")
    answerConfirm4.textContent = "Wrong!"
}

function correctAnswer4(){
    answerConfirm4.textContent = "Correct!"
}

// My pseudocode

//Will need different sections of HTML and hide/show what the user is using at the time. 

//No loop, just each button continues the game to a new piece of hidden HTML.

//write out the HTML (start page, template questions, all done, high scores) Easier to start with HTML/CSS and then go JS.

//JS 
//when the user clicks the start page button (1. timer starts going down from X 2. move onto first question)
    //make a timer using setInterval timer is separate from HTML
    //add event listener on start button
    //when that button is pushed unhide first question and hide start. (Use .hide and then use display:none)
//When user clicks any answer button (1. check if question is right or wrong 2. continues to next question)
    //event listeners for every answer. An array of objects. Each object would have Question, answers, correct answer.
        //1.Check if answer correct 2. move onto next question
//When the user finishes all questions OR timer runs out go to All Done page. (submit initials) Game records time left on clock.
    //form for initials
    //save current spot on timer SetTimer will have variable that saves value after last question is finished. Timer -- every second. (1000)
    //when they submit high score saves Initials those initials go to high score page.
//View initials and high scores. Go back or clear high scores. 
    //Two buttons: 1. Clear high scores 2. Restart

//hides start menu and shows the first question.