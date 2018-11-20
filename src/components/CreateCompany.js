import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Typography, Grid} from '@material-ui/core/'

export class CreateCompany extends Component {
  render() {
    return (
      <div>
        <Grid container direction="column">
          <Grid item lg><Typography variant="headline">Add Company</Typography></Grid>
          <Grid item lg><TextField hintText="Enter name of company" floatingLabelText="Company name" /></Grid>
          <Grid item lg><RaisedButton label="Save" primary={true} className="cr-button-primary" /></Grid>
        </Grid>
      </div>
    )
  }
}


export default CreateCompany
