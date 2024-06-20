import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.amount - a.amount);

  const topCategories = sortedData.slice(0, 10);
  const othersAmount = sortedData.slice(10).reduce((acc, item) => acc + item.amount, 0);

  const chartData = {
    labels: topCategories.map(item => item.category).concat(othersAmount > 0 ? ['Others'] : []),
    datasets: [
      {
        data: topCategories.map(item => item.amount).concat(othersAmount > 0 ? [othersAmount] : []),
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
            const amount = chartData.datasets[0].data[tooltipItem.dataIndex];
            const total = chartData.datasets[0].data.reduce((acc, value) => acc + value, 0);
            const percentage = ((amount / total) * 100).toFixed(2);
            return `${category}: ${amount} Rs (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
