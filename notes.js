// let & const
// use let if you want to make a variable that is variable
// use const if you want to store a value and never change


// arrow function
// runs .bind(this) in the background
// e.g.
// const myFunc1 = () => {}
// const myFunc2 = oneArg => {}
// const myFunc3 = (mulArgs1, mulArgs2, mulArgs3) => {}
// const myFunc4 = (a, b) => a + b
// 
// in myFunc1 no argument is passed and the curly braces are where the function is written
// myFunc2 has one arg so you do not need to put parentheses around the one arg
// myFunc3 has more than one arg so you need parentheses around the args
// notice myFunc4 does not have curly braces, if there are no curly braces then what ever is on the right side of the arrow will be return, in this case a + b


// exports and imports (modules)
// exports and imports are used to export a value from one componenet and make it accessible to another component
// e.g.
// 
// FILE NAME: person.js
// const person = {
//     name: 'Max'
// };
// export default varName
// 
// in these examples for FILE NAME: person.js
// notice the 'default' keyword being used, the default export is set to the person function so if the import call is made towards the person.js file, the import call will point to the person function automatically
// 
// FILE NAME: utility.js
// export const clean = () => {...};
// 
// export const baseData = 10;
// 
// in these examples for FILE NAME: utility.js
// the default keyword is absent from these examples of export, this means the export is very specific and tied to the file name. That way, when another file looks to import from utility.js it will have to specifically point to the item it wishes to import: by variable name with curly braces surrounding the variable name
// you also do not need to put the .js from the end of the file location if the file type is js
// 
// these are example of imports
// e.g.
// import person from './person.js'
// import prs from './person.js'
// 
// in these examples importing from person.js the first part of the syntax is the import keyword, then a variable THE USER DECIDES THE IMPORT VALUE WILL BE STORED IN, is created. Followed by the keyword: from , and then the realtive file location, surrounded by single quotes
// you also do not need to put the .js from the end of the file location if the file type is jS
// 
// import { baseData } from './utility.js'
// import { clean } from './utility.js'
// or
// import { baseData as data } from './utility.js'
// import { clean as cln } from './utility.js' 
// or
// import { baseData as data, clean as cln } from './utility.js'
// or
// import * as bundled from './utility.js' 
// 
// in these examples importing from utility.js the first syntax is also import, then curly braces, and within the curly braces, the exact varable name of. within the exporting file, what you wish to import, and if you wish to give the exact variable a name relavent to the importing file, then you use the keyword:  as  followed by your variable name of choice. All that is followed by the keyword: from , and the relative location of the file surrounded by single quotes, just as the default importing method
// if you wish to import multiple specific items within the curly braces then look to the second to last example. You put a comma in between them
// if you wish to import all the exports of a file, then look to the last example, the * imports all the exports of a file and saves them as properties of the  bundled  object, so to access each export, you would use the follow dot notation such as bundled.clean or bundled.baseData
// you also do not need to put the .js from the end of the file location if the file type is jS


// classes
// e.g.
// class Person {
//     name = 'Max';
//     call = () => {...}
// }
// 
// which is reminiscent of constructor functions:
// e.g.
// const myPerson = new Person();
// myPerson.call();
// console.log(myPerson.name)
// etc
// 
// 
// class Human {
//     constructor() {
//         this.gender = 'male';
//     }
// 
//     printGender() {
//         console.log(this.gender);
//     }
// }
// 
// class Person extends Human {
//     constructor() {
//         super();
//         this.name = 'Max';
//     };
//     printMyName() {
//         console.log(this.name);
//     };
//     printAnyName(name) {
//         console.log(name);
//     }
// };
// 
// const somePersonName = new Person();
// somePersonName.printMyName();
// somePersonName.printGender();
// somePersonName.printAnyName('Bob');
// 
// 
// in this above example of a class there are many things at work here
// first, the class Human is declared and defined; notice how the first thing that is defined is a 'constructor' function
// this function will run as the first thing that happens in a class function automatically when the class is called
// in this case, the constructor function with Human assigns a property, then, after the constructor function runs, a method is defined
// 
// in the next class we see the class Person 'extends' the class Human, what this means is that the class Person inherits all the properties,
// the constructor function, and all the methods of the class on the right side of extends, in this case Human. What this means is that the previous
// properties, methods, etc of Human are now accessible through Person. The one thing to note is that if you're using a constructor function
// in a function that is extending another function, then you will need to run the 'super()' function at the first line of the constructor function
// 
// now we look at the last section starting at the const variable. classes work similarly to constructor function syntax in that you must declare
// a new variable " const newVariable = '''new''' className() ". The 'new' syntax is being emphasized here as being the keyword used to define a
// variable as the name of an object that inherits all the properties, methods, etc of the class. In this last case above, Person() is the class
// whose properties, methods, etc are being stored in the, now an object, object somePersonName. Thus we are then after able to access the properties,
// methods, etc from dot notation such as somePersonName.printMyName(); 
// 
// 
// so Maxamillian trolled me and then showed the actual ES6 way to do things in the very next video
// so I'm going to recopy that code above and paste it down in true ES6 format
// 
// 
// class Human {
//     gender = 'male';
// 
//     printGender = () => {
//         console.log(gender);
//     }
// }
// 
// class Person extends Human {
//     name = 'Max';
//     printMyName() {
//         console.log(name);
//     };
//     printAnyName(inputName) {
//         console.log(inputName);
//     }
// };
// 
// const somePersonName = new Person();
// somePersonName.printMyName();
// somePersonName.printGender();
// somePersonName.printAnyName('Bob');
// 
// 
// so the differences between this example of the code and the last example of the code is that:
// all the constructor() and super() functions have been removed; as well as, the use of 'this.'
// these things have been removed for the use of the new form of saving a property by simply creating the property name and setting it equal to a value
// as well as, the use of arrow functions. Arrow functions are described somewhere around line 6 of the notes.js file


// Spread & Rest Operators
// ...
// this three dots directly above is both the Spread and Rest operator depending on the context (placement) it's used in
// 
// the Spread operator ... is used to split array elements OR object properties, in essence this operator takes all the data of an old array, or object
// and .map() s each item to a new array or object. This is very helpful because before it you had to use a method or a function to copy all the data
// of an object or array into a new object or array, but now you can just use a simple operator as so:
// 
// e.g.
// 
// const newArrary = [...oldArray, 1, 2];
// new object = {...oldObject, newProp: 5 };
// 
// this is super handy because each piece of data is being added to the new array or new object. Normally, if you set a new array or object 
// equal to another array what will happen is the new array WILL POINT to the old array or object's location in storage, versus copying each
// item into the new array; like so:
//
// e.g.
//
// oldArr = [1, 2, 3];
// newArr = [oldArr, 4, 5];
// console.log(newArr);
//
// what you would get in the console log is: [[1, 2, 3], 4, 5]
// 
// although with the Spread operator you would get all the data transfered into the new array, individually
//
// e.g.
//
// oldArr = [1, 2, 3];
// newArr = [...oldArr, 4, 5];
// console.log(newArr);
//
// what you would get in the console log is: [1, 2, 3, 4, 5]. Of course you can use this operator on objects
//
// e.g.
//
// oldObj = {prop1: 5, prop2: 4, prop3: 3};
// newObj = {oldObj, prop4: 2, prop5: 1};
// console.log(newObj);
//
// what you would get in the console log is: {{prop1: 5, prop2: 4, prop3: 3}, prop4: 2, prop5: 1}
// 
// although with the Spread operator you would get all the data transfered into the new object, individually
// 
// e.g.
//
// oldObj = {prop1: 5, prop2: 4, prop3: 3};
// newObj = {...oldObj, prop4: 2, prop5: 1};
// console.log(newObj);
//
// what you would get in the console log is: {prop1: 5, prop2: 4, prop3: 3, prop4: 2, prop5: 1}
// As a sidenote, if the oldObj had a prop5 it would be overriden by the new prop5
// 
// 
// 
// the Rest operator ... can also be used to merge a list of function arguments into an arry
// 
// e.g.
// 
// function sortArgs(...args) {
//     return args.sort();
// };
// 
// or
// 
// function sortArgs(...args) {
//     return args[3];
// };
// 
// or
// 
// const filter = (...args) => {
//     return args.filter(el => el === 1);
// };
// 
// console.log(filter(1, 2, 3));
// 
// the console.log will only return 1
// 
// These functions will take an unlimited number of arguments and store them into an array which then can be accessed by methods


// Destructuring
// e.g.
// [a, b] = ['Hello', 'Door'];
// console.log(a);
// console.log(b);
//
// the console.log(a) would return 'Hello' and the console.log(b) would return 'Door'
// 
// or
// 
// const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1);    // returns 1
// console.log(num2);    // returns 2
// 
// or
// 
// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1);    // returns 1
// console.log(num3);    // returns 3
//
// e.g.
//
// {name} = {name: 'Matthew', age: '28'};
// console.log(name);
// console.log(age);
//
// the console.log(name) would return 'Matthew' and the console.log(b) would return 'undefined'
//
// destructuring is a process similar to spread although instead of taking out all the data in an array or object, you only take out specific parts
// that are declared. 
// 
// In the case of arrays, you assign a variable to the index of an array by putting a variable in a new array at a specific index
// and then setting that array equal to another array, whatever value has the same index number as the variable in the array will be assigned to the
// variable.
// 
// In the case of objects, you assign a variable the same name as a property you want to extract from an object, surrounded by curly braces, and set
// that variable equal to an object filled with properties, one having the same name as the variable declared. The variable will gain the value of the
// property it shares names with