import React from 'react';
import { Switch, Route } from 'react-router-dom'; // withRouter
import Header from './../components/Header';
import Home from './Home';
import Me from './Me';
import About from './About';

const App = () => (
  <div className="App">
     <Header />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/:map/me' component={Me}/>
       <Route path='/about' component={About}/>
     </Switch>
  </div>
);

export default App;

