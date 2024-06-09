const holaMundo = require('./holaMundo');

test('debería imprimir "¡Hola Mundo!" en la consola', ()=> {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});