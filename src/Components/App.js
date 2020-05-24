import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import ProfileEdit from './ProfileEdit';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/profile-edit'>
          <ProfileEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
