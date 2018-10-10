import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pages from './components/Pages';


const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path="/pages" component={Pages} />
      </Switch>
    </main>
  );
}

export default App;
