const [operator, ...data] = process.argv.slice(2);
const numbers = data.map((num) => Number(num));

module.exports = {
  operator,
  numbers,
};
