import React from 'react';
import Button from './Buttons'
class ButtonsPanel extends React.Component {
    render(){
        return (<div className="panel">
        <div className="group">
         <Button name="AC"/>
         <Button name="+/-"/>
         <Button name="%"/>
         <Button name="+"/>
        </div>
        <div className="group">
         <Button name="7"/>
         <Button name="8"/>
         <Button name="9"/>
         <Button name="X"/>
        </div>
        <div className="group">
         <Button name="4"/>
         <Button name="5"/>
         <Button name="6"/>
         <Button name="-"/>
        </div>
        <div className="group">
         <Button name="1"/>
         <Button name="2"/>
         <Button name="3"/>
         <Button name="/"/></div>
        <div className="group">
         <Button className="zero" name="0" wide={true}/>
         <Button name=","/>
         <Button name="="/>
        </div>
        </div>)
    }
}

export default ButtonsPanel;