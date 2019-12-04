setInterval(logClockTime, 1000);

function logClockTime() {
    // Get Time string as civilian time
    let time = getClockTime();

    // Clear the Console and log the time
    console.clear();
    console.log(time);
}

function getClockTime() {
    // Get the Current Time
    let date = new Date();

    // Serialize clock time
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    };

    // Convert to civilian time
    if (time.hours == 12) {
        time.ampm = 'PM';
    } else if (time.hours > 12) {
        time.ampm = 'PM';
        time.hours -= 12;
    }

    // Prepend a 0 on the hours to make double digits
    time.hours = (time.hours < 10) ? `0${time.hours}` : time.hours;

    // Prepend a 0 on the minutes to make double digits
    time.minutes = (time.minutes < 10) ? `0${time.minutes}` : time.minutes;  

    // Prepend a 0 on the seconds to make double digits
    time.seconds = (time.seconds < 10) ? `0${time.seconds}` : time.seconds;  

    // Format the clock time as a string "hh:mm:ss tt"
    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}