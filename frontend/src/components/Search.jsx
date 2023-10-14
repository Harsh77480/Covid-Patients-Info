import TextField from '@mui/material/TextField';

export default function Search({rollback,data,setData}){ //here a function is passed as props

    function searchHandler(event){
        data = rollback.filter((e)=>( e.firstName.toUpperCase().substr(0,event.target.value.length) == event.target.value.toUpperCase()));
        setData(data);
        if(!event.target.value.length){
            setData(rollback);
        }
    }

    return <>
    
    <div className='search-container' >
      <TextField id="standard-basic" color='grey' onChange={searchHandler} placeholder='Search by Name' variant="standard" style={{ width :'80%', height : '14px'}}   />
    </div>

    </>
   }