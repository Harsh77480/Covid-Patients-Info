import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup, colors } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import fetchUsers from '../services/api';

export default function Filters({setRollback,setData,setIsLoading,setError}){ //here setter function is passed as props

    const [bmi,setBmi] = useState([]);
    const [gender,setGender] = useState('');
    const [sort,setSort] = useState('');

    function queryAHandler(event){ //queryHandler functions to filter queries input
        bmi.indexOf(event.target.value) !== -1 ? setBmi(bmi.filter((e)=> e != event.target.value )) : setBmi([...bmi,event.target.value]);
    }
    function queryBHandler(event){
        setGender(event.target.value);
    }
    function queryCHandler(event){
        setSort(event.target.value);
    }

    async function getData(){
        setIsLoading(1); //set wait message while fetching is done 
        try {
            const res = await fetchUsers(bmi,gender,sort);
            // console.log(res);
            setRollback(res);
            setData(res);        

        } catch (error){
            console.log(error);
            setError(1);
        }
        setIsLoading(0);

    }

    function onSubmitHandler(event){
        event.preventDefault(); //avoid page reloading during form submit 
        getData();
    }

    return <div className='filters'>
        
        <form onSubmit = {onSubmitHandler} >

            <FormLabel ><span>Filter by BMI </span></FormLabel>
            <FormGroup row onChange={queryAHandler}>
                <FormControlLabel value="underweight" control={<Checkbox sx={{'&.Mui-checked': {color: '#800040'}}} />} label="Underweight" />
                <FormControlLabel value="normal" control={<Checkbox sx={{'&.Mui-checked': {color: '#800040'}}} />} label="Normal" />
                <FormControlLabel value="overweight" control={<Checkbox sx={{'&.Mui-checked': {color: '#800040'}}} />} label="Overweight" />
            </FormGroup>

            <FormLabel > <span>Filter by Gender</span></FormLabel>
            <RadioGroup row onChange={queryBHandler}>
                <FormControlLabel value="male"   control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value=""       control={<Radio />} label="None" />
            </RadioGroup>

            <FormLabel ><span>Sort by age</span></FormLabel>
            <RadioGroup row onChange={queryCHandler}>
                <FormControlLabel  value="0" control={<Radio />} label="Asc" />
                <FormControlLabel  value="1" control={<Radio />} label="Desc" />
                <FormControlLabel  value=""  control={<Radio />} label="None" />
            </RadioGroup>

        
        <button type='submit' className='btn'>Apply Filters</button>

        </form>

    </div>}
