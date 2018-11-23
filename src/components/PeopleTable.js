import React, { Component } from 'react'
import {Table, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core'

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
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.company}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>    
      )
  }
}
