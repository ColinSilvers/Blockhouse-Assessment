"use client"
import { useState, useEffect } from "react";
import ReusableChart from "./components/ReusableChart";
import dynamic from "next/dynamic";

// Dynamically import the CandlestickChart component with ssr: false
const CandlestickChart = dynamic(() => import('./components/CandlestickChart'), {
  ssr: false
});

export default function Home() {
  const [barData, setBarData] = useState<any>(null);
  const [pieData, setPieData] = useState<any>(null);
  const [lineData, setLineData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (type: string, setData: React.Dispatch<React.SetStateAction<any>>) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/${type}-chart-data/`);
        
        // Check for HTTP errors
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate the data format if necessary
        if (data && data.labels && data.data) {
          setData(data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchData("bar", setBarData),
          fetchData("pie", setPieData),
          fetchData("line", setLineData),
        ]);
      } catch (error) {
        // Handle any errors that occur during fetching
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ReusableChart 
        type="bar" 
        data={barData}
        options={{
          scales: {
            x: { type: "category" },
            y: { beginAtZero: true },
          }
        }}
      />

      <ReusableChart 
        type="pie" 
        data={pieData}
      />

      <ReusableChart 
        type="line" 
        data={lineData}
        options={{
          scales: {
            x: { type: "category" },
            y: { beginAtZero: true },
          }
        }}
      />

      <CandlestickChart />
    </div>
  );
}