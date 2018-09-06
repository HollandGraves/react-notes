// Type the exact '#. Section' into a ctrl + f search to jump to section



//  TABLE OF CONTENTS
//     1. ES6
//     2. VANILLA JS
//     3. REACT









//     1. ES6









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
// notice the 'default' keyword being used, the default export is set to the person function so if the import call is made towards the person.js file, 
//      the import call will point to the person function automatically
// 
// FILE NAME: utility.js
// export const clean = () => {...};
// 
// export const baseData = 10;
// 
// in these examples for FILE NAME: utility.js
// the default keyword is absent from these examples of export, this means the export is very specific and tied to the file name. That way, 
//      when another file looks to import from utility.js it will have to specifically point to the item it wishes to import: by variable name with 
//      curly braces surrounding the variable name
// you also do not need to put the .js from the end of the file location if the file type is js
// 
// these are example of imports
// e.g.
// import person from './person.js'
// import prs from './person.js'
// 
// in these examples importing from person.js the first part of the syntax is the import keyword, then a variable THE USER DECIDES THE IMPORT VALUE 
//      WILL BE STORED IN, is created. Followed by the keyword: from , and then the realtive file location, surrounded by single quotes
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
// in these examples importing from utility.js the first syntax is also import, then curly braces, and within the curly braces, the exact varable 
//      name of. within the exporting file, what you wish to import, and if you wish to give the exact variable a name relavent to the importing file, 
//      then you use the keyword:  as  followed by your variable name of choice. All that is followed by the keyword: from , and the relative location 
//      of the file surrounded by single quotes, just as the default importing method
// if you wish to import multiple specific items within the curly braces then look to the second to last example. You put a comma in between them
// if you wish to import all the exports of a file, then look to the last example, the * imports all the exports of a file and saves them as properties 
//      of the  bundled  object, so to access each export, you would use the follow dot notation such as bundled.clean or bundled.baseData
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









//     2. VANILLA JS









// Various Array methods (NOT ES6)
// .length() , returns the total number of items in the array
// .sort() , organizes an array in alphabetical order if strings. A special function is needed to arrange an array of numbers in numerical order
//      the only problem is the array will be permanently be mutated, so the array must be saved into a variable
//      e.g.
//      let numArray = [1, 8787, 23, 900, 0];
//      function copyArr(arr) {
//          let newArr = [...arr];
//          return newArr;
//      }
//      
//      console.log(
//          copyArr(numArray).sort((a , b) => a - b) // this function within the sort method will auto sort the numbers smallest to largest
//      );
//      console.log(
//          copyArr(numArray).sort((a , b) => b - a) // this function within the sort method will auto sort the numbers largest to smallest
//      );
// .map(someFunction) , runs a function against each item of the array the method is being used against and stores each value into a new array
//      var array1 = [1, 4, 9, 16];
// 
//      const map1 = array1.map(x => x * 2); // pass a function to map
//      console.log(map1); // expected output: Array [2, 8, 18, 32]
// .some(someFunctionWithALogicalCondition) , returns true if even one item passes the function's logical condition
// .every(someFunctionWithALogicalCondition) , returns true if every item passes the function's logical condition
//      e.g.
//      function isBelowThreshold(currentValue) {
//      return currentValue < 40;
//      }
//   
//      var array1 = [1, 30, 39, 29, 10, 13];
//      console.log(array1.every(isBelowThreshold)); // expected output: true

// .filter(someFunctionWithALogicalCondition) , creates a new array containing all the items that pass the logical condition of the function argument
//      e.g.
//      var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// 
//      const result = words.filter(word => word.length > 6);
// 
//      console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
// .forEach(someFunction) , executes a provided function once for each array element
// 
// .concat() , concatonates two arrays. e.g. someArray.concat(someOtherArray); someOtherArray's array items will be added on to the end of someArray's
// .includes() , determines whether an array contains a certain element and returns true or false as appropriate
// .indexOf() , returns index number of array item.
// .join('seperator') , joins all items of an array into a single string, each item is seperated by whatever symbol is wrapped with 
//      single quotes and passed as seperator
// .pop() , removes the last array item
// .push() , adds an array item to the end of an array
// .shift() , removes an array item to the beginning of an array 
// .unshift() , adds an array item to the beginning of an array
// .splice(pos, n) , remove an n amount of items from index position pos onward.
// .reverse() , reverses array order









//     3. REACT
// 
// 
//          Table of Contents: REACT
//              A. STARTING
//                  a1. Starting a React App
//                  a2. Going over the files created by create-react-app
//              B. BEST PRACTICES
//                  b1. Best practices in a React App
//                  b2. Notes on creating a React App









//              a1. Starting a React App









// 1. install Node.js first, so you can get npm (node packet manager)
// 2. clone and download the create-react-app file from github (managed by the Facebook team)
// 3. run the command from the terminal: npm install create-react-app -g        // if using linux or mac run: sudo npm install create-react-app -g      and give password when asked
// 4. run the command: create-react-app name-of-file-you-want-app-to-create-in          // this will create the app in a folder of your naming
// 5. run the command: cd name-of-file-location         // this will bring you to the folder in the terminal
// 6. run the command: npm start        // this will create a development server and open up a web browser page     // always start your project with npm start and keep it running to keep the server running









//              a2. Going over the files created by create-react-app









// 1. on the root level of the folder, without going any deeper down the paths, you have a couple of configuration files
// 2. the locked files can be ignored, they're simply locking in the version of the dependencies being used
// 3. the general dependencies the project has are defined in the package.json file
//      within the package.json file: the dependencies and their versions are defined
//      within the package.json file: and the scripts that you can run in the terminal are defined as well
//      the command: react-scripts start        watches, compiles, and optimizes the code
//      the command: react-scripts build        stores that compiled code in a folder, until you run build the compiled code from start is 
//      saved in memory
//      there are more scripts although that is good for now
// 4. on the node_modules level, the node_modules folder holds all the dependencies and sub dependencies.
//      you shouldn't edit anything in this folder
// 5. the public folder is the root folder that gets served by the web server in the end 
//      inside this folder is the only HTML page. you will never create another html page in the project
//      if you're creating a multi-page project, you would create multiple create-react-app projects, each with their own html page that all 
//      the components load through
//      if you want to add some links to CSS libraries, or meta tags, you can do that within the index.html file, within each specific page
// 6. the src folder is where all React components are made
//      note: the index.js file gets access to the      ReactDOM.render(<App />, document.getElementById('root'));      line of code and all the imports you'll need
//      note: both App.css and index.css apply styles globally
//      note: registerServiceWorker.js will pre-chache the script files
//      note: the App.test.js file will create tests for components
// 7. feel free to delete the logo.svg file, as it is the file for the default react project unpacked









//                  b1. Best practices in a React App









// BEST PRACTICE: Make sure you wrap all your code within the rendor() function of a component in one div with the classname of the component
//      e.g.
// 
//      import React, { Component } from 'react';
//      import './App.css';
// 
//      class App extends Component {
//      render() {
//              return (
//                  <div className="App">
//                      <h1>Yo yo yo yo embryooo</h1>
//                      <p>This is really working</p>
//                  </div>
//              );
//          }
//      }
// 
//      export default App;
//
//      notice how the div that is being returned contains all the information of the component, AND has the same classname as the class 
//      that contains the render function
// 
// BEST PRACTICE: Always import your component with a capital first letter, because all characters lowercase--like div, h1, etc--are reserved
//      for the native HTML elements.
//      so for example you could import and use a <Div /> tag as a component reference tag name because it isn't a reserved keyword
//
// BEST PRACTICE: When making a function within the class of a stateful component, it is always best to add the term 'Handler' behind 
//      any function made if the function will not be actively called but we be assigned as an event handler









//                  b2. Notes on creating a React App









