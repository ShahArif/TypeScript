export {}
let message = 'Hello World back';

console.log(message);

// Variable Declaration

// Const variable value once assigned cannot be changed.
const title = 'My First Lesson';

// With Let keyword the variable remains open for changes
// But cannot be redeclared .

let author = 'Arif';

console.log(title + 'By  '+ author);

author = 'Shah Sahab';
console.log(title + 'By  '+ author);

// Assigning Data Types
//  let isBeginner = true;
let isBeginner:boolean = true;
let total: number = 0;
let name: string = 'Arif Shah';

let senntence : string = `My name is  ${name}
and I am a Beginner in Typescript`;

console.log(senntence);

// Defining null type of variable

// Sub types
let n:null = null;
let u: undefined = undefined;
let myname: string = null;



// Array and Lists

// One way
let list : number[] = [1,2,3];

// Another way
let list2:Array<number> = [4,5,6];

// console.log(list);
console.log(list[0]);

// If we want want to store both number and string
// We can use
// The value have to be same as well as the order in which we are pasing values;
// First string then number ,Inshort same order in which we declar it.

let person1: [string , number] = ['Arif Shah',22];
