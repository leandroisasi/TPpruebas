class ControlDePantallas {
  constructor() {
    this.pantallaActiva = 1; // Pantalla inicial
    this.pantallas = {
      1: new Inicio(),
      2: new Juego(),
      3: new Creditos(),
      4: new Instrucciones(),
      5: new Ganador()
    };
  }

  cambiarPantalla(nuevaPantalla) {
    this.pantallaActiva = nuevaPantalla;
  }

  mostrarPantallaActual() {
    if (this.pantallas[this.pantallaActiva]) {
      this.pantallas[this.pantallaActiva].mostrar();

      // Manejo del sonido solo en la pantalla de créditos
      if (this.pantallaActiva === 3) {
        if (!sonido.isPlaying()) {
          sonido.loop();
        }
      } else {
        if (sonido.isPlaying()) {
          sonido.stop();
        }
      }
    }
  }
}
