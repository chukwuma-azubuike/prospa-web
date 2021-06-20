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
    // <Dashboard />
    // <SignUp />
    // <SignUp1 />
    <SignIn />
  );
}

export default App;