
function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        let expression = resultField.value.replace(/\*\*/g, '^');
        resultField.value = eval(expression);
    } catch (error) {
        resultField.value = 'Error';
    }
}