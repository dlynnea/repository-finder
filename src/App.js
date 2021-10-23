import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './styling/App.scss';
import Home from './components/Home';
import Repo from './components/Repo';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:username/:name" exact component={Repo} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
