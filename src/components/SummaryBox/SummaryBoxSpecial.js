import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Box } from '@/components';

import './SummaryBox.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function SummaryBoxSpecial({ item }) {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: 'test',
        data: item.chartData.data,
        borderColor: '#fff',
        tension: 0.5,
      },
    ],
  };

  return (
    <Box purple fullHeight>
      <div className="summary-box-special">
        <h2 className="summary-box-special__title">{item.title}</h2>
        <span className="summary-box-special__value">{item.value}</span>
        <div className="summary-box-special__chart">
          <Line options={chartOptions} data={chartData} width={'250px'} />
        </div>
      </div>
    </Box>
  );
}

export default SummaryBoxSpecial;
