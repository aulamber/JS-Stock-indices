import React from 'react';
import PropTypes from 'prop-types';


function Row({ data }) {
  const style = {
    border: '1px solid lightGrey',
    height: '20px',
    padding: '10px 0',
    textAlign: 'center',
    width: '80px',
  };

  const number = value => (value.number
    ? `${String(value.number)}e${String(value.exponent)}`
    : '--'
  );

  return (
    <div>
      <div style={{ ...style, color: 'blue' }}>{number(data.CAC40)}</div>
      <div style={{ ...style, color: 'red' }}>{number(data.NASDAQ)}</div>
    </div>
  );
}

Row.propTypes = {
  data: PropTypes.shape({
    CAC40: PropTypes.shape({
      exponent: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,

    NASDAQ: PropTypes.shape({
      exponent: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Row;
