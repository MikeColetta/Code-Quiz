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
var timeLeft = 75;

var savedHighscores = [];

//pull from local storage and put onto high scores.
var localStorageContent = localStorage.getItem("savedHighscores");
console.log(localStorageContent);

if (localStorageContent !== null) {
    savedHighscores = JSON.parse(localStorageContent);
}

var gameFinished = false; 

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
    $(question1).delay(350).fadeOut();
    $(question2).delay(750).fadeIn();
    $(answerConfirm1).delay(350).fadeOut();
    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
};

q1Correct.addEventListener("click", function(){
    correctAnswer1();
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
    $(question2).delay(350).fadeOut();
    $(question3).delay(750).fadeIn();
    $(answerConfirm2).delay(350).fadeOut();

    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
};

q2Correct.addEventListener("click", function(){
    correctAnswer2();
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
    $(question3).delay(350).fadeOut();
    $(question4).delay(750).fadeIn();
    $(answerConfirm3).delay(350).fadeOut();

    if (timeleft = 0) {
        timeRunsOut();
        cacheScore();
    };
}

 q3Correct.addEventListener("click", function(){
    correctAnswer3();
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
    $(question4).delay(350).fadeOut();
    $(initialForm).delay(750).fadeIn();
    $(userClock).delay(350).fadeOut();
    $(answerConfirm4).delay(350).fadeOut();
    gameFinished = true;
    finalScore.textContent = timeLeft;

    if (timeleft = 0) {
        timeRunsOut();
        finalScore.textContent = timeLeft;
    };
};

 q4Correct.addEventListener("click", function(){
    correctAnswer4();
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

//Caches and stores initials and score.
submit.addEventListener("click", function (event) {
    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("You can't leave initials blank!");
    } else {
        alert("Highscore submitted, hooray!");
        userClock.setAttribute("style", "display:none;");
        initialForm.setAttribute("style", "display:none;");
        highscores.setAttribute("style", "display:block;");
        savedHighscores.push([initials, timeLeft]);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        displayScores();
    };
});

//Displays scores on highscore screen
function displayScores() {
    scoreboard.innerHTML = ""
    for (var i = 0; i < savedHighscores.length; i++) {
        var currentScore = document.createElement("p");
        currentScore.textContent = savedHighscores[i][0] + " - " + savedHighscores[i][1];
        scoreboard.append(currentScore);
    }
}

//Back button
goBack.addEventListener("click", function (event) {
    startScreen.setAttribute("style", "display:block;");
    userClock.setAttribute("style", "display:block;");
    highscores.setAttribute("style", "display:none;");
    timeLeft = 75;
    countdownClock.textContent = timeLeft;
})

//Clear high scores button
clearHighscores.addEventListener("click", function (event) {
    scoreboard.innerHTML = "";
    localStorage.setItem("savedHighscores", JSON.stringify([]));
    savedHighscores = []
    console.log(localStorage);
})

//Timer function
function quizTimer() {
    var timer = setInterval(function () {
        timeLeft--;
        console.log(timer);

        if (gameFinished === true) {
            clearInterval(timer);
        }

        else if (timeLeft < 0) {
            clearInterval(timer);
            timeRunsOut();
        }
        else {
            countdownClock.textContent = timeLeft;
        }
    }, 1000);
}

//Time runs out function
function timeRunsOut() {
    gameFinished = true;
    question1.setAttribute("style", "display:none;");
    question2.setAttribute("style", "display:none;");
    question3.setAttribute("style", "display:none;");
    question4.setAttribute("style", "display:none;");
    highscores.setAttribute("style", "display:block;");
};

//Wrong/Correct answer functions
function wrongAnswer1(){
    answerConfirm1.setAttribute("style", "color: red;");
    answerConfirm1.textContent = "Wrong!";
}

function correctAnswer1() {
    answerConfirm1.textContent = "Correct!"
}

function wrongAnswer2(){
    answerConfirm2.setAttribute("style", "color: red;");
    answerConfirm2.textContent = "Wrong!"
}

function correctAnswer2() {
    answerConfirm2.textContent = "Correct!";
}

function wrongAnswer3(){
    answerConfirm3.setAttribute("style", "color: red;");
    answerConfirm3.textContent = "Wrong!";
}

function correctAnswer3() {
    answerConfirm3.textContent = "Correct!";
}

function wrongAnswer4(){
    answerConfirm4.setAttribute("style", "color: red;");
    answerConfirm4.textContent = "Wrong!";
}

function correctAnswer4(){
    answerConfirm4.textContent = "Correct!";
}