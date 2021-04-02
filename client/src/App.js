import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Register from './components/register';
import Header from './components/header';
import Address from './components/address';
import Home from './components/home';
import PatientD from './components/PatientDashboard';
import ClinicD from './components/ClinicDashbord';
import ClinicDashboard from './components/clinicDashboard';
import PersonDetails from './components/personDetails';




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
      <Route exact strict path="/clinicd">
       <ClinicD></ClinicD>
      </Route>
      <Route exact strict path="/patientd">
      <PatientD></PatientD>
      </Route>
      <Route exact strict path="/clinicdashboard">
        <ClinicDashboard/>
      </Route>
      <Route exact strict path="/persondetail/:personid">
        <PersonDetails/>
      </Route>
      </Switch>
    </Router>
  </div>
 
  );
}

export default App;
