import React, { Component } from 'react'
import { Grid, TextField, Button} from '@material-ui/core'
import CompanyMenu from './CompanyMenu';

export class CreatePerson extends Component {

  handlePersonSave = () => {
    const personNameElement = document.getElementById('person-name')
    const personCompanyElement = document.getElementById('person-company')
    this.props.onPersonSave({
      name: personNameElement.value, 
      company: personCompanyElement.value
    })
    personNameElement.value=""
  }

  render() {
    return (
      <div>
        <Grid container direction="column">
          <Grid item lg><TextField label="Enter Name of Person" placeholder="Name" margin="normal" id="person-name" /></Grid>   
          <Grid item lg><CompanyMenu companyList={this.props.companyList} onCompanyChange={this.props.onCompanyChange} companyInput={this.props.companyInput}/></Grid> 
          <Grid item lg><Button color="primary" variant="contained" onClick={this.handlePersonSave}>Create</Button></Grid>           
        </Grid>
      </div>
    )
  }
}

export default CreatePerson
