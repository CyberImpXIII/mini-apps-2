import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import ReactPaginate from 'react-paginate'
import Axios from 'axios'

 function App(props){
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [queryString, setQuery] = useState('');
    const [lastPage, setLastPage] = useState(100)

    useEffect(()=>{
        Axios.get(`http://localhost:3000/events?${queryString ? `description_like=.*${queryString}.*&` : ''}_page=${currentPage}&_limit=10`)
        .then(results=>{
            setCurrentPageData(results.data);
            setLastPage(results.headers.link.split(',')[2].split('_page=')[1].substring(0,4));
        });
    },[currentPage])

    const dataPretty = (data, i)=>(
        <>
        <span id={i}>{data.date  < 0 ? Math.abs(data.date) + ' B.C. ' : data.date}</span>   
        <span id={i+.5}>{data.description.replace(/\{[^()]*\}/g, '')}</span><br/>
        </>
    )

    const submitHandler = ()=>{
        queryString ? Axios.get(`http://localhost:3000/events?description_like=.*${queryString}.*&_page=${currentPage}&_limit=10`)
        .then(results=>setCurrentPageData(results.data))
        : null
    }

    return(
        <>
            <input onChange={e=>setQuery(e.target.value)} />
            <button onClick={submitHandler} />
            <br/>
            {currentPageData.map((e, i)=>dataPretty(e, i))}
            <ReactPaginate pageCount={lastPage} pageRangeDisplayed={20} marginPagesDisplayed={0} onPageChange = {(e)=>{setCurrentPage(e.selected+1)}} />
        </>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));