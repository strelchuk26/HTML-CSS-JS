// 1
let array1 = new Array(10);
for (let i = 0; i < array1.length; i++) {
    array1[i] = Math.floor(Math.random() * 100);
}

console.log(array1);

// 2
for (let i = 0; i < array1.length; i++) {
    console.log(`[${i+1}] - ${array1[i]}`);
}

// 3
let counter = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 7 == 0) {
        counter++;
    }
}
if (counter > 0) {
    console.log('the array contains numbers that are multiples of 7')
}

// 4
array1.sort((a, b) => a - b);
array1.reverse();
console.log(array1);

// 5
for (let i = 0; i < array1.length; i++) {
    if (i > (array1.length - 1) / 2) {
        array1[i] = 0;
    }
}
console.log(array1);

// 6
array1.splice(0, 3);
console.log(array1);

// 7
counter = 0;
for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array1.length; j++) {
        if (array1[i] == array1[j]) {
            counter++;
        }
    }
}

if (counter > 0) {
    console.log("the array contains duplicates");
}
else {
    console.log("the array not contain duplicates");
}

// 8
let array2 = array1.slice(((array1.length + 1) / 2), array1.length);
console.log(array2);

// 9
counter = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
        counter++;
    }
}
console.log(counter);