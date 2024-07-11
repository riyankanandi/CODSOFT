
let sames = document.querySelectorAll(".same");
let resetBtn = document.querySelector("#btnC");
let output = document.querySelector(".output");
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let fun = ["+", "x", "/", "-"];
let storedText = "";
let result = 0;
let n1 = 0;
let n2 = 0;
let currentOperator = null;

const reset = () => {
  output.innerText = "";
  storedText = "";
  n1 = 0;
  n2 = 0;
  currentOperator = null;
};


sames.forEach((same) => {
  same.addEventListener("click", () => {
    let buttonText = same.innerText;
    
    if (buttonText !== 'C' && buttonText !== '=') {
      storedText += buttonText;
      output.innerText = storedText;
      
      if (numbers.includes(buttonText)) {
        if (currentOperator === null) {
          n1 = parseFloat(storedText); 
        } else {
          n2 = parseFloat(storedText);
        }
      } else if (fun.includes(buttonText)) {
        if (currentOperator !== null && n2 !== 0) {
          calculation();
        }
        currentOperator = buttonText;
        storedText = ""; 
      }
    } else if (buttonText === 'C') {
      reset();
    } else if (buttonText === '=') {
      if (currentOperator !== null ) {
        calculation();
      }
    }
  });
});
const calculation = () => {
  switch (currentOperator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "x":
      result = n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        result = "Cannot Be divided by Zero"; 
      } else {
        result = n1 / n2;
      }
      break;
    default:
      result = 0;
      break;
  }
  
  console.log("Result =", result); 
  storedText = result.toString(); 
  output.innerText = storedText;
  n1 = result; 
  n2 = 0; 
};

resetBtn.addEventListener('click', reset);

