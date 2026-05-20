const assert = require('assert');
const Carro = require('./carro');

describe('Carro', function () {
  it('debería crear un carro con color, precio y modelo', function () {
    const carro = new Carro('azul', 30000, 'Honda Civic');
    assert.strictEqual(carro.color, 'azul');
    assert.strictEqual(carro.precio, 30000);
    assert.strictEqual(carro.modelo, 'Honda Civic');
  });

  it('debería ejecutar start sin errores', function () {
    const carro = new Carro('verde', 20000, 'Ford Fiesta');
    assert.doesNotThrow(() => carro.start());
  });

  it('debería ejecutar stop sin errores', function () {
    const carro = new Carro('negro', 18000, 'Chevrolet Spark');
    assert.doesNotThrow(() => carro.stop());
  });

  it('debería ejecutar reverse sin errores', function () {
    const carro = new Carro('blanco', 22000, 'Nissan Versa');
    assert.doesNotThrow(() => carro.reverse());
  });
});
