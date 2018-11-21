import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Typography, Grid, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core'

export class CreatePerson extends Component {
  
  state = {
    company: "",
    labelWidth: 20
  };

  handlePersonSave = () =>{
    const personNameElement = document.getElementById('person-name')
    const personCompanyElement = document.getElementById('person-company')
    this.props.onPersonSave([personNameElement.value, personCompanyElement.value])
    personNameElement.value=""
    this.setState({ company: "" })
  }

  handleChange = e => {
    this.setState({ company: e.target.value });
  };



  render() {

    const companyList = this.props.companies.map((company) => {
      return <MenuItem value={company}>{company}</MenuItem>
    })

    
    return (
      <div>
        <Typography variant="headline">Add people</Typography>
        <Grid container direction="column">
          <Grid item lg><TextField hintText="Enter name of person" floatingLabelText="Person Name" id="person-name" /></Grid>   
          <Grid item lg>            
            <FormControl>
            <InputLabel htmlFor="person-company">Select Company</InputLabel>
              <Select 
                className="cr-dropdown"
                value={this.state.company}
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
          <Grid item lg><RaisedButton label="Save" primary={true} className="cr-button-primary" onClick={this.handlePersonSave} /></Grid>           
        </Grid>
      </div>
    )
  }
}

export default CreatePerson
