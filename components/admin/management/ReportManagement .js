import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportManagement = () => {
  const [period, setPeriod] = useState("monthly");

  // Chart data function based on the selected period
  const getChartData = () => {
    const labels =
      period === "weekly"
        ? ["Week 1", "Week 2", "Week 3", "Week 4"]
        : period === "yearly"
        ? ["2020", "2021", "2022", "2023"]
        : [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

    const data = {
      labels,
      datasets: [
        {
          label: `Sales Data (${
            period.charAt(0).toUpperCase() + period.slice(1)
          })`,
          data:
            period === "weekly"
              ? [500, 700, 900, 800]
              : period === "yearly"
              ? [30000, 45000, 55000, 62000]
              : [
                  3000, 2500, 3200, 2900, 3600, 4000, 4500, 4200, 4700, 5000,
                  5500, 6000,
                ],
          borderColor: "rgba(72, 187, 120, 1)", // Green border
          backgroundColor: "rgba(156, 163, 175, 0.5)", // Gray background
          fill: true,
          tension: 0.4,
        },
      ],
    };
    return data;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable the default aspect ratio
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded border-t-2 border-b-2">
      {/* Buttons for selecting Weekly, Monthly, Yearly */}
      <div className="mb-4 space-x-4">
        <button
          className={`py-2 px-4 rounded ${
            period === "weekly" ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setPeriod("weekly")}
        >
          Weekly
        </button>
        <button
          className={`py-2 px-4 rounded ${
            period === "monthly" ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setPeriod("monthly")}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-4 rounded ${
            period === "yearly" ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setPeriod("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Chart rendering */}
      <div className="h-80">
        {" "}
        {/* Adjust height as needed */}
        <Line data={getChartData()} options={options} />
      </div>
    </div>
  );
};

export default ReportManagement;
