import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

export class ListCompany extends Component {
  
  render() {

    const listCompanies = this.props.companies.map((company) => {
      return <li key={company}>{company}</li>
    })

    return (
      <div>
        <Typography variant="headline">List Company Employees</Typography>
        <ul>{listCompanies}</ul>
      </div>

    )
  }
}

export default ListCompany
