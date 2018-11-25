import React, { Component } from 'react'
import { ListContainer } from './ListContainer'
import { PersonContainer } from './PersonContainer'
import { PeopleList } from '../components/PeopleList'
import { CrAppBar } from '../components/CrAppBar'
import { Paper, MenuItem } from '@material-ui/core'
import CompanyContainer from './CompanyContainer';

export class FormsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "Robin Börjesson", company: "Volvo" },
        {name: "Sixten Börjesson", company: "Saab" }
      ],
      companies: ["Volvo", "Saab"]
    }
    this.handleCompanyCreate = this.handleCompanyCreate.bind(this)
    this.handlePersonCreate = this.handlePersonCreate.bind(this)
    this.handleEmployeeDelete = this.handleEmployeeDelete.bind(this)
    this.handleCompanyAssign = this.handleCompanyAssign.bind(this)
    this.handlePersonEdit = this.handlePersonEdit.bind(this)
    this.handlePersonDelete = this.handlePersonDelete.bind(this)
    this.handleCompanyDelete = this.handleCompanyDelete.bind(this)
    this.handleCompanyEdit = this.handleCompanyEdit.bind(this)
  }

  handleCompanyCreate = e => {
    this.setState({ companies: [...this.state.companies, e] })
  }

  handlePersonCreate = newPeopleEntry => {
    this.setState({ people: [...this.state.people, newPeopleEntry]})
  }

  handleEmployeeDelete = person => {
    const peopleArray = this.state.people.map( e => {
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
    const peopleArray = this.state.people.map( e => {
      if (e.name === person.name) {
        e.company = person.company
        return e
      } else {
        return e
      }
    })    
    this.setState({people: peopleArray})
  }

  handlePersonEdit = person => {
    const peopleArray = this.state.people.map( e => {
      if (e.name === person.originalName) {        
        e.name = person.name
        return e
      } else {
        return e
      }
    })    
    this.setState({people: peopleArray})
  }

  handlePersonDelete = person => {
    const peopleArray = this.state.people.filter( e => e.name !== person.name)
    this.setState({people: peopleArray})    
  }

  handleCompanyEdit = company => {
    const peopleArray = this.state.people.map (e => {
      if (e.company === company.originalName) {
         e.company = company.name
         return e
      } else {
        return e
      }

    })
    const companyArray = this.state.companies.map( e=> {
      return (e === company.originalName) ? company.name : e     
    })
    this.setState({companies: companyArray, people: peopleArray})
  }

  handleCompanyDelete = company => {
    const peopleArray = this.state.people.map( e => {
      if (e.company === company.name) {
        e.company = ""
        return e
      } else {
        return e
      }
    })
    const companyArray = this.state.companies.filter( e => e !== company.name)
    this.setState({companies: companyArray, people: peopleArray})
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
      return <MenuItem value={company} key={'menu-' + company}>{company}</MenuItem>
    })

    const peopleList = this.state.people.map((person) => {
      return <MenuItem value={person.name} key={'menu-' + person.name}>{person.name}</MenuItem>
    })

    return (
      <div >
        <CrAppBar title="Company Registry"/>
        <Paper className="grid-container">
          <CompanyContainer 
            onCompanyCreate={this.handleCompanyCreate}
            onCompanyEdit={this.handleCompanyEdit}
            companyList={companyList}
            onCompanyDelete={this.handleCompanyDelete} />
          <ListContainer 
            companies={this.state.companies} 
            people={this.state.people} 
            onEmployeeDelete={this.handleEmployeeDelete}/>
        </Paper>
        <Paper className="grid-container">
          <PersonContainer 
            onPersonCreate={this.handlePersonCreate}
            onPersonEdit={this.handlePersonEdit}
            onPersonDelete={this.handlePersonDelete}           
            companyList={companyList}
            peopleList={peopleList}/>
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
