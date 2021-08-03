import logo from './assets/images/logo.png';
import './App.scss';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Books from './Components/Books/Books';

import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{

  state = {
    search: "",
  };


  render() {
  return (
    <Router>
      <div className="App">
        <Header/> 
        <Search/> 
        
      </div>
    </Router>
  );
  }
}

export default App;
