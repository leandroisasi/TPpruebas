let imagenPortada; // Variable global para la imagen

class Pantalla {
  constructor() {
    // Cargar la imagen en el constructor de la pantalla
    imagenPortada = loadImage('data/portada.jpg'); // Asegúrate de que la ruta es correcta
  }

  dibujar() {
    background(255); // Fondo blanco

    // Dibujar la imagen de la portada en la pantalla de inicio
    image(imagenPortada, 0, 0, width, height); // Ajustar la imagen para que ocupe toda la pantalla
    
    // Texto en la pantalla de inicio
    textSize(32);
    fill(0); // Color del texto (negro)
    text('Juego de Tanques', width / 2 - 100, height / 2); // Título centrado
    textSize(20);
    text('Presiona Enter para empezar', width / 2 - 130, height / 2 + 40); // Instrucción
  }

  teclaPresionada() {
    if (keyCode === ENTER) {
      // Iniciar el juego al presionar Enter
      pantallaActiva = 2; // Cambiar pantalla a juego
    }
  }
}
