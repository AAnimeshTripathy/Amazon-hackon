import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data , detail}) => {
  if (!data || data.length === 0) {
    // Render an empty pie chart with a message
    const emptyChartData = {
      labels: ['No Data'],
      datasets: [
        {
          data: [1], // Dummy data
          backgroundColor: ['#E0E'], // Gray color
          borderWidth: 0, // No border
        },
      ],
    };

    return (
      <div className="p-4 w-1/4 border border-gray-300 rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-center">{detail}</h1>
      <Pie data={emptyChartData}/>
      </div>
    );
  }

  const sortedData = [...data].sort((a, b) => b.totalAmount - a.totalAmount);

  const topCategories = sortedData.slice(0, 10);
  const otherstotalAmount = sortedData.slice(10).reduce((acc, item) => acc + item.totalAmount, 0);

  const chartData = {
    labels: topCategories.map(item => item.category).concat(otherstotalAmount > 0 ? ['Others'] : []),
    datasets: [
      {
        data: topCategories.map(item => item.totalAmount).concat(otherstotalAmount > 0 ? [otherstotalAmount] : []),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FFCD56', '#4BC0C0', '#C9CBCF', '#C45850', '#E8C3B9'
        ],
        borderColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FFCD56', '#4BC0C0', '#C9CBCF', '#C45850', '#E8C3B9'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const category = chartData.labels[tooltipItem.dataIndex];
            const totalAmount = chartData.datasets[0].data[tooltipItem.dataIndex];
            const total = chartData.datasets[0].data.reduce((acc, value) => acc + value, 0);
            const percentage = ((totalAmount / total) * 100).toFixed(2);
            return `${category}: ${totalAmount} Rs (${percentage}%)`;
          },
        },
      },
    },
    radius: '100%', 
  };

  return (
    <div className="p-4 w-1/4 border border-gray-300 rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center ">{detail}</h1>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
