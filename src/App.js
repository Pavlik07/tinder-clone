import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
          <Route path="/">
            <h1>I am homepage</h1>
          </Route>
        </Switch>

        {/*Tinder Cards
            Buttons below

            Chats screen
            Individual ChatScreen*/}
      </Router>
    </div>
  );
}

export default App;
