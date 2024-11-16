class Obstaculo {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.ancho = 50; // Ancho del obstáculo
    this.alto = 50; // Alto del obstáculo
    this.velocidad = velocidad; // Velocidad de movimiento del obstáculo
  }

  dibujar() {
    fill(150); // Color del obstáculo
    rect(this.x, this.y, this.ancho, this.alto); // Dibujar el obstáculo como un rectángulo
  }

  mover() {
    // Movimiento simple para los obstáculos
    this.y += this.velocidad;

    // Cambiar de dirección si alcanzan el borde superior o inferior
    if (this.y <= 0 || this.y >= height - this.alto) {
      this.velocidad *= -1;
    }
  }
}
