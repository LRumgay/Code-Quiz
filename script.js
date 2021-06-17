const startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer-count");
var secondsLeft = 60;
var QI = 0;


const questions = [
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        options: ["Hoper Tony Manny Larry","Hypertext Markup Language", "Hypertalk Markup Language","Water"],

    },

    {
        question: "Who founded JavaScript?",
        answer: "Brendan Eich",
        options:["Brendan Eich","Brendan Fraser","Nero Claudius Caesar Augustus Germanicus","Giorgio A. Tsoukalos"], 
    },

    {
        question: "We can use Jquery on the quiz.",
        answer: "False",
        options: ["True","False"],
    },

    {
        question: "What does DOM stand for?",
        answer: "Document Object Model",
        options: ["Dominic","Document Object Model","Dominion Objective Molecule","Don't Offend Me"],
    },

];


function showQuestion() {
    var qa = document.querySelector(".qa");
    qa.removeAttribute("class", "hide");
    changeQuestion();
    setTime(); 
}

function changeQuestion() {
    var questionEl = document.querySelector(".questions");
    questionEl.textContent = questions[QI].question;
    var answerBox = document.querySelector(".answer-box");
    answerBox.innerHTML = ""
    questions[QI].options.forEach(function (option){
        console.log(option)
        var button= document.createElement ("button"); 
        button.textContent= option;
        button.setAttribute("value",option)
        button.onclick = evaluateAnswer;
        answerBox.appendChild(button);
    })
}
function evaluateAnswer(){
console.log(this.value)
//if statements to check right or wrong
if (this.value !== questions[QI].answer){
    console.log("wrong")
} else {
    console.log("right")
}
QI++;
if(QI === questions.length) {
    console.log("end game")
} else {
    changeQuestion()
}
}


//Timer initated after start button has been clicked//
function setTime () {
    // run remove attribute class=hide
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    },1000);
}
//tested//
function hidequestionCard(){
    var questionCard = document.getElementById("question-card");
    questionCard.setAttribute("class","hide")
    showQuestion();
}


// function startTime (){
//     setTime();
// }

startButton.addEventListener('click',function() {
    hidequestionCard();
});








































