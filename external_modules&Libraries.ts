//TypeScript provides two ways to organize you code: namespaces and modules. While both provide a way to categorize related code in meaningful ways and help you control which code is exposed to the global namespace of your applications, there are some differences between them.

//In addition to modules, you can import other external libraries containing type definitions that you can take advantage of in your code.
//Modules provide a way to organize and categorize your code, enabling you to group related code together. Also, when code is inside a module, it is pulled from the global scope and into the scope of the module. This can help you avoid naming conflicts between components in the global namespace.
//You can export any declaration (such as a variable, function, class, type alias, or interface) by adding the export keyword or import it by using the import keyword. Any file containing a top-level import or export statement is considered a module.

//The export statement explicitly makes a component in one module available to other modules, while the import statement allows you to consume that component from another module. Modules are declarative; the import and export statements at the file level describe the relationships between them.

//FileA(export)-->(import)FileB(export)-->(import)FileC
//<module>                <module>            <module>
//Let's see how to organize variable, class, interface, and function declarations into multiple modules and then use these components in code.

//To export a module component, use the export keyword.
//Create a new file called greetings_module.ts and then add the the following function called returnGreeting to it. Add the export keyword before the function name so it is available to other modules.

//Create a second file called greetings-utilities_module.ts and then add the following two functions, returnGreeting and getLength, to the new file. Add export before the returnGreeting function so it is available to other modules. It is not necessary to export the getLength function because it is only used within the scope of the module.
//Import a module component
//To use the exported components from a module, use the import statement. The import statement can take several forms depending on your objectives.
//To import a single export from a module:
//import { <component name> } from '<module name>'
//To rename an import, use the as keyword:
//import {<component name> as <new name>} from '<module name>'
//To import the entire module into a single variable, and use it to access the module exports:
//import * as <variable name> from '<module name>'
//In next part of the exercise, you'll import components from each of the two modules into a new module.

//Create a new file called main.ts. This file will contain the main code of the application, including the import statements.

//Exercise - Compile modules
//Modules import one another using a module loader. At runtime, the module loader locates and executes all dependencies of a module before executing it. Depending on the module target that you specify during compilation, the compiler will generate appropriate code for Node.js (CommonJS), require.js (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems. 

//To compile modules, specify a --module target on the command line or in the tsconfig.json file for the project.
//Open the terminal and compile the main.ts module for Node.js by typing the following command:
//tsc --module commonjs main.ts
//The compiler follows import statements to compile all dependent files. Notice that when main.ts is compiled, each module will become a separate .js file.
//Type "node main" in the terminal to test the file.

//Running modules from a web page
//If you want to instead compile the TypeScript file for ES6 for use in a web browser, type the following command:
//tsc --module es6 main.ts

//To run a module from a web page, remember to set the type option to "module":
//<script type="module" src=".\main.js"></script>

//Exercise - Access external type libraries
//TypeScript allows you to import libraries much in the same way you import modules you have created. However, unlike your modules the JavaScript library may not have type definitions.

//Importing libraries
//In JavaScript, you use external libraries in your code by using the requires statement. In TypeScript, you gain access to them by using the import statement. After importing a library and its type definition, you can use it in your code and gain the benefits of Intellisense and type checking.

//Type libraries
//Static typing is a primary reason to use TypeScript. External type libraries are available for almost all common libraries, providing this information for libraries that don't contain it (such as those written in JavaScript). The TypeScript compiler can raise an error message if you attempt to use a library that doesn't have type definitions. You’ll also notice that Intellisense is not available when you lack these definitions.

//While some JavaScript libraries will have type definitions, you will discover many do not. The open-source project DefinitelyTyped is a repository of TypeScript type definitions for many popular JavaScript libraries. You install type definitions by using the @types prefix.

//Because the type definitions are only used by TypeScript during design-time, they are not required to be part of the published project. As a result, you can install them as devDependencies.

//npm install --save-dev @types/<library-name>

//In this exercise, you'll install and implement a type library called dotenv. This commonly used library loads environment variables from a .env file into process.env, enabling you to store configuration details in separate from your code and access them. You can use dotenv to manage things like connection strings and other values which may need to change depending on where your code is executing.

//Open a new workspace in Visual Studio Code.

//Add a new file called Main.ts.

//From the terminal, generate a new tsconfig.json file with default configuration settings.
//tsc --init

//Go to DefinitelyTyped and search for the dotenv type library. DefinitelyTyped will provide the name of the library to install and other implementation details.
//https://definitelytyped.org/

//The dotenv type definition also requires you to install the node type definition. node provides access to process.env so you can access it from your code.

//npm install --save-dev @types/node @types/dotenv

//Create a new file in the root directory of your project called .env. This file will contain environment-specific variables for the project.

//In .env, add the variables on new lines in the form of NAME=VALUE. For this example, define three variables:
//DB_HOST=localhost
//WEB_HOST=staging.adventure-works.com

//n Main.ts, import the dotenv type library.
//import dotenv from 'dotenv';

//Assign dotenv.config() to a variable. config reads your .env file, parses the contents, assigns it to process.env, and returns an object with a parsed key containing the loaded content or an error key if it failed.
//const result = dotenv.config();

//TypeScript can now provide Intellisense and type checking for the config object. If you type result., you see that result has two properties: error and parsed. Add an error checking statement to verify that the config operation worked as expect.
// if (result.error) {
//     throw result.error;
// }
//Return the contents of the parsed property to the console.
//console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }

//Access the values contains in each key in process.env and return the value to the console.
// console.log(process.env.DB_HOST);
// console.log(process.env.WEB_HOST);