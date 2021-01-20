# Code-Quiz

## Project Description

I created a quiz game on coding. The quiz game has a timer that starts when the player starts the game and counts down from 60 seconds. When the timer reaches 0 the game ends. 

## My Process

I started working on the pseudocode for this class first. That really helped me plan out and realize what I was doing. The first steps were to get the HTML and CSS in a good place. After that, I started to work on the Javascript. I added most of my variables first, then the timer and finally the button that started the quiz.

My first hiccup was realizing I would need separate IDs for every button in the quiz portion. I'm sure there is a more efficient way, but this ensured that every single question was targeted to the correct answer. I also added event listeners for every single button and moving it through the quiz by setting the display on one HTML element to none and block on the other. That is how I display the elements as you take the quiz. 

After I mapped out the quiz in it's entirety I started to add the functions that would implement the -10 second penalty to every wrong answer button pushed. I then set up the functionality for displaying the score, caching the user initials, and setting up the scoreboard. 

Some big hurdles I had involved stopping the time interval and creating the local storage. I realized my timer was not stopping unless it reached zero. So I moved the if statement stopping the timer if the player beat the quiz before the timer reaching zero. I also made a new variable to represent if the game was finished or not. For local storage I initially had the score and initials in two separate data storage variables. With help from my tutor I switched them to be a part of an array. I then call on them at the beginning of my application.


## Project Link
[Deployed Link]()

## Site Screenshot




## Credits

