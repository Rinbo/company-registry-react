import React, { Component } from 'react'
import {Typography, Grid, Button, TextField} from '@material-ui/core/'

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
      <div>
        <Grid container direction="column">
          <Grid item lg>
            <Typography 
              variant="headline" 
              className="cr-heading">
                Add Company
            </Typography>
          </Grid>
          <Grid item lg>
          <TextField
            value={this.state.company}
            onChange={this.handleCompanyChange}
            required 
            label="Enter Company Name" 
            placeholder="Company Name" 
            id="company-name" 
            margin="normal" />          
          </Grid>
          <Grid item lg>
            <Button 
              variant="contained" 
              color="primary" 
              className="cr-button-primary" 
              onClick={this.handleCompanyCreate}>
                Save
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}


export default CreateCompany