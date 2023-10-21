//basic calculator function object
const calculate = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
  percent: (a) => a / 100,
  sign: (a) => a * -1,
};

//create event listeners for all buttons
document
  .querySelectorAll("button")
  .forEach((btn) => btn.addEventListener("click", buttonClick));

function calcValues(array) {
  return;
}

//talk to calcWindow
const calcWindow = document.querySelector(".calcWindow");
let stringInput = "";
let evaluation = {};

function updateWindow(string) {
  calcWindow.textContent = string;
}

//gets the ID of the button clicked;
function buttonClick(event) {
  event.preventDefault();
  const buttonID = event.srcElement.id;
  calcWindow.textContent = stringInput;

  switch (buttonID) {
    case "zero":
    case "one":
    case "two":
    case "three":
    case "four":
    case "five":
    case "six":
    case "seven":
    case "eight":
    case "nine":
      if (stringInput[0] == "0") {
        stringInput = event.srcElement.value;
        evaluation.num1 = stringInput;
        updateWindow(stringInput);
      } else if (evaluation.operator) {
        stringInput += event.srcElement.value;
        evaluation.num2 = stringInput;
        updateWindow(stringInput);
      } else {
        stringInput += event.srcElement.value;
        evaluation.num1 = stringInput;
        updateWindow(stringInput);
      }
      console.log(stringInput);
      console.table(evaluation);
      break;
    case "dec":
      if (stringInput.search(/\./) === -1) {
        stringInput += ".";
        evaluation.num1 = stringInput;
        updateWindow(stringInput);
      } else {
        return;
      }
      break;
    case "C":
      evaluation = {};
      stringInput = "0";
      evaluation.num1 = stringInput;
      evaluation.num2 = "";
      evaluation.operator = "";
      updateWindow(stringInput);
      break;
    case "sign":
    case "pct":
      stringInput = calcValues(evaluation.num1, 0, evaluation.operator);
      break;
    case "mult":
    case "div":
    case "sub":
    case "plus":
      evaluation.operator = buttonID;
      console.table(evaluation);
      if (!evaluation.num1) {
        evaluation.num1 = stringInput;
        stringInput = "";
      } else if (!evaluation.num2) {
        evaluation.num2 = stringInput;
        stringInput = "";
      } else if (evaluation.num2) {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );
        updateWindow(evaluation.num1);
      } else break;
    case "equal":
      evaluation.num1 = calcValues(
        evaluation.num1,
        evaluation.num2,
        evaluation.operator
      );
      updateWindow(evaluation.num1);

      break;
  }
}

function calcValues(numa, numb, operator) {
  a = parseFloat(numa);
  b = parseFloat(numb);

  console.log(operator);
  console.log(a);
  console.log(b);
  switch (operator) {
    case "plus":
      return calculate.sum(a, b);
    case "sub":
      return calculate.sub(a, b);
    case "mult":
      return calculate.mult(a, b);
    case "div":
      return calculate.div(a, b);
    case "sign":
      return calculate.sign(a);
    case "pct":
      return calculate.percent(a);
  }
}
