function verificaCor(event) {
    let textoIndicador = document.querySelector('#ansewer')
    let elemento = event.target;
    let elemento2 = document.querySelector('#rgb-color').innerText
    elemento2 = `rgb${elemento2}`;
    console.log(elemento2)
    if (elemento.style.backgroundColor == elemento2) {
      textoIndicador.innerText = 'Acertou!'
    } else {
        textoIndicador.innerText = 'Errou! Tente novamente!'
    }
}

function geradorHexadecimal() {
  const paleta = document.getElementsByClassName('ball');
  for (let index = 0; index < paleta.length; index += 1) {

    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    paleta[index].addEventListener('click', verificaCor)
    paleta[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function ramdomCor() {
    const corRgb = document.querySelector('#rgb-color');
    const paleta = document.getElementsByClassName('ball');
    let numberSort = parseInt(Math.random() * paleta.length);
    corRgb.innerText = paleta[numberSort].style.backgroundColor.replace('rgb', '');
}

geradorHexadecimal()
ramdomCor()