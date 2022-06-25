// const display = document.querySelector('#display');


// const update = () => {
//     var i = 0;

//     do {
//         console.log("liczba i: " + i)
//         i = i + 1;
//     } while (i < 60)
// }
var minutes = 00;
var seconds = 00;
var tens = 00;

var outputMinutes = document.getElementById("minutes");
var outputSeconds = document.getElementById("second");
var outputTens = document.getElementById("tens");

var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");

var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);

});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    outputMinutes.innerHTML = minutes;
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});


function startTimer() {
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + 0;
    }
    
    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }

    if(seconds > 59) {
        minutes++;
        outputMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        outputSeconds.innerHTML = "0" + 0;
    }
}