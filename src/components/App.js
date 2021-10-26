import React, {useEffect} from 'react';
import '../styles/style.css';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';

import useApp from '../hooks/useApp';
const App = () => {
  const {handleClick, handleKey, state} = useApp();
  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);
  return (
    <div className="appDiv">
      <Display {...state} />
      <ButtonsPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
