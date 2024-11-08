let currentExpression = "";
const result = document.getElementById("result");

function appendNumber(number) {
  currentExpression += number;
  result.value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += `${operator}`;
  result.value = currentExpression;
}

function calculateResult() {
  try {
    currentExpression = eval(
      currentExpression.replace("÷", "/").replace("×", "*")
    );
    result.value = currentExpression;
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  currentExpression = "";
  result.value = "";
}

console.log(eval("4 / 2"));
