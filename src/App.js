import './App.css';
import React, {Component} from 'react'
import Recipes from './Components/Recipes'


class App extends Component{
  render(){
    return (
      <div className="App">
        <Recipes/>
      </div>
    );
  }
}

export default App;
