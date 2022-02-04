import { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Filter, { StoreData } from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { buildSalesByGenderChart } from './helpers';
import { PieChartConfig } from './types/pieChartConfig';
import { SalesByGender } from './types/salesByGender';
import { requestBackend } from './utils/request';

type ControlComponentsData = {
  filterData: StoreData;
};

function App() {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { store: { id: 0, name: '' } }
  });

  const handleSubmitFilter = (data: StoreData) => {
    setControlComponentsData({
      filterData: data
    });
  };

  const sumSalesByGender = (salesByGender: SalesByGender[] = []) => {
    return salesByGender.reduce((perviousValue, currentValue) => {
      return perviousValue + currentValue.sum;
    }, 0);
  };

  const getDatas = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/sales/by-gender`,
      params: {
        storeId: controlComponentsData.filterData.store?.id | 0
      }
    };

    requestBackend(config)
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);

        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Erro to fetch sales by gender');
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
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
