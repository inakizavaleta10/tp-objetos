class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    document.write("<p>Alto:</p>", this.alto);
    document.write("<p>Ancho:</p>", this.ancho);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

// Ejemplo de uso:
let rectangulo1 = new Rectangulo(20, 10);
document.write("<p>Propiedades del rectángulo 1:</p>");
rectangulo1.mostrarPropiedades();
document.write(
  "<p>Perímetro del rectángulo 1:</p>",
  rectangulo1.calcularPerimetro()
);
document.write("<p>Área del rectángulo 1:</p>", rectangulo1.calcularArea());

document.write("<p>Modificando propiedades del rectángulo 1:</p>");
rectangulo1.modificarAlto(30);
rectangulo1.modificarAncho(15);
document.write("<p>Nuevas propiedades del rectángulo 1:</p>");
rectangulo1.mostrarPropiedades();
document.write(
  "<p>Nuevo perímetro del rectángulo 1:</p>",
  rectangulo1.calcularPerimetro()
);
document.write(
  "<p>Nuevo área del rectángulo 1:</p>",
  rectangulo1.calcularArea()
);
