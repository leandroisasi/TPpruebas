class Bala {
  constructor(posX, posY, velocidad, color) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad; // Dirección de la bala (horizontales)
    this.color = color; // Color de la bala (pasado desde el tanque)
    this.diametro = 10; // Tamaño de la bala
  }

  mover() {
    this.posX += this.velocidad; // Movimiento horizontal de la bala
  }

  dibujar() {
    fill(this.color); // Usamos el color de la bala
    ellipse(this.posX, this.posY, this.diametro); // Dibuja la bala
  }

  // Método para detectar colisiones con los tanques
  colisionConTanque(tanque) {
    if (this.posX + this.diametro / 2 > tanque.posX &&
        this.posX - this.diametro / 2 < tanque.posX + tanque.ancho &&
        this.posY + this.diametro / 2 > tanque.posY &&
        this.posY - this.diametro / 2 < tanque.posY + tanque.alto) {
      tanque.vida.perderVida(); // El tanque pierde una vida
      this.posX = -1000; // Destruir la bala
      return true; // Colisión detectada
    }
    return false; // No hay colisión
  }
}
