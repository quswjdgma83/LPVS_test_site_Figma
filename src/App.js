import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "name" : "similarity",
        "source" : 100,
        "lic": 80
    }
];


export default function App() {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginLeft: '20px' }}>
              <ResponsiveContainer width={400} height={300}>
                  <BarChart width={500} height={200} data={data} barCategoryGap={50} barGap={10}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="source" fill="black" barSize={50} />
                      <Bar dataKey="lic" fill="blue" barSize={50} />
                  </BarChart>
              </ResponsiveContainer>
          </div>
          <div style={{ flex: 1, marginLeft: '-37%' }}>
              <h4 style={{ marginTop: '10px',  display: 'inline-block', alignItems: 'center', width: '100%', justifyContent: 'center', whiteSpace: 'pre' }}>
                  <span>user code{'\n'}</span>
                  <span style={{ backgroundColor: "white" }}>
                    main(){'{'} {"\n"}
                    </span>
                  <span style={{ backgroundColor: "red" }}>printf("hello world");{'\n'}</span>
                  <span style={{ backgroundColor: "white" }}>{'}'}</span>
              </h4>
          </div>
          <div style={{ flex: 1, marginLeft: '-40%' }}>
              <h4 style={{ marginTop: '10px',  display: 'inline-block', alignItems: 'center', width: '100%', justifyContent: 'center', whiteSpace: 'pre' }}>
                  <span>licence code {'\n'}</span>
                  <span style={{ backgroundColor: "white" }}>
                    main(){'{'} {"\n"}
                    </span>
                  <span style={{ backgroundColor: "red" }}>printf("hello world");{'\n'}</span>
                  <span style={{ backgroundColor: "white" }}>{'}'}</span>
              </h4>
          </div>
      </div>
  );
}