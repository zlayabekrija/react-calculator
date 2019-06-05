import React     from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const handleClick = () => props.clickHandler(props.name)
  const isWide = props.wide ? 'btnWide' : 'btn';
  return (<div className={isWide} style={{backgroundColor: props.color}} onClick={handleClick}>{props.name}</div>)
};

Button.propTypes = {name: PropTypes.string.isRequired};
Button.defaultProps = {color: '#f5913e', wide: false};

export default Button;