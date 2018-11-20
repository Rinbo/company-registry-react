import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import {Typography, Grid} from '@material-ui/core/'

export class CreatePerson extends Component {
  render() {
    return (
      <div>
        <Typography variant="headline">Add people</Typography>
        <Grid container direction="column">
          <Grid item lg><TextField hintText="Enter name of person" floatingLabelText="Person Name" /></Grid>   
          <Grid item lg><SelectField hintText="Select company" /></Grid> 
          <Grid item lg><RaisedButton label="Save" primary={true} className="cr-button-primary" /></Grid>           
        </Grid>
      </div>
    )
  }
}

export default CreatePerson
