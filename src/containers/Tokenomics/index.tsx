import { SectionHead } from 'components'
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './Tokenomics.css'

Chart.register(ChartDataLabels)

const options = {
    aspectRatio: 1,
    cutout: '50%',
    responsive: true,
    layout: {
        padding: '3rem'
    },
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            formatter: (value: any, ctx: any): any => {
                let datasets = ctx.chart.data.datasets;

                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                    let sum = datasets[0].data.reduce((a: any, b: any) => a + b, 0);
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
    elements: {
        arc: {
            borderColor: "#0D1131"
        }
    }
}

const dataOne = {
    datasets: [{
        data: [40, 20, 30, 10],
        backgroundColor: [
            '#59C0C0',
            '#00A3BB',
            '#39A582',
            '#349A83',
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
            '#00A3BB',
            '#349A83',            
        ],
        borderWidth: 2,
    }],
    labels: [
        'Marketing & Developement',
        'Liquidity'
    ],
}

export const Tokenomics = () => {

    const renderLabel = (label:string, i:number) => {

        return (
            <div key={i} className="label" >
                <div 
                    className="label__color"
                    style={{
                        backgroundColor: dataOne.datasets[0].backgroundColor[i],
                    }} 
                />
                <span>{label}</span>
            </div>
        )
    }

    return (
        <section id="tokenomics" className="tokenomics" >
            <SectionHead frontText="Tokenomics" behindText="TOKENomics" />

            <div className="tokenomics__supply" >
                <span className="tokenomics__supply__number">1,000,000,000,000,000</span>
                {'  '}
                <span className="tokenomics__supply__text" >Total Supply</span>
            </div>

            <p className="tokenomics__description" >
                Token Network: <b>Binance Smart Chain (BSC)</b> <br />
                Token Type: <b>BEP: 20</b>
            </p>

            <div className="container tokenomics__charts" >
                <div className="tokenomics__chart">
                    <div className="tokenomics__chart__doughnut" >
                        <Doughnut
                            data={dataOne}
                            options={options}
                        />
                    </div>
                    <div className="tokenomics__chart__content" >
                        <h3 className="tokenomics__chart__content__title">
                            Token Distribution
                        </h3>
                        <div className="tokenomics__chart__content__labels" >
                            { dataOne.labels.map(renderLabel) }
                        </div>
                    </div>
                </div>
                <div className="tokenomics__chart" >
                    <div className="tokenomics__chart__doughnut" >
                        <Doughnut
                            data={dataTwo}
                            options={options}
                        />
                    </div>
                    <div className="tokenomics__chart__content" >
                        <h3 className="tokenomics__chart__content__title">
                            60% Pre-Sale Token Distribution
                        </h3>
                        <div className="tokenomics__chart__content__labels" >
                            { dataTwo.labels.map(renderLabel) }
                        </div>
                    </div>  
                </div>
            </div>

        </section>
    )
}
