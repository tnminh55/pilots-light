import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import History from './components/pages/History';
import Home from './components/pages/Home';
import Testimonials from './components/pages/Testimonials'
import Leaflets from './components/pages/Leaflets'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/Testimonials">
            <Testimonials />
          </Route>
          <Route path="/Leaflets">
            <Leaflets />
          </Route>
          <Route path="/Sign Up">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
