import React, { Component, Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

export class PeopleList extends Component {
  
  
  render() {
    
    const company = this.props.companySelect
    const peopleList = this.props.people.map((person) => {      
      if (person.company === company) {
        return (              
          <ListItem key={person.company}>
            <ListItemIcon>
              <PersonIcon  />
            </ListItemIcon>
            <ListItemText primary={person.name}/>
          </ListItem>        
        )
      } else {return ""}
    })

    return (
      <Fragment>
        <List style={{paddingLeft: 50}} dense={true}>{peopleList}</List>
      </Fragment>
    )
  }
}

export default PeopleList
