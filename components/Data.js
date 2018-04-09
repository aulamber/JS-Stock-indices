import React from 'react';

import { Chart, Table } from './';
import { getExponent, getRoundedNumber } from '../helpers/numbers';


class Data extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      data: null,
      error: null,
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.interval = setInterval(this.fetchData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData() {
    fetch('http://localhost:8000?count=20')
      .then(res => res.json())
      .then((json) => {
        const data = json.map(({ index, stocks: { CAC40, NASDAQ } }) => ({
          index,
          CAC40: { exponent: getExponent(CAC40), number: getRoundedNumber(CAC40) },
          NASDAQ: { exponent: getExponent(NASDAQ), number: getRoundedNumber(NASDAQ) },
        }));

        this.setState({ data, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { data, error, loading } = this.state;

    if (loading) {
      return <div>Data is loading, please wait.</div>;
    }

    if (error) {
      return <div>Error fetching data, sorry.</div>;
    }

    if (!data) {
      return <div>No data</div>;
    }

    return (
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Chart
          data={data.map(({ index, CAC40, NASDAQ }) => ({
            index,
            CAC40: CAC40.number,
            NASDAQ: NASDAQ.number,
          }))}
        />

        <Table data={data} />
      </div>
    );
  }
}

export default Data;
