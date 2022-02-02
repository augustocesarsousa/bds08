import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

function PieChartCard() {
  const pieData = {
    labels: ['Feminino', 'Masculino', 'Outros'],
    name: 'Vendas',
    series: [50, 30, 20]
  };

  return (
    <div className="pie-chart-card-content base-card">
      <div className="pie-chart-card-data">
        <h2 className="pie-chart-card-value">R$ 746.484,00</h2>
        <h3 className="pie-chart-card-legend">Total de vendas</h3>
      </div>
      <div className="pie-chart-card">
        <ReactApexChart
          options={buildPieChartConfig(pieData.labels)}
          type="donut"
          width="270"
          height="350"
          series={pieData.series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
