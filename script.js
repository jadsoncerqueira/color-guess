function geradorHexadecimal() {
  const paleta = document.getElementsByClassName('ball');
  for (let index = 0; index < paleta.length; index += 1) {
    let codigoHexa = '#';
    const base = '0123456789ABCDEF';
    for (let i = 0; i < 6; i += 1) {
    codigoHexa += base.charAt(Math.floor(Math.random() * base.length));
    }
    paleta[index].style.backgroundColor = codigoHexa;
  }
}
geradorHexadecimal()