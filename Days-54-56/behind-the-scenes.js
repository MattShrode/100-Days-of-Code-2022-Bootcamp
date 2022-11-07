const hobbies = ['Sports', 'Cooking']; //A pointer to the array is stored in the variable.
const age = 32; //The value iteself is stored.

hobbies.push('Reading'); //The address of the array doesn't change, and thus the const is maintained.

console.log(hobbies);

//Primitive Values: Numbers, Strings, Booleans, and more (Undefined)

//Reference Values: Objects (Objects, Arrays, Functions)

//Arrays and Objects are stored in a special kind of memory.

const person = {age: 32};

function getAdultYears1(p) {
    p.age -= 18;
    return p.age;
}

console.log(getAdultYears1(person));
console.log(person); //What happened is the reference object value was changed. The object was updated by the function.

const person1 = {age: 32};


function getAdultYears2(p) {
    return p.age - 18; //This will not override the original object age like the previous function would.
}

console.log(getAdultYears2(person1));
console.log(person1);

const person2 = {age: 32};

console.log(getAdultYears1({...person2})); //The Spread Operator will create a new object with the values from the original object, 
                                           //preventing the original object values from being changed.
console.log(person2);