'use strict'
function Car(mo, ma, y) {
    this.model = mo;
    this.year = y;
    this.make = ma;
    this.run = function () {
        return "Speed up to 200";
    }
}

var car3 = new Car("PeZho", "Iran", 1969);
console.log(car3)

