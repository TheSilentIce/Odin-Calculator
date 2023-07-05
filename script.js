let numArray = [];
let stringNum = "";
let operator = false;
let reverse = false;

let operators = document.querySelectorAll(".operator");
operators.forEach(element => {
    element.addEventListener('click', () => {
        if (stringNum.length !== 0) {
            numArray.push(stringNum);
            stringNum = "";
        }
        if (numArray.length == 3) {
            calculate(element.textContent);
        } else {
            let display = document.querySelector(".project");
            display.textContent += element.textContent;
            numArray.push(element.textContent);
        }  
    });
});

let numbers = document.querySelectorAll(".number");
numbers.forEach(element => {
    element.addEventListener('click', () => {
        let display = document.querySelector(".project");
        display.textContent += element.textContent;
        stringNum += element.textContent;
    });
});

let easeOperators = document.querySelectorAll(".ease_operator");
easeOperators.forEach(element => {
    element.addEventListener('click', () => {

    });
});

//Functions
function calculate(operator) {
    let result;
    let display = document.querySelector(".project");

    switch (numArray[1]) {
        case "+":
            result = parseInt(numArray[0]) + parseInt(numArray[2]);
            break;
        case "-":
            result = numArray[0] - numArray[2];
            break;
        case "x":
            result = numArray[0] * numArray[2];
            break;
        case "÷":
            result = numArray[0] / numArray[2];
            break;
    }
    display.textContent = result;
    numArray = [];
    numArray.push(result);
    if (operator !== "=") {
        numArray.push(operator);
    }
}

function easeOperatorCheck(operator) {
    switch (operator) {
        case "AC":
            numArray = [];
            operator = false;
            stringNum = "";
            let display = document.querySelector(".project");
            display.textContent = "";
            break;
        case "+/-":
            reverse = true;
            break;  
    }
}

