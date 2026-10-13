let num1 = parseFloat(prompt("Digite o 1º número"));
let num2 = parseFloat(prompt("Digite o 2º número"));

let soma = (num1 + num2);
let subtracao = (num1 - num2);
let produto = (num1 * num2);
let divisao = (num1 / num2);
let resto = (num1 % num2);

alert(`Soma = ${soma}`);
alert(`Subtração = ${subtracao}`);
alert(`Produto = ${produto}`);
alert(`Divisão = ${divisao.toFixed(2)}`);
alert(`Resto = ${resto}`);