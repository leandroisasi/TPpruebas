class Vida {
  constructor(inicio, color) {
    this.vidas = inicio; // Número de vidas iniciales
    this.color = color; // Color del tanque (para saber si es azul o rojo)
  }

  perderVida() {
    this.vidas--; // Disminuir las vidas cuando se recibe un disparo
  }

  mostrar() {
    textSize(20);
    fill(255);
    textAlign(CENTER);
    if (this.color === 'azul') {
      text('Vidas: ' + this.vidas, 50, 30); // Mostrar en la esquina izquierda para el tanque azul
    } else {
      text('Vidas: ' + this.vidas, width - 50, 30); // Mostrar en la esquina derecha para el tanque rojo
    }
  }

  estaVivo() {
    return this.vidas > 0; // Si las vidas son mayores que 0, el tanque sigue vivo
  }
}
