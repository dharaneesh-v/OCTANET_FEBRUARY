import { Grid } from "@mui/material";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ColorButton from '@mui/material/Button';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { useEffect,useState } from "react";
import axios from 'axios';


function Tasks()
{    
  
  const [tasks,setTasks] = useState([]);
  useEffect(()=>
  {
    axios.get(`http://localhost:3001/tasks`)
    .then((res)=>
    {
      setTasks(res.data);
    })
    .catch((err)=>
    {
      console.log(err);
    })
  },[]);

    return(
        <div className="Tasks">
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                <div>
                    <br></br><br></br>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'purple',textDecorationColor:"white"}}>
                          <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Task</TableCell>
                            <TableCell align="right">Details</TableCell>
                            <TableCell align="right">DeadLine</TableCell>
                            <TableCell align="right">Project Status</TableCell>
                            <TableCell align="right">Task Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tasks.map((row) => (
                            <TableRow
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >{row.id}</TableCell>
                              <TableCell component="th" scope="row">
                                {row.pname}
                              </TableCell>
                              <TableCell align="right">{row.task}</TableCell>
                              <TableCell align="right">{row.details}</TableCell>
                              <TableCell align="right">{row.deadLine}</TableCell>
                              <TableCell align="right">{row.pstatus}</TableCell>
                              <TableCell align="right">{row.tstatus}</TableCell>
                              <TableCell align="right"><Button variant="outlined">Action</Button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </div>
                </Grid>
            </Grid>
            <br></br>
            <Link to='/AddTask'><Button variant="contained">Add New Task</Button></Link>
            <br></br>
        </div>
    )
}
export default Tasks;