import { useState } from 'react'
import calculate    from '../logic/calculate';
export default function useApp() {
  const [state, setState] = useState({ total: "", next: "", operation: "" })

  const handleClick = (buttonName) => {
    const { total, next, operation } = calculate(state, buttonName);
    setState({ total, next, operation })
  };
  return {
    handleClick,
    state
  }
}
