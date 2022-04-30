window.onload = function start() {
  if (localStorage.pont === '0' || localStorage.pont === undefined) {
    localStorage.pont = 0;
  }
};

function atualizaPontos() {
  if (typeof (Storage) !== 'undefined') {
    if (localStorage.pont !== undefined) {
      let pont = parseInt(localStorage.pont, radix);
      pont += 3;
      localStorage.pont = pont;
      document.getElementById('score').innerHTML = pont;
    } else {
      localStorage.pont = 0;
    }
  }
}

function verificaCor(event) {
  const textoIndicador = document.querySelector('#answer');
  const elemento = event.target;
  let elemento2 = document.querySelector('#rgb-color').innerText;
  elemento2 = `rgb${elemento2}`;
  console.log(elemento2);
  if (elemento.style.backgroundColor === elemento2) {
    textoIndicador.innerText = 'Acertou!';
    atualizaPontos();
  } else {
    textoIndicador.innerText = 'Errou! Tente novamente!';
  }
}

function zerarPontuacao() {
  localStorage.pont = 0;
  location.reload();
}

const resetaPontuacao = document.querySelector('#reset-pontuacao');
resetaPontuacao.addEventListener('click', zerarPontuacao);

function geradorHexadecimal() {
  const paleta = document.getElementsByClassName('ball');
  for (let index = 0; index < paleta.length; index += 1) {
    const r = parseInt(Math.random() * 255, radix).toString();
    const g = parseInt(Math.random() * 255, radix).toString();
    const b = parseInt(Math.random() * 255, radix).toString();
    paleta[index].addEventListener('click', verificaCor);
    paleta[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function ramdomCor() {
  const corRgb = document.querySelector('#rgb-color');
  const paleta = document.getElementsByClassName('ball');
  const numberSort = parseInt(Math.random() * paleta.length, radix);
  corRgb.innerText = paleta[numberSort].style.backgroundColor.replace('rgb', '');
}

function reset() {
    let refresh = location.reload();
    refresh;
  }

const btn = document.querySelector('#reset-game');
btn.addEventListener('click', reset);

geradorHexadecimal();
ramdomCor();
