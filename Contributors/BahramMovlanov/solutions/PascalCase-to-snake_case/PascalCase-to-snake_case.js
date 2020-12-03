// find capital letter - is division of words
// make lowercase and insert an underscore

const toSnakeyBoi = (str) =>
  str
    .match(/[A-Z][a-z]*/g)
    .map((substr) => substr.toLowerCase())
    .join("_");

console.log(toSnakeyBoi("TestCase"));

//   str
//     .replace(/[A-Z][a-z]*/g, "_$&")  // "$&" - returns matched string
//     .toLowerCase()
//     .slice(1);
