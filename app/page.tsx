import { useState, useEffect } from "react";
import ReusableChart from "./components/ReusableChart";
import dynamic from "next/dynamic";

// Dynamically import the CandlestickChart component with ssr: false
const CandlestickChart = dynamic(() => import('./components/CandlestickChart'), {
  ssr: false
});

export default function Home() {

  const [type, setType] = useState(" ");

  useEffect(() => {
    const fetchChartData = async (chartType: string) => {
      setType(chartType);
      const response = await fetch(`http://127.0.0.1:8000/api/${chartType}`);
      const data = await response.json();
      console.log(data);
    }
  }, [])



  return (
    <div className="">
      
<ReusableChart 
  type="bar" 
  data={{
    labels: ["John", "Jane", "Doe"],
    datasets: [{
      label: "Info",
      data: [34, 64, 23],
      backgroundColor: "orange",
      borderWidth: 1,
    }]
  }}
  options={{
    scales: {
      x: { type: "category" },
      y: { beginAtZero: true },
    }
  }}
/>

<ReusableChart 
  type="pie" 
  data={{
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
      label: "Votes",
      data: [300, 50, 100],
      backgroundColor: ["red", "blue", "yellow"],
    }]
  }}
/>

<ReusableChart 
  type="line" 
  data={{
    labels: ["January", "February", "March", "April"],
    datasets: [{
      label: "Sales",
      data: [100, 200, 150, 300],
      borderColor: "blue",
      fill: false
    }]
  }}
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
