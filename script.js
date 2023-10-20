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

//gets the ID of the button clicked;
function buttonClick(event) {
  event.preventDefault();
  const buttonID = event.srcElement.id;

  const evaluation = {};

  let stringInput = "";

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
      break;
    case "dec":
      if (stringInput.search(".") === -1) {
        stringInput += ".";
      } else {
        return;
      }
      break;
    case "C":
      evaluation = {};
      stringInput = "";
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
