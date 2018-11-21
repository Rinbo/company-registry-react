import React, { Component } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'


export class ListCompany extends Component {

  handleChange = e => {
    e.preventDefault()
    this.props.onCompanyChange(e)
  };

  render() {

    const {company} = this.props.company

    const companyList = this.props.companies.map((c) => {
      return <MenuItem value={c}>{c}</MenuItem>
    })

    const peopleList = this.props.people.map((person) => {
      if (person.company === {company}) {
        return (              
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={person.name} />
          </ListItem>        
        )
      } else {return ""}
    })

    return (
      <div>
        <Typography variant="headline">List Company Employees</Typography>
        <FormControl>
          <InputLabel htmlFor="company-list">Select Company</InputLabel>
          <Select 
            className="cr-dropdown"
            value={this.props.company}
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
        <List>{peopleList}</List>
      </div>
    )
  }
}

export default ListCompany
