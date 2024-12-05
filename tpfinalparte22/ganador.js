class Ganador {
  constructor() {
    this.boton = new Boton(250, 400, 150, 50, color(0, 255, 0), color(255), "Volver");
  }

  mostrar(mensaje = "¡Ganador!") {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(mensaje, width / 2, height / 2 - 50);

    this.boton.dibujar();
    if (this.boton.clicEnBoton()) {
      controlPantallas.cambiarPantalla(1);
    }
  }
}
