function funcao1() {
    let num1 = parseFloat(prompt("Digite o primeiro número"));
    let num2 = parseFloat(prompt("Digite o segundo número"));
    let num3 = parseFloat(prompt("Digite o terceiro número"));

    if (num1 > num2 && num1 > num3) {
        alert(`O ${num1} é maior`);
    } else {
        if (num2 > num1 && num2 > num3) {
            alert(`O ${num2} é maior`);
        } else {
            alert(`O ${num3} é maior`);
        }
    }
}

function funcao2() {
    let num1 = parseFloat(prompt("Digite o primeiro número"));
    let num2 = parseFloat(prompt("Digite o segundo número"));
    let num3 = parseFloat(prompt("Digite o terceiro número"));
    let menorNum;
    let meioNum;
    let maiorNum;

    if (num1 < num2 && num1 < num3) {
        menorNum = num1;
    } else {
        if (num2 < num1 && num2 < num3) {
            menorNum = num2;
        } else {
            menorNum = num3;
        }
    }

    if (num1 > num2 && num1 > num3) {
        maiorNum = num1;
    } else {
        if (num2 > num1 && num2 > num3) {
            maiorNum = num2;
        } else {
            maiorNum = num3;
        }
    }

    if (menorNum < num1 && num1 < maiorNum) {
        meioNum = num1;
    } else {
        if (menorNum < num2 && num2 < maiorNum) {
            meioNum = num2;
        } else {
            meioNum = num3;
        }
    }

    alert(`A ordem crescente é: ${menorNum} ${meioNum} ${maiorNum}`);
}

function funcao3() {
    let textoOriginal = prompt("Digite alguma palavra: ");
    let stringLimpa = textoOriginal.toLowerCase().replaceAll(" ", " ");
    let textoConvertido = stringLimpa.split("").reverse().join("");

    if (stringLimpa === textoConvertido) {
        alert(`O texto (${textoOriginal}) é palíndromo!`);
    } else {
        alert(`O texto (${textoOriginal}) não é palíndromo!`);
    }
}

function funcao4() {
    let palavra1 = prompt("Digite a primeira palavra: ");
    let palavra2 = prompt("Digite a segunda palavra ");

    if (!palavra1 || !palavra2) {
        alert(`Erro!`);
    } else {
        if (palavra1.includes(palavra2)) {
            alert(`${palavra2} é um subconjunto de ${palavra1}!`);
        } else {
            alert(`${palavra2} não é um subconjunto de ${palavra1}!`)
        }
    }
}

function funcao5() {
    let inputData = prompt("Digite uma data (AAAA-MM-DD):");

    let partes = inputData.split("-");
    let ano = partes[0];
    let mes = partes[1] - 1;
    let dia = partes[2];

    let dataInformada = new Date(ano, mes, dia);

    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let numeroDoDia = dataInformada.getDay();
    let diaEscolhido = diasDaSemana[numeroDoDia];

    alert(`O dia da semana é: ${diaEscolhido}`);
}