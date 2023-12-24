let currentInput = '';

function appendValue(value) {
    currentInput += value;
    updateScreen();
}

function appendOperator(operator) {
    currentInput += operator;
    updateScreen();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function clearScreen() {
    currentInput = '';
    updateScreen();
}


function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateScreen();
    } catch (error) {
        currentInput = 'Error';
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('screen').innerText = currentInput;
}

function clearOne() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}