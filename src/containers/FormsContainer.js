import React, { Component } from 'react'
import {CreateCompany} from '../components/CreateCompany'
import {ListCompany} from '../components/ListCompany'
import {CreatePerson} from '../components/CreatePerson'
import {ListPerson} from '../components/ListPerson'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar/AppBar';

export class FormsContainer extends Component {
  
  
  render() {
    return (
      <MuiThemeProvider >
        <AppBar />
        <div className="grid-container">
          <CreateCompany />
          <ListCompany />
          <CreatePerson />
          <ListPerson />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default FormsContainer
