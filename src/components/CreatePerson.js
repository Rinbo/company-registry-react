import React, { Component } from 'react'
import { Grid, TextField, Button} from '@material-ui/core'
import CompanyMenu from './CompanyMenu';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class CreatePerson extends Component {

  constructor(props) {
    super(props)
    this.state = {      
      company: "",
      person: ""
    }
    this.handlePersonCreate = this.handlePersonCreate.bind(this)
    this.handlePersonChange = this.handlePersonChange.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
  } 
  
  handlePersonChange = (e) => {
    this.setState({person: e.target.value})
  }

  handleCompanyChange = (e) => {
    this.setState({company: e.target.value})
  }

  handlePersonCreate = () => {    
    this.props.onPersonCreate({name: this.state.person, company: this.state.company})
    this.setState({person: "", company: ""})   
  }

  render() {
    return (
      <ValidatorForm                
              ref="form"
              onSubmit={this.handlePersonCreate}
              onError={errors => console.log(errors)} >
        <Grid container direction="column">
          <Grid item lg>
            <TextValidator
              type="text" 
              label="Enter Name of Person"
              name="person"
              required={true}
              value={this.state.person} 
              placeholder="Name" 
              margin="normal" 
              onChange={this.handlePersonChange}
              validators={['required']}
              errorMessages={['this field is required']} />
          </Grid>   
          <Grid item lg>
            <CompanyMenu 
              companyList={this.props.companyList} 
              onCompanyChange={this.handleCompanyChange} 
              companyInput={this.state.company}/>
          </Grid> 
          <Grid item lg>
            <Button
              type="submit" 
              color="primary" 
              variant="contained" 
              onClick={this.handlePersonCreate}>
              Create
            </Button>
          </Grid>           
        </Grid>
      </ValidatorForm>
    )
  }
}

export default CreatePerson
