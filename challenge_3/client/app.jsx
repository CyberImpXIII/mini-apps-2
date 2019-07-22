import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';

const App = ()=>{
    const [pins, setPins] = useState(0);
    const [rounds, setRounds] = useState([]);

    const gameHandler = ()=>{
        console.log(pins, (pins+1));
        setRounds([...rounds, Math.floor(Math.random() * (pins + 1))])
    } 
    return(
        <>
        <select onChange={e=>setPins(parseInt(e.target.value))}>
            {new Array(11).fill(null).map((e,i)=>{return(<option value={i} key ={i}>{i}</option>)})}
        </select>
            <button onClick={gameHandler}/>
        <br/>
        <table style={{display:'flex', flexWrap:'wrap', width:'100vw'}}>
        <tbody>
        <tr>
            {rounds.map((e,i)=>{return(<th key={i}>Round {i + 1}</th>)})}
        </tr>
        <tr>
            {rounds.map((e,i)=><td key={i}>{e}</td>)}
        </tr>
        </tbody>
        </table>
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root'));
