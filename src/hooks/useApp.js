import {useState} from 'react';
import calculate from '../logic/calculate';
import {legalButtons} from '../utilities/utility';
export default function useApp() {
  const [state, setState] = useState({total: '', next: '', operation: ''});

  const handleClick = (buttonName) => {
    const {total, next, operation} = calculate(state, buttonName);
    setState({total, next, operation});
  };
  const handleKey = ({key}) => {
    if (key === 'Enter') key = '=';
    if (key === 'Escape') key = 'AC';
    if (isNaN(Number(key)) && legalButtons.indexOf(key) < 0) return;
    const {total, next, operation} = calculate(state, key);
    setState({total, next, operation});
  };
  return {
    handleClick,
    handleKey,
    state,
  };
}
