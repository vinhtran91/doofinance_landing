import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle';

import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import s from './Tokenomics.module.css'

Chart.register(ChartDataLabels)

const options = {
  aspectRatio: 2,
  cutout: '60%',
  responsive: true,
  layout: {
    padding: '3rem'
  },
  plugins: {      
    legend: {
      position: 'right',
      labels: {
        usePointStyle: true,
      },
    },     
    datalabels: {
      formatter: (value:any, ctx:any) => {
        let datasets = ctx.chart.data.datasets;

        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          let sum = datasets[0].data.reduce((a:any, b:any) => a + b, 0);
          let percentage = Math.round((value / sum) * 100) + "%";
          return percentage;
        } 
      },
      color: "#fff",
      font: {
        weight: 'bold',                    
      },
    }
  },
}

const dataOne = {
  datasets: [{
    data: [40, 20, 30, 10],
    backgroundColor: [
      '#038C6F', 
      '#32CAA8', 
      '#5BD5BB', 
      '#81DDC8',
    ],      
    borderWidth: 2,
  }],
  labels: [
    'Pre-Sale',
    'Marketing Development and Team',
    'Liquidity',
    'Community Activity Voting for Growth'
  ],
}

const dataTwo = {
  datasets: [{
    data: [30, 70],
    backgroundColor: [
      '#038C6F', 
      '#32CAA8', 
      '#5BD5BB', 
      '#81DDC8',
    ],      
    borderWidth: 2,
  }],
  labels: [
    'Marketing & Developement',
    'Liquidity'
  ],
}

export const Tokenomics:FC<{}> = () => {
  return (
    <section id='tokenomics' className={s.tokenomics} >
      <SectionTitle>Tokenomics</SectionTitle>
      <p className={s.supply} >
        <span className={s.number} >1,000,000,000,000,000</span>
        &nbsp;
        <span className={s.text}>Total Supply</span>
      </p>
      <p className={s.description} >
        Token Network: <strong>Binance Smart Chain (BSC)</strong>
        <br />
        Token Type: <strong>BEP: 20</strong>
      </p>  

      <div className={s.charts} >
        <div className={s.chart}>
          <p className={s.title}>Token Distribution</p>
          <Doughnut 
            type='doughnut' 
            data={dataOne} 
            options={options}  
          />
        </div>
        
        <div className={s.chart}>
          <p className={s.title}>60% Pre-Sale Token Distribution</p>
          <Doughnut 
            type='doughnut' 
            data={dataTwo} 
            options={options}  
          />
        </div>
        
      </div>
    </section>
  )
}
