# Code-Quiz

## Project Description

I created a quiz game on coding. The quiz game has a timer that starts when the player starts the game and counts down from 60 seconds. When the timer reaches 0 the game ends. 

## My Process

I started working on the pseudocode for this class first. That really helped me plan out and realize what I was doing. The first steps were to get the HTML and CSS in a good place. After that, I started to work on the Javascript. I added most of my variables first, then the timer and finally the button that started the quiz.

My first hiccup was realizing I would need separate IDs for every button in the quiz portion. I'm sure there is a more efficient way, but this ensured that every single question was targeted to the correct answer. I also added event listeners for every single button and moving it through the quiz by setting the display on one HTML element to none and block on the other. That is how I display the elements as you take the quiz. 

After I mapped out the quiz in it's entirety I started to add the functions that would implement the -10 second penalty to every wrong answer button pushed. I then set up the functionality for displaying the score, caching the user initials, and setting up the scoreboard. 

Some big hurdles I had involved stopping the time interval and creating the local storage. I realized my timer was not stopping unless it reached zero. So I moved the if statement stopping the timer if the player beat the quiz before the timer reaching zero. I also made a new variable to represent if the game was finished or not. For local storage I initially had the score and initials in two separate data storage variables. With help from my tutor I switched them to be a part of an array. I then call on them at the beginning of my application.

I noticed at this point that while my game was almost complete, I was missing the prompt that tells you whether you got the right or wrong answer. I decided to use JQuery for this since my code was already quite long and we have been learning that in class this week. I used the .delay, .fadeIn and .fadeOut methods to make this work. I also have it set to change the text color to red when the answer is wrong.

My final step fixing a bug I had when the user clicks the "Clear highscores" button. The problem was while the local storage was emptied the saveHighscores array was not blank if the user had just played a game. So I set that to an empty array. 

Overall this was a very challenging assignment, but I feel very good about how much I was able to figure out myself along the way.

## Project Link
[Deployed Link](https://mikecoletta.github.io/Code-Quiz/)

## Site Screenshots
![Screenshot 1](Images\Screenshot1.JPG)
![Screenshot 2](Images\Screenshot2.JPG)
![Screenshot 3](Images\Screenshot3.JPG)
![Screenshot 4](Images\Screenshot4.JPG)
![Screenshot 5](Images\Screenshot5.JPG)
![Screenshot 6](Images\Screenshot6.JPG)
![Screenshot 7](Images\Screenshot7.JPG)

## Credits
How to make an element fadeIn and fadeOut (https://stackoverflow.com/questions/2567832/code-to-make-div-appear-after-a-certain-amount-of-time)

Clearing Local Storage (https://stackoverflow.com/questions/7667958/clearing-localstorage-in-javascript)

Changing Focus Attribute in Bootstrap (https://stackoverflow.com/questions/50912050/bootstrap-button-focus)