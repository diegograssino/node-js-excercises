// Escriba un programa que imprima, en orden inverso, cada múltiplo de 3 entre 1 y 200.

module.exports = function multiplereverse() {
  for (let index = 200; index > 0; index--) {
    if (index % 3 === 0) {
      console.log(index);
    }
  }
};
