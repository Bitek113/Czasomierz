// const display = document.querySelector('#display');


// const update = () => {
//     var i = 0;

//     do {
//         console.log("liczba i: " + i)
//         i = i + 1;
//     } while (i < 60)
// }

var seconds = 00;
var tens = 00;

var OutputSeconds = document.getElementById("second");
var OutputTens = document.getElementById("tens");

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
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});


function startTimer() {
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + 0;
    }
    
    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }
}