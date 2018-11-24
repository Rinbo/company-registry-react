import React, { Component } from 'react'
import {Table, TableHead, TableCell, TableBody, TableRow, Button} from '@material-ui/core'

export default class PeopleTable extends Component {

  render() {

    return (
      <Table >
        <TableHead>
        <TableRow>
            <TableCell>Person</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.people.map(row => {
            if (row.company === "") {
              return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"  
                    onClick={() => this.props.onPersonSelect(row.name)}>
                    Add a company
                  </Button>
                </TableCell>
              </TableRow>
              )
            } else {
              return (
                <TableRow key={row.name} >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.company}</TableCell>
                </TableRow>
              )
            }
          })}
        </TableBody>
      </Table>    
      )
  }
}
