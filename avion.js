class Avion {
  constructor(tipo, capacidad, autonomia) {
    this.tipo = tipo;
    this.capacidad = capacidad;
    this.autonomia = autonomia;
  }

  takeOff() {
    console.log(`El avión ${this.tipo} está despegando.`);
  }

  land() {
    console.log(`El avión ${this.tipo} está aterrizando.`);
  }

  fly() {
    console.log(`El avión ${this.tipo} está volando con autonomía de ${this.autonomia} km.`);
  }
}

module.exports = Avion;
