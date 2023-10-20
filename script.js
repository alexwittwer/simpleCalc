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

//gets the ID of the button clicked;
function buttonClick(event) {
  event.preventDefault();
  alert(event.srcElement.id);
}
