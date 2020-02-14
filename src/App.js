import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Switch, Route} from 'react-router-dom';
import Women from './components/Pages/Women/women';
import Men from './components/Pages/Men/men';
import Children from './components/Pages/Children/children'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/women' component={Women} />
        <Route path='/men' component={Men} />
        <Route path='/children' component={Children} />
      </Switch>
    </div>
  );
}

export default App;
