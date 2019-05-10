import React     from 'react';
import PropTypes from 'prop-types'

const Display = (props) => {
  return (<div className="display">{props.result} {props.sign} {props.next}</div>)
};

Display.defaultProps = {result: '0'};
Display.propTypes = {result: PropTypes.string.isRequired};

export default Display;