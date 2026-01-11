const calculator = {
  num1: "",
  num2: "",
  operator: "",
  result: "",
};

const displayUpper = document.getElementById("display_upper");
const displayDown = document.getElementById("display_down");

function updateDisplay() {
  displayUpper.value = `${calculator.num1} ${calculator.operator} ${calculator.num2}`;
  displayDown.value =
    calculator.result !== ""
      ? calculator.result
      : calculator.num2 || calculator.num1 || "0";
}

function appendNumber(value) {
  let target = calculator.operator ? "num2" : "num1";

  if (value === "." && calculator[target].includes(".")) return;

  if (value === "." && calculator[target] === "") {
    calculator[target] = "0.";
  } else {
    calculator[target] += value;
  }

  calculator.result = "";
}

document.querySelectorAll(".buttonNumber").forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.textContent);
    updateDisplay();
  });
});

document.querySelectorAll(".buttonOper").forEach((btn) => {
  btn.addEventListener("click", () => {
    const op = btn.textContent;

    if (op === "=") {
      calculateResult();
    } else {
      if (calculator.num1 && calculator.operator && calculator.num2) {
        calculateResult();
      }
      if (calculator.num1) {
        calculator.operator = op;
      }
    }
    updateDisplay();
  });
});

function clearAll() {
  calculator.num1 = "";
  calculator.num2 = "";
  calculator.operator = "";
  calculator.result = "";
}

function clearLast() {
  if (calculator.num2) calculator.num2 = calculator.num2.slice(0, -1);
  else if (calculator.operator) calculator.operator = "";
  else calculator.num1 = calculator.num1.slice(0, -1);
}

// AC - clear by each symbol
document.getElementById("clears").addEventListener("click", () => {
  clearLast();
  updateDisplay();
});

// C - clear all
document.getElementById("clear").addEventListener("click", () => {
  clearAll();
  updateDisplay();
});

function calculateResult() {
  if (!calculator.num1 || !calculator.operator) {
    alert("Please enter a number or an operator");
    return;
  }

  if (!calculator.num2) {
    alert("You should enter the second number");
    return;
  }

  let n1 = parseFloat(calculator.num1);
  let n2 = parseFloat(calculator.num2);
  let res;

  switch (calculator.operator) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "×":
      res = n1 * n2;
      break;
    case "÷":
      res = n2 === 0 ? "Error" : n1 / n2;
      break;
    case "%":
      res = (n1 * n2) / 100;
      break;
    default:
      return;
  }

  calculator.result = res.toString();
  calculator.num1 = calculator.result;
  calculator.num2 = "";
  calculator.operator = "";
  updateDisplay();
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === ".") {
    appendNumber(key);
    updateDisplay();
  } else if (["+", "-", "*", "/"].includes(key)) {
    e.preventDefault();
    if (calculator.num1 && calculator.operator && calculator.num2) {
      calculateResult();
    }
    if (calculator.num1) {
      calculator.operator = key === "*" ? "×" : key === "/" ? "÷" : key;
    }
    updateDisplay();
  } else if (key === "%") {
    e.preventDefault();
    if (calculator.num1 && calculator.operator && calculator.num2) {
      calculateResult();
    }
    if (calculator.num1) {
      calculator.operator = "%";
    }
    updateDisplay();
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    calculateResult();
  } else if (key === "Backspace") {
    clearLast();
    updateDisplay();
  } else if (key.toLowerCase() === "c") {
    clearAll();
    updateDisplay();
  } else if (key === "Escape") {
    clearAll();
    updateDisplay();
  }
});

updateDisplay();
