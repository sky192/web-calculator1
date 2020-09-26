function calculate() {
    var x = parseInt(document.getElementById("first").value);
    var y = parseInt(document.getElementById("second").value);
    var operand = document.getElementById("operand");
    var operandType = operand.options[operand.selectedIndex].value;




    switch (operandType) {
        case '+':
            document.getElementById("result").innerHTML = x + y;
            break
        case '-':
            document.getElementById("result").innerHTML = x - y;
            break
        case '*':
            document.getElementById("result").innerHTML = x * y;
            break
        case '/':
            document.getElementById("result").innerHTML = x / y;
            break
        default:
            break

    }
}