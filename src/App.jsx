import React from 'react';
import Header from './components/Header/Header';
import './styles/global.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/home.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
          <h1>Tech Company.</h1>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam possimus quam in explicabo obcaecati atque molestiae.</h3>
          <button className="btn-submit">Descubra mais</button>
      </div>
      <Switch>
        <Route path="/"/>
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
