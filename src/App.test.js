import React, { PureComponent } from 'react';
import { BarChart, Bar,
         Cell, XAxis,
         YAxis, CartesianGrid,
         Tooltip, Legend,
         ResponsiveContainer } from 'recharts'

const data = [
    {
        "name" : "similarity",
        "sc" : 100,
        "lic": 80
    }
]

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  }
