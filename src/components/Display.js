import React     from 'react';
import PropTypes from 'prop-types'

const Display = (props) => {
  let result = props.result === '' ? '0' : props.result;
  return (<div className="display">{result} {props.sign} {props.next}</div>)
};

Display.defaultProps = {result: '0'};
Display.propTypes = {result: PropTypes.string.isRequired};

export default Display;