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
