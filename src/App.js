import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard';
import SignUp from './components/sign-up';
import SignUp1 from './components/sign-up-1';
import SignIn from './components/sign-in';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signupnext'>
            <SignUp1 />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;