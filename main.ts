export {}
// Enum Data type
 enum Color {red, green , blue};

 let c:Color = Color.blue;
 console.log(c);

//  If you are not sure about data type then we can use any
 let randomValue: any = 10;

 randomValue = 'Name String';
// We can access any property if the data type is any
 console.log(randomValue.toUpperCase());


 let myVariable:unknown = 10;

 (myVariable as string).toUpperCase();

// Multi Type Variable

let MultiTypeVariable :number | boolean;

MultiTypeVariable = 20;
MultiTypeVariable = true;




