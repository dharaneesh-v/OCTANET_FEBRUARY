import './Home.css';
import * as React from 'react';
import Tasks from './Tasks';
import Projects from './Projects';
import Addprojects from './Addprojects';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import { Facebook, Instagram, Task, Twitter } from "@mui/icons-material";
import Dashboard from './Dashboard';
import Meetings from './Meetings';


export default function Home() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Home'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <b style={{color:'red'}}>D-<b style={{color:"black"}}>Projects </b></b>
          </Typography>
          <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                          <Tooltip title="Account settings">
                            <IconButton
                              onClick={handleClick}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? 'account-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            >
                                              <Avatar variant="plain" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                          </MenuItem>
                          <Link to="/login"><MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                          </Link>
                        </Menu>
                      </React.Fragment>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="Projects" value="2" />
            <Tab label="Tasks" value="3" />
            <Tab label="Meetings" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><Dashboard/></TabPanel>
        <TabPanel value="2"><Projects/></TabPanel>
        <TabPanel value="3"><Tasks/></TabPanel>
        <TabPanel value="4"><Meetings/></TabPanel>
      </TabContext>
    </Box>

    <br></br>
    </div>
  );
}
  