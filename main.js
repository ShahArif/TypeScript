"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
var p = {
    firstName: 'Arif',
    lastName: 'Shah'
};
// function fullname(person:Person){
//     console.log(`${person.firstName}  ${person.lastName}`); 
// }
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning  " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Arif');
// console.log(emp1.employeeName);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating Task');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Zahid');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Modifiers public , private ,protected
