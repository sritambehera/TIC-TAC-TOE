import React from 'react';
import './App.css';
import Board from './Board'

class App extends React.Component{

     
  render(){
      return (
    <div className = "div"> 
    <h1> TIC-TAC-TOE</h1><br/>
    <Board />
    </div>
    )
  }

}

export default App;
