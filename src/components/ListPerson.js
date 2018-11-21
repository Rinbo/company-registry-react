import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

export class ListPerson extends Component {
  render() {

    const listPeople = this.props.people.map((person) => {
    return <li key={person.name}>{person.name} | {person.company}</li>
    })

    return (
      <div>
      <Typography variant="headline">Add people</Typography>
      <ul>{listPeople}</ul>
      </div>
    )
  }
}

export default ListPerson
