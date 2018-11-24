import React, { Component } from 'react'
import {Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'

export default class CompanyMenu extends Component {
  
  handleChange = e => {
    e.preventDefault()
    this.props.onCompanyChange(e)
  };
  
  render() {
    return (
      <FormControl>              
        <InputLabel shrink={true} htmlFor="person-company">Select Company</InputLabel>
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
          {this.props.companyList}
        </Select>
      </FormControl>
    )
  }
}
