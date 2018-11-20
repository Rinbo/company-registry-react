import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'

export class CreatePerson extends Component {
  render() {
    return (
      <div>
        <h2>Add People</h2>
        <TextField
          hintText="Enter name of person"
          floatingLabelText="Person Name" />
          <RaisedButton label="Save" primary={true} className="cr-button-primary" />        
        <br />
        <SelectField hintText="Select company" />        
      </div>
    )
  }
}

export default CreatePerson
