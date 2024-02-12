import { Today } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid, colors } from '@mui/material';
import './Addprojects.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addprojects()
{
    
    const[proname,setProname]=useState("");
    const[req,setReq]=useState("");
    const[des,setDes]=useState("");
    const[start,setStart]=useState("");
    const[dead,setDead]=useState("");
    const[status,setStatus]=useState("");
    const[tl,setTl]=useState("");
    const navigate=useNavigate();
    const handleProname=(event)=>
    {
        setProname(event.target.value);
    }
    const handleReq=(event)=>
    {
        setReq(event.target.value);
    }
    const handleDes=(event)=>
    {
        setDes(event.target.value);
    }
    const handleStart=(event)=>
    {
        setStart(event.target.value);
    }
    const handleDead=(event)=>
    {
        setDead(event.target.value);
    }
    const handleStatus=(event)=>
    {
        setStatus(event.target.value);
    }
    const handleTl=(event)=>
    {
      setTl(event.target.value);
    }

    function handleSubmit(event)
    {
      event.preventDefault()
      axios.post(`http://localhost:3001/projects`,{"name":proname,"requirement":req,"description":des,"teamleader":tl,"start":start,"deadline":dead,"status":status})
      .then((res)=>
      {
        console.log(res.data);
      })
      .catch((error)=>
        {
            console.log("Error: "+error);
        })
          alert('Project Added Successfully');
          navigate('/home')
    }

    return(
        <div className='ADDPRO'>
          <br></br>
      <Grid container spacing={2}>
          <Grid xs={12} md={3}>
          </Grid>
          <Grid xs={12} md={6}>
            <br></br>
          <div className="addproject">
          <br></br><br></br>
            <h2 id='head'>ADD NEW PROJECT</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Project Name" variant="outlined" onChange={handleProname} required/><br></br><br></br>
                <TextField
                  id="outlined-multiline-static"
                  label="Project Requirement"
                  multiline
                  rows={4}
                  onChange={handleReq}
                  required
                /><br></br><br></br>
                <TextField
                  id="outlined-multiline-static"
                  label="Project Description"
                  multiline
                  rows={4}  
                  required
                  onChange={handleDes}                
                /><br></br><br></br>
                <TextField id="outlined-basic" label="Team Leader" variant="outlined" onChange={handleTl} required /><br></br> <br></br>
                <TextField id="outlined-basic" label="Start Date" variant="outlined" type='date' onChange={handleStart} required/><br></br> <br></br>
                <TextField id="outlined-basic" label="Deadline" variant="outlined"  type='date' onChange={handleDead} required /><br></br><br></br>
                <TextField id="outlined-basic" label="Status" variant="outlined" onChange={handleStatus} type='text' required /><br></br><br></br>
                <Button variant="contained" type='submit' onClick={handleSubmit}>Add Project</Button>
            </form>
            <br></br>
            </div>
            </Grid>
            <Grid xs={12} md={3}></Grid>
            </Grid>
            <br></br>
        </div>
    )
}
export default Addprojects;