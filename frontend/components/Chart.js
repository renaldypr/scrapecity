import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { distanceInWords } from 'date-fns';

export default class Example extends PureComponent {
  render() {
    const scrapesWithDates = this.props.scrapes.map(scrape => {
      return { ...scrape, date: distanceInWords(new Date(scrape.date), new Date())}
    })
    return (
      <LineChart
        width={800}
        height={600}
        data={scrapesWithDates}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    );
  }
}
