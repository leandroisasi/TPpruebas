let controlPantallas;
let sonido;
let creditosTextos;
let instruccionesTextos;
let avionetaazul, avionetaroja;
let obstaculosestrellas;

function preload() {
  sonido = loadSound('data/musica.mp3');
  creditosTextos = loadStrings('data/creditos.txt');
  instruccionesTextos = loadStrings('data/instrucciones.txt');
  avionetaazul = loadImage('data/autoazul.png');
  avionetaroja = loadImage('data/autoroja.png');
  obstaculosestrellas = loadImage('data/obstaculospiedras.png');
}

function setup() {
  createCanvas(640, 480);
  controlPantallas = new ControlDePantallas();
}

function draw() {
  background(200);
  controlPantallas.mostrarPantallaActual();
}
