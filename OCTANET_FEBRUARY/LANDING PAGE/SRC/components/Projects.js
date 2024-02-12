import { Grid } from "@mui/material";
import { useState,useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ColorButton from '@mui/material/Button';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import axios from 'axios';

function Project()
{   
  const [rows,setRows] = useState([]);
  useEffect(()=>{
      axios
      .get(`http://localhost:3001/projects`)
      .then((res)=>
      {
          setRows(res.data);
      })
      .catch((err)=>
      {
          console.log(err);
      });
  },[]);
    return(
        <div className="Project">
          
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                <div>
                    <br></br><br></br>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'purple',color:"white"}}>
                          <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Project Requirement</TableCell>
                            <TableCell align="right">Project Description</TableCell>
                            <TableCell align="right">Team Leader</TableCell>
                            <TableCell align="right">Started On</TableCell>
                            <TableCell align="right">DeadLine</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.requirement}</TableCell>
                              <TableCell align="right">{row.description}</TableCell>
                              <TableCell align="right">{row.teamleader}</TableCell>
                              <TableCell align="right">{row.start}</TableCell>
                              <TableCell align="right">{row.deadline}</TableCell>
                              <TableCell align="right">{row.status}</TableCell>
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
            <Link to='/Addprojects'><ColorButton variant="contained">Add New Project</ColorButton></Link>
            <br></br>
        </div>
    )
}
export default Project;