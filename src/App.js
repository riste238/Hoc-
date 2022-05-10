import React, { Component } from 'react';
import './App.css';
import Tomato from './components/Tomato/Tomato';
import Cadet from './components/Cadet/Cadet';

class App extends Component {
    render(){
      return (
        <div className="App">
          <Tomato name={"Danilo"}/>
          <Cadet />
        </div>
      )
    }
}

export default App;