import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import BugReportForm from './components/BugReportForm'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/54eb8b68-fcc3-4a30-9ed8-d1c23dff6fae', this.state)
    .then(response => {
      console.log(response)
    })
  }
  render() {
    

    return (
      <BugReportForm state={this.state}  changeHandler={changeHandler} submitHandler={submitHandler}/>
    )
  }
}
