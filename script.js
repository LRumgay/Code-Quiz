const startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer-count");
var secondsLeft = 60;

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


















startButton.addEventListener('click',startTime);























