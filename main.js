"use strict";
exports.__esModule = true;
var message = 'Hello World back';
console.log(message);
// Variable Declaration
// Const variable value once assigned cannot be changed.
var title = 'My First Lesson';
// With Let keyword the variable remains open for changes
// But cannot be redeclared .
var author = 'Arif';
console.log(title + 'By  ' + author);
author = 'Shah Sahab';
console.log(title + 'By  ' + author);
// Assigning Data Types
//  let isBeginner = true;
var isBeginner = true;
var total = 0;
var name = 'Arif Shah';
var senntence = "My name is  " + name + "\nand I am a Beginner in Typescript";
console.log(senntence);
// Defining null type of variable
// Sub types
var n = null;
var u = undefined;
var myname = null;
// Array and Lists
// One way
var list = [1, 2, 3];
// Another way
var list2 = [4, 5, 6];
// console.log(list);
console.log(list[0]);
// If we want want to store both number and string
// We can use
// The value have to be same as well as the order in which we are pasing values;
// First string then number ,Inshort same order in which we declar it.
var person1 = ['Arif Shah', 22];
