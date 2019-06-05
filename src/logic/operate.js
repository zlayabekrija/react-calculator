import Big   from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  switch (operation) {
    default:
      break;
    case '+':
      return numberOne.plus(numberTwo).valueOf();
    case '-':
      return numberOne.minus(numberTwo).valueOf();
    case 'X':
      return numberOne.times(numberTwo).valueOf();
    case '/':
    case '%':
      console.log(numberTwo.valueOf());
      if (numberTwo.valueOf() === '0') {
        return 'ERROR';
      }
      return numberOne.div(numberTwo).valueOf();
  }
};

export default operate;