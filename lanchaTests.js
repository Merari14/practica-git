const assert = require('assert');
const Lancha = require('./lancha');

describe('Lancha', function () {
  it('debería crear una lancha con color, capacidad y velocidad máxima', function () {
    const lancha = new Lancha('amarilla', 8, 55);
    assert.strictEqual(lancha.color, 'amarilla');
    assert.strictEqual(lancha.capacidad, 8);
    assert.strictEqual(lancha.velocidadMaxima, 55);
  });

  it('debería ejecutar navegar sin errores', function () {
    const lancha = new Lancha('blanca', 6, 45);
    assert.doesNotThrow(() => lancha.navegar());
  });

  it('debería ejecutar anclar sin errores', function () {
    const lancha = new Lancha('verde', 4, 40);
    assert.doesNotThrow(() => lancha.anclar());
  });

  it('debería ejecutar acelerar sin errores', function () {
    const lancha = new Lancha('azul', 10, 60);
    assert.doesNotThrow(() => lancha.acelerar());
  });
});
