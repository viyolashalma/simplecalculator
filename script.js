let result = document.getElementById("result");

function clearScreen() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function toggleSign() {
  if (result.value.charAt(0) === '-') {
    result.value = result.value.slice(1);
  } else {
    result.value = '-' + result.value;
  }
}

function appendNumber(num) {
  result.value += num;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
