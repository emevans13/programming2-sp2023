function add(x1, x2) {
    println(x1 + x2)
}

add(5,7);

function subtract(x1, x2) {
    println(x1 - x2)
}

subtract(6,2);

function multiply(x1, x2) {
    println(x1 * x2)
}

multiply(10,2);

function divide(x1, x2) {
    println(x1/x2)
}

divide(20,4);

const question1 = prompt("What function would you like to do?(add, subtract, multiply, divide): ")
const num1 = parseInt(prompt("Type one number: "));
const num2 = parseInt(prompt("Type another number: "));

if (question1 === "add") {
    add(num1, num2);
} else if (question1 === "subtract") {
    subtract(num1, num2);
} else if (question1 === "multiply") {
    multiply(num1, num2); 
} else if (question1 === "divide") {
    divide(num1, num2);
} else {
    println("Not a valid operation!")
}