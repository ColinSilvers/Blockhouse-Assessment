"use client"
import { ReactElement, useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions } from 'chart.js/auto';

// Extend HTMLCanvasElement to add the custom `chart` property
interface CustomCanvasElement extends HTMLCanvasElement {
  chart?: Chart;
}

// Props to pass chart type, data, and options
interface ChartProps {
  type: string; // Chart type (e.g., "bar", "pie", "line", "candlestick")
  data: ChartData; // Chart data
  options?: ChartOptions; // Chart options (optional)
}

export default function ReusableChart({ type, data, options }: ChartProps): ReactElement {
  const chartRef = useRef<CustomCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance to prevent memory leaks
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      if (context) {
        const newChart = new Chart(context, {
          type, // Dynamic chart type
          data, // Dynamic chart data
          options: options || {}, // Dynamic chart options with a fallback
        });

        chartRef.current.chart = newChart; // Assign the chart instance to the `chart` property
      } else {
        console.error("Failed to get 2D context");
      }
    }
  }, [type, data, options]); // Recreate the chart when type, data, or options change

  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}