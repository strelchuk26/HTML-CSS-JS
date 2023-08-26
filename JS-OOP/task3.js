class ExtendedDate extends Date {
    ShowDate() {
        const date = new Date();
        console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);
    }
    IsFutureDate(year, month, day) {
        const date = new Date(year, month, day);
        const now = new Date();
        if (now > date) {
            return false;
        }
        else {
            return true;
        }
    }
    IsLeapYear(year) {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    }
    NextDate(year, month, day) {
        const date = new Date(year, month, day);
        let nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        console.log(nextDate);
    }
}

const date1 = new ExtendedDate();
date1.ShowDate();
console.log(date1.IsFutureDate(2021, 10, 10));
date1.IsLeapYear(2020);
date1.NextDate(2021, 2, 22);
