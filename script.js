// Variável para armazenar o visor da calculadora
var display = document.getElementById('display');

// Função para adicionar um número ao visor
function appendToDisplay(value) {
    display.value += value;
}

// Função para limpar o visor
function clearDisplay() {
    display.value = '';
}

// Função para calcular o resultado
function calculate() {
    var expression = display.value;
    var resultado = eval(expression); // Usando eval() por simplicidade (cuidado em aplicações reais)
    display.value = resultado;
}

// Função para adicionar um operador ao visor
function appendSymbol(symbol) {
    display.value += symbol;
}
