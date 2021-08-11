import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Header from './components/Header/Header'
import RegisterEvent from './components/RegisterEvent/RegisterEvent';
import PrivateRoute from './components/Login/PrivateRoute'
import NotFound from './components/NotFound/NotFound';
import AddEvent from './components/AddEvent/AddEvent'
import AllRegistration from './components/AllRegistration/AllRegistration'
import MyEvents from './components/MyEvents/MyEvents'

export const UserContext = createContext();

function App() {
  const[loggedInUser,SetLoggedInUser]=useState({})
 
return (
    <UserContext.Provider value={[loggedInUser,SetLoggedInUser]}>
    <Router>
       <Header/>
      <Switch>
      <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
       <Home/>
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
        <Route path="/registerEvent/:id">
            <RegisterEvent />
          </Route>
       
        <PrivateRoute path="/myEvents">
           
            <MyEvents />
          </PrivateRoute>
          <PrivateRoute path="/allRegistration">
           
            <AllRegistration />
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
           
            <AddEvent />
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
