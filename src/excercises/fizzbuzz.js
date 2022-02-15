// Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.

module.exports = function fizzbuzz() {
  for (let index = 0; index < 100; index++) {
    if (index % 3 === 0) {
      index % 5 === 0 ? console.log("fizzbuzz") : console.log("fizz");
    } else if (index % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(index);
    }
  }
};
