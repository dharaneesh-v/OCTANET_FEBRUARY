import './Register.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import axios from "axios"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function Register()
{  
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleFname=(event)=>
    {
        setFName(event.target.value);
    }
    const handleLname=(event)=>
    {
        setLName(event.target.value);
    }
    const handleEmail=(event)=>
    {
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        axios.
        post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((error)=>
        {
            console.log("Error: "+error);
        })
        alert(`Hii ${fname}! \nRegistered Successfully.\nNOW YOU CAN LOGIN.`);
        
        navigate('/login');
    }
    return(
        
        <div className='RegBody'>
            <AppBar position='static' color="transparent">
            <Toolbar>
                    <Link to='/userhome'><Button color='inherit'>Home</Button></Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> D-PROJECTS</Typography>
                    <Link to='/register'><Button color="inherit">Register</Button></Link>
                    <Link to='/login'><Button color="inherit">Login</Button></Link>
                    
             </Toolbar>
       </AppBar>
            <br></br><br></br><br></br>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={12} lg={4}>
                    <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                    Welcome to D-Projects, where dreams become a reality. Join us as we make a positive impact on the world.
                    </Box>
                <img className='RegPNG' src='https://freepngimg.com/save/54802-illustrations-images-png-image-high-quality/1110x1110'></img>
          </Grid>
          <Grid xs={12} md={12} lg={4}>           
                <div className="Reg">
                    <br></br>
                    <h2>Register</h2>
                    <form>
                    <TextField id="standard-basic" label="First Name" variant="standard" required onChange={handleFname}/><br></br><br></br>
                    <TextField id="standard-basic" label="Last Name" variant="standard" onChange={handleLname} required/><br></br><br></br>
                    <TextField id="standard-basic" label="Email" variant="standard" type='email' onChange={handleEmail} required/><br></br><br></br>
                    <TextField id="standard-basic" label="Password" variant="standard" type='password' onChange={handlePassword} required/><br></br><br></br>
                    <TextField id="standard-basic" label="Confirm Password" variant="standard" type='password' required/><br></br><br></br>
                    <Link to='/login'><Button to="/login" type='submit' variant="contained" onClick={handleSubmit}> Register  </Button></Link>
                    <br></br><br></br>
                    </form>
                </div>
          </Grid>
          <Grid xs={12} md={12} lg={4}>
                <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                    YOUR THOUGHTS INTO WORKING MODELS
                </Box>
                    <img src='https://sixthsenseit.com/webroot/upload/admin/solutions_services/2020-02-25_solutions_img_1582629915.png' id='sixth'></img>
          </Grid>
        </Grid>
      </Box>
    </div>
       
    )
}
export default Register;