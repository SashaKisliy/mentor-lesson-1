class CalculatorOop {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  calculate(op, numbersArrray) {
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
  init() {
    return this.calculate(this.operator, this.numbers);
  }
}
const [operator, ...data] = process.argv.slice(2);
const numbers = data.map((num) => Number(num));

module.exports = new CalculatorOop(operator, numbers);
