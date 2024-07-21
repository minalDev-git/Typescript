interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

//Classes in TypeScript create two separate types: the instance type, which defines what members an instance of a class has, and the constructor function type, which defines what members the class constructor function has. The constructor function type is also known as the "static side" type because it includes static members of the class.

//You can now implement the Vehicle interface in the Car class. As you build out the details for the class, TypeScript will ensure that the class adheres to the code contract described in the interface.
class Car implements Vehicle{
    // Properties
    //class properties are public, by default
    private static numberOfCars: number = 0;
    private _make: string;
    private _color: string;
    private _doors: number;
    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    //To set or return the value of the object's members from code, you must define get and set accessors in the class.
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    //You can also use get and set blocks to validate data, impose constraints, or perform other manipulation of the data before you return it to the program.
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    //You can define any TypeScript function within a class and call it as a method on the object or from other functions within the class. These class members describe the behaviors that your class can perform and can perform any other tasks required by the class.
    //function keyword isn't required or allowed when defining functions in a class,
    accelerate (speed:number):string{
        return `${this.worker()} is accelerating to ${speed} MPH`;
    }
    brake():string{
        return `${this.worker()} is braking with the standard braking system`;
    }
    turn(direction:'left'|'right'):string{
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    protected worker():string{
        return this._make;
    }
    public static getNumberOfCars(): number{
        return Car.numberOfCars;
    }
}
class ElectricCar extends Car{
    // Properties unique to ElectricCar
    private _range: number;
     // Constructor
    constructor(make:string, color:string, range:number, doors = 2){
        super(make,color,doors);
        this._range = range;
    }
     // Accessors
    get range() : number {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    //This method includes a call to the worker function that you defined in the Car class. But it raises the error Property 'worker' is private and only accessible within class 'Car'.
    
    charge() {
        console.log(this.worker() + " is charging.")
    }
    //In the Car class, change the access modifier of the worker function from private to protected. This allows subclasses of the Car class to use the function, while keeping it hidden from the members available to objects instantiated from the class. The error in the charge method should now resolve.

    //the parameter signature and return type for the brake method must be the same as the brake method in the Car class. // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
//Now, you can instantiate the Car class using the new keyword and pass parameters to it, creating a new Car object.
let myCar1 = new Car('Cool Car Company', 'blue', 2);
//The member _color represents the property defined in the class, while color is the parameter that you pass to the constructor. When you refer to _color, you're accessing the raw data for the property When you refer to color, you're accessing the property through the get or set accessor,

//It's important to understand the difference between the two because you often do not want to allow direct access to the property without doing some validation or other work on the data before getting or setting it. 
console.log(myCar1.color);
// console.log(myCar1._color);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

//Recall that the set block for the doors parameter tests the value to determine if it is even or odd.Although you passed an odd number to doors, it compiles and runs without errors because no data validation occurs in the constructor.
let myCar2 = new Car('Galaxy Motors', 'red', 3);
//This should invoke the set block and throw an error
myCar2.doors = 5;

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value
//you will typically want to control access to the raw data contained in the property by only allowing access through the get or set accessor.You can also control access to method functions.
//In TypeScript, you can control the visibility of class members by adding the public, private, or protected keyword before the member name.

//public: If you don't specify an access modifier, the default is public. You can also explicitly set the member to public by using the public keyword.
//private: If you modify the member with the private keyword, it cannot be accessed from outside of its containing class.
//protected: The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes. (You'll learn more about this later in the module.)
//properties can be made readonly by using the readonly modifier. Readonly properties may only be set when initialized at their declaration or in the constructor.

//When you compare two different types if the types of all members are compatible, then we say the types themselves are compatible. However, when comparing types that have private and protected members, these types are treated differently. For two types to be considered compatible, if one of them has a private member, then the other must have a private member that originated in the same declaration. The same applies to protected members.

//Set the access modifier of the _color, _doors, and _make properties and the worker function to private.

//The properties and methods of the classes defined so far are instance properties, meaning that they are instantiated and called on each instance of the class object. There is another type of property called a static property. Static properties and methods are shared by all instances of a class.
//to make a property static, use the static keyword before a property or method name.
//the syntax className.propertyName is used when accessing the static property.
//Instantiate the Car class as usual and then use the syntax Car.getNumberOfCars() to return the number of instances.
console.log(Car.getNumberOfCars()); //Returns 2

//Inheritance enables you to establish relationships and build hierarchies of classes in object composition.
//The Car class includes the properties make, color and, doors and the methods accelerate, brake, and turn. When the ElectricCar class extends Car,it includes all of the properties and methods of Car(reuses the code), plus a new property called range and a new method called charge.
//ElectricCar is a subclass that uses the extends keyword to derive from the Car base class. (Base classes are also called superclasses or parent classes.)

//When a derived class has a different definition for one of the member functions of the base class, the base function is said to be overridden. Overriding is what happens when you create a function in a subclass with the same name as the function in the base class but, it has different functionality.

//when overriding, for e.g the constructor,
//In the body of the constructor, you must add the super() keyword to include the parameters from the base class. The super keyword executes the constructor of the base class when it runs.
//The super keyword must appear before any references to this. when referring to properties in the subclass.

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);// returns the default, 2
console.log(spark.charge()); // returns "Spark Motors is charging"
console.log(spark.brake());

//Recall that in Typescript, you can use an interface to establish a "code contract" that describe the required properties of an object and their types. So, you can use an interface to ensure class instance shape. Class declarations may reference one or more interfaces in their implements clause to validate that they provide an implementation of the interfaces.

//the interface includes the parameters of the constructor, not the properties.

//TypeScript will raise an error, because the interface can only describe the public-facing side of the class and may not include private members. This prohibits you from using them to check that a class also has the correct types for the private side of the class instance.

//When to use interfaces
//Interfaces are a TypeScript design-time construct.Unlike other programming languages where interfaces can only be used with classes, TypeScript allows you to use an interface to define a data structure without the need for a class. You can use interfaces to define parameter objects for functions, define the structure for various framework properties, and define how objects look from remote services or APIs.

//If you were creating a full-stack application with both client and server implementations, you will typically need to define how data will be structured. 
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
//This interface could be used in a shared module for both your client and server code, ensuring the data structure is the same on both sides. On the client, you might have code to retrieve the dog from the server API you define, which looks like the following:
// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }

//When to use classes
//Classes allow you to define methods, fields, and properties. Classes also provide a way to template objects, defining default values.
//on the server you may want to add code to load or save a dog to the database. A common technique for managing data in a database is to use what's known as the "active record pattern", meaning the object itself has save, load and similar methods. We can use the Dog interface defined above to ensure we have the same properties and structure, while adding the necessary code to perform the operations.
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    // static load(id: number): DogRecord {
    //     // code to load dog from database
    //     return dog;
    // }

    // save() {
    //     // code to save dog to database
    // }
}