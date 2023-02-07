let expression = document.querySelector("#equation");
let result = document.querySelector("#result");

const inputs = document.querySelectorAll(".input");

for (let input of inputs) {
    input.addEventListener("click", calculateResult);
}

function calculateResult(e) {
    expression.value += e.target.value;
    if (!e.target.classList.contains("operator")) {
        result.innerText = eval(expression.value);
    }
}

// let expression = {
//     num1: [],
//     num2: [],
//     operator: "",
//     operatorArrivedBefore: false,

//     resetAll: function () {
//         this.num1 = "";
//         this.num2 = "";
//         this.operator = "";
//         this.operatorArrivedBefore = false;
//     },
// };

// function createExpression(e) {
//     let operator;
//     if (
//         e.target.classList.contains("operator") &&
//         expression.operatorArrivedBefore
//     ) {
//         result.value = caluculateResult(expression);
//         expression.resetAll();
//         expression.num1 = result.value;
//     }

//     if (e.target.classList.contains("num")) {
//         result.value += e.target.value;
//         if (expression.operatorArrivedBefore) expression.num2 += e.target.value;
//         else expression.num1 += e.target.value;
//     }

//     if (e.target.classList.contains("operator")) {
//         result.value += e.target.value;
//         expression.operatorArrivedBefore = true;
//         expression.operator = e.target.value;
//     }
//     console.log(
//         expression.num1,
//         expression.operator,
//         expression.num2,
//         result.value
//     );
// }

// const caluculateResult = (expression) => {
//     const num1 = parseFloat(expression.num1);
//     const num2 = parseFloat(expression.num2);
//     const operator = expression.operator;

//     if (operator === "+") return `${num1 + num2}`;
//     if (operator === "-") return `${num1 - num2}`;
//     if (operator === "*") return `${num1 * num2}`;
//     if (operator === "/") return `${num1 / num2}`;
//     return "";
// };

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    expression.value = result.value;
    result.value = "";
});

const AC = document.getElementById("all-clear");
AC.addEventListener("click", () => {
    expression.value = "";
    result.value = "";
});

const DEL = document.getElementById("del");
DEL.addEventListener("click", () => {
    expression.value = expression.value.slice(0, -1);

    let len = expression.value.length;
    const lastChar = expression.value[len - 1];

    if (["+", "-", "*", "/"].includes(lastChar)) {
        result.innerText = eval(expression.value.slice(0, -1));
    } else {
        let ans = eval(expression.value);
        if (ans == undefined) result.innerText = "";
        else result.innerText = ans;
    }
});
