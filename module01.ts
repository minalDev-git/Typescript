function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));
//declares the variable as a number type without initializing it.
let myVariable: number;
//Alternatively, you can initialize the variable by using "let myVariable: number = 10"
//Primitive types in TypeScript
//Boolean,Number,BigInteger,string,void, null, and undefined
let firstname: string = "Mateo";
let sentence: string = `My name is ${firstname}.
    I am new to TypeScript.`;
console.log(sentence);
//By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2.
//If you want the values to start with a different value, in this case 1, specify that in the enum declaration.
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
//To display the name associated with the enum value, we can use the provided indexer.
console.log(ContractStatus[employeeStatus]);
//The any type is the one type that can represent any JavaScript value with no constraints. This type can be useful when you're expecting a value from a third-party library or user inputs
// let randomValue: any = 10;
// randomValue = 'Mateo';   // OK
// randomValue = true;      // OK
//Using the any type in this example allows you to call:
// A property that doesn't exist for the type.
// randomValue as a function.
// A method that only applies to a string type.
// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error
//The unknown type is similar to the any type in that any value is assignable to type unknown. However, you can't access any properties of an unknown type, nor can you call or construct them.
// let randomvalue: unknown = 10;
// randomvalue = true;
// randomvalue = 'Mateo';
// console.log(randomvalue.name);
// randomvalue();
// randomvalue.toUpperCase();      // Error: Object is of type unknown

//If you need to treat a variable as a different data type, you can use a type assertion.
//A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime effect and is used purely by the compiler.
// (randomValue as string).toUpperCase();
// (<string>randomValue).toUpperCase();
//Type assertions have two syntax forms.
let randomvalue: unknown = 10;
randomvalue = true;
randomvalue = "Mateo";
if (typeof randomvalue === "string") {
  console.log((randomvalue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}
//The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime. This conditional test is called a type guard.

//A union type describes a value that can be one of several types. This flexibility can be helpful when a value isn't under your control (for example, values from a library, an API, or user input.)
//The union type restricts the assignment of values to the specified types in the union, whereas the any type has no restrictions.
let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* Invalid
//Using type guards, you can easily work with a variable of a union type.
function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error
//Intersection types are closely related to union types, but they're used differently. An intersection type combines two or more types to create a new type that has all properties of the existing types.
//An Intersection type uses the ampersand (&) to separate each type.

//Intersection types are most often used with interfaces.
interface Employees {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employees & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};

//Literal types
//A literal is a more concrete subtype of a collective type. What this means is that "Hello World" is a string, but a string isn't "Hello World" inside the type system.
//There are three sets of literal types available in TypeScript: string, number, and boolean. By using literal types, you can specify an exact value that a string, number, or boolean must have (for example, "yes", "no", or "maybe".)

//Literal types are written as object, array, function, or constructor type literals and are used to compose new types from other types. This type definition creates a literal type called testResult, which can contain one of three string values:

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure";       //* Invalid
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid

//Arrays & its syntax.
let list: number[] = [1, 2, 3];
let anotherlist: Array<number> = [1, 2, 3];
//Tuples
//sometimes you have an array that contains values of mixed types. For that purpose, TypeScript provides the Tuple type.
let person1: [string, number] = ["Marcia", 35];
//The person1 Tuple is an array that contains exactly one string value and one numeric value. the elements in the Tuple array are fixed, otherwise an error will be raised.
//You'll also get an error that indicates that the order of the values must match the order of the types.

//interface
//You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
//the only job of an interface is to describe a type. It defines what the code contract requires, while a variable, function, or class that implements the interface satisfies the contract by providing the required implementation details.
//After defining an interface, you can use it as a type and get all the benefits of type checking and Intellisense.
let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};
// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
//we need to specify the fullName method and the values of firstName and lastName

// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.
// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

// tube = ball; error
ball = tube;

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.
// A function is an object in JavaScript and it is compared
// in a similar fashion. With one useful extra trick around
// the params:

let createBall = (diameter: number) => ({ diameter });
let createSphere = (diameter: number, useInches: boolean) => {
  return { diameter: useInches ? diameter * 0.39 : diameter };
};

createSphere = createBall;
// createBall = createSphere; //error

// TypeScript will allow (number) to equal (number, boolean)
// in the parameters, but not (number, boolean) -> (number)

// TypeScript will discard the boolean in the first assignment
// because it's very common for JavaScript code to skip passing
// params when they're not needed.

// Return types are treated like objects, and any differences
// are compared with the same object equality rules above.

let createRedBall = (diameter: number) => ({ diameter, color: "red" });

createBall = createRedBall;
// createRedBall = createBall;

// Where the first assignment works (they both have diameter)
// but the second doesn't (the ball doesn't have a color).
//Interfaces have no run-time representation; they are purely a compile-time construct. Interfaces are particularly useful for documenting and validating the required shape of properties, objects passed as parameters, and objects returned from functions. This enables you to catch errors and make sure you’re passing the right parameters at compile time

interface IceCream {
  flavor: string; //required
  scoops: number; //required
  instructions?: string; //optional
  // readonly company : string;
}
// let myIceCream: IceCream = {
//   flavor: 'vanilla',
//   scoops: 2,
//   company: 'maganum'
// }
// console.log(myIceCream.flavor);

// function tooManyScoops(dessert: IceCream) {
//   if (dessert.scoops >= 4) {
//     return dessert.scoops + " is too many scoops!";
//   }
//   else {
//     return "Your order will be ready soon";
//   }
// }
// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 ,company: 'maganum'}));
//When extending an interface with one or more interfaces, these rules apply:

// You must implement all the required properties from all interfaces.
// Two interfaces can have the same property if the property has the exact same name and type.
// If two interfaces have a property with the same name but different types, you must declare a new property such that the resulting property is a subtype of both interfaces.

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}
let myIceCream: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
};
console.log(myIceCream.flavor);

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon";
  }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));
//You can use interfaces that describe array types that you can index into.
//Indexable types have an index signature that describes the type you can use to index into the object, along with the corresponding return types when indexing.

// the IceCreamArray interface declares an index signature as a number and returns a string type
interface IceCreamArray {
  [index: number]: string;
}

let IceCreams: IceCreamArray;
IceCreams = ["chocolate", "vanilla", "strawberry"];
let myStr: string = IceCreams[0];
console.log(myStr);

//A common pain point for JavaScript and TypeScript developers alike is working with external JavaScript libraries. You can use an interface to describe existing JavaScript APIs and clarify function parameters and return types. The interface provides you with a clear understanding of what an API is expecting and what it will return.
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #" + post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: " + post.body);
}

showPost();

//Rest Parameters in Functions
//If you want to work with multiple parameters as a group (for example, passing them in an array). Or, if you don't know how many parameters a function will ultimately take. You can use rest parameters. Rest parameters are treated as a boundless number of optional parameters. You may leave them off or have as many as you want.

//This example has one required parameter and an optional parameter called restOfNumbers that can accept any number of additional numbers. The ellipsis (...) before restOfNumbers tells the compiler to build an array of the arguments passed to the function and assigns the name that follows to it so you can use it in your function.
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number =  firstNumber;
  for(let counter = 0; counter < restOfNumbers.length; counter++) {
     if(isNaN(restOfNumbers[counter])){
        continue;
     }
     total += Number(restOfNumbers[counter]);
  }
  return total;
}
//You can define function types and then use them when creating your functions. This design is useful if you want to apply the same function type signature to more than one function.
//You can define a function type using a type alias or an interface.
//An interface is better if you want to have the option of extending the function type. A type alias is better if you want to use unions or tuples.

type calculator = (x: number , y: number) => number;
//You can now use the function type as a type signature when declaring functions.
//using interface, the result will be same
// interface Calculator {
//   (x: number, y: number): number;
// }
let AddingNumbers : calculator = (x: number , y: number) : number => x + y;
let subtractNumbers : calculator = (x: number , y: number) : number => x - y;

console.log(AddingNumbers(1,2));
console.log(subtractNumbers(1,2));
//You can also use the calculator function type to pass values from another function. 
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') {
      return addNumbers;
  } else {
      return subtractNumbers;
  }
}
console.log(doCalculation('add')(1, 2))