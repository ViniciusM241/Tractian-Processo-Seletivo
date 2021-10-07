import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import variablePie from "highcharts/modules/variable-pie.js";

variablePie(Highcharts);

const optionsAssetsStatus = {
    chart: {
      type: "variablepie",
      margin: [0, 0, 0, 0],
    },  
    title: {
      text: null
    },
    legend: {
        floating: true,
        align: 'center',
        width: 250,
        itemWidth: 125,
        verticalAlign: "bottom",
        layout: "horizontal",
        x: 25,
        y: 15,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
          font: ".8rem 'Roboto', sans-serif",
          color: "#333333"
        }
      },
      plotOptions: {
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          size: 300
        }
      },
    series: [
      {
        // minPointSize: 10,
        innerSize: "60%",
        // zMin: 0,
        name: "Status de Ativos",
        data: [
          {
            color: 'var(--error)',
            name: 'Em parada',
            y: 0,
          },
          {
            color: 'var(--warning)',
            name: 'Em alerta',
            y: 0,
          },
          {
            color: 'var(--success)',
            name: 'Ativo',
            y: 0,
          },
          {
            color: 'var(--secondary)',
            name: 'Desligado',
            y: 0,
          }
        ]
      }
    ]
};

function VariablePie (props) {

    const [ assetsStatus, setAssetsStatus ] = useState(optionsAssetsStatus);

    useEffect(() => {
        setAssetsStatus(option => {
            if (option.series) {
                const data = [ ...option.series[0].data ];
    
                data[0].y = 0;
                data[1].y = 0;
                data[2].y = 0;
                data[3].y = 0;
    
                props.assets.forEach(asset => {
                    if (asset.status === 'inDowntime')
                        data[0].y++;
                    if (asset.status === 'inAlert')
                        data[1].y++;
                    if (asset.status === 'inOperation')
                        data[2].y++;
                    if (asset.status === 'turnedOff')
                        data[3].y++;
                });
                
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