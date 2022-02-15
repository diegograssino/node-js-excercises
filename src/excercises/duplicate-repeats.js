// Devuelve los distintos valores únicos de una lista que incluye duplicados 1, 3, 5, 3, 7, 3, 1, 1, 5

module.exports = function duplicateRepeats() {
  const listOfNumbers = [1, 3, 5, 3, 7, 3, 1, 1, 5];

  const uniqueNumbers = Array.from(new Set(listOfNumbers));

  for (let index = 0; index < uniqueNumbers.length; index++) {
    const repeats = listOfNumbers.filter(
      (number) => number === uniqueNumbers[index],
    ).length;

    console.log(`Número: ${listOfNumbers[index]} Repeticiones: ${repeats}`);
  }
};
