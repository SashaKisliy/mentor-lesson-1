// node calc.js sum 5 10 20
// node calc.js sub 100 50 15
// node calc.js mult 2 5 10
// node calc.js div 50 2 1
// console.log(process.argv);
const [operator, ...data] = process.argv.slice(2);
const numbers = data.map((num) => Number(num));

function calculate(op, numbersArrray) {
  let total = null;
  switch (op) {
    case "sum":
      total = numbersArrray.reduce((acc, number) => acc + number);
      break;
    case "sub":
      total = numbersArrray.reduce((acc, number) => acc - number);
      break;
    case "mult":
      total = numbersArrray.reduce((acc, number) => acc * number);
      break;
    case "div":
      total = numbersArrray.reduce((acc, number) => acc / number);
      break;

    default:
      total = "Invalid operation type";
  }
  return total;
}

console.log(calculate(operator, numbers));
