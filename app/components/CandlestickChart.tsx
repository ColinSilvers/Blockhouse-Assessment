"use client"
import { useEffect, useState } from "react";
import Plot from 'react-plotly.js';

interface CandlestickData {
  x: string; // Date or category
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function CandlestickChart() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/');
        
        // Check for HTTP errors
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
  
        setData(result);
       
        
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const xValues = data.x;
  const openValues = data.open;
  const highValues = data.high;
  const lowValues = data.low;
  const closeValues = data.close;

  return (
    <Plot
      data ={[
        {
          type: 'candlestick',
          x: xValues,
          open: openValues,
          high: highValues,
          low: lowValues,
          close: closeValues,
          name: 'Candlestick',
        }
      ]}
      layout={{
        title: 'Candlestick Chart',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Value' },
      }}
    />
  );
}