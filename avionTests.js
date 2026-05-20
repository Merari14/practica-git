const assert = require('assert');
const Avion = require('./avion');

describe('Avion', function () {
  it('debería crear un avión con tipo, capacidad y autonomía', function () {
    const avion = new Avion('Boeing 737', 180, 5600);
    assert.strictEqual(avion.tipo, 'Boeing 737');
    assert.strictEqual(avion.capacidad, 180);
    assert.strictEqual(avion.autonomia, 5600);
  });

  it('debería ejecutar takeOff sin errores', function () {
    const avion = new Avion('Airbus A320', 150, 6100);
    assert.doesNotThrow(() => avion.takeOff());
  });

  it('debería ejecutar land sin errores', function () {
    const avion = new Avion('Cessna 172', 4, 1280);
    assert.doesNotThrow(() => avion.land());
  });

  it('debería ejecutar fly sin errores', function () {
    const avion = new Avion('Embraer 190', 100, 4400);
    assert.doesNotThrow(() => avion.fly());
  });
});
