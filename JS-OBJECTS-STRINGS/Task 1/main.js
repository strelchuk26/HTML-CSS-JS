let timer = {
    hours: 21,
    minutes: 2,
    seconds: 12,
    showTime: function (hours, minutes, seconds) {
        function addZero(number) {
          return String(number).padStart(2, '0');
        }
        let showHours = addZero(hours);
        let showMinutes = addZero(minutes);
        let showSeconds = addZero(seconds);

        return `${showHours}:${showMinutes}:${showSeconds}`;   
    },
    increaseSecond: function (hours, minutes, seconds) {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
                if (hours == 24) {
                    hours = 0;
                }
            }
        }
        console.log(this.showTime(hours, minutes, seconds));
    },
    decreaseSecond: function (hours, minutes, seconds) {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                }
            }
        }
        console.log(this.showTime(hours, minutes, seconds));
    },
    showTimeOnPage: function () {
        document.write(this.showTime(this.hours, this.minutes, this.seconds));
    }
}

timer.increaseSecond(23, 59, 59);
timer.decreaseSecond(11, 0, 0);
timer.showTimeOnPage();