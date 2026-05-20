class Carro {
  constructor(color, precio, modelo) {
    this.color = color;
    this.precio = precio;
    this.modelo = modelo;
  }

  start() {
    console.log(`El ${this.modelo} de color ${this.color} está encendido.`);
  }

  stop() {
    console.log(`El ${this.modelo} de color ${this.color} está apagado.`);
  }

  reverse() {
    console.log(`El ${this.modelo} de color ${this.color} está en reversa.`);
  }
}

module.exports = Carro;
