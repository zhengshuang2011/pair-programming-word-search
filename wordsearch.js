const transpose = require("../../d2/matrix_transposition");

const wordSearch = (letters, word) => {
  if (word === "") {
    return false;
  }
  word = word.toUpperCase();
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const VerticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of VerticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
