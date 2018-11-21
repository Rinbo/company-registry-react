import React, { Component } from 'react'
import { CreateCompany } from '../components/CreateCompany'
import { ListCompany } from '../components/ListCompany'
import { CreatePerson } from '../components/CreatePerson'
import { ListPerson } from '../components/ListPerson'
import AppBar from 'material-ui/AppBar/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "Robin Börjesson", company: "Volvo" },
        {name: "Sixten Börjesson", company: "Saab" }
      ],
      companies: ["Volvo", "Saab"],
      companySelect: "",
      companyInput: ""
    }
  }

  handleCompanyChange = e => {
    this.setState({companySelect: e.target.value})
  }

  handleCompanyInput = e => {
    this.setState({companyInput: e.target.value})
  }

  handleCompanySave = e => {
    this.setState({ companies: [...this.state.companies, e] })
  }

  handlePersonSave = e => {
    this.setState({ people: [...this.state.people, { name: e[0], company: e[1] }] })
  }
    
  render() {
    return (
      <MuiThemeProvider >
        <AppBar title="Company Registry" />
        <div className="grid-container">
          <CreateCompany onCompanySave={this.handleCompanySave} />
          <ListCompany companies={this.state.companies} people={this.state.people} onCompanyChange={this.handleCompanyChange} companySelect={this.state.companySelect}/>
          <CreatePerson onPersonSave={this.handlePersonSave} companies={this.state.companies} onCompanyChange={this.handleCompanyInput} companyInput={this.state.companyInput} companySelect={this.companySelect}/>
          <ListPerson people={this.state.people}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default FormsContainer
