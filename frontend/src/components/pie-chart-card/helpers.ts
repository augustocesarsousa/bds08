import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = []) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
        itemMargin: {
          vertical: 5
        }
      }
    },
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetX: 20,
      labels: {
        colors: ['#8d8d8d']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
        fontFamily: 'Ubuntu, sans-serif',
        colors: ['#fff']
      }
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: false,
              offsetY: 0,
              formatter: function () {
                return '';
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '18px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
