"use strict";

//Function that calls the event handler for the button click to start the quiz
function startQuiz()
{
    //create questionNum var and score var
    //call event handler on #startBtn
    //hide div.mainBox interface
    //call handleQuiz function

}

//Function that returns a Question object from the QUESTIONS array 
function handleQuiz()
{

    //returns the current question object the user is on

}

//Function that renders the quiz onto the screen.
function renderQuiz(questionObj)
{
    //check for which quiz to render
    //create necessary html tags and css to show the correct quiz from parameter
    //create necessary form radio button and submit button  
    //call checkAnswer
}

//Function to call the event handler for the button to click for submit answer and checks whether the answer is correct or not then calls
// either renderCorrectAnswer() or renderWrongAnswer()
function checkAnswer(questionObj)
{
    //call event handler on submit button 
    //pull the answer from the questionObj parameter and check if the selected answer matches
    //call either renderCorrectAnswer() or renderWrongAnswer()

}

//Function to let the user know his answer is correct if the user submits the right answer and updates the score accordingly
function renderCorrectAnswer()
{
    //add the necessary html tags and css to current rendered quiz to let user know they got a correct answer
    //transform submit button into next question button
    //call updateScore()
    
}

//Function to let the user know his answer is wrong if the user submits the wrong  answer and updates the score accordingly
function renderWrongAnswer()
{
    //add the necessary html tags and css to current rendered quiz to let user know they got the wrong answer
    //transform submit button into next question button
    //call handleQuiz() passed with renderQuiz();
}

//Function that updates the score based on a true or false parameter
function updateScore()
{
    //adds score
}


//Function to call the event handler for the button to click for reset Quiz
function resetQuiz()
{
    //
}


//function to call with jQuery 
function loadFirst()
{
    //call all other functions

}


//ON PAGE LOAD 
$(loadFirst());