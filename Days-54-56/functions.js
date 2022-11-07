function greetUser(userName = 'User') { // Adds a default value for the parameter. Will be overridden if any value is entered.
                                        // Must come at the end, because it makes the parameter optional.
    console.log("Hi there, " + userName + "!");
}

greetUser('Matt');