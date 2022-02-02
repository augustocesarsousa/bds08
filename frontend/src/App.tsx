import React from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';

function App() {
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
          labels={['Feminino', 'Masculino', 'Outro']}
          series={[50, 30, 20]}
          totalValue={746484.0}
        />
      </div>
    </>
  );
}

export default App;
