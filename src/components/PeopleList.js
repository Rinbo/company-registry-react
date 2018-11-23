import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'
import PeopleTable from './PeopleTable'

export class PeopleList extends Component {
  render() {

    return (
      <div>
        <Grid container direction="column">
          <Grid item lg className="cr-heading"><Typography variant="headline" className="cr-heading">List of people</Typography></Grid>
          <Grid item lg><PeopleTable people={this.props.people} /></Grid>
        </Grid>
      </div>
    )
  }
}

export default PeopleList
