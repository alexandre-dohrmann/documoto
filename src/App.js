import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PagesContainer from './components/PagesContainer';
import IndividualPage0 from './components/IndividualPage0';
import IndividualPage1 from './components/IndividualPage1';
import IndividualPage2 from './components/IndividualPage2';
import HomePage from './components/HomePage';
import Nav from './components/Nav';



require('dotenv').config();



const App = () => {
  return (
    <main>
      <Nav />
      <Switch>
        <Route path="/pages/PG0" component={IndividualPage0} />
        <Route path="/pages/PG1" component={IndividualPage1} />
        <Route path="/pages/PG2" component={IndividualPage2} />
        <Route path="/pages" component={PagesContainer} />
        <Route exact path="/" component={HomePage} />

      </Switch>
    </main>
  );
}

export default App;
