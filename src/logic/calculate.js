import operate from './operate';

const calculate = ((data, buttonName) => {
  let {total, next, operation} = data;
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
      if (operation === '' && next === ''){
        operation = buttonName;
      }
      if (next !== ''){
        total = Number(total);
        next = Number(next);
        total = operate(total, next, operation);
        operation = buttonName;
      }
      next = '';
      break;
    case '=':
      if (next !== ''){
        total = Number(total);
        total = operate(total, next, operation);
      }
      operation = '';
      next = '';
      break;
    case '.':
      if (operation === '' && total.indexOf('.') !== -1){
        break;
      }
      if (operation !== '' && next.indexOf('.') !== -1){
        break;
      }
      break;
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
      if (total[0] === '0' && total[1] !== '.' && total.length > 0){
        total = buttonName;
      } else if (next[0] === '0' && next[1] !== '.' && next.length > 0){
        next = buttonName;
      } else {
        next += buttonName;
      }
      if (operation === ''){
        total += next;
        next = '';
      }
      break;
    default:
      total = 'ERROR';
      break;
  }
  return {total, next, operation};
});

export default calculate;