import React, { Component } from 'react'
import { Typography, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import PeopleList from './PeopleList'



export class ListCompany extends Component {

  handleChange = e => {
    e.preventDefault()
    this.props.onCompanyChange(e)
  };

  render() {

    const companyList = this.props.companies.map((c) => {
      return <MenuItem value={c} key={c}>{c}</MenuItem>
    })

    return (
      <div>
        <Typography variant="headline">List Company Employees</Typography>
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
        <PeopleList companySelect={this.props.companySelect} people={this.props.people} />
        
      </div>
    )
  }
}

export default ListCompany
