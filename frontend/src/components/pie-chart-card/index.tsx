import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../utils/formatters';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[] | undefined;
  series?: number[];
  totalValue: number;
};

function PieChartCard({ labels = [], series = [], totalValue }: Props) {
  return (
    <div className="pie-chart-card-content base-card">
      <div className="pie-chart-card-data">
        <h2 className="pie-chart-card-value">{formatPrice(totalValue)}</h2>
        <h3 className="pie-chart-card-legend">Total de vendas</h3>
      </div>
      <div className="pie-chart-card">
        <ReactApexChart
          options={buildPieChartConfig(labels)}
          type="donut"
          width="200"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
