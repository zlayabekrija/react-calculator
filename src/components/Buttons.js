import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
const isWide = props.wide ? 'btnWide' : 'btn';
return(<div className={isWide} style={{backgroundColor: props.color}}>{props.name}</div>)}
Button.propTypes = {name: PropTypes.string.isRequired}
Button.defaultProps = {color: 'orange',wide: false}
export default Button