const fs = require('fs');

function readFile() {
    let fileData;
    try {
        const fileData = fs.readFileSync('data.json'); //Shadows the outer variable of the same name.
    } catch (error) {
        console.log(error.message);
    }
    console.log(fileData);
    console.log('Hi there!');
}

readFile();