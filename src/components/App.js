import React        from 'react';
import '../styles/style.css';
import Display      from './Display';
import ButtonsPanel from './ButtonPanel';
import calculate    from '../logic/calculate';

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    total: '',
    next: '',
    operation: ''
  };
  this.handleClick = this.handleClick.bind(this)
}
  handleClick = (buttonName) => {
      let data = calculate(this.state, buttonName);
      this.setState({
        total: data.total,
        next: data.next,
        operation: data.operation
      });
  };

  render() {
    let {total, next, operation} = this.state;
    let secVal = next || '';

    return (
      <div className="appDiv">
        <Display result={total} sign={operation} next={secVal}/>
        <ButtonsPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}

export default App;