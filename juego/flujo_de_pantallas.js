let pantallaActiva = 1; // 1 = pantalla de inicio, 2 = pantalla de juego
let juego;
let pantallaInicio;

function setup() {
  createCanvas(800, 600);
  pantallaInicio = new Pantalla();
  juego = new Juego();
}

function draw() {
  if (pantallaActiva === 1) {
    pantallaInicio.dibujar(); // Pantalla de inicio
  } else if (pantallaActiva === 2) {
    juego.dibujar(); // Pantalla de juego
  }
}

function keyPressed() {
  if (pantallaActiva === 1) {
    pantallaInicio.teclaPresionada(); // Si estamos en la pantalla de inicio, espera la tecla Enter
  } else if (pantallaActiva === 2) {
    juego.teclaPresionada(); // Si estamos en el juego, maneja las teclas del juego
  }
}
