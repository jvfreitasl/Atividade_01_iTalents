let numero1 = document.getElementById("num1");
let numero2 = document.getElementById("num2");
let resultado = document.getElementById("resultado"); 

function somar() {
  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);
  let result = num1 + num2;
  resultado.innerHTML = result; 
}

function subtrair() {
  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);
  let result = num1 - num2;
  resultado.innerHTML = result;
}

function multiplicar() {
  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);
  let result = num1 * num2;
  resultado.innerHTML = result;
}

function dividir() {
  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);
  if (num2 === 0) {
    resultado.innerHTML = "Divisão por zero não é permitido";
    return;
  }
  let result = num1 / num2;
  resultado.innerHTML = result;
}
