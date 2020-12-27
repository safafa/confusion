import Main from './components/MainComponent';
import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
 
  render(){
    return (
      <BrowserRouter> 
      <div >
        <Main/>
      </div>
      </BrowserRouter>
     
    );
  }
  
}


export default App;
