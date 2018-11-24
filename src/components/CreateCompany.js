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
          <Grid item lg><TextField required label="Enter Company Name" placeholder="Company Name" id="company-name" margin="normal" /></Grid>
          <Grid item lg><Button variant="contained" color="primary" className="cr-button-primary" onClick={this.handleCompanySave}>Save</Button></Grid>
        </Grid>
      </div>
    )
  }
}


export default CreateCompany
