import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch, spring } from 'react-router-transition';
import Dashboard from './components/dashboard';
import SignUp from './components/sign-up';
import SignUp1 from './components/sign-up-1';
import SignIn from './components/sign-in';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    // transform: `scale(${styles.scale})`,
    // transform: `translateX(${styles.scale}%)`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    // stiffness: 330,
    // damping: 12,
    
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


function App() {

  return (
    <div>
      <Router>
        {/* <Switch> */}
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
          // className="switch-wrapper"
          >
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
          </AnimatedSwitch>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;