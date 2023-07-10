// 1
const date = new Date();
const current_year = +date.getFullYear();
let year = prompt("enter your year of birth");
alert(`You are ${current_year - year} years old`);

// 2 
const file_size = 0.82;
let gb = prompt("enter volume of flash-disk in GB.");
alert(`Your flash-disk can consist ${Math.floor(gb / file_size)} files.`);