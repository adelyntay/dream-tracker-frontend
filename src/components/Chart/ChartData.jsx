import { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto"

export default function ChartData() {
  const [data, setData] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(1);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchData(selectedMonth);
  }, [selectedMonth]);

  async function fetchData(month) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${backendUrl}/data?month=${month}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const chartDataSleep = {
    labels: ["Good", "Average", "Poor"],
    datasets: [
      {
        label: "Sleep Quality",
        data: [
          data?.sleep?.Good || 0,
          data?.sleep?.Average || 0,
          data?.sleep?.Poor || 0
        ],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const ChartDataDream = {
    labels: ["Normal", "Lucid", "Recurring", "Nightmare"],
    datasets: [
      {
        label: "Dream Type",
        data: [
          data?.dream?.Normal || 0,
          data?.dream?.Lucid || 0,
          data?.dream?.Recurring || 0,
          data?.dream?.Recurring || 0
        ],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#39762f"],
        borderWidth: 1,
      },
    ],
  };

  function handleMonthChange(event) {
    setSelectedMonth(event.target.value);
  }

  function handleFilterClick() {
    fetchData(selectedMonth);
  }

  return (
    <div>
    <div>
        <label htmlFor="month">Select a month:</label>
        <select id ="month" value={selectedMonth} onChange={handleMonthChange} className="text-black">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <button onClick={handleFilterClick}>Filter</button>
      </div>
      <div className="flex w-full">
      <h2>Sleep Quality</h2>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
    <div style={{ width: "500px", height: "500px" }}>
      <Pie data={chartDataSleep} />
    </div></div>

    <div className="divider divider-horizontal">OR</div>
    <h2>Dream Type</h2>
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
    <div style={{ width: "500px", height: "500px" }}>
      <Pie data={ChartDataDream} />
      </div>
      </div>
    </div>
    </div>
  );
}