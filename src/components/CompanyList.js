import React, { Component } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import BusinessIcon from '@material-ui/icons/Business'

export class CompanyList extends Component {

  constructor(props) {
    super(props)
    this.handleCompanySelect = this.handleCompanySelect.bind(this)
  }

  handleCompanySelect = company => {
    this.props.onCompanySelect(company)
  }

  render() {

    const companyList = this.props.companies.map((company) => {
      return (
        <ListItem key={company} button onClick={() => this.handleCompanySelect(company)}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary={company} />
        </ListItem>
      )
    })
    
    return (
      <div>
        <Typography variant="headline">Companies</Typography>
        <List className="cr-company-list">{companyList}</List>
      </div>
    )
  }
}

export default CompanyList
