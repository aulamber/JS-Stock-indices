import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './';


function Table({ data }) {
  const mapping = data.map(elem => <Row data={elem} key={elem.index} />);

  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '900px',
  };

  return <div style={style}>{mapping}</div>;
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    CAC40: PropTypes.shape({
      exponent: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,
    NASDAQ: PropTypes.shape({
      exponent: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default Table;
