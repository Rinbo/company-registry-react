import React, { Component } from 'react'
import {Typography, Grid, Button} from '@material-ui/core/'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class CreateCompany extends Component {

  constructor(props) {
    super(props)
    this.state = {      
      company: ""
    }
    this.handleCompanyCreate = this.handleCompanyCreate.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
  } 
  
  handleCompanyChange = (e) => {
    this.setState({company: e.target.value})
  }

  handleCompanyCreate = () =>{
    this.props.onCompanyCreate(this.state.company)
    this.setState({company: ""})
  }

  render() {
    return (
      <ValidatorForm                
        ref="form"
        onSubmit={this.handleCompanyCreate}
        onError={errors => console.log(errors)} >
        <Grid container direction="column">
          <Grid item lg>
            <Typography 
              variant="headline" 
              className="cr-heading">
                Add Company
            </Typography>
          </Grid>
          <Grid item lg>
          <TextValidator
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleCompanyChange}
            required 
            label="Enter Company Name" 
            placeholder="Company Name" 
            id="company-name" 
            margin="normal" 
            validators={['required']}
            errorMessages={['this field is required']}/>          
          </Grid>
          <Grid item lg>
            <Button
              type="submit"
              variant="contained" 
              color="primary" 
              className="cr-button-primary">
                Save
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    )
  }
}


export default CreateCompany