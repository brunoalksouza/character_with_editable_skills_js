// const personagem = document.querySelector("#personagem");
// personagem.addEventListener("click", dizOi);
// function dizOi() {
//   alert("oiiiiiiiiiiiiiiii");
// }

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]");
console.log(estatisticas);

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    atualizaestatisticas();
  });
});

function manipulaDados(operacao, controle) {
  const habilidade = controle.querySelector("[data-contador]");
  if (operacao === "-") {
    habilidade.value = parseInt(habilidade.value) - 1;
  } else {
    habilidade.value = parseInt(habilidade.value) + 1;
  }
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
