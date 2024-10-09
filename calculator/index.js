const firstInput = document.querySelector("Input.firstValue");
const secondInput = document.querySelector("Input.secondValue");
const resultDiv = document.querySelector(".result");

const operator = document.querySelectorAll(".op button");
const calculate = (e) => {
  const num1 = parseFloat(firstInput.value);
  const num2 = parseFloat(secondInput.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "enter both value/number";
    return;
  }

  // console.log(typeof(e.target.textContent))

  let result;
  let textInterContent = e.target.textContent;

  if (textInterContent == "+") {
    result = num1 + num2;
  }

  if (textInterContent == "-") {
    result = num1 - num2;
  }

  if (textInterContent == "x") {
    result = num1 * num2;
  }

  if (textInterContent == "%") {
    if (num2 === 0) {
      resultDiv.textContent = "undefined";
      return;
    }
    result = num1 % num2;
  }

  if (textInterContent == "/") {
    if (num2 === 0) {
      resultDiv.textContent = "undefined";
      return;
    }
    result = num1 / num2;
  }

  resultDiv.textContent = result;
};

operator.forEach((button) => {
  button.addEventListener("click", calculate);
});
