const fs = require("fs/promises");

function readFile() {
  let fileData;

  // fs.readFile('data.txt', function(error, fileData) {
  //     console.log('File parsing done.');
  //     console.log(fileData.toString());
  //     //start another async tak that sends the data to a database.

  // });

  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done.");
      console.log(fileData.toString());
      // return anotherAsyncOperation
    })
    .then(function () {}); //Promise chain

  console.log("Hi there!");
}

readFile();
