import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import GridList from 'material-ui/GridList'

export class CreateCompany extends Component {
  render() {
    return (
      <div>
        <h2>Add Company</h2>
        <TextField
          hintText="Enter name of company"
          floatingLabelText="Company name" />
        <br />
        <RaisedButton label="Save" primary={true} className="cr-button-primary" />
      </div>
    )
  }
}


export default CreateCompany
