class Button {
    width;
    height;
    text;

    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px">${this.text}</button>`);
    }
}

class BootstrapButton extends Button {
    color;
    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}">${this.text}</button>`);
    }
}

const btn1 = new Button("200", "100", "Just button");
btn1.showBtn();

const btn2 = new BootstrapButton("200", "100", "Bootstrapped button!");
btn2.color = "red";
btn2.showBtn();