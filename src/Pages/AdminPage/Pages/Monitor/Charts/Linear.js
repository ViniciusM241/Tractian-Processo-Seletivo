import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const optionsAssetsStatus = {
    chart: {
        type: "line",
        margin: [0, 0, 0, 0],
    },  
    title: {
        text: null
    },
    xAxis: [{
        visible: true,
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }],
    // legend: {
    //     floating: true,
    //     align: 'center',
    //     width: 250,
    //     itemWidth: 125,
    //     verticalAlign: "bottom",
    //     layout: "horizontal",
    //     x: 25,
    //     y: 15,
    //     itemMarginTop: 5,
    //     itemMarginBottom: 5,
    //     itemStyle: {
    //         font: ".8rem 'Roboto', sans-serif",
    //         color: "#333333"
    //     }
    // },
    plotOptions: {
        series: {
            stacking: "normal",
            dataLabels: {
                enabled: true
            },
            showInLegend: true,
            size: 200
        }
    },
    series: [
        {
            // minPointSize: 10,
            innerSize: "60%",
            // zMin: 0,
            name: "Consumo em KWh",
            data: [ ],
        }
    ]
};

function VariablePie (props) {

    const [ assetsStatus, setAssetsStatus ] = useState(optionsAssetsStatus);

    useEffect(() => {
        setAssetsStatus(option => {
            if (option.series) {
                const data = [ ];
                
                const result = props.assets.reduce((result, current) => {
                    if (current.specifications.power !== undefined)
                        return parseFloat(result + current.specifications.power);
                    return result;
                }, []);

                let rand = Math.floor(Math.random() * (3 - 1) + 1);
                data.push(result - rand * rand);
                rand = Math.floor(Math.random() * (3 - 1) + 1);
                data.push(result - rand * rand);
                rand = Math.floor(Math.random() * (3 - 1) + 1);
                data.push(result - rand * rand);
                rand = Math.floor(Math.random() * (3 - 1) + 1);
                data.push(result - rand * rand);
                data.push(result);
                
                return option.series[0].data = data;
            } else
                return option;
        })

    }, [props.assets]);

    return (
        <>
            <HighchartsReact
                highcharts={ Highcharts }
                options={ assetsStatus }
            />
        </> 
    );
}

export default VariablePie;