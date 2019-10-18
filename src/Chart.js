import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('10 yr', 0),
  createData('15 yr', 300),
  createData('20 yr', 600),
  createData('25 yr', 800),
  createData('30 yr', 1500),
  createData('35 yr', 2000),
  createData('40 yr', 2400),
  createData('45 yr', 2400),
  createData('50 yr', undefined),
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Your Progress</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Overall Progress (%)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}