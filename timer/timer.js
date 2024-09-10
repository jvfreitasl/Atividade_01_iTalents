function iniciarTemporizador() {
  const tempoSelecionado = document.getElementById("tempo").value;
  const display = document.getElementById("display");
  let tempoRestante = tempoSelecionado;

  const intervalId = setInterval(() => {
    tempoRestante--;
    display.textContent = `Tempo restante: ${tempoRestante} segundos`;

    if (tempoRestante <= 0) {
      clearInterval(intervalId);
      display.textContent = "Tempo esgotado!";
    }
  }, 1000);
}
