import React, { Component } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core'
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

    const listCompanies = this.props.companies.map((company) => {
      return (
        <ListItem className="cr-company-list-item" button onClick={() => this.handleCompanySelect(company)}>
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
        <List className="cr-company-list">{listCompanies}</List>
      </div>
    )
  }
}

export default CompanyList
