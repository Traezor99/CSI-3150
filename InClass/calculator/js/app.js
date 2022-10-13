const calc = {
    displayValue: "0",
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,
};

function inputDigit(digit) {
    if (calc.waitingForSecondOperand === true) {
        calc.displayValue = digit;
        calc.waitingForSecondOperand = false;
    } else {
        calc.displayValue =
            calc.displayValue === "0" ? digit : calc.displayValue + digit;
    }
    console.log(calc);
}

function inputDecimal(dot) {
    if (!calc.displayValue.includes(dot)) {
        calc.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calc;
    const inputValue = parseFloat(displayValue);

    if (operator && calc.waitingForSecondOperand) {
        calc.operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        calc.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calc.displayValue = String(result);
        calc.firstOperand = result;
    }

    calc.waitingForSecondOperand = true;
    calc.operator = nextOperator;
    console.log(calc);
}

function calculate(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return b;
    }
}

function resetCalc() {
    calc.displayValue = "0";
    calc.firstOperand = null;
    calc.operator = null;
    calc.waitingForSecondOperand = false;
}

//Update display box for calculator
function updateDisplay() {
    const display = document.getElementById("display");
    display.value = calc.displayValue;
}

const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
    const { target } = e;

    if (!target.matches("button")) {
        return;
    } else if (target.classList.contains("operator")) {
        handleOperator(target.value);
    } else if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
    } else if (target.classList.contains("all-clear")) {
        resetCalc();
    } else {
        inputDigit(target.value);
    }

    updateDisplay();
});
