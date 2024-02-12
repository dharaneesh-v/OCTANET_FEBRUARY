import './Userhome.css'
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Facebook, Instagram, Task, Twitter } from "@mui/icons-material";
import Avatar from '@mui/joy/Avatar';
import Tooltip from '@mui/material/Tooltip';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function Userhome()
{
    return(
        <div className="userhome">
            <div className="Nav">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="transparent" enableColorOnDark>
                <Toolbar>
                  <img src='https://tse2.mm.bing.net/th?id=OIP.Q3kbFM7BwNAH7NqECCyfiQHaHa&pid=Api&P=0&h=180' className='logo'></img>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <b style={{color:'red'}}>D-<b style={{color:"black"}}>Projects </b></b>
                  </Typography>
                  <Link to="/login">
                     <Tooltip describeChild title="D-Projects Developers Only.">
                          <Button>LOGIN</Button>
                     </Tooltip>
                    </Link>
                </Toolbar>
              </AppBar>
            </Box>
            </div>
            <div>
              
          <img src='https://i1.wp.com/juntrax.com/blog/wp-content/uploads/2020/08/Benefits-of-Using-Project-Management-System-min.png?resize=1469%2C685&ssl=1'></img>
                
            </div>
            <br></br><br></br>
            <div>
                <br></br>
                <Grid container spacing={2}>
                    <Grid xs={1} md={1}></Grid>
                    <Grid xs={11} md={11} lg={6}>
                        <div className='text'>
                        <Box sx={{ fontFamily: 'Monospace', fontSize: 'h4.fontSize', m: 1 }}>
                             PROJECT MANAGEMENT SYSTEM
                        </Box><br></br>
                        <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                             Project Management System (PMS) is a software which manages all inputs needed to carry out and execute 
                             projects successfully. It’s usually a group of software systems and is also integrated at one place for collecting,
                            analyzing and interpreting information associated with project.
                             <br></br><br></br>
                             It is specifically used for project planning, designing, scheduling, resource allocation and decision-making.
                              Project Management System or PMS has been created and modified by Advance Innovation 
                              Group after years of expertise in Project Management Consulting and understanding the key challenges for any 
                              organization managing projects.
                              <br></br><br></br>
                              <b>Why use the PMS?</b><br></br><br></br>
                                PMS could be a nice enabler for organizational Project Management Processes. Online management of all the project
                                 tasks being carried out is an organizational necessity today and our PMS has the capability of tracking the
                                  project at an activity level.
                        </Box><br></br><br></br>
                        <h5>Following are some key benefits that PMS can bring in :</h5><br></br>
                       👉Track and collaborate cross functional projects with right notifications and triggers to stakeholders at the specified time.<br></br><br></br>
                       👉Get view of all projects under one head with consolidation of tasks, resources, begin and end dates etc.<br></br><br></br>
                       👉Client access availability lets this be a decent customer relationship management tool, whereas you will be able to control what management can see and what he can’t.
                       <br></br><br></br>
                       👉Build in obligatory and non obligatory components of the project whereby one will standardize the yield and method of aiming to the yield.
                       <br></br><br></br>
                       👉Get a definitive and controlled view of financial gain expenses within the projects to measure if there’s continuing business justification for a project.
                       <br></br><br></br>
                       👉Information Security issues will be factors of past, when using our PMS<br></br><br></br>  
                    </div>                                             
                    </Grid>
                    
                    <Grid xs={12} md={12} lg={4}>
                        <div className='Usermess'>
                        <Box sx={{ fontFamily: 'Monospace', fontSize: 'h5.fontSize', m: 1 }}>
                        Talk to a Productivity Expert.</Box>

                            <img src='https://cdn4.meistertask.com/assets/svgs/lead-magnet-1-d7e395a5bcdadcc49d4d2585bc9c35cee4a109c8eb9c6621601d09254d5e1d1f.svg' ></img>
                        <Box sx={{ fontFamily: 'Monospace', fontSize: 'h4.fontSize', m: 1 }}>
                        Book Your Consultation.       </Box>
                        <form>
                            <TextField id="input-with-sx" label="Your Name" variant="standard" type='text' required /><br></br><br></br>    
                            <TextField id="input-with-sx" label="Email" variant="standard" type='email' required /><br></br><br></br>
                            <TextField id="input-with-sx" label="Phone" variant="standard" type='text' required/><br></br><br></br>
                            <TextField id="input-with-sx" label="Subject" variant="standard" type='text' required /><br></br><br></br>
                            <TextField id="input-with-sx" label="Message" variant="standard" type='text' required/><br></br><br></br>
                            <TextField id="input-with-sx" label="Meeting Date" variant="standard" type='text' required /><br></br><br></br>
                            <TextField id="input-with-sx" label="Meeting Time" variant="standard" type='text' required /><br></br><br></br>
                            <Button type='submit'>SEND</Button>
                        </form>
                        </div>
                    </Grid>
                    <Grid md={1}></Grid>
                </Grid>
            </div>
            <br></br><br></br>
            <div className='feature'>
                <br></br>
                <Box sx={{ fontFamily: 'Monospace', fontSize: 'h4.fontSize', m: 1 }}>
                    Features in Our D-Projects PMS
                </Box>
                <br></br>
                <Grid container spacing={0}>
                    <Grid xs={12} md={4} style={{backgroundColor:'olive',color:'white'}}>
                        <br></br>
                        <img src='https://www.aigtechnologies.in/images/products/collaborate.png'></img><br></br>
                        <h5>TRACK AND COLLABORATE</h5>
                        <p>Track and collaborate cross functional projects with built in triggers, notifications and allocations.</p>
                        <br></br>
                    </Grid>
                    <Grid xs={12} md={4} style={{backgroundColor:'orange',color:'white'}}>
                        <br></br>
                        <img src='https://www.aigtechnologies.in/images/products/program.png'></img><br></br>
                        <h5>CONSOLIDATED PROGRAM VIEW</h5>
                        <p>Get view of all projects under one head with consolidation of tasks, resources, start and end dates etc.</p>
                        <br></br>
                    </Grid>
                    <Grid xs={12} md={4} style={{backgroundColor:"darkslateblue",color:'white'}}>
                        <br></br>
                        <img src='https://www.aigtechnologies.in/images/products/clients.png'></img><br></br>
                        <h5>CLIENT ACCESS AVAILABILITY</h5>
                        <p>Client access availability lets this be a decent customer relationship management tool.</p>
                        <br></br>
                    </Grid>
                </Grid>
            </div>
            <div>
              <br></br><br></br>
              <Grid container spacing={2}>
                <Grid xs={12} md={1}></Grid>
                <Grid xs={12} md={4}>
                <h3>Simplify project workflows</h3>
                  D-Project's top-notch workflow management software allows you to easily visualize priorities, boost collaboration, and maintain control of your projects.
                  Create a smooth, user-friendly workflow that links strategy to execution daily, in a down-to-earth and accessible way.
                    <br></br><br></br><br></br>
                        <h3>Manage resources effectively</h3>
                  Take charge of your resource management with real-time analytics and user-friendly dashboards that update constantly.
                      Harness easy-to-use features to assign tasks efficiently, gauge capacity accurately, and ensure resources are used where they’re most needed.<br>
                      </br>
                      </Grid>
                <Grid xs={12} md={7}>
                  <img src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=600,dpr=1/tp/storage/uploads/bfeadf25-ea0d-4efe-a4b3-cea3e5d2de89/hero-image-left-pmo-strategic-ppm-desktop-2x.png'></img>
                </Grid>
              </Grid>
            </div>
            <br></br><br></br><br></br>
            <div>
              <br></br><br></br>
              <Grid container spacing={2}>
                <Grid xs={12} md={7}>
                  <img src='https://sixthsenseit.com/webroot/upload/admin/solutions_services/2020-02-25_solutions_img_1582629915.png' id='png1'></img>
                </Grid>
                <Grid xs={12} md={4}>
                  <br></br><br></br>
                <h3>Wield the power to innovate</h3>
Build the desktop or mobile experiences you want and easily create automated workflows. All with a flexible, secure platform built on Azure, the world’s trusted enterprise cloud.
                <br></br><br></br>
<h3>Speed up consistent processes</h3>
Use customizable templates and blueprints to automate repeatable, adaptable, and uniform processes across your projects.
Get new initiatives up and running quickly by crafting prefilled blueprints that generate comprehensive project plans in no time.
                
                </Grid>
                <Grid xs={12} md={1}></Grid>

              </Grid>
            </div>
            <br></br><br></br><br></br>



            <footer>
            <div className='footer' id='contact'>
                <Box component="footer" >
                
                  <Container maxWidth="lg">
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                          About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          We are D-Projects, dedicated to providing the best service to our
                          customers.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                          Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          123 Main Street, Kuniyamuthur, Coimbatore .
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Email: 727722EUIT039@skcet.ac.in
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Phone: +91 1234567890
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                          Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                          <Facebook />
                        </Link>
                        <Link
                          href="https://www.instagram.com/"
                          color="inherit"
                          sx={{ pl: 1, pr: 1 }}
                        >
                          <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                          <Twitter />
                        </Link>
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                          www.D-Projects.com
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                      </Typography>
                    </Box>
                  </Container>
                </Box>
                </div>
            </footer>
        </div>
    );
}
export default Userhome;