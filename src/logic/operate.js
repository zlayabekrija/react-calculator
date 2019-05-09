import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne + numberTwo);
    case '-':
      return Big(numberOne - numberTwo);
    case 'X':
      return Big(numberOne * numberTwo);
    case '%':
      return Big(numberOne - numberTwo);
    case '/':
      return Big(numberOne / numberTwo);
  }
};

export default operate;