// pegar todos os botões com a classe `controle-ajuste`
const controlesBtn = document.querySelectorAll('buttom.controle-ajuste');

// pega todos os inputs com os valores
const habilidadesInput = document.querySelectorAll('input.controle-contador');

// pegar todos os paragráfos que tenham a classe `estatistica-numero`
// const atributosElement = document.querySelectorAll('p.estatistica-numero');

const atributosElement = {};

// armazenar cada atributo no objeto pra facilitar o acesso, já que invés de usar `atributosElement[0]` podemos usar `atributosElement.ataque`
document.querySelectorAll('p.estatistica-numero')
  .forEach(el => atributosElement[el.dataset.atributo] = el);


controlesBtn.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentElement);
  });
});

function atualizaEstatisticas(hab, valor) {
  // `Object.keys(personagem)` retorna um array com todos os nomes das chaves do objeto `personagem`
  // depois disso foi feito um forEach pra que cada atributo de personagem aumente de forma equivalente a habilidade que ele está aumentando
  Object.keys(personagem).forEach((index) => {
    personagem[index] += habilidades[hab][index] * valor

    atributosElement[index].innerText = personagem[index];
  });

  console.log(personagem);
}

function manipulaDados(operacao, controleElement, qtd = 1) {
  // obs: não sei se os valores dos atributos podem ficar negativos, mas e não puderem, tem que fazer um sistema pra verificar se eles já estão em zero e tal

  const habilidadeInput = controleElement.querySelector('.controle-contador');

  // objeto que vai ser usado como switch para fazer a operação
  const operacoes = {
    // o operador `+` antes do hab.value converte o valor para número, é a mesma coisa que usar o parseInt
    // aqui to falando que sum é referente a uma função que recebe um elemento `hab` e adiciona 1 ao valor desse elemento
    sum: (hab) => {
      hab.value = +hab.value + qtd;
      return qtd;
    },

    // aqui to falando que sub é referente a uma função que recebe um elemento `hab` e subtrai 1 ao valor desse elemento
    sub: (hab) => {
      hab.value = +hab.value - qtd;
      return -qtd
    }
  }

  // invés de usar um vários if's ou um switch, é mais inteligente usar um objeto já que ele funciona exatamente da mesma forma (essa dica é boa ein)
  const qtdComSinal = operacoes[operacao](habilidadeInput);
  atualizaEstatisticas(controleElement.dataset.hab, qtdComSinal);
}

const personagem = {
  ataque: 0,
  velocidade: 0,
  magia: 0,
  defesa: 0
}

const habilidades = {
  forca: {
    ataque: 3,
    velocidade: 0,
    magia: 0,
    defesa: 2,
  },
  destreza: {
    ataque: 1,
    velocidade: 2,
    magia: 0,
    defesa: 2,
  },
  constituicao: {
    ataque: 2,
    velocidade: 2,
    magia: 2,
    defesa: 2,
  },
  inteligencia: {
    ataque: 1,
    velocidade: 0,
    magia: 3,
    defesa: 1,
  },
  sabedoria: {
    ataque: 0,
    velocidade: 0,
    magia: 3,
    defesa: 0,
  },
  carisma: {
    ataque: 0,
    velocidade: 0,
    magia: 2,
    defesa: 0,
  },
};
