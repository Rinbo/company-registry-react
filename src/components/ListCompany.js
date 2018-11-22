import React, { Component } from 'react'
import { Typography, Select, FormControl, InputLabel, MenuItem, Grid } from '@material-ui/core'
import PeopleList from './PeopleList'



export class ListCompany extends Component {

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

        <Typography variant="headline" className="cr-heading">List Company Employees</Typography>
        <Grid container direction="column">
          <Grid item lg>
            <FormControl>
              <InputLabel htmlFor="company-list">Select Company</InputLabel>
              <Select 
                className="cr-dropdown"
                value={this.props.companySelect}
                onChange={this.handleChange}           
                inputProps={{
                  company: 'company',
                  id: 'company-list',
                }}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {companyList}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg><PeopleList companySelect={this.props.companySelect} people={this.props.people} onPersonDelete={this.props.onPersonDelete} /></Grid>
        </Grid>
        
      </div>
    )
  }
}

export default ListCompany
