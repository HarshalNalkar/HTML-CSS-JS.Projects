function getToInput(value) {
    document.getElementById("inputBox").value += value;
}

function allClearInput() {
    document.getElementById("inputBox").value = "";
}

function eraseOneCharcter() {
    let inputBox = document.getElementById("inputBox");
    let fisrtExpression = inputBox.value;

    if (fisrtExpression > 0) {
        let newExpression = fisrtExpression.slice(0, -1);
        inputBox.value = newExpression;
    }
}

function calculate() {
    let inputBox = document.getElementById("inputBox");
    let expr = inputBox.value;

    try {
        let result = eval(expr); 
        inputBox.value = result;
    } catch (error) {
        inputBox.value = "Error";
    }
}
