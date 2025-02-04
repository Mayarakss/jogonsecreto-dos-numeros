let listaDeNúmerosSorteados = []
let númeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo secreto dos números');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').disabled = false; // Habilita o botão aqui
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor.');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let númeroEscolhido= parseInt(Math.random() * númeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNúmerosSorteados.length;

if (quantidadeDeElementosNaLista == númeroLimite) {
    listaDeNúmerosSorteados = [];
}

  if (listaDeNúmerosSorteados.includes(númeroEscolhido)){
    return gerarNumeroAleatorio ();
  } else {
      listaDeNúmerosSorteados.push(númeroEscolhido);
      return númeroEscolhido;
    }
  }

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}