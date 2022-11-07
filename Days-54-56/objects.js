const job = { title: 'Developer', location: 'Houston', salaray: 50000 }; //Object literal notation.

console.log(new Date().toISOString()); //Date is an object blueprint

class Job { //Class is a blueprint for an object
    constructor(jobTitle, place, salary) { //Special method that tells JS how to construct a concrete instance of this class, an object based on the blueprint.
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
    describe() { //Create a custom method for the class.
        console.log(`I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}.`)
    }
} 

const developer = new Job('Developer', 'Houston', 50000);
const cook = new Job('Cook', 'Dallas', 40000);

console.log(developer);
console.log(cook);

developer.describe();
cook.describe();

//Array Destructuring

const input = ['Matt', 'Shrode'];

const [first, last] = input;

console.log(first);
console.log(last);

//Object Destructuring

const {title, location, salary} = job; //Must refer to the object properties

console.log(title);

const {title: jTitle} = job; //Looks in the object for the title property, and creates the variable with the name jTitle.

console.log(jTitle);