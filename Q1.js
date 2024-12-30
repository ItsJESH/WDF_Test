const historyElement = document.getElementById("history");
const currentInputElement = document.getElementById("current-input");

let currentInput = "";
let history = [];
let isResultDisplayed = false;

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => handleInput(button.getAttribute("data-value"), button.getAttribute("data-action")));
});

document.addEventListener("keydown", event => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput(null, "equals");
  } else if (key === "Backspace") {
    handleInput(null, "delete");
  } else if (key === "Escape") {
    handleInput(null, "clear");
  }
});

function handleInput(value, action) {
  if (isResultDisplayed && !action) {
    currentInput = "";
    isResultDisplayed = false;
  }

  if (action === "clear") {
    currentInput = "";
    isResultDisplayed = false;
  } else if (action === "equals") {
    try {
      if (currentInput !== "") {
        const result = eval(currentInput).toString();
        history.push(`${currentInput} = ${result}`);
        if (history.length > 5) history.shift();
        currentInput = result;
        isResultDisplayed = true;
      }
    } catch (e) {
      currentInput = "Error";
    }
  } else if (action === "delete") {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput += value;
  }

  updateDisplay();
}

function updateDisplay() {
  historyElement.innerHTML = history.map(item => `<div>${item}</div>`).join("");
  currentInputElement.textContent = currentInput || "0";
}
