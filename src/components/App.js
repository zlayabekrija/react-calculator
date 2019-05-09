import React        from 'react';
import '../styles/style.css';
import Display      from './Display';
import ButtonsPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {

  render() {
    return (
      <div className="appDiv">
        <Display result='22'/>
        <ButtonsPanel />
      </div>
    )
  }
}

export default App;