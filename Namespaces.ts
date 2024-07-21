//Namespaces (referred to as "internal modules" in earlier versions of TypeScript) are a TypeScript-specific way to organize and categorize your code, enabling you to group related code together. Namespaces allow you to group variables, functions, interfaces, or classes related to business rules in one namespace and security in another.

//Code inside a namespace is pulled from the global scope and into the scope of the namespace. This placement can help you avoid naming conflicts between components in the global namespace and can be beneficial when working with distributed development teams that may use similar component names.

//For example, namespace A and namespace B both share a function called functionName. Any attempt to access the function without referencing the containing namespace results in an error because the variable declarations are in the global namespace, while the two functions are contained within the scope of their respective namespaces.

//Global Namespace
namespace A {
    export function functionName (){
        console.log("I am function from namespace A");
    }
}
//Global Namespace
namespace B {
    export function functionName (){
        console.log("I am function from namespace B");
    }
}
//Global Namespace
let variable1 = A.functionName(); //Ok
let variable2 = B.functionName(); //Ok
// let variable3 = functionName(); //Error

//You can use namespaces to:
//Reduce the amount of code in the global scope, limiting "global scope pollution."
//Provide a context for names, which helps reduce naming collisions.
//Enhance reusability.

//Organize code by using single file namespaces
//You can implement namespaces within a single TypeScript file or across multiple TypeScript files.
//Complete the steps to define a single file namespace:
//Create a new file called module08_exercise.ts.

//Define a new namespace by using the namespace keyword followed by the namespace name. You can define as many namespaces as needed within a single TypeScript file. At the top of the file, define two namespaces named Greetings and GreetingsWithLength.

//You can now define functions and classes inside of the namespace definition. All components defined within the namespace are scoped to the namespace and removed from the global scope. Add a new function called returnGreeting to the Greetings namespace. This function returns the value of a parameter to the console.

//Add two new functions, returnGreeting and getLength, to the GreetingsWithLength namespace. The returnGreeting function uses the helper function getLength to determine the length of the greeting before returning the message to the console.

//If you want to make a function or class available to code outside of the namespace, add the export keyword before its name. If you omit the export keyword, the component is only available inside the namespace. You can do this if defining components that should only be directly accessible to other components within the namespace. Add the export keyword to the returnGreeting function in both namespaces. The getLength function should not be accessible outside of the GreetingsWithLength namespace so omit the export keyword.

//To use a class or function within a namespace, prefix the component name with the namespace name. Try calling the returnGreeting function without specifying the namespace. This returns an error because both returnGreeting functions are out of scope in the global namespace. Now, try prefixing Greetings or GreetingsWithLength to the returnGreeting function. This provides access to the function within each respective namespace.

//Organize code using nested namespaces
//You can also nest namespaces within namespaces, providing even more options for organizing your code.

//Create a new namespace called AllGreetings and then move the Greetings and GreetingsWithLength namespaces that you created previously inside it. Add the export keyword before both namespace names. This allows the namespace to be accessible outside of the AllGreetings namespace.

//To call the functions, start by typing the outermost namespace name, AllGreetings, a period, and then the next level in the namespace hierarchy, Greetings or GreetingsWithLength. Continue down the hierarchy until you reach the function name.

//Defining a namespace alias
//TypeScript creates an easy-to-navigate hierarchy of nested namespaces. But, as your nested namespaces become more complex, you may want to create an alias to shorten and simplify your code. To do this, use the import keyword.

//Type import greet = AllGreetings.Greetings. This defines a new alias called greet that represents AllGreetings.Greetings. You can now use greet in place of AllGreetings.Greetings in your code.

//Compiling single file namespaces
//You compile a single file namespace the same way that you compile any other TypeScript file. Because namespaces are a TypeScript-only construct, they are removed from the resulting JavaScript code and converted into variables that nest as necessary to form namespace-like objects.

//Organize code by using multi-file namespaces
//You can extend namespaces by sharing them across multiple TypeScript files. When you have namespaces in multiple files that relate to each other, you must add reference tags to tell the TypeScript compiler about the relationships between the files. For example, assume that you have three Typescript files:
//interfaces.ts, which declares a namespace that contains some interface definitions.
//functions.ts, which declares a namespace with functions that implement the interfaces in interfaces.ts.
//main.ts, which calls the functions in functions.ts and represents the main code of your application.
//To inform TypeScript of the relationship between interfaces.ts and functions.ts, you add a reference to interfaces.ts using the triple slash (///) syntax to the top of functions.ts. And then in main.ts, which has a relationship with both interfaces.ts and functions.ts, you add a reference to both files.

//When there is a reference to more than one file, start with the highest-level namespace and then work your way down. TypeScript will use this order when compiling the files.
// In the main.ts file you'll write let x = Functions.functionName();

//Compiling multi-file namespaces
//There are two ways to compile multiple file namespaces: per-file compilation and single file compilation.

//By default, when you run the TypeScript compiler on main.ts, it will examine the reference statements in the file and produce one JavaScript file for each input file. If you choose this option, use <script> tags on the webpage to load each emitted file in the appropriate order.

//You can also instruct the compiler to produce a single JavaScript output file by using the --outFile option. In the example above, the command tsc --outFile main.js main.ts instructs the compiler to produce a single JavaScript file called main.js.