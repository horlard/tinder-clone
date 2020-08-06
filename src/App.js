import React from 'react';
import Header from './header'
import TinderCards from './TinderCards'
import SwipeButtons from './swipeButtons';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <Header/>
          <TinderCards/>
          <SwipeButtons/>
        </Route>
        <Route path='/chats'>
          <Header backButton='/'/>
          <h1>Lets chat baby</h1>
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
