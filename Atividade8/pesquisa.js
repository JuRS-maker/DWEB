let idades = [];
let generos = [];
let avaliacoes = [];

let generoEscolhido = null;
let avaliacaoEscolhida = null;

let totalRespostas = 0;

function registrarDados() {
    // Captura da idade do usuário
    idades.push(parseInt(document.getElementById('txtIdadeUser').value));

    // Captura do gênero do usuário
    generos.push(generoEscolhido);

    // Captura da avaliação do usuário
    avaliacoes.push(avaliacaoEscolhida);

    // Limpar os campos após o registro
    document.getElementById('txtIdadeUser').value = "";
    generoEscolhido = null;
    avaliacaoEscolhida = null;

    // Incrementar o contador de respostas
    totalRespostas++;

    document.getElementById('mensagemStatus').innerText = `Resposta registada com sucesso! Total: ${totalRespostas} de 45.`;

    // Mostrar resumo final quando atingir os 45 registos
    if (totalRespostas === 45) {
        mostrarResumoFinal();
    }
}

function gen(escolhaUser) {
    generoEscolhido = escolhaUser;
}

function aval(escolhaUser) {
    avaliacaoEscolhida = escolhaUser;
}

function mostrarResumoFinal() {
    // 1. Média da idade
    let somaIdades = 0;
    let maisVelha = idades[0];
    let maisNova = idades[0];

    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
    let qtdOutros = 0;

    for (let i = 0; i < idades.length; i++) {
        // Soma para a média
        somaIdades += idades[i];

        // Pessoa mais velha e mais nova
        if (idades[i] > maisVelha) maisVelha = idades[i];
        if (idades[i] < maisNova) maisNova = idades[i];

        // Quantidade de péssimo (opinião = 1)
        if (avaliacoes[i] === 1) {
            qtdPessimo++;
        }

        // Quantidade de ótimo (4) e bom (3)
        if (avaliacoes[i] === 4 || avaliacoes[i] === 3) {
            qtdOtimoBom++;
        }

        // Contagem de géneros (considerando: 1=Feminino, 2=Masculino, 3=Outros)
        if (generos[i] === 1) {
            qtdMulheres++;
        } else if (generos[i] === 2) {
            qtdHomens++;
        } else {
            qtdOutros++;
        }
    }

    let mediaIdades = somaIdades / idades.length;
    let porcentagemOtimoBom = (qtdOtimoBom / avaliacoes.length) * 100;

    // Exibir o relatório completo no HTML
    document.getElementById('resultadoFinal').innerHTML = `
        <h3>Relatório Final da Pesquisa</h3>
        <p>• Média da idade: ${mediaIdades.toFixed(1)} anos</p>
        <p>• Idade da pessoa mais velha: ${maisVelha} anos</p>
        <p>• Idade da pessoa mais nova: ${maisNova} anos</p>
        <p>• Quantidade de respostas "péssimo": ${qtdPessimo}</p>
        <p>• Porcentagem de "ótimo" e "bom": ${porcentagemOtimoBom.toFixed(1)}%</p>
        <p>• Mulheres: ${qtdMulheres} | Homens: ${qtdHomens} | Outros: ${qtdOutros}</p>
    `;
}

// Função para abrir o zoom da imagem
function abrirZoom() {
    const modal = document.getElementById("modalZoom");
    const imgOriginal = document.querySelector('.poster-container img');
    const imgModal = document.getElementById("imgZoom");

    if (imgOriginal && imgOriginal.src) {
        modal.style.display = "flex";
        imgModal.src = imgOriginal.src;
    }
}

// Função para fechar o zoom da imagem
function fecharZoom() {
    const modal = document.getElementById("modalZoom");
    modal.style.display = "none";
}

// Opcional: Fecha o modal se o usuário clicar fora da imagem
window.onclick = function (event) {
    const modal = document.getElementById("modalZoom");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}