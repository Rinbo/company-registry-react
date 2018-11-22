import React, { Component } from 'react'
import {CompanyList} from './CompanyList'
import {PeopleList} from './PeopleList'

export class ListCompany extends Component {

  constructor(props) {
    super(props)
    this.handleCompanySelect = this.handleCompanySelect.bind(this)
    this.handleViewSelect = this.handleViewSelect.bind(this)
    this.state = {
      view: 0,
      company: ""
    }
  }

  handleCompanySelect = company => {
    this.setState({ company: company, view: 1 })
  };

  handleViewSelect = () => {    
    this.setState({view: 0})
  }

  render() {
    if (this.state.view === 0) {
      return <CompanyList companies={this.props.companies} onCompanySelect={this.handleCompanySelect} />
    } else {
      return <PeopleList 
        company={this.state.company} 
        people={this.props.people} 
        onViewSelect={this.handleViewSelect}
        onPersonDelete={ this.props.onPersonDelete } />
    }
  }
}

export default ListCompany
