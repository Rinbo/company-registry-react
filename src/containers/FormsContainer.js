import React, { Component } from 'react'
import { CreateCompany } from '../components/CreateCompany'
import { ListContainer } from './ListContainer'
import { CreatePerson } from '../components/CreatePerson'
import { PeopleList } from '../components/PeopleList'
import AppBar from 'material-ui/AppBar/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Paper} from '@material-ui/core'

export class FormsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "Robin Börjesson", company: "Volvo" },
        {name: "Sixten Börjesson", company: "Saab" }
      ],
      companies: ["Volvo", "Saab"],
      companyInput: ""
    }
    this.handleCompanyInput = this.handleCompanyInput.bind(this)
    this.handleCompanySave = this.handleCompanySave.bind(this)
    this.handlePersonSave = this.handlePersonSave.bind(this)
    this.handlePersonDelete = this.handlePersonDelete.bind(this)
  }

  handleCompanyInput = e => {
    this.setState({companyInput: e.target.value})
  }

  handleCompanySave = e => {
    this.setState({ companies: [...this.state.companies, e] })

  }

  handlePersonSave = newPeopleEntry => {
    this.setState({ people: [...this.state.people, newPeopleEntry], companyInput: ""  })
  }

  handlePersonDelete = person => {
    let peopleArray = this.state.people
    peopleArray.map( e => {
      if (e === person) {
        e.company = ""
        return e
      } else {
        return e
      }
    })
    this.setState({people: peopleArray})
  }
    
  render() {
    return (
      <MuiThemeProvider >
        <AppBar title="Company Registry" />
        <Paper className="grid-container">
          <CreateCompany onCompanySave={this.handleCompanySave} />
          <ListContainer 
            companies={this.state.companies} 
            people={this.state.people} 
            onPersonDelete={this.handlePersonDelete}/>
        </Paper>
        <Paper className="grid-container">
          <CreatePerson onPersonSave={this.handlePersonSave} 
            companies={this.state.companies} 
            onCompanyChange={this.handleCompanyInput} 
            companyInput={this.state.companyInput} />
          <PeopleList people={this.state.people}/>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default FormsContainer
