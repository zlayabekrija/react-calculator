import React from 'react';
import '../styles/style.css';
import Display      from './Display';
import ButtonsPanel from './ButtonPanel';

import useApp from '../hooks/useApp'
const App = () => {
    const {handleClick,state} = useApp()
    return (
      <div className="appDiv">
        <Display {...state}/>
        <ButtonsPanel clickHandler={handleClick}/>
      </div>
    )
}

export default App;