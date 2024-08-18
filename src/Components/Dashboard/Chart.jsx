// OriginalChart.js
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OriginalChart = ({ fileName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/Orig${fileName}`)
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  }, [fileName]);

  // Helper function to format date
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.getFullYear(); // Returns only the year portion
  };

  // Calculate the interval dynamically based on data length
  const getInterval = () => {
    return Math.floor(data.length / 20); // Show a label for each year
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 20, // Increased bottom margin to accommodate X-axis labels
        }}
      >
        <defs>
          <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="TIME" 
          tickFormatter={formatDate} // Format the date to show only the year portion
          interval={getInterval()} // Adjust interval to show a label for each year
          angle={-45} // Rotate labels by -45 degrees for better readability
          textAnchor="end" // Anchor text at the end of the label
        />
        <YAxis />
        <Tooltip 
          formatter={(value, name) => {
            if (name === 'CLOSE') {
              return [value, name];
            }
            return null;
          }}
          content={({ payload }) => {
            if (payload && payload.length) {
              const { TIME, OPEN, HIGH, LOW, CLOSE, VOLUME } = payload[0].payload;
              return (
                <div className="custom-tooltip">
                  <p><strong>TIME:</strong> {TIME}</p>
                  <p><strong>OPEN:</strong> {OPEN}</p>
                  <p><strong>HIGH:</strong> {HIGH}</p>
                  <p><strong>LOW:</strong> {LOW}</p>
                  <p><strong>CLOSE:</strong> {CLOSE}</p>
                  <p><strong>VOLUME:</strong> {VOLUME}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Area type="monotone" dataKey="CLOSE" stroke="#8884d8" fillOpacity={1} fill="url(#colorClose)" activeDot={{ r: 8 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default OriginalChart;
