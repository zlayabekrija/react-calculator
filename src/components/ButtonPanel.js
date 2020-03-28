import React  from 'react';
import Button from './Buttons'

const ButtonsPanel = ({clickHandler}) => {
  const handleClick = (name) => clickHandler(name)
  
    return (<div className="panel">
      <div className="group">
        <Button name="AC" color="#ccc" clickHandler={handleClick}/>
        <Button name="+/-" color="#ccc" clickHandler={handleClick} />
        <Button name="%" color="#ccc" clickHandler={handleClick}/>
        <Button name="+" clickHandler={handleClick}/>
      </div>
      <div className="group">
        <Button name="7" color="#ccc" clickHandler={handleClick}/>
        <Button name="8" color="#ccc" clickHandler={handleClick}/>
        <Button name="9" color="#ccc" clickHandler={handleClick}/>
        <Button name="X" clickHandler={handleClick}/>
      </div>
      <div className="group">
        <Button name="4" color="#ccc" clickHandler={handleClick}/>
        <Button name="5" color="#ccc" clickHandler={handleClick}/>
        <Button name="6" color="#ccc" clickHandler={handleClick}/>
        <Button name="-" clickHandler={handleClick}/>
      </div>
      <div className="group">
        <Button name="1" color="#ccc" clickHandler={handleClick}/>
        <Button name="2" color="#ccc" clickHandler={handleClick}/>
        <Button name="3" color="#ccc" clickHandler={handleClick}/>
        <Button name="/" clickHandler={handleClick}/></div>
      <div className="group">
        <Button className="zero" name="0" wide={true} color="#ccc" clickHandler={handleClick}/>
        <Button name="." color="#ccc" clickHandler={handleClick}/>
        <Button name="=" clickHandler={handleClick}/>
      </div>
    </div>)
  }


export default ButtonsPanel;