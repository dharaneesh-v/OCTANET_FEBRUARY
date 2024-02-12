import { Box, Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import './Addtask.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Addtask()
{
    const [pname,setPname] = useState('');
    const [task,setTask] = useState('');
    const [details,setDetails] = useState('');
    const [deadline,setDeadline] = useState('');
    const [pstatus,setPstatus] = useState('');
    const [tstatus,setTstatus] = useState('');
    const navigate = useNavigate();

    const handlePname=(event)=>
    {
        setPname(event.target.value);
    }
    const handleTask=(event)=>
    {
        setTask(event.target.value);
    }
    const handleDetails=(event)=>
    {
        setDetails(event.target.value);
    }
    const handleDeadline=(event)=>
    {
        setDeadline(event.target.value);
    }
    const handlePStatus=(event)=>
    {
        setPstatus(event.target.value);
    }
    const handleTstatus=(event)=>
    {
        setTstatus(event.target.value);
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault()
        axios.post(`http://localhost:3001/tasks`,{"pname":pname,"task":task,"details":details,"deadline":deadline,"pstatus":pstatus,"tstatus":tstatus})
        .then=((res)=>
        {
            console.log(res.data);
        })
        .catch=((err)=>
        {
            console.log(err);
        })
        navigate('/home');
    }

    return(
        <div className="AddtaskBody">
            <br></br>
            <Grid container spacing={2}>
                <Grid xs={12} md={3}></Grid>
                <Grid xs={12} md={6}>
            <div className="form">
            <Box sx={{ fontFamily: 'Monospace', fontSize: 'h4.fontSize', m: 1 }}> Add a New Task</Box><br></br><br></br>
            <form>
            <TextField id="outlined-basic" label="Project Name" variant="outlined" onChange={handlePname} required/><br></br><br></br>
            <TextField id="outlined-basic" label="Task" variant="outlined" onChange={handleTask} required/><br></br><br></br>
            <TextField
                  id="outlined-multiline-static"
                  label="Task Details"
                  multiline
                  rows={4}
                  onChange={handleDetails}
                  required
                /><br></br><br></br>
            <TextField id="outlined-basic" label="Deadline" type="date" variant="outlined" onChange={handleDeadline} required/><br></br><br></br>
            <TextField id="outlined-basic" label="Project Status" variant="outlined" onChange={handlePStatus} required/><br></br><br></br>
            <TextField id="outlined-basic" label="Task Status" variant="outlined" default="Assigned" onChange={handleTstatus} required/><br></br><br></br>
            <Button type="submit" onClick={handleSubmit}>Add to Tasks</Button>
            </form>
            </div>
            </Grid>
            <Grid xs={12} md={3}></Grid>
            </Grid>
            <br></br>
        </div>
    )
}