function objetoJogador(nome) {
  return (jogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

function adicionaJogador() {
  var nome = document.getElementById("novoJogador").value;
  if (nome !== "") {
    jogadores.push(objetoJogador(nome));
  } else {
    alert("Insira o nome do Jogador!");
  }

  document.getElementById("novoJogador").value = "";
  exibeJogadoresNaTela(jogadores);
}

var jotaro = {
  nome: "Jotaro",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
var dioBrando = {
  nome: "Dio",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

// jotaro.pontos = calculaPontos(jotaro);
// dioBrando.pontos = calculaPontos(dioBrando);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [jotaro, dioBrando];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='removerJogador(" + i + ")'>Excluir</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function removerJogador(i) {
  var jogador = jogadores[i];
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}