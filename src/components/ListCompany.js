import React, { Component } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import BusinessIcon from '@material-ui/icons/Business'


export class ListCompany extends Component {
  
  render() {

    const listCompanies = this.props.companies.map((company) => {
      return (       
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary={company} />
          </ListItem>        
      )
    })

    return (
      <div>
        <Typography variant="headline">List Company Employees</Typography>
        <List>{listCompanies}</List>
      </div>

    )
  }
}

export default ListCompany
