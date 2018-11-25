import React, { Component } from 'react'
import {Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'

export class CompanyMenu extends Component {
  
  handleSelect = e => {
    e.preventDefault()
    this.props.onCompanySelect(e)
  };
  
  render() {
    return (
      <FormControl>              
        <InputLabel htmlFor="person-company">Select Company</InputLabel>
        <Select 
          className="cr-dropdown"
          value={this.props.companySelect}
          onChange={this.handleSelect}           
          inputProps={{
            company: 'company',
            id: 'person-company',
          }}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.props.companyList}
        </Select>
      </FormControl>
    )
  }
}

export default CompanyMenu
