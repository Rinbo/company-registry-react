import React, { Component } from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import PeopleTable from './PeopleTable'
import CompanyMenu from './CompanyMenu'

export class AssignmentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 0,
      company: "",
      person: ""
    }
    this.handleCompanyAssign = this.handleCompanyAssign.bind(this)
  }

  handlePersonSelect = person => {
    this.setState({ person: person, view: 1})
  };

  handleViewSelect = () => {    
    this.setState({view: 0})
  }

  handleCompanyChange = e => {
    this.setState({company: e.target.value})
  }

  handleCompanyAssign = () => {
    this.props.onCompanyAssign({name: this.state.person, company: this.state.company})
    this.setState({view: 0})   
  }
 

  render() {
    const unAssignedPeople = this.props.people.filter(person => person.company === "")

    if (this.state.view === 0) {
      return ( 
        <Grid container direction="column">
          <Grid item lg>
            <PeopleTable 
              people={unAssignedPeople} 
              onCompanyChange={this.handleCompanyChange} 
              companyList={this.props.companyList}
              companyInput={this.state.company}
              onPersonSelect={this.handlePersonSelect}
              />
            </Grid>
        </Grid>
      )
    } else {
      return ( 
        <Grid container direction="column">
          <Grid item lg><Typography variant="headline" className="cr-heading">{this.state.person}</Typography></Grid>
          <Grid item lg><CompanyMenu companyList={this.props.companyList} onCompanyChange={this.handleCompanyChange} companyInput={this.state.company}/></Grid> 
          <Grid item lg><Button variant="contained" color="primary" className="cr-button-primary" onClick={this.handleCompanyAssign}>Save</Button></Grid>
        </Grid>
      )
    }
  }
}

export default AssignmentList