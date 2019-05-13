import React  from 'react';
import Button from './Buttons'

class ButtonsPanel extends React.Component {

  render() {
    return (<div className="panel">
      <div className="group">
        <Button name="AC" color="#ccc"/>
        <Button name="+/-" color="#ccc"/>
        <Button name="%" color="#ccc"/>
        <Button name="+"/>
      </div>
      <div className="group">
        <Button name="7" color="#ccc"/>
        <Button name="8" color="#ccc"/>
        <Button name="9" color="#ccc"/>
        <Button name="X"/>
      </div>
      <div className="group">
        <Button name="4" color="#ccc"/>
        <Button name="5" color="#ccc"/>
        <Button name="6" color="#ccc"/>
        <Button name="-" />
      </div>
      <div className="group">
        <Button name="1" color="#ccc"/>
        <Button name="2" color="#ccc"/>
        <Button name="3" color="#ccc"/>
        <Button name="/"/></div>
      <div className="group">
        <Button className="zero" name="0" wide={true} color="#ccc"/>
        <Button name="." color="#ccc" />
        <Button name="="/>
      </div>
    </div>)
  }
}

export default ButtonsPanel;