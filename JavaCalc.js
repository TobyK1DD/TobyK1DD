let calculate = () => {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let oper = document.getElementById("operator").value;
     let answer;

    if (oper === "+") {
        answer = num1 + num2;
    } else if (oper === "-") {
        answer = num1 - num2;
    } else if (oper === "*") {
        answer = num1 * num2;
    } else if (oper === "/") {
        answer = num1 / num2;
    } else {
        answer = "Invalid operator";
    }
    document.getElementById("output4").value = answer;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});