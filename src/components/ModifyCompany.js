import React, { Component } from 'react'
import CompanyMenu from './CompanyMenu'
import { Grid, Button} from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class ModifyCompany extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      company: "",
      originalCompany: ""
    }
    this.handleCompanyEdit = this.handleCompanyEdit.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleCompanyDelete = this.handleCompanyDelete.bind(this)
    this.handleCompanySelect = this.handleCompanySelect.bind(this)
  }

  handleCompanyChange = (e) => {
    this.setState({company: e.target.value})
  }

  handleCompanySelect = (e) => {
    this.setState({originalCompany: e.target.value})
  }

  handleCompanyEdit = () => {
    this.props.onCompanyEdit({
      name: this.state.company, 
      originalName: this.state.originalCompany})
    this.setState({company: "", originalCompany: ""})   
  }

  handleCompanyDelete = () => {
    this.props.onCompanyDelete({name: this.state.originalCompany})
    this.setState({ originalCompany: "" })
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isCompanySelect', (value) => {
        debugger
        if (value && this.state.originalCompany === "") {
            return false;
        }
        return true;
    });
  }

  render() {   
    return (
      <ValidatorForm                
              ref="form"
              onSubmit={this.handleCompanyEdit}
              onError={errors => console.log(errors)} >
        <Grid container direction="column">
          <Grid item lg>
            <CompanyMenu 
              companyList={this.props.companyList}
              onCompanySelect={this.handleCompanySelect}
              companySelect={this.state.originalCompany}/>
          </Grid> 
          <Grid item lg>
            <TextValidator
              name="company"
              type="text" 
              required={true}
              value={this.state.company}
              onChange={this.handleCompanyChange}
              label="Edit Company name"
              margin="normal"
              id="company-edit"
              validators={['isCompanySelect', 'required']}
              errorMessages={['you must select a company','this field is required']}/>
          </Grid>  
          <Grid item lg>
            <Button 
              color="primary" 
              variant="contained" 
              type="submit" 
              style={{marginRight: 10}}>
                Save
            </Button>
            <Button 
              color="secondary" 
              variant="contained" 
              onClick={this.handleCompanyDelete} 
              style={{marginLeft: 10}}>
                Delete Company
            </Button>
          </Grid>          
        </Grid>
      </ValidatorForm>
    )
  }
}

export default ModifyCompany
