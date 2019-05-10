import React     from 'react';
import PropTypes from 'prop-types'

const Display = (props) => {

  let res = props.sign === '-' && (props.result === '' || props.next !== '') ? '' : props.result;
  return (<div className="display">{res} {props.sign} {props.next}</div>)
};

Display.defaultProps = {result: '0'};
Display.propTypes = {result: PropTypes.string.isRequired};

export default Display;