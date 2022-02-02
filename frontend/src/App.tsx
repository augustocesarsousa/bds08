import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { buildSalesByGenderChart } from './helpers';
import { PieChartConfig } from './types/pieChartConfig';
import { SalesByGender } from './types/salesByGender';
import { requestBackend } from './utils/request';

function App() {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const sumSalesByGender = (salesByGender: SalesByGender[] = []) => {
    return salesByGender.reduce((perviousValue, currentValue) => {
      return perviousValue + currentValue.sum;
    }, 0);
  };

  useEffect(() => {
    requestBackend
      .get<SalesByGender[]>('/sales/by-gender')
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Erro to fetch sales by gender');
      });
  }, []);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter
          onSubmitFilter={() => {
            console.log('test');
          }}
        />
        <PieChartCard
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          totalValue={totalSum}
        />
      </div>
    </>
  );
}

export default App;
