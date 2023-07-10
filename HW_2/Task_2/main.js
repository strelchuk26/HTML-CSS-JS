// 1
let num = prompt("enter number");
if (num >= 0 && num <= 9) {
    switch (num) {
        case "0":
            alert(")");
            break;
        case "1":
            alert("!");
            break;
        case "2":
            alert("@");
            break;
        case "3":
            alert("#");
            break;
        case "4":
            alert("$");
            break;
        case "5":
            alert("%");
            break;
        case "6":
            alert("^");
            break;
        case "7":
            alert("&");
            break;
        case "8":
            alert("*");
            break;
        case "9":
            alert("(");
            break;
    }
}

// 2
let is_leap_year = +prompt("enter year");
alert(is_leap_year % 4 == 0 && is_leap_year % 100 != 0 || is_leap_year % 400 == 0 ? "leap year" : "not leap year");

// 3
let day = +prompt("enter day");
let month = +prompt("enter month");
let year = +prompt("enter year");

let nextDay, nextMonth, nextYear;

if ((day >= 1 && day <= 31) && (month >= 1 && month <= 31) && year >= 1) {
    if (month == 2) {
        if ((year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ? true : false) && day == 29) {
            nextDay = 1;
            nextMonth = 3;
            nextYear = year;
        } else if (day == 28) {
            nextDay = 1;
            nextMonth = 3;
            nextYear = year;
        } else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day == 30) {
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
        } else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    } else {
        if (day == 31) {
            if (month == 12) {
                nextDay = 1;
                nextMonth = 1;
                nextYear = year + 1;
            } else {
                nextDay = 1;
                nextMonth = month + 1;
                nextYear = year;
            }
        } else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    }
    alert(`next date is ${nextDay}.${nextMonth}.${nextYear}`);
}