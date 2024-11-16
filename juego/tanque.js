class Tanque {
  constructor(posX, posY, color) {
    this.posX = posX;
    this.posY = posY;
    this.color = color; // Color del tanque (azul o rojo)
    this.ancho = 40;
    this.alto = 20;
    this.velocidad = 20; // Velocidad de movimiento del tanque
    this.vida = new Vida(3, color); // Cada tanque empieza con 3 vidas, pasamos el color para la posición
  }

  dibujar() {
    fill(this.color === 'azul' ? color(0, 0, 255) : color(255, 0, 0));
    rect(this.posX, this.posY, this.ancho, this.alto); // Dibuja el tanque
    this.vida.mostrar(); // Mostrar las vidas del tanque
  }

  teclaPresionada() {
    if (this.color === 'azul') {
      this.mover(); // El tanque azul se mueve con las teclas de dirección
    } else if (this.color === 'rojo') {
      this.mover(); // El tanque rojo se mueve con las teclas de dirección
    }
  }

  mover() {
    // Movimiento libre con las teclas de dirección
    if (this.color === 'azul') {
      if (keyIsDown(LEFT_ARROW)) {
        this.posX -= this.velocidad;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.posX += this.velocidad;
      }
      if (keyIsDown(UP_ARROW)) {
        this.posY -= this.velocidad;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.posY += this.velocidad;
      }
    } else if (this.color === 'rojo') {
      if (keyIsDown(65)) { // 'A' para mover a la izquierda
        this.posX -= this.velocidad;
      }
      if (keyIsDown(68)) { // 'D' para mover a la derecha
        this.posX += this.velocidad;
      }
      if (keyIsDown(87)) { // 'W' para mover arriba
        this.posY -= this.velocidad;
      }
      if (keyIsDown(83)) { // 'S' para mover abajo
        this.posY += this.velocidad;
      }
    }

    // Limitar al tanque para que no salga del lienzo
    this.posX = constrain(this.posX, 0, width - this.ancho);
    this.posY = constrain(this.posY, 0, height - this.alto);
  }
}
