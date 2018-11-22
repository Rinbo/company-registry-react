import React, { Component, Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete'

export class PeopleList extends Component {

  constructor(props) {
    super(props)
    this.handlePersonDelete = this.handlePersonDelete.bind(this)
  }

  handlePersonDelete = person => {
    debugger
    person.company = ""
    this.props.onPersonDelete(person)
  }
  
  render() {
    
    const company = this.props.companySelect
    const peopleList = this.props.people.map((person) => {

      if (person.company === company) {
        return (              
          <ListItem>
            <ListItemIcon>
              <PersonIcon  />
            </ListItemIcon>
            <ListItemText primary={person.name}/>
            <ListItemSecondaryAction>                                    
              <IconButton aria-label="Delete" onClick={(person) => this.handlePersonDelete(person.name)}>
                <DeleteIcon  />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      } else {return ""}
    })

    return (
      <Fragment>
        <List style={{paddingLeft: 50}} dense={true} id="employee-list">{peopleList}</List>
      </Fragment>
    )
  }
}

export default PeopleList
