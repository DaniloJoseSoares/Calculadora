// Função para anexar números e operadores ao campo de resultado
function anexarResultado(valor) {
    const result = document.getElementById('result');
    result.value += valor;
}

// Função para limpar o campo de resultado
function limparResultado() {
    const result = document.getElementById('result');
    result.value = '';
}

// Função com Vírgula 
/*
function resultadoComVirgula() {
    const result = document.getElementById('result');
    result.value = ''; 
}
*/

// Função para calcular o resultado

function calcularResultado() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (erro) {
        result.value = 'Erro';
    }
}