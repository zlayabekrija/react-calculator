import operate from './operate';

const calculate = ((data, buttonName) => {
  let {total, next, operation} = data;

  switch (buttonName) {
    default:
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total = total * -1;
      next = next * -1;
      break;
    case '%':
    case '+':
    case 'X':
    case '-':
    case '/':
      operation = buttonName;
      if (next !== ''){
      total = operate(total = 0, next, buttonName);
      }
      next = '';
      break;
    case '=':
      if (next !== ''){
        total = operate(total = 0, next, operation);
      }
      operation = '';
      next = '';
      break;
    case '.':
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
      next += buttonName;
      if (total.length < 10 && operation === ''){
      total += next;
      next = ''
    }
      break;
  }
  return {total, next, operation};
});

export default calculate;