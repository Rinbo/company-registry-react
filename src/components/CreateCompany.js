import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class CreateCompany extends Component {
  render() {
    return (
      <div>
        <h2>Create Company</h2>
        <TextField
          hintText="Enter name of company"
          floatingLabelText="Company name" />
        <RaisedButton label="Save" primary={true} style={styles.button}/>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 10
  }
}

export default CreateCompany
