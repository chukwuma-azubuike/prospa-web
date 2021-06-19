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


function App() {

  return (
    // <Dashboard />
    // <SignUp />
    <SignUp1 />
  );
}

export default App;