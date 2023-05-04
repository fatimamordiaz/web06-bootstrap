var minimo, maximo;

function empezar() {
  minimo = 1;
  maximo = 100;

  document.getElementById("seccion-preguntas").style.display = "block";

  buscarNumero();
}

function buscarNumero() {
  var numeroMedio = Math.floor((minimo + maximo) / 2);
  document.getElementById("pregunta").innerHTML = "¿Es " + numeroMedio + " el número que estás pensando?";
}

function esMayor() {
  minimo = Math.floor((minimo + maximo) / 2) + 1;
  buscarNumero();
}

function esMenor() {
  maximo = Math.floor((minimo + maximo) / 2) - 1;
  buscarNumero();
}

function adivinado() {
  alert("¡Adiviné el número!");
}