class Lancha {
  constructor(color, capacidad, velocidadMaxima) {
    this.color = color;
    this.capacidad = capacidad;
    this.velocidadMaxima = velocidadMaxima;
  }

  navegar() {
    console.log(`La lancha ${this.color} está navegando.`);
  }

  anclar() {
    console.log(`La lancha ${this.color} está anclada.`);
  }

  acelerar() {
    console.log(`La lancha ${this.color} acelera hasta ${this.velocidadMaxima} km/h.`);
  }
}

module.exports = Lancha;
