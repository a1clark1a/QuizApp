"use strict";

//Function that adds an event listener to the start btn
function startQuiz()
{
   
    $('#startBtn').on('click', function() {
        //When button is pressed hide start menu
        $('.startMenu').hide();
        //then render the quiz
        renderQuiz();
        //and render the score and current question number
        displayScoreAndCurrent();
    });
    //once startQuiz is called always be checking for answer (might need to find a better place to call this)
    checkAnswer();

}

//Function responsible for rendering the first question inside the DATA object's array of question property
function renderQuiz()
{
    //to make accessing easier, pull the question object from DATA.questions array using the current key's value into a local variable
    let currentQuestionObj = DATA.questions[DATA.current]
    //create HTML element for quiz
    $('.mainSection').append(`<div class="mainBox quiz">
                <img class="imgQuestion" src="${currentQuestionObj.img}" alt="${currentQuestionObj.alt}">
                <form id="choicesForm">
                    <fieldset class="radioContainer">
                    </fieldset>
                    <button type="submit class="submitBtn" >Submit</button>
                </form>
            </div>`);
    //loop through the questions choices and create the HTML radio inputs for them
    for(let i=0; i < currentQuestionObj.choices.length; i++)
    {
        $('.radioContainer').append(`
        <label><input name="choices" id="choices${i+1}" tabdindex= "${i+1}" type="radio" value= ${currentQuestionObj.choices[i]}>
        ${currentQuestionObj.choices[i]}</label>`)
    }
    
}

//Function to render display the score and current question number
function displayScoreAndCurrent(){
    //create local variables for easy access
    let current = DATA.current;
    let score = DATA.score;
    //empty the div
    $('.questionsAndScore').empty();
    //append to the div with updated value
    $(".questionsAndScore").append(`<ul>
        <li>Questions: ${current + 1}/${DATA.questions.length}</li>
        <li>Score: ${score}/${DATA.questions.length}</li>
    </ul>`)
}

//Function to check if quiz is done
function handleQuiz()
{
    let current = DATA.current;
    //(if we went through all the quiz in the array then call the reset page)
    if(current === DATA.questions.length)
    {
        resetQuiz();
    }
    //otherwise render the next quiz
    else{
        renderQuiz();
    }

}

//Function used to check for the users answer
function checkAnswer()
{
   $('.mainSection').off('click', '#choiceForm');
    //event handler for when user submits their answer
    $('.mainSection').submit(".submitBtn", function(e)
    {
        //local variable for easy access of the DATA's questions correct answer
        let answer = DATA.questions[DATA.current].answer;
        e.preventDefault();

        //local variable to store the user's answer
        let selectedChoice = $("input[name=choices]:checked").val();
        //first check if user has no answer then call an alert
        if(!selectedChoice)
        {
            alert("Choose an option");
            return;
        }
        //check for answer
        if(selectedChoice === answer)
        {
            //if correct increase score
            DATA.score++;
            //update the score by calling this function
            displayScoreAndCurrent();
            //then call the function responsible for rendering an output box
            renderOutputPage("correctRender", DATA.correct, DATA.correctAlt, DATA.correctCmnt)
        }
        else{
            renderOutputPage("wrongRender", DATA.wrong, DATA.wrongAlt, DATA.wrongCmnt);
           
        }
     
    });
   
}

//Function responsible for rendering a result box based on the user's answer 
//it takes a string to for className used to name the div's class, string for the imgSrc, a string for the images alt attribute
// and a string for the right comment
function renderOutputPage(className, imgSrc, altSrc, comment)
{
    let crctAns = ''
    if(className === "wrongRender")
    {
        crctAns = `The correct answer is ${DATA.questions[DATA.current].answer}.`;
    }
    //first remove the quiz box
    $('.quiz').remove();
    //create the html tag to render the Output page using the passed in parameter variables
    $('.mainSection').append(`<div class="mainBox ${className}">
    <img src=${imgSrc} class="imgOutput" alt=${altSrc}>
    <p>${comment}!<legend>${crctAns}<legend></p>
    <button type="button" id="nxtBtn">Next Question</button>
    </div>`)
    //unbind the buttons
    $('.mainSection').off('click', `.${className}`);
    //rebind the event handlers and remove the output page render and go to the next question
    $(`.mainSection`).on('click',`.${className}`, function(e)
    {  
       removeRender(this);
    });
}

//function use to remove render output page
function removeRender(obj)
{
    //first update the current question num
    DATA.current++
    //display the current num
    displayScoreAndCurrent();
    //call and check where we at in the questions array
    handleQuiz();
    //remove the the render
    $(obj).remove();
    
}


//Function used to render the reset page
function renderReset()
{
    //empty the div for score and question number so there will be less clutter
    $('.questionsAndScore').empty()
    //create local variables
    let score = DATA.score;
    let comment = '';
    //check the score to retrieve the appropriate comment
    if(score === DATA.questions.length)
    {
        comment = DATA.perfect;
    }
    else if(score === 0)
    {
        comment = DATA.veryBad;
    }
    else{
        comment = DATA.good;
    }
    //create the html tag to render the reset page
    $('.mainSection').append(`<div class="mainBox reset">
    <h2 class="scoreHeader">Your score is ${DATA.score} out of ${DATA.questions.length}</h2>
    <p class="commentP">${comment}</p>
    <button type="button" id="resetBtn">Reset Quiz</button>
    </div>`)
}

//Function to call to allow user to reset the quiz
function resetQuiz()
{
    //first render the reset page
   renderReset();
    $('.mainSection').on('click', '.reset', function(e)
    {
        //reset the DATA score and current question num
        e.preventDefault();
        DATA.current = 0;
        DATA.score = 0;
        //unhide the startmenu
        $('.startMenu').show();
        //remove the reset page
        $('.reset').remove();
 
    })
}

//When everything loads call this function
$(startQuiz());