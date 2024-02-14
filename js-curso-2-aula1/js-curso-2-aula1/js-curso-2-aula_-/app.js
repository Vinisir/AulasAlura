let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto,'Brazilian Portuguese Female' , {rate:1.2});
}
function exibirMensagemInicial (){
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

        if (chute == numerosecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemtentativas = `Você descobriu o Número secreto com ${tentativas} ${PalavraTentativa}`;
            exibirTextoNaTela ('p', mensagemtentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numerosecreto){
                exibirTextoNaTela ('p', 'O Número é menor');
            } else {
                exibirTextoNaTela ('p','O Número é maior');
         }
         tentativas++;
         LimparCampo ();
    }
  }
  function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
  }  
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){ 
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push 
        return numeroEscolhido;
    }
} 

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById ('reiniciar').setAttribute ('disabled', true)
 
    console.log(chute == numerosecreto );
}
