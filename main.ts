import { returnGreeting } from "./greetings_module.js";
//If greetings_module.ts had contained multiple components, you could import the entire module into a single variable (for example, allGreetingFunctions), as shown in the following statement. You can then use the variable to access all the module exports.
import * as allGreetingFunctions from './greetings_module';  // imports all exported components in the module
// import { returnGreeting } from "./greetings-utilities_module";
//You'll notice an error because both files contain a returnGreeting function and you now have a naming conflict in the global scope of main.ts.
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module.js";
returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'

///<reference path="interfaces.ts"/>
///<reference path="functions.ts"/>
let interestOnlyPayment = Functions.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = Functions.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
