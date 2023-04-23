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

module.exports = calculate;
