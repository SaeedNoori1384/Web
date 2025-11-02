"use strict"

var x = 100;
function saysomething() {
    console.log(x)
    var x = 50
    console.log(x)
}
saysomething()
x = 90
console.log(x)
