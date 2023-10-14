import { useEffect, useState } from 'react'
import './App.css'


import fetchUsers from './services/api';
import Details from './components/Details';
import Search from './components/Search';
import Filters from './components/Filters';

function App() {

  const [data,setData] = useState([]);
  const [rollback,setRollback] = useState([]);
  const[isLoading,setIsLoading] = useState(0);
  const [error,setError] = useState(0);

  useEffect( ()=>{//fetch data from backend 
        async function getData(){
        setIsLoading(1); //set wait message while fetching is done 
        try {
          const res = await fetchUsers();
          setRollback(res);
          setData(res);
          // console.log(res);
        } catch {
          setError(1)
        }
        setIsLoading(0);
      }
      getData(); },[]);


  let itr = [];//we will iterate through this array 

  //paging logic 
  let entriesPerPage = 5;//we want each page to have 5 entries 
  let totalpages = Math.ceil(data.length/entriesPerPage); // so total page will be total_entries / entriesPerPage
  const [pageNo,setPageNo] = useState(0);

  if (entriesPerPage < data.length){ 
    let index = pageNo * entriesPerPage; //index = first entry from where page starts for page 0 it will be 0 for page 1 it will 5
    for(let i = index;i<entriesPerPage + index;i++){ //start from that entry and render 5 entries 
      if(i >= data.length){break;}
      itr.push(data[i]);

  }

  }else{
    itr = data;
  }

  useEffect(()=>setPageNo(0),[data]); //set pageNo to 0 if data is changed 

  function NextPage(){
    setPageNo( (pageNo + 1) % totalpages );//so that when page limit exceed circle back to first page
  }
  function PrevPage(){
    if(pageNo == 0){setPageNo(totalpages - 1);}
    else{
      setPageNo( (pageNo - 1) % totalpages) ;
    }
  }

  return (
    <>
    <div className='center'>
    
    <h1>Covid Patients Info</h1>

    <Search rollback = {rollback} setData = {setData} data={data} />

    <Filters  setRollback = {setRollback} setData = {setData} setIsLoading={setIsLoading} setError={setError}  />
    {
      isLoading ? (<> <span> Please wait... </span>  </>) : itr.map((e)=>(
        <Details key={e.id} props = {e} />
        ))    
    }
    {
      (error) ? <><span>Sorry , try again later !</span></> :
      ( (data.length && !isLoading) ?

      <div>
        <button style={{margin : '10px' }} onClick={PrevPage}>Prev</button>
        <span>{pageNo + 1}</span>
        <button style={{margin : '10px'}} onClick={NextPage}>Next</button>
      </div>

      : <> 
        <span style={{marginTop : '100px'}}> No entries availabe </span>
       </>)
    }
    </div>
    </>
  )
}

export default App
