let nome = prompt("Digite o seu nome");

let nota1 = parseFloat(prompt("Digite a 1ª nota"));
let nota2 = parseFloat(prompt("Digite a 2ª nota"));
let nota3 = parseFloat(prompt("Digite a 3ª nota"));
let nota4 = parseFloat(prompt("Digite a 4ª nota"));

let media = (nota1 + nota2 + nota3 + nota4) / 4; 

alert (`${nome}, sua média é ${media.toFixed(2)}`);