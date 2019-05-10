import React        from 'react';
import ReactDOM     from 'react-dom';
import '../styles/style.css';
import Display      from './Display';
import ButtonsPanel from './ButtonPanel';
import calculate    from '../logic/calculate';

class App extends React.Component {

  state = {
    total: '',
    next: '',
    operation: ''
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    let buttonName;
    if (e.target.className !== 'display'){
      buttonName = e.target.textContent;
      let data = calculate(this.state, buttonName);
      this.setState({
        total: data.total,
        next: data.next,
        operation: data.operation
      });
    }
  };

  render() {
    let {total, next, operation} = this.state;
    let secVal = next || '';

    return (
      <div className="appDiv">
        <Display result={total} sign={operation} next={secVal}/>
        <ButtonsPanel onClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;