const screen = document.getElementById("screen");
let operation = "";

function press(value) {
  operation += value;
  screen.innerText = operation;
}

function clearScreen() {
  operation = "";
  screen.innerText = "";
}

function deleteOne() {
  operation = operation.slice(0, -1);
  screen.innerText = operation;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}


function calculate() {
  if (operation === "") return;


  let operator = "";
  if (operation.includes("+")) {
    operator = "+"; 
  }
  else if (operation.includes("-")) {
    operator = "-";
  }
  else if (operation.includes("*")) {
    operator = "*";
  }
  else if (operation.includes("/")) {
    operator = "/";
  }

  if (operator === "") {
    return;
  }

  let numbers = operation.split(operator).map(Number);
  let result;

  switch(operator) {
    case "+": 
      result = add(numbers[0], numbers[1]); 
      break;
    case "-": 
      result = substract(numbers[0], numbers[1]); 
      break;
    case "*": 
      result = product(numbers[0], numbers[1]); 
      break;
    case "/": 
      result = division(numbers[0], numbers[1]); 
      break;
  }

  screen.innerText = result;
  operation = result.toString();
}
