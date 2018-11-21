import React, { Component } from 'react'
import { Typography, List, ListItem, Grid } from '@material-ui/core'

export class ListPerson extends Component {
  render() {

    const peopleList = this.props.people.map((person) => {
    return (<ListItem key={person.name}>{person.name} | {person.company}</ListItem>)
    })

    return (
      <div>
        <Grid container direction="column">
          <Grid item lg className="cr-heading"><Typography variant="headline" className="cr-heading">List of people</Typography></Grid>
          <Grid item lg><List style={{paddingLeft: 50}} dense={true}>{peopleList}</List></Grid>
        </Grid>
      </div>
    )
  }
}

export default ListPerson
