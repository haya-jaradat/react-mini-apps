import React from 'react';
import logo from './logo.svg';
import Card from './components/card1'
import Card2 from './components/card2'
import './App.css';

class App extends React.Component {
state ={}

  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple React App</p>
      </header>

      < Card  />

      <Card2 />
    </div>
     );
  }
}
 
export default App;