// NOTE REACT: there are stateless components, components that are static and do not change state which are setup as follows:
//      e.g.
//      import React from 'react'
//      const lowerCaseComponentName = () => { return 'stuff' }
//      export default lowerCaseComponentName;
//
// NOTE REACT: to add properties to your stateless component, you must add props to the argument of the function above
//      e.g.
//      import React from 'react'
//      const lowerCaseComponentName = (props) => { return <div>{props.name} + {props.age}</div> }      // notice props as an argument
//      export default lowerCaseComponentName;
//
//      in this case what happens is that the values for props come from a JSX-html tag on a component that is importing the above component
//      e.g.
//      <lowerCaseComponentName name='Mario' age='49' />
//      name and age will become properties of props and can be accessed through dot notation, as illustrated above
//
// NOTE REACT: and there are stateful components, components that change state (i.e. have the ability to trigger jS code upon an action to fire) which are setup as follows:
//      e.g.
//      import React, { Component } from 'react'
//      class upperCaseClassName extends Component {
//          render() {
//              return (
//                  <div className = 'upperCaseClassName'>
//                      <Component1 />
//                      <div>
//                          <h1>hey WHAZZAP</h1>
//                      </div>
//                  </div>
//              );
//          }
//      }
//      export default upperCaseClassName;
//
// NOTE REACT: to add properties to your stateful component, you must add props to the argument of the function above, as well
//      e.g.
//      import React, { Component } from 'react'
//      class upperCaseClassName extends Component {
//          render() {
//              return (
//                  <div className = 'upperCaseClassName'>
//                      <Component1 />
//                      <div>
//                          <h1>my name is: {this.props.name} and my age is {this.props.age}</h1>           // notice the use of this.props
//                      </div>
//                  </div>
//              );
//          }
//      }
//      export default upperCaseClassName;
//
//      in this case what happens is that the values for props come from a JSX-html tag on a component that is importing the above component, just like the stateless version
//      e.g.
//      <upperCaseComponentName name='Luigi' age='52' />
//      name and age will be passed into the render function as properties of props and can be accessed through dot notation just
//      as with stateless components. As illustrated above, the only difference is that, to access the properties name and age, you must use this.props
//
// NOTE REACT: to access the 'children' of a JSX-html tag: instead of making a self-closing tag, make a tag and then a closing tag in your root component.
//      Then put whatever text, html tags, components, etc you want inbetween the tags. The way to access the material inbetween tags is, within the app that is being imported, through the .children method of props or this.props
//      e.g.
// 
//      (within the root component that's utilizing the JSX-html tag)
//      <lowerCaseComponentName age='28' name='Matthew'>This is the text that will be passed in through the .children method</lowerCaseComponentName>
//      
//      (within the imported component i.e. lowerCaseComponentName)
//      e.g.
//      import React from 'react'
//      const lowerCaseComponentName = (props) => { return <div>{props.children</div> }      // instead of {props.children} there will be 'This is the text that will be passed in through the .children method'
//      export default lowerCaseComponentName;
//
// NOTE REACT: If you wish to define a variable within a class you use a special syntax. This obviously only works with stateful components as they are
//      the only component type that uses classes (thus far)
//      e.g.
//      class upperCaseClassName extends Component = {
//          aVariable = "notice how I don't use the var, let, or const keyword to define a variable in a class";
// 
//          render() {
//              return (
//                  <div>
//                      <h1>>wazzap</h1>
//                  </div>
//              );
//          }
//      }
//
// NOTE REACT: This next property can only be defined within stateful components that import the { Component } object from the 'react' component. 
//      The property in question is called 'state'. It is an object for changing the information of a component within the component; rather than
//      changing the information outside of the component with values in the JSX-html tag, and using props to harness those values. Instead of 
//      hard coding props values into the JSX-html tag, you can add them in the state object as a property of state and call the values you need 
//      through this.state. The power of using the state object is that, whenever you make a change to state, the component will re-render and
//      reflect the new state.
//      e.g.
//      class upperCaseClassName extends Component = {
//          state = {
//              persons: [
//                  { name: 'Zach', age: 28 },
//                  { name: 'Dustin', age: 29 },
//                  { name: 'Kat', age: 33 }
//              ]
//          }
// 
//          render() {
//              return (
//                  <div className='upperCaseClassName'>
//                      {this.state.persons[0].name} {this.state.persons[0].age}
//                      {this.state.persons[1].name} {this.state.persons[1].age}
//                      {this.state.persons[2].name} {this.state.persons[2].age}
//                  </div>
//              );
//          }
//      }
//
//      export default upperCaseClassName
//
// NOTE REACT: to fully utilize the state of a component: create an event handler function within the class. 
//      This even handler function will utitlize the this.setState() function to dynamically update the DOM. 
//      The setState() function is a reserved function by React. 
//      You utilize 'this.' to reference the state object that is found local to the component. 
//      The this.setState() method will allow you to change any property of the already defined state. 
//      The method this.setState() takes an argument. 
//      It specifically takes an object as an argument, that way, if you have any other objects within the state property already defined, 
//      only the specific object passed into the this.setState() method will be targeted. 
//      The even handler function, when activated, will make the state change and thus cause the componenet to re-render and reflect the new state. 
//      You must also create something in the component that triggers the event handler function, such as an onClick event with a button. 
//      NOTE: if using onClick, you must capitalize Click, for 'onClick' is a reserved word in React.
// 
//      Make sure that you use curly braces to run the onEvent script, like anything else, otherwise, with the script being in the return function, it will read as text instead of
//      jS.
// 
//      Also make sure that you DO NOT put () when calling the event click handler in your JSX (e.g. <button onClick={this.switchPersonHandler}>Switch Names</button>)
//      otherwise the function will be an IIFE and execute immediately once React renders the button to the DOM. You only want to pass a reference
//      to the function using this.
// 
//      e.g. 
//      class upperCaseClassName extends Component = {
//          state = {
//              persons: [
//                  { name: 'Zach', age: 28 },
//                  { name: 'Dustin', age: 29 },
//                  { name: 'Kat', age: 33 }
//              ]
//          }
// 
//          switchPersonHandler = () => {
//              this.setState(
//                      {
//                          persons: [
//                              { name: 'Matthew Matias', age: 28 },
//                              { name: 'Dustin Higginbotham', age: 29 },
//                              { name: 'Katherine Higginbotham', age: 33 }
//                          ]
//                      }
//              )
//          }
// 
//          render() {
//              return (
//                  <div className='upperCaseClassName'>
//                      <button onClick={this.switchPersonHandler}>Switch Names</button>                // The name and even will change upon click on this button
//                      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//                      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//                      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//                  </div>
//              );
//          }
//      }
//
//      export default upperCaseClassName
//      
// NOTE REACT: YOU CAN PASS METHODS ALSO AS PROPS
//      This is SUPER handy because
//
//      e.g. (from the example above)
//
//      <Person click={this.switchPersonHandler} />                 ***********************************IMPORTANT***********************************
//
//      this will allow the method that changes state to be passed a property of the 'click' prop
//
//      so to access this even handler state changer, now, all you have to do
//      is access the props.click property through an e.g. onClick event within the component
//      
//      e.g.
//
//      const person = (props) => {
//          return (
//              <div onClick={props.click}>
//                  <p> When the div is clicked on
//                      the .click property, which
//                      holds the even handler
//                      will fire
//                  </p>
//              </div>
//          )
//      }
// 
// NOTE REACT: TO PASS ARGUMENTS THROUGH COMPONENTS