import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import BugReportForm from './Components'

export default class App extends Component {

  render() {
    return (
      <BugReportForm/>
    )
  }
}
