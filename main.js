"use strict";
exports.__esModule = true;
// Enum Data type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.blue;
console.log(c);
//  If you are not sure about data type then we can use any
var randomValue = 10;
randomValue = 'Name String';
// We can access any property if the data type is any
console.log(randomValue.toUpperCase());
var myVariable = 10;
myVariable.toUpperCase();
// Multi Type Variable
var MultiTypeVariable;
MultiTypeVariable = 20;
MultiTypeVariable = true;
