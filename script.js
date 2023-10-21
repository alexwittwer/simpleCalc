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
    /*handles numeric input. should
     *accumulate numbers until an operator is pushed
     */
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
      //checks if there is a decimal for entering numbers between 0 and 1
      if (stringInput[0] == "0" && stringInput.search(/\./) === -1) {
        stringInput = event.srcElement.value;
        updateWindow(stringInput);
        console.table(evaluation);
      } //checks if operator was pressed, if so, begin building 2nd number
      else if (evaluation.operator !== undefined) {
        stringInput += event.srcElement.value;
        evaluation.num2 = stringInput;
        updateWindow(stringInput);
        console.log("writing num2");
        console.table(evaluation);
      } //otherwise, start building first number
      else {
        stringInput += event.srcElement.value;
        evaluation.num1 = stringInput;
        updateWindow(stringInput);
        console.log("writing num1");
        console.table(evaluation);
      }
      break;
    case "dec":
      //we keep it at string input here to avoid unintended bugs
      if (stringInput.search(/\./) === -1) {
        stringInput += ".";
        updateWindow(stringInput);
      } else {
        return;
      }
      break;
    case "C":
      //program gives funny behaviour if you change stringInput to 0 after clearing
      evaluation = {};
      stringInput = "";
      evaluation.num1 = stringInput;
      delete evaluation.num2;
      delete evaluation.operator;
      updateWindow("0");
      break;
    case "sign":
    case "pct":
      evaluation.num1 = calcValues(evaluation.num1, 0, buttonID);
      //clear operator and num2
      updateWindow(evaluation.num1);
      break;
    case "mult":
    case "div":
    case "sub":
    case "plus":
      //display snarky message for dividing by 0
      if (evaluation.operator === "div" && evaluation.num2 === "0") {
        updateWindow("boom!");
        console.log("test1");
        break;
      }
      //checks if previous operation was done
      if (evaluation.num2 !== undefined && evaluation.num1 !== undefined) {
        evaluation.operator = buttonID;
        evaluation.num1 = calcValues(
          evaluation.num1,
          evaluation.num2,
          evaluation.operator
        );
        updateWindow(evaluation.num1);
        stringInput = "";
        console.log("test2");
      }
      evaluation.operator = buttonID;
      stringInput = "";
      updateWindow(evaluation.num1);
      console.log("test3");
      break;
    case "equal":
      //display snarky message for dividing by 0
      if (evaluation.operator === "div" && evaluation.num2 === "0") {
        updateWindow("boom!");
        break;
      }
      evaluation.num1 = calcValues(
        evaluation.num1,
        evaluation.num2,
        evaluation.operator
      );
      updateWindow(evaluation.num1);
      stringInput = "0";
      delete evaluation.operator;
      break;
  }
}

function calcValues(numa, numb, operator) {
  //checks for empty strings
  if (numa === "") {
    numa = 0;
  }
  if (numb === "") {
    numb = 0;
  }
  a = parseFloat(numa);
  b = parseFloat(numb);

  //prevents premature equal sign
  if (!operator) {
    return a;
  }
  //operation logic
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
