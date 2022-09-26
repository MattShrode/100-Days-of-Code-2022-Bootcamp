// let greetingText = "Hi my name is Matt!";
// let age = 36;
// alert(greetingText);
// alert("I am " + age + " years old.");

let age = 36;
let userName = "Matt";
let hobbies = ["Baseball", "Gaming", "Movies"];

//alert(hobbies);
//alert(hobbies[0]);

let job = {
  title: "Developer",
  place: "Office",
  salary: 50000,
};

//alert(job.title);

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);

let person = {
  name: 'Matt', //Property
  greet() { //Method
    console.log("Hello!");
  },
};

person.greet();
