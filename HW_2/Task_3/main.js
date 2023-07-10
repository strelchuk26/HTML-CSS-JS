// 1
let first = +prompt("enter first num");
let second = +prompt("enter second num");

if (first > 0 && second > first) {
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    alert(`Sum = ${sum}`);
}

// 2
let number = +prompt("enter number");
let count = 0;
if (number >= 1) {
    count++;
}

while (number / 10 >= 1) {
    number /= 10;
    count++;
}

alert(`count of digits: ${count}`);

// 3
let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;
for (let i = 0; i < 10; i++) {
    let num = +prompt(`enter ${i + 1} number`);
    if (num > 0) {
        if (num % 2 == 0) {
            even++
            positive++;
        }
        else {
            odd++;
            positive++;
        }
    }
    else if (num < 0) {
        if (num % 2 == 0) {
            even++
            negative++;
        }
        else {
            odd++;
            negative++;
        }
    }
    else if (num == 0) {
        zero++;
    }
}
alert(`positive: ${positive}\nnegative: ${negative}\nzero: ${zero}\neven: ${even}\nodd: ${odd}`);

// 4
let day = 1;
let flag = true;
do {
    switch (day) {
        case 1:
            flag = confirm("Monday, want to see next day?");
            day++;
            break;
        case 2:
            flag = confirm("Tuesday, want to see next day?");
            day++;
            break;
        case 3:
            flag = confirm("Wednesday, want to see next day?");
            day++;
            break;
        case 4:
            flag = confirm("Thursday, want to see next day?");
            day++;
            break;
        case 5:
            flag = confirm("Friday, want to see next day?");
            day++;
            break;
        case 6:
            flag = confirm("Saturday, want to see next day?");
            day++;
            break;
        case 7:
            flag = confirm("Sunday, want to see next day?");
            day = 1;
            break;
        default:
            break;
    }
} while (flag != false);