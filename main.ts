export {}


// Simple Function

// function add(num1:number , num2:number) {
//     return num1 + num2;
// }


// Making Paramters Optional by adding ?
// function add(num1:number , num2?:number) {
//     if(num2){
//         return num1 + num2;
//     }
//     return num1;
// }

// Setting default paramters and making it optional

// Making Paramters Optional by adding ?
function add(num1:number , num2:number = 10):number {
    if(num2){
        return num1 + num2;
    }
    return num1;
}

let sum = add(10);
console.log(sum);
// Normal Function
// function fullname(person:{firstName:string, lastName:string}){
//     console.log(`${person.firstName}  ${person.lastName}`); 
// }

let p ={
    firstName:'Arif',
    lastName:'Shah'
};
fullname(p);

// Making use of Interface
interface Person {
    firstName: string,
    lastName: string
}

function fullname(person:Person){
    console.log(`${person.firstName}  ${person.lastName}`); 
}