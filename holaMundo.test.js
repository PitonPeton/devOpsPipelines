const holaMundo = require('./holaMundo');

test('debería imprimir "¡Hola Mundo!" en la consola', ()=> {
  expect(app.saludar()).toEqual("¡Hola Mundo!");
});