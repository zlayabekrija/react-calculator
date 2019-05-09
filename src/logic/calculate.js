import operate from './operate';

const calculate = ((data, buttonName) => {
  let {total, next, operation} = data;

  switch (buttonName) {
    case 'AC':
      total = 0;
      next = 0;
      break;
    case '+/-':
      total = data.total * -1;
      next = data.next * -1;
      break;
    case '%':
      total = data.total / 100;
      next = data.next / 100;
      break;
    case '+':
    case 'X':
    case '-':
    case '/':
      total = operate(total, next, buttonName);
    case '=':
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
  }
});

export default calculate;