let car = {
    manufacturer: "BMW",
    model: "M3 G80",
    year: 2022,
    avg_speed: 120,
    showInfo: function () {
        console.log(`${this.manufacturer}
                   \n${this.model}
                   \n${this.year}
                   \n${this.avg_speed}km/h.`);
    },
    timeToDistance: function (distance) {
        let time = distance / this.avg_speed;
        time = time + Math.floor(time / 4);
        console.log(time.toFixed(2) + " hours");
    }
}

car.timeToDistance(330);