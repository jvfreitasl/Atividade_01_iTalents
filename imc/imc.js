const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

function calcularIMC() {
  const pesoP = parseFloat(peso.value);
  const alturaP = parseFloat(altura.value);

  // Verificando se os valores de peso e altura são válidos
  if (pesoP <= 0 || alturaP <= 0) {
    return "Valores de peso e altura devem ser positivos.";
  }

  // Calculando o IMC
  const imc = pesoP / (alturaP * alturaP);

  // Retornando o resultado
  return (resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc.toFixed(
    3
  )}</p>`); // Arredondando para duas casas decimais
}
