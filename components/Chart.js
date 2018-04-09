import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-d3-basic';


function Chart({ data }) {
  const lineStyle = { strokeWidth: 2 };

  const chartSeries = [
    {
      color: 'blue',
      name: 'CAC40',
      field: 'CAC40',
      style: lineStyle,
    },
    {
      color: 'red',
      field: 'NASDAQ',
      name: 'NASDAQ',
      style: lineStyle,
    },
  ];

  return (
    <LineChart
      chartSeries={chartSeries}
      data={data}
      height={600}
      width={1000}
      x={d => d.index}
    />
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    CAC40: PropTypes.number.isRequired,
    NASDAQ: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Chart;
