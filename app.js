let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector(`h1`);
// titulo.innerHTML = `Jogo do numero secreto`;

// let paragrafo = document.querySelector(`p`);
// paragrafo.innerHTML = `Escolha um numero entre 1 a 10`;

function exibirTextoNaTela(tag, texto) {
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMensagemInicial() {
    exibirTextoNaTela(`h1`, `Jogo do numero secreto`);
    exibirTextoNaTela(`p`, `Escolha um numero entre 1 a 50`);

}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector(`input`).value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela (`h1`, `Acertou!`);
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela (`p`, mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela(`p`, `O numero secreto e menor`);
        } else {
            exibirTextoNaTela(`p`, `O numero secreto e maior`);
        }
        tentativas++;
        limparCampo();
    }


}

function geraNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let qunatidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (qunatidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

     
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}


function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);


}