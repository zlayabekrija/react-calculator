import React     from 'react';
import PropTypes from 'prop-types'

const Display = (props) => {
  const result = props.result === '' ? '0' : props.result;
  const operation = props.sign === '=' ? '' : props.sign;
  return (<div className="display">{result} {operation} {props.next}</div>)
};

Display.defaultProps = {result: '0'};
Display.propTypes = {result: PropTypes.string.isRequired};

export default Display;