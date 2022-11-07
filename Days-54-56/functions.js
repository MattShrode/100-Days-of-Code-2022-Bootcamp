function greetUser(userName = 'User') { // Adds a default value for the parameter. Will be overridden if any value is entered.
                                        // Must come at the end, because it makes the parameter optional.
    console.log("Hi there, " + userName + "!");
}

greetUser('Matt');

function sumUp(...numbers) { //Rest Parameter - Tells the function to accept any number of parameters, which are then merged into an array behind the scenes.
                             //Expects a list of values, not an array.
    let result = 0;

    for (const number of numbers) {
        result += number; // result = result + number
    }

    return result;
}

const inputNumbers = [1, 5, 10, 20, 30];

console.log(sumUp(...inputNumbers)); //Spread Operator - Using the three dots when calling the function will spread the array or object into a list of values.