import React     from 'react';
import PropTypes from 'prop-types';

const Button = ({clickHandler,name,wide,color}) => {
  const handleClick = () => clickHandler(name)
  const isWide = wide ? 'btnWide' : 'btn';
  return (<div className={isWide} style={{backgroundColor: color}} onClick={handleClick}>{name}</div>)
};

Button.propTypes = {name: PropTypes.string.isRequired};
Button.defaultProps = {color: '#f5913e', wide: false};

export default Button;