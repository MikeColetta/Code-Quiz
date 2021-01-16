




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

var timeLeft 

//this function should hide the start page and start timer
function startQuiz() {    
    timeLeft = 60
var timer = setInterval(function () {
    timeLeft--
    console.log(timeLeft)

    if (timeLeft === 0) {
        clearInterval(timer)
    }
}, 1000)
}
//event listener for the start button and run startQuiz

