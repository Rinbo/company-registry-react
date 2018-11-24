import React, { Component } from 'react'
import { CreateCompany } from '../components/CreateCompany'
import { ListContainer } from './ListContainer'
import { PersonContainer } from './PersonContainer'
import { PeopleList } from '../components/PeopleList'
import { CrAppBar } from '../components/CrAppBar'
import { Paper, MenuItem } from '@material-ui/core'

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
    this.handlePersonCreate = this.handlePersonCreate.bind(this)
    this.handleEmployeeDelete = this.handleEmployeeDelete.bind(this)
    this.handleCompanyAssign = this.handleCompanyAssign.bind(this)
  }

  handleCompanyInput = e => {
    this.setState({companyInput: e.target.value})
  }

  handleCompanySave = e => {
    this.setState({ companies: [...this.state.companies, e] })

  }

  handlePersonCreate = newPeopleEntry => {
    this.setState({ people: [...this.state.people, newPeopleEntry], companyInput: ""  })
  }

  handleEmployeeDelete = person => {
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

  handleCompanyAssign = person => {
    let peopleArray = this.state.people
    debugger
    peopleArray.map( e => {
      if (e.name === person.name) {
        e.company = person.company
        return e
      } else {
        return e
      }
    })    
    this.setState({people: peopleArray})
  }

  componentWillMount = () => {
    localStorage.getItem('savedState') && this.setState({
      people: JSON.parse(localStorage.getItem('savedState')).people,
      companies: JSON.parse(localStorage.getItem('savedState')).companies
    })
  }
  

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('savedState', JSON.stringify(nextState))    
  }
      
  render() {
    const companyList = this.state.companies.map((company) => {
      return <MenuItem value={company} key={company}>{company}</MenuItem>
    })

    return (
      <div >
        <CrAppBar title="Company Registry"/>
        <Paper className="grid-container">
          <CreateCompany onCompanySave={this.handleCompanySave} />
          <ListContainer 
            companies={this.state.companies} 
            people={this.state.people} 
            onEmployeeDelete={this.handleEmployeeDelete}/>
        </Paper>
        <Paper className="grid-container">
          <PersonContainer 
            onPersonCreate={this.handlePersonCreate} 
            companies={this.state.companies} 
            onCompanyChange={this.handleCompanyInput} 
            companyInput={this.state.companyInput}
            selectedPerson={this.state.selectedPerson}
            onPersonSelect={this.handlePersonSelect} 
            companyList={companyList}/>
          <PeopleList 
            people={this.state.people}
            onCompanyAssign={this.handleCompanyAssign}
            companyList={companyList}
            />
        </Paper>
      </div>
    )
  }
}

export default FormsContainer
