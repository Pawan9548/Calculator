// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
  // TODO: Implement the clearDisplay function
  // This function should reset the currentInput and update the display
  currentInput = "";
  display.innerText = "0";
}

function deleteLast() {
  // TODO: Implement the deleteLast function
  // This function should remove the last character from currentInput and update the display
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}

function appendNumber(number) {
  // TODO: Implement the appendNumber function
  // This function should add the given number to currentInput and update the display
  currentInput += number;
  display.innerText = currentInput;
}

function appendOperator(operator) {
  // TODO: Implement the appendOperator function
  // This function should add the given operator to currentInput and update the display
  if (currentInput === "" && operator !== "-") return;
  currentInput += operator;
  display.innerText = currentInput;
}

function calculateResult() {
  // TODO: Implement the calculateResult function
  // This function should evaluate the currentInput, display the result, and handle errors
  try {
    if (!currentInput) return;

    let formattedInput = currentInput.replace(/%/g, "/100");
    let result = eval(formattedInput);

    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".calculator-buttons .button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText.trim();

      if (value === "AC") {
        clearDisplay();
      } else if (value === "DEL") {
        deleteLast();
      } else if (value === "=") {
        calculateResult();
      } else if (["+", "-", "*", "/", "%"].includes(value)) {
        appendOperator(value);
      } else {
        appendNumber(value);
      }
    });
  });
});
