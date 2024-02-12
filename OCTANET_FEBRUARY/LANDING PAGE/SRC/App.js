import './App.css';
import * as React from 'react';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Addprojects from './components/Addprojects';
import Userhome from './components/Userhome';
import Addtask from './components/Addtask';
import Project from './components/Projects';
import { createContext } from 'react';

export const Context=createContext(null);

function App() {
  
  return (
    <div className="App">
      <Context.Provider value={"Welcome to D-Projects"}>
    <Router>
        <Routes>
          <Route exact path='/' element={<Userhome/>}></Route>
          <Route exact path='/userhome' element={<Userhome/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/Addprojects' element={<Addprojects/>}></Route>
          <Route exact path='/AddTask' element={<Addtask/>}></Route>
          <Route exact path='/projects' element={<Project/>}></Route>
        </Routes>
    </Router>
    </Context.Provider>
    </div>
  );
}

export default App;
