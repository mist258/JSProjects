const allowedOperators = ["/", "*", "+", "-"];

const formNumberOne = document.getElementById("firstNumber");
const formNumberTwo = document.getElementById("secondNumber");
const operatorInput = document.getElementById("operator");

/* global object to storage data from inputs*/
const calculateState = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    const { name, value } = e.target;

    if (name === "operator") {
      if (!allowedOperators.includes(value)) {
        alert("You should enter one of the allowed operators: /, *, -, +");
        e.target.value = "";
        calculateState.operator = null;
        return;
      }
    }
    if (name === "firstNumber" || name === "secondNumber") {
      if (value === "" || Number.isNaN(Number(value))) {
        calculateState[name] = null;
        e.target.value = "";
        e.target.classList.add("error");
        return;
      } else {
        e.target.classList.remove("error");
      }
    }
    calculateState[name] = value;
  });
});

const button = document.getElementById("calcBtn");

button.addEventListener("click", () => {
  const { firstNumber, secondNumber, operator } = calculateState;

  if (firstNumber === null || secondNumber === null || operator === null) {
    alert("You should fill all inputs");
    return;
  }

  const numberOne = Number(firstNumber);
  const numberTwo = Number(secondNumber);

  let result;

  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      break;
    case "-":
      result = numberOne - numberTwo;
      break;
    case "*":
      result = numberOne * numberTwo;
      break;
    case "/":
      if (numberTwo === 0) {
        alert("Division by zero is not allowed");
      }
      result = numberOne / numberTwo;
      break;
  }
  alert(`${numberOne} ${operator} ${numberTwo} = ${result}`);
});
