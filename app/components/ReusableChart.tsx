"use client"
import { ReactElement, useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions, ChartType, ChartTypeRegistry } from 'chart.js/auto';

// Extend HTMLCanvasElement to add the custom `chart` property
interface CustomCanvasElement extends HTMLCanvasElement {
  chart?: Chart;
}

// Props to pass chart type, data, and options
interface ChartProps {
  type: keyof ChartTypeRegistry; // Chart type (e.g., "bar", "pie", "line", "candlestick")
  data: any; // Chart data
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
        try {
          const newChart = new Chart(context, {
            type: type as ChartType, // Ensure type is cast to ChartType
            data: formatData(type, data), // Format data based on chart type
            options: options || {}, // Default to empty object if no options are provided
          });

          chartRef.current.chart = newChart; // Assign the chart instance to the `chart` property
        } catch (error) {
          console.error("Error creating chart:", error);
        }
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

// Function to format data based on chart type
function formatData(type: string, data: any): ChartData {
  switch (type) {
    case "bar":
      return {
        labels: data.labels,
        datasets: [{
          label: "Data",
          data: data.data,
          backgroundColor: "orange",
          borderWidth: 1,
        }]
      };

    case "line":
      return {
        labels: data.labels,
        datasets: [{
          label: "Data",
          data: data.data,
          borderColor: "blue",
          fill: false,
        }]
      };

    case "pie":
      return {
        labels: data.labels,
        datasets: [{
          label: "Data",
          data: data.data,
          backgroundColor: ["red", "blue", "yellow"],
        }]
      };
    default:
      return { datasets: [] };
  }
}
