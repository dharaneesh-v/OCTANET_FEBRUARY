import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
import { Facebook, Instagram, Task, Twitter } from "@mui/icons-material";

import { useContext } from 'react';
import { Context } from '../App';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  const welcome = useContext(Context);

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >
                  <img src='http://ubiq.co/analytics-blog/wp-content/uploads/2020/06/operational-dashboard.png'></img>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <u><h5 style={{color:'blue'}}>Recent Projects Started</h5></u>
                  {welcome}
                  <h3>Project Management System</h3>
                  <p>On 26 November,2023</p>
                </Paper>
              </Grid>
              {/* Contact */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
                </Paper>
              </Grid>
            </Grid>
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}