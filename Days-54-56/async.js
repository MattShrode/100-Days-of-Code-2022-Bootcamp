const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // fs.readFile('data.txt', function(error, fileData) {
        // if(error) {
        //     // ...
        // }
  //     console.log('File parsing done.');
  //     console.log(fileData.toString());
  //     //start another async tak that sends the data to a database.

  // });

  fileData = await fs.readFile("data.txt")
    //.then(function (fileData) {
      console.log("File parsing done.");
      console.log(fileData.toString());
      // return anotherAsyncOperation
    //})
    //.then(function () {})
    //.catch(function(error) {
    //    console.log(error);
    //}); //Promise chain

  console.log("Hi there!");
}

readFile();
