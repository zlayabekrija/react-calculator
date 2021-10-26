import {operations} from '../utilities/utility';
import operate from './operate';

const calculate = ({total, next, operation}, buttonName) => {
  if (total === 'ERROR') {
    total = '';
  }
  if (operation === '=' && !isNaN(Number(buttonName))) {
    total = '';
    next = '';
    operation = '';
  } else if (operation === '=' && operations.includes(buttonName)) {
    operation = buttonName;
  }

  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total = Number(total);
      total = String(total * -1);
      break;
    case '%':
      total = operate(total, 100, buttonName);
      break;
    case '+':
    case 'X':
    case '-':
    case '/':
      if (operation === '' && next === '') {
        operation = buttonName;
      }
      if (next !== '') {
        total = Number(total);
        next = Number(next);
        Number(operate(total, next, operation)) % 1 === 0
          ? (total = operate(total, next, operation))
          : (total = Number(operate(total, next, operation)).toFixed(6).toString());
        if (isNaN(total)) {
          total = 'ERROR';
        }
        operation = buttonName;
      }
      next = '';
      break;
    case '=':
      if (next !== '') {
        total = Number(total);
        Number(operate(total, next, operation)) % 1 === 0
          ? (total = operate(total, next, operation))
          : (total = Number(operate(total, next, operation)).toFixed(6).toString());
      }
      if (isNaN(total)) {
        total = 'ERROR';
      }
      operation = '=';
      next = '';
      break;
    case '.':
      if (total.indexOf('.') !== -1 && buttonName === '.' && next === '') {
        break;
      }
      if (next.indexOf('.') !== -1 && buttonName === '.') {
        break;
      }
    // eslint-disable-next-line
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (total[0] === '0' && total[1] !== '.' && total.length > 0) {
        total = buttonName;
      } else if (next[0] === '0' && next[1] !== '.' && next.length > 0) {
        next = buttonName;
      } else {
        next += buttonName;
      }
      if (operation === '') {
        total += next;
        next = '';
      }
      break;
    default:
      break;
  }
  return {total, next, operation};
};

export default calculate;
