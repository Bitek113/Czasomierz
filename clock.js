let clock = document.getElementById("clock");

setInterval(() => {
    let clockTime = new Date();
    clock.innerHTML = clockTime.toLocaleTimeString();
}, 1000);













// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i
//     }
//     return i;
// }

// function odliczanie() {
//     setTimeout('odliczanie', 1000);
// }

// const date = new Date();

// let h = addZero(date.getHours());
// let m = addZero(date.getMinutes());
// let s = addZero(date.getSeconds());

// let time = h + ":" + m + ":" + s;
// document.getElementById('clock').innerHTML = time;
//////// poprzedni zegarek jest wyżej 





// const counting = setInterval(function () {
//     const now = new Date().getTime();
//     const distance = /* countDate+*/ now;

//     const hours = addZero(Math.floor((distance % (1000 * 60 * 60 * 27)) / (1000 * 60 * 60)));
//     const minutes = addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
//     const seconds = addZero(Math.floor((distance % (1000 * 60)) / 1000));

//     document.getElementById('clock').innerHTML =
//         hours + ":" + minutes + "." + seconds;



// }, 1000);
