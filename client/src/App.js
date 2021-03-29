import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Register from './components/register';
import Header from './components/header';
import Address from './components/address';
import Home from './components/home';
import ClinicDashboard from './components/clinicDashboard';


function App() {
  return (<div>
    <Router>
      <Header/>
      <Switch>
      <Route exact strict path="/">
        <Home/>
      </Route>
      <Route exact strict path="/home">
        <Home/>
      </Route>
      <Route exact strict path="/register">
        <Register/>
        <Home/>
      </Route>
      <Route exact strict path="/login">
        <Login/>
        <Home/>
      </Route>
      <Route exact strict path="/contact">
        <Address/>
      </Route>
      <Route exact strict path="/clinicdashboard">
        <ClinicDashboard/>
      </Route>
      </Switch>
    </Router>
    
  </div>
  );
}

export default App;
