// Reverse the sentence "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus"

module.exports = function reverseSentence() {
  const sentenceToReverse =
    "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus";

  console.log(sentenceToReverse.split(" ").reverse().join(" "));
};
