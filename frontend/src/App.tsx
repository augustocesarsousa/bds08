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
        <Filter />
        <PieChartCard />
      </div>
    </>
  );
}

export default App;
