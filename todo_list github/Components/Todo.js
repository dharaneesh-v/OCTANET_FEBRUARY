import './Todo.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect } from 'react';
import { TableCell } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Todo()
{
const [task,setTask] = useState("");
const [row,setRow] = useState([]);
const [status,setStatus] = useState("Not Completed");

const refreshPage=()=>{
    window.location.reload();
  }

const handleDelete=(id,e)=>
{
    axios
    .delete(`http://localhost:3001/tasks/${id}`)
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
    refreshPage();
}
const handlePut=(id,tas,e)=>
{
    axios
    .put(`http://localhost:3001/tasks/${id}`,{"task":tas,"status":"Completed✅"})
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
    refreshPage();
}
const handletask=(event)=>
{
    setTask(event.target.value);
}

const addtask=(event)=>
{
    event.preventDefault();
    axios
    .post(`http://localhost:3001/tasks`,{"task":task,"status":status})
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
    refreshPage();
}



useEffect(()=>
{
    axios
    .get(`http://localhost:3001/tasks`)
    .then((res)=>
    {
        setRow(res.data);
    })
    .catch((err)=>
    {
        console.log(err);
    })
},[]);

        return(
            <div className="main">
                <div className='nav'>
                    
                <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
            <img src='https://judepereira.github.io/checktodo/logo.png' height={50}></img>
          <Button color="inherit">DHARANEESH</Button>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
                    
<br></br><br></br>
            <i>“Before you eat the elephant, make sure you know what parts you want to eat.”</i>
                </div>
<br></br><br></br>
            <Grid container spacing={2}>
                <Grid xs={1} md={1} lg={1}></Grid>
                <Grid xs={10.5} md={4.5} lg={2.75}>
                <div className='form'>
                    <img src='https://th.bing.com/th/id/R.05c664bdcffb816a7dff94eedd182969?rik=GTEt8%2b%2bZw5eBuw&riu=http%3a%2f%2fpipelinemedia.com.au%2fwp-content%2fuploads%2f2022%2f01%2ficons8-checklist-500.png&ehk=T%2fWomJuCWegzxneOPMKx6R4xa8ByFQn4mb8QSuoNXqY%3d&risl=&pid=ImgRaw&r=0' height={350} width={350} alt='“Rename your “To-Do” list to your “Opportunities” list. Each day is a treasure chest filled with limitless opportunities; take joy in checking many off your list.”'></img>
                    <br></br>
                    <TextField
                      id="standard-multiline-flexible"
                      label="TYPE YOUR TASK"
                      multiline
                      maxRows={4}
                      variant="outlined"
                      onChange={handletask}
                    />
                    <br></br><br></br>      <br></br>     
                    <Button size='small' variant="outlined" onClick={addtask}>ADD</Button>
                </div>
                <br></br><br></br><br></br>
                </Grid>
<br></br><br></br>
                <Grid xs={1} md={1} lg={.5}></Grid>
                <Grid xs={10.5} md={4.5} lg={6.75}>
                <div className='content'>
                    <div className='todo'>
                        <TableContainer component={Paper}>
                              <Table sx={{minWidth: 650 }} aria-label="simple table">
                                <TableHead >
                                  <TableRow>
                                    <TableCell align="right">S.NO</TableCell>
                                    <TableCell>TASKS</TableCell>
                                    <TableCell align="right">STATUS</TableCell>
                                    <TableCell align='right'>ACTIONS</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.map((rows) => (
                                    <TableRow
                                      key={rows.id}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                      <TableCell align="right">{rows.id}</TableCell>
                                      <TableCell component="th" scope="row">
                                        {rows.task}
                                      </TableCell>
                                      <TableCell align="right">{rows.status}</TableCell>
                                      <TableCell align='right'>
                                                <Button onClick={e=>handleDelete(rows.id,e)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button> &emsp;
                                                <Button variant='outlined' onClick={e=>handlePut(rows.id,rows.task,e)}>Mark as Done</Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                    </div><br></br><br></br> 
                </div>
                </Grid>
                <Grid xs={1} md={1} lg={1}></Grid>
                </Grid>
            </div>
        );
}

export default Todo;