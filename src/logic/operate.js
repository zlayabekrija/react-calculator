import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  switch (operation) {
    default:
      break;
    case '+':
      return Number(numberOne.plus(numberTwo));
    case '-':
      return Number(numberOne.minus(numberTwo));
    case 'X':
      return Number(numberOne.times(numberTwo));
    case '%':
      return Number(numberOne.mod(numberTwo));
    case '/':
      return Number(numberOne.div(numberTwo));
  }
};

export default operate;