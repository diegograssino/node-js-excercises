// Reverse the string "abcdefghijk"

module.exports = function reverseString() {
  const stringToReverse = "abcdefghijk";

  console.log(stringToReverse.split("").reverse().join(""));
};
