const startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer-count");
var secondsLeft = 60;


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


function questionCard() {
    var x = document.getElementById("question-card");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }





//Timer initated after start button has been clicked//
function setTime () {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    },1000);
}

function startTime (){
    setTime();
}

startButton.addEventListener('click', () => {
    setTime();
    hidequestionCard();
    showQuestion();
});








































