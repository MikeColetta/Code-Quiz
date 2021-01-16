var countdownClock = document.querySelector("#countdownClock");
var startScreen = document.querySelector(".start");

//Questions and screens
var startButton = document.querySelector("#startButton")
var question1 = document.querySelector("#Q1")
var question2 = document.querySelector("#Q2")
var question3 = document.querySelector("#Q3")
var question4 = document.querySelector("#Q4")
var initialForm = document.querySelector("#initialForm")
var initialInput = document.querySelector("#initialInput")
var highscores = document.querySelector("#highscores")
var scoreboard = document.querySelector("#scoreboard")
var userClock = document.querySelector("#userClock")
var finalScore = document.querySelector("#finalScore")

//Answer buttons
var q1Correct = document.querySelector("#q1Correct")
var q1Wrong1 = document.querySelector("#q1Wrong1")
var q1Wrong2 = document.querySelector("#q1Wrong2")
var q1Wrong3 = document.querySelector("#q1Wrong3")
var q2Correct = document.querySelector("#q2Correct")
var q2Wrong1 = document.querySelector("#q2Wrong1")
var q2Wrong2 = document.querySelector("#q2Wrong2")
var q2Wrong3 = document.querySelector("#q2Wrong3")
var q3Correct = document.querySelector("#q3Correct")
var q3Wrong1 = document.querySelector("#q3Wrong1")
var q3Wrong2 = document.querySelector("#q3Wrong2")
var q3Wrong3 = document.querySelector("#q3Wrong3")
var q4Correct = document.querySelector("#q4Correct")
var q4Wrong1 = document.querySelector("#q4Wrong1")
var q4Wrong2 = document.querySelector("#q4Wrong2")
var q4Wrong3 = document.querySelector("#q4Wrong3")

var submit = document.querySelector("#submit")

var timeLeft = 60;


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

function hideStart(){
    startScreen.setAttribute("style", "display:none;");
    question1.setAttribute("style", "display:block;");
};

startButton.addEventListener("click", function(){
    hideStart();
    quizTimer();
});

function hideQ1(){
    question1.setAttribute("style", "display:none;");
    question2.setAttribute("style", "display:block;");
};

q1Correct.addEventListener("click", function(){
    hideQ1();
});

q1Wrong1.addEventListener("click", function(){
    hideQ1();
    timeLeft -= 10;
});

q1Wrong2.addEventListener("click", function(){
    hideQ1();
    timeLeft -= 10;
});

q1Wrong3.addEventListener("click", function(){
    hideQ1();
    timeLeft -= 10;
});


function hideQ2(){
    question2.setAttribute("style", "display:none;");
    question3.setAttribute("style", "display:block;");
};

q2Correct.addEventListener("click", function(){
    hideQ2();
});

q2Wrong1.addEventListener("click", function(){
    hideQ2();
    timeLeft -= 10;
});

q2Wrong2.addEventListener("click", function(){
    hideQ2();
    timeLeft -= 10;
});

q2Wrong3.addEventListener("click", function(){
    hideQ2();
    timeLeft -= 10;
});

function hideQ3(){
    question3.setAttribute("style", "display:none;");
     question4.setAttribute("style", "display:block;");
 }

 q3Correct.addEventListener("click", function(){
     hideQ3();
 });

 q3Wrong1.addEventListener("click", function(){
     hideQ3();
     timeLeft -= 10;
 });

 q3Wrong2.addEventListener("click", function(){
    hideQ3();
    timeLeft -= 10;
});

q3Wrong3.addEventListener("click", function(){
    hideQ3();
    timeLeft -= 10;
});

function hideQ4(){
    question4.setAttribute("style", "display:none;");
    initialForm.setAttribute("style", "display:block;");
    userClock.setAttribute("style", "display:none;")
    cacheScore();
 }

 q4Correct.addEventListener("click", function(){
     hideQ4();
 });

 q4Wrong1.addEventListener("click", function(){
     hideQ4();
     timeLeft -= 10;
 });

 q4Wrong2.addEventListener("click", function(){
    hideQ4();
    timeLeft -= 10;
});

q4Wrong3.addEventListener("click", function(){
    hideQ4();
    timeLeft -= 10;
});

function cacheScore() {
    localStorage.setItem("score", timeLeft);
    console.log(timeLeft)
    var userScore = localStorage.getItem("score")
    finalScore.textContent = userScore;
    console.log(userScore)
}

submit.addEventListener("click", function (event) {

    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("You can't leave initials blank!");
    } else {
        alert("Highscore submitted, hooray!")

        localStorage.setItem("initials", initials)
    }

})

//this function runs the timer
function quizTimer() {
    var timer = setInterval(function () {
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            hideQ1()
            hideQ2()
            hideQ3()
            hideQ4()
        } else {
            countdownClock.textContent = timeLeft;
        }
    }, 1000);
}