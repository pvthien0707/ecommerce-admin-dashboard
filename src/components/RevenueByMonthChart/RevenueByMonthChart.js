import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { colors, data } from '@/constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function RevenueByMonthChart() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom',
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonth.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonth.data,
      },
    ],
  };

  return (
    <>
      <h2 className="title">Revenue by month</h2>
      <div>
        <Bar options={chartOptions} data={chartData} height={'300px'} />
      </div>
    </>
  );
}

export default RevenueByMonthChart;
