import React, { Component } from 'react'
import {Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'

export class PeopleMenu extends Component {
  
  handleSelect = e => {
    e.preventDefault()
    this.props.onPersonSelect(e)
  };
  
  render() {
    return (
      <FormControl>              
        <InputLabel htmlFor="people-menu">Select person to edit</InputLabel>
        <Select 
          className="cr-dropdown"
          value={this.props.personSelect}
          onChange={this.handleSelect}           
          inputProps={{
            people: 'people-menu',
            id: 'people-menu',
          }}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.props.peopleList}
        </Select>
      </FormControl>
    )
  }
}

export default PeopleMenu
