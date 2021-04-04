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
import ClinicVerification from './components/clinicverification';
import AddPatient from './components/addPatient';
import DeletePrompt from './components/promptdelete';
import { ToastProvider } from 'react-toast-notifications';
import AdmiClinicVerification  from './components/adminclinicVirification';
import AdminLogin from "./components/adminLogin";




function App() {
  return (<div>
    <Router>
    <ToastProvider placement="top-center">
      <Switch>
      <Route exact strict path="/">
      <Header />
        <Home/>
      </Route>
      <Route exact strict path="/home">
      <Header />
        <Home/>
      </Route>
      <Route exact strict path="/register">
      <Header />
        <Register/>
        <Home/>
      </Route>
      <Route exact strict path="/login">
      <Header />
        <Login/>
        <Home/>
      </Route>
      <Route exact strict path="/contact">
      <Header />
        <Address/>
      </Route>
      <Route exact strict path="/clinicd">
      <Header />
       <ClinicD></ClinicD>
      </Route>
 <Route exact strict path="/patientd">
      <PatientD></PatientD>
      </Route>
      <Route exact strict path="/dashboard">
      <PatientD/>
     </Route>

      <Route exact strict path="/dashboard">
      <Header />
      <PatientD/>
      </Route>

      <Route exact strict path="/clinicdashboard">
      <Header />
        <ClinicDashboard/>
      </Route>
      <Route exact strict path="/clinicverification">
      <Header />
        <ClinicVerification/>
      </Route>
      <Route exact strict path="/promptdelete/:personid">
      <Header />
        <DeletePrompt/>
        <ClinicDashboard/>
      </Route>
      <Route exact strict path="/addpatient">
      <Header />
        <AddPatient/>
        <ClinicDashboard/>
      </Route>
      <Route exact strict path="/adminclinicVerification">
      <Header />
          <AdmiClinicVerification/>
      </Route>
      <Route exact strict path="/adminlogin">
      <Header />
        <AdminLogin/>
        <Home/>
      </Route>
      <Route exact strict path="/persondetail/:personid">
      <Header />
        <PersonDetails/>
      </Route>
      </Switch>
    </ToastProvider>
    </Router>
  </div>
 
  );
}

export default App;
