import React, { Component } from "react";

import {connect, useDispatch} from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component{
  
  componentDidMount(){
    fetchSmurfs();
  }

  render(){
    //console.log('render invoked');
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



export default connect(null, {fetchSmurfs})(App);  /// do I use connect?


//Task List:
//done//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.