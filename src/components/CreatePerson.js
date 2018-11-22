import React, { Component } from 'react'
import {Typography, Grid, Select, FormControl, InputLabel, MenuItem, TextField, Button} from '@material-ui/core'

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

  handleChange = e => {
    e.preventDefault()
    this.props.onCompanyChange(e)
  };

  render() {

    const companyList = this.props.companies.map((company) => {
      return <MenuItem value={company} key={company}>{company}</MenuItem>
    })

    
    return (
      <div>
        <Typography variant="headline" className="cr-heading">Add people</Typography>
        <Grid container direction="column">
          <Grid item lg><TextField hintText="Enter name of person" floatingLabelText="Person Name" id="person-name" /></Grid>   
          <Grid item lg>            
            <FormControl>              
              <InputLabel htmlFor="person-company">Select Company</InputLabel>
              <Select 
                className="cr-dropdown"
                value={this.props.companyInput}
                onChange={this.handleChange}           
                inputProps={{
                  company: 'company',
                  id: 'person-company',
                }}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {companyList}
              </Select>
            </FormControl>
          </Grid> 
          <Grid item lg><Button variant="contained" label="Save" primary={true} className="cr-button-primary" onClick={this.handlePersonSave} /></Grid>           
        </Grid>
      </div>
    )
  }
}

export default CreatePerson
