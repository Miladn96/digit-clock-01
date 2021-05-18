var newDate = new Date(),
dateArry=[];

var tagsDocument = {
    hour: document.getElementById("hour"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec")
};
var i = 0;
var dots = document.getElementsByClassName("doubleDots");


var timerVar = setInterval(timerFunction, 1000);
var doubleDots = setInterval(dotsFunction, 370);
setTimeout(dotsFunctionView,1000);
function dotsFunction() {
    if (i == 0) {
        dots[0].style.visibility = "visible";
        dots[1].style.visibility = "visible";
        i=1;
    } else if (i == 1) {
        dots[0].style.visibility = "hidden";
        dots[1].style.visibility = "hidden";
        i=0;
    }
}

function dotsFunctionView() {
        dots[0].innerHTML = ' : ';
        dots[1].innerHTML = ' : ';
}

function timerFunction() {
    newDate = new Date();
    dateArry = [newDate.getHours(), newDate.getMinutes(), newDate.getSeconds()];
    tagsDocument["hour"].innerHTML = dateArry[0].toString().padStart(2,0);
    tagsDocument["min"].innerHTML = dateArry[1].toString().padStart(2, 0);
    tagsDocument["sec"].innerHTML = dateArry[2].toString().padStart(2, 0);
    console.log("timerFunction is correct");
}