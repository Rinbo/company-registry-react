import React, { Component } from 'react'
import {Typography, Grid, Button, TextField} from '@material-ui/core/'

export class CreateCompany extends Component {

  handleCompanySave = () =>{
    const companyNameElement = document.getElementById('company-name')
    this.props.onCompanySave(companyNameElement.value)
    companyNameElement.value=""
  }

  render() {
    return (
      <div>
        <Grid container direction="column">
          <Grid item lg><Typography variant="headline" className="cr-heading">Add Company</Typography></Grid>
          <Grid item lg><TextField hintText="Enter name of company" floatingLabelText="Company name" id="company-name"/></Grid>
          <Grid item lg><Button variant="contained" label="Save" primary={true} className="cr-button-primary" onClick={this.handleCompanySave } /></Grid>
        </Grid>
      </div>
    )
  }
}


export default CreateCompany
