const job = { title: 'Developer', location: 'Houston', salaray: 50000 }; //Object literal notation.

console.log(new Date().toISOString()); //Date is an object blueprint

class Job { //Class is a blueprint for an object
    constructor(jobTitle, place, salary) { //Special method that tells JS how to construct a concrete instance of this class, an object based on the blueprint.
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    } 
} 

const developer = new Job('Developer', 'Houston', 50000);
const cook = new Job('Cook', 'Dallas', 40000);

console.log(developer);
console.log(cook);