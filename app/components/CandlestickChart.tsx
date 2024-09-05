"use client"
import React from 'react';
import Plot from 'react-plotly.js';

const CandlestickChart: React.FC = () => {
  // Data for the candlestick chart
  const data = [{
    type: 'candlestick',
    x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'], // X-axis labels
    open: [120, 130, 125, 135], // Opening prices
    high: [130, 135, 140, 150], // Highest prices
    low: [110, 120, 120, 130], // Lowest prices
    close: [125, 125, 135, 145], // Closing prices
    name: 'Candlestick'
  }];

  // Layout configuration for the chart
  const layout = {
    title: 'Candlestick Chart',
    xaxis: { title: 'Date' },
    yaxis: { title: 'Price' },
    xaxis: {
      rangeslider: { visible: false } // Hide the range slider
    }
  };

  return (
    <div style={{ width: '90vw', height: '80vh' }}>
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
};

export default CandlestickChart;