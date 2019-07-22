import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import Chart from 'chart.js';
import Axios from 'axios';
import Slider from 'rc-slider'
import './styles/style.css'; 

const App = (props)=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2019-06-15')
        .then(e=>{setData(e.data.bpi)});
    },[])

    useEffect(()=>{
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'BTC value in Dollars',
                    data: Object.values(data),
                    borderColor: ['#49fb35'],
                    borderWidth: 1,
                }]
            }
        });
    },[data])

    return(
        <>
            <div style={{width:'100vw' , height:'100vh'}}>
            <canvas id='myChart'></canvas>
            </div>
            <Slider />
        </>
    )
}
ReactDom.render(<App />, document.getElementById('root'));

