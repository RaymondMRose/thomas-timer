//values when timer starts
let startingHour;
let startingMinute;
let startingSecond;
//timer values
let hours = 0;
let minutes = 0;
let seconds = 0;
//stuff displayed on the screen
let hourString;
let minuteString;
let secondString;
//checks if timer is running
let stage;
//acts as milliseconds but is not displayed
let tick = 0;

window.onload = () => {
    stage = 'before timer run';
    //makes the buttons clickable
    document.getElementById('add1Hour').addEventListener('click', () => {
        hours++;
    });
    document.getElementById('add1Minute').addEventListener('click', () => {
        minutes++;
    });
    document.getElementById('add1Second').addEventListener('click', () => {
        seconds++;
    });
    document.getElementById('start').addEventListener('click', () => {
        stage = 'timer running';
    });
    document.getElementById('stop').addEventListener('click', () => {
        stage = 'timer paused';
    });
    document.getElementById('reset').addEventListener('click', () => {
        hours = 0;
        minutes = 0;
        seconds = 0;
    });
    setInterval(update, 10);
}
function update() {
    if (stage == 'timer running') {
        tick++;
        if (tick == 100) {
            tick = 0;
            seconds--
        }
        if (seconds == 60) {
            seconds = 0;
            minutes--
        }
        if (minutes == 60) {
            minutes = 0;
            hours--;
        }
    }
    if (hours < 10) {
        hourString = '0' + hours.toString();
    } else {
        hourString = hours.toString();
    }
    if (minutes < 10) {
        minuteString = '0' + minutes.toString();
    } else {
        minuteString = minutes.toString();
    }
    if (seconds < 10) {
        secondString = '0' + seconds.toString();
    } else {
        secondString = seconds.toString();
    }
    document.getElementById('hours').innerHTML = hourString;
    document.getElementById('minutes').innerHTML = minuteString;
    document.getElementById('seconds').innerHTML = secondString;
}