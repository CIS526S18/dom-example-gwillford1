"use strict;"

const MS_IN_SEC = 1000;
const MS_IN_MIN = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MIN;
const MS_IN_DAY = 24 * MS_IN_HOUR;

function createCountdown(elementID, startTime) {
    var clock = document.createElement('div');
    function setTime(){
        var time = startTime - Date.now();
        var days = Math.floor(time / MS_IN_DAY); 
        time -= MS_IN_DAY * days;
        var hours = Math.floor(time/MS_IN_HOUR);
        time -= MS_IN_HOUR * hours; 
        var minutes = Math.floor(time/MS_IN_MIN);
        time -= MS_IN_MIN * minutes; 
        var seconds = Math.floor(time/MS_IN_SEC);

        clock.innerHTML =  "In " + days + " days, " + hours + " hours, " +
        minutes + " minutes, and " + seconds + " seconds";
    }

    setInterval(setTime, 1000);
    document.getElementById(elementID).appendChild(clock);
}

createCountdown("all-university", Date.parse('2018-4-7'));
createCountdown("engineering", Date.parse('2018-4-6'));