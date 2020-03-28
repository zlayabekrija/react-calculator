import React     from 'react';
import PropTypes from 'prop-types'

const Display = ({total, next, operation}) => {
  const res = total === '' ? '0' : total;
  const ops = operation === '=' ? '' : operation;
  return (<div className="display">{res} {ops} {next}</div>)
};

Display.defaultProps = {total: '0'};
Display.propTypes = {total: PropTypes.string.isRequired};

export default Display;