class Juego {
  constructor() {
    this.tanqueAzul = new Tanque(100, height / 2, 'azul');
    this.tanqueRojo = new Tanque(500, height / 2, 'rojo');
    this.balas = []; // Arreglo para almacenar las balas
    this.obstaculos = []; // Arreglo para almacenar los obstáculos
    this.crearObstaculos();
  }

  crearObstaculos() {
    // Creamos 4 obstáculos con posiciones iniciales y velocidades aleatorias
    for (let i = 0; i < 4; i++) {
      this.obstaculos.push(new Obstaculo(100 * (i + 1), random(50, height - 50), 2)); // Posiciones aleatorias, velocidad 2
    }
  }

dibujar() {
  background(0);
  
  // Dibujar los tanques
  this.tanqueAzul.dibujar();
  this.tanqueRojo.dibujar();
  
  // Dibujar y mover las balas
  for (let i = 0; i < this.balas.length; i++) {
    this.balas[i].dibujar();
    this.balas[i].mover();

    // Detectamos si una bala colisiona con los tanques
    if (this.balas[i].colisionConTanque(this.tanqueAzul) || this.balas[i].colisionConTanque(this.tanqueRojo)) {
      // Si hay una colisión, la bala se elimina
      this.balas[i] = null;
    }
  }

  // Eliminar las balas que se han salido de la pantalla
  this.balas = this.balas.filter(bala => bala !== null);

  // Dibujar y mover obstáculos
  for (let obstaculo of this.obstaculos) {
    obstaculo.dibujar();
    obstaculo.mover();
  }

  // Comprobamos si un tanque ha perdido todas sus vidas
  if (!this.tanqueAzul.vida.estaVivo()) {
    textSize(32);
    fill(255, 0, 0);
    text('¡Tanque Rojo Gana!', width / 2 - 150, height / 2);
  } else if (!this.tanqueRojo.vida.estaVivo()) {
    textSize(32);
    fill(0, 0, 255);
    text('¡Tanque Azul Gana!', width / 2 - 150, height / 2);
  }
}


  teclaPresionada() {
    // Aseguramos que los tanques puedan moverse sin interferir con el juego
    this.tanqueAzul.teclaPresionada();
    this.tanqueRojo.teclaPresionada();
    
    // Verificamos si se presionan las teclas para disparar
    if (key === ' ') {
      this.dispararBala(this.tanqueAzul); // El tanque azul dispara con Enter
    } else if (key === 'Enter') { // Código de tecla para espacio
      this.dispararBala(this.tanqueRojo); // El tanque rojo dispara con Espacio
    }
  }

  dispararBala(tanque) {
    let nuevaBala;
    if (tanque.color === 'azul') {
      // Crear una bala para el tanque azul y pasar el color azul
      nuevaBala = new Bala(tanque.posX + tanque.ancho, tanque.posY + tanque.alto / 2, 5, color(0, 0, 255));
    } else {
      // Crear una bala para el tanque rojo y pasar el color rojo
      nuevaBala = new Bala(tanque.posX, tanque.posY + tanque.alto / 2, -5, color(255, 0, 0));
    }
    this.balas.push(nuevaBala); // Agregar la bala al arreglo
  }
}
