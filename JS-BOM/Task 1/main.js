// 1
let newWindow = window.open("", "", "width=410, height=410");

// 2
setTimeout(() => {
    newWindow.resizeTo(500, 500);
}, 2000);

// 3
setTimeout(() => {
    newWindow.moveTo(200, 200);
}, 4000);

// 4
setTimeout(() => {
    newWindow.close();
}, 6000);