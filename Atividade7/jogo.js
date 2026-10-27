function jogar(escolhaUser) {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    let aleatorio = Math.floor(Math.random() * 3);
    let escolhaComp = opcoes[aleatorio];

    let mensagemResultado = "";

    // Lógica do jogo
    if (escolhaComp === escolhaUser) {
        mensagemResultado = "Empate! 🤝";
    } else if (escolhaComp === "Pedra") {
        if (escolhaUser === "Papel") {
            mensagemResultado = "Você ganhou! 🎉";
        } else if (escolhaUser === "Tesoura") {
            mensagemResultado = "Você perdeu! 🤖";
        }
    } else if (escolhaComp === "Papel") {
        if (escolhaUser === "Pedra") {
            mensagemResultado = "Você perdeu! 🤖";
        } else if (escolhaUser === "Tesoura") {
            mensagemResultado = "Você ganhou! 🎉";
        }
    } else if (escolhaComp === "Tesoura") {
        if (escolhaUser === "Pedra") {
            mensagemResultado = "Você ganhou! 🎉";
        } else if (escolhaUser === "Papel") {
            mensagemResultado = "Você perdeu! 🤖";
        }
    }

    // Exibe o resultado na tela dentro da div com id="resultado"
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <p>Você escolheu: <strong>${escolhaUser}</strong></p>
        <p>O computador escolheu: <strong>${escolhaComp}</strong></p>
        <h2>${mensagemResultado}</h2>
    `;
}