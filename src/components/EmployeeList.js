import React, { Component } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemSecondaryAction, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete'

export class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.handlePersonDelete = this.handlePersonDelete.bind(this)
    this.handleViewSelect = this.handleViewSelect.bind(this)
  }

  handlePersonDelete = person => {
    person.company = ""
    this.props.onPersonDelete(person)
  }

  handleViewSelect = () => {
    this.props.onViewSelect()
  }
 
  render() {
    
    const company = this.props.company
    const employeeList = this.props.people.map((person) => {
      if (person.company === company) {
        return (              
          <ListItem key={'company-' + person.name}>
            <ListItemIcon>
              <PersonIcon  />
            </ListItemIcon>
            <ListItemText primary={person.name}/>
            <ListItemSecondaryAction>                                    
              <IconButton aria-label="Delete" onClick={() => this.handlePersonDelete(person)}>
                <DeleteIcon  />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      } else {return ""}
    })

    return (      
        <div>
          <Typography variant="headline">Employees of {company}</Typography>
          <List style={{paddingLeft: 50}} dense={true} id="employee-list">{employeeList}</List>
          <Button variant="contained" color="primary" onClick={this.handleViewSelect}>Back</Button>
        </div>      
    )
  }
}

export default EmployeeList
