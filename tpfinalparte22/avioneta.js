class Avioneta {
  constructor(posX, posY, color) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.ancho = 40;
    this.alto = 20;
    this.velocidad = 2;
    this.vida = new Vida(3, color);
    this.disparosRecibidos = 0;
  }

  recibirDisparo() {
    this.disparosRecibidos++;
    this.vida.perderVida();

    if (this.vida.estaVivo()) {
      return;
    }
  }

dibujar() {
    if (this.color === 'azul') {
      // Dibujar la imagen de la avioneta azul
      image(avionetaazul, this.posX, this.posY, this.ancho, this.alto);
    } else {
      // Dibujar la imagen de la avioneta roja
      image(avionetaroja, this.posX, this.posY, this.ancho, this.alto);
    }
    this.vida.mostrar(); // mostrar las vidas de la avioneta
  }
  teclaPresionada() {
    this.mover();
  }

mover() {
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

  // Limitar a la avioneta para que no salga del lienzo
  this.posX = constrain(this.posX, 0, width - this.ancho);
  this.posY = constrain(this.posY, 0, height - this.alto);
}

}
