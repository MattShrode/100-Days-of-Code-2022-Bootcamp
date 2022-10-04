// JavaScript Calculator

const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInput = document.getElementById("user-number");
  const enteredNumber = userNumberInput.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResult = document.getElementById("calculated-sum");

  outputResult.textContent = sumUpToNumber;
  outputResult.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

// Highlight Links

const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    if (anchorElement.classList.contains("highlight")) {
      anchorElement.classList.remove("highlight");
    } else {
      anchorElement.classList.add("highlight");
    }
  }
}

highlightLinksButton.addEventListener("click", highlightLinks);

// Your Information

const dummyUserData = {
  firstName: "Matt",
  lastName: "Shrode",
  age: 36,
};

const displayDataButton = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItem = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItem.textContent = outputText;
    outputDataElement.append(newUserDataListItem);
  }
}

displayDataButton.addEventListener("click", displayUserData);

// Statistics

const diceRollButton = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfRolls() {
  const targetNumber = document.getElementById("user-target-number");
  const listOutput = document.getElementById("dice-rolls");

  const enteredNumber = targetNumber.value;
  listOutput.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //     hasRolledTargetNumber = true;
    // }
    numberOfRolls++;

    const newRollListElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText;
    listOutput.append(newRollListElement);

    hasRolledTargetNumber = rolledNumber == enteredNumber; // Same as the if statement
  }

  const outputTotalRolls = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");

  outputTargetNumber.textContent = enteredNumber;
  outputTotalRolls.textContent = numberOfRolls;
}

diceRollButton.addEventListener("click", deriveNumberOfRolls);
