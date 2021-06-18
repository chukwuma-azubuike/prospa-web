import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard';
import SignUp from './components/sign-up';


function App() {

  return (
    // <Dashboard />
    <SignUp />
  );
}

export default App;