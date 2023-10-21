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

function updateWindow(object_name) {
  calcWindow.textContent = object_name.num1;
}

//gets the ID of the button clicked;
function buttonClick(event) {
  event.preventDefault();
  const buttonID = event.srcElement.id;

  let evaluation = {};
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
      stringInput += event.srcElement.value;
      evaluation.num1 = stringInput;
      updateWindow(evaluation);
      break;
    case "dec":
      if (stringInput.search(".") === -1) {
        stringInput += ".";
        updateWindow(evaluation);
      } else {
        return;
      }
      break;
    case "C":
      evaluation = {};
      stringInput = "0";
      break;
    case "sign":
      stringInput = calcValues(evaluation.num1, 0, evaluation.operator);
      break;
    case "pct":
      stringInput = calcValues(evaluation.num1, 0, evaluation.operator);
      break;
    case "div":
      if (!evaluation.num1) {
        evaluation.num1 = stringInput;
        stringInput = "";
      } else if (evaluation.num2) {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );
        updateWindow(evaluation);
      } else {
        evaluation.operator = buttonID;
      }
      break;
    case "mult":
      if (!evaluation.num1) {
        evaluation.num1 = stringInput;
        stringInput = "";
      } else if (evaluation.num2) {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );
        updateWindow(evaluation);
      } else {
        evaluation.operator = buttonID;
      }
      break;
    case "sub":
      if (!evaluation.num1) {
        evaluation.num1 = stringInput;
        stringInput = "";
      } else if (evaluation.num2) {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );

        updateWindow(evaluation);
      } else {
        evaluation.operator = buttonID;
      }
      break;
    case "plus":
      if (!evaluation.num1) {
        evaluation.num1 = stringInput;
        stringInput = "";
      } else if (evaluation.num2) {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );

        updateWindow(evaluation);
      } else {
        evaluation.operator = buttonID;
      }
      break;
    case "equal":
      if (!evaluation.num2) {
        break;
      } else {
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );
      }
      updateWindow(evaluation);
      break;
  }
}

function calcValues(a, b, operator) {
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
