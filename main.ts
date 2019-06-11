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
// function add(num1:number , num2:number = 10):number {
//     if(num2){
//         return num1 + num2;
//     }
//     return num1;
// }

// let sum = add(10);
// console.log(sum);
// Normal Function
// function fullname(person:{firstName:string, lastName:string}){
//     console.log(`${person.firstName}  ${person.lastName}`); 
// }

let p ={
    firstName:'Arif',
    lastName:'Shah'
};
// fullname(p);

// Making use of Interface
interface Person {
    firstName: string,
    lastName: string
}

// function fullname(person:Person){
//     console.log(`${person.firstName}  ${person.lastName}`); 
// }

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning  ${this.employeeName}`);
    }
}

let emp1 = new Employee('Arif');
// console.log(emp1.employeeName);

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log('Manager delegating Task');
    }
}

let m1 = new Manager('Zahid');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Modifiers public , private ,protected
 