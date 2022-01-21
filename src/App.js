import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// const App = ()=> {

//or useEffect ???

class App extends Component{
  componentDidMount(){
    fetchSmurfs();
  }

  render(){
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
  }
}

export default App;  /// do I use connect?


//Task List:
//done//1. Connect the fetchSmurfs actions to the App component.
//done//2. Call the fetchSmurfs action when the component mounts.