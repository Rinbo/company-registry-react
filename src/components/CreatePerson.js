import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import {Typography, Grid} from '@material-ui/core/'

export class CreatePerson extends Component {
  
  handlePersonSave = () =>{
    const personNameElement = document.getElementById('person-name')
    const personCompanyElement = document.getElementById('person-company')
    this.props.onPersonSave([personNameElement.value, personCompanyElement.value])
    personNameElement.value=""
    personCompanyElement.value="Select company"
  }
  
  render() {
    return (
      <div>
        <Typography variant="headline">Add people</Typography>
        <Grid container direction="column">
          <Grid item lg><TextField hintText="Enter name of person" floatingLabelText="Person Name" id="person-name" /></Grid>   
          <Grid item lg><SelectField hintText="Select company" id="person-company" /></Grid> 
          <Grid item lg><RaisedButton label="Save" primary={true} className="cr-button-primary" /></Grid>           
        </Grid>
      </div>
    )
  }
}

export default CreatePerson
