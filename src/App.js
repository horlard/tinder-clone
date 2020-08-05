import React from 'react';
import Header from './header'
import TinderCards from './TinderCards'
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={TinderCards}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
