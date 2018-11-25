import React, { Component } from 'react'
import PeopleMenu from './PeopleMenu';
import { Grid, Button} from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class ModifyPerson extends Component {

  constructor(props) {
    super(props)
    this.state = {      
      person: "",
      originalPerson: ""
    }
    this.handlePersonEdit = this.handlePersonEdit.bind(this)
    this.handlePersonChange = this.handlePersonChange.bind(this)
    this.handlePersonDelete = this.handlePersonDelete.bind(this)
    this.handlePersonSelect = this.handlePersonSelect.bind(this)
  }

  handlePersonChange = (e) => {
    this.setState({person: e.target.value})
  }

  handlePersonSelect = (e) => {
    this.setState({originalPerson: e.target.value})
  }

  handlePersonEdit = () => {
    this.props.onPersonEdit({
      name: this.state.person, 
      originalName: this.state.originalPerson})
    this.setState({person: "", originalPerson: ""})   
  }

  handlePersonDelete = () => {
    this.props.onPersonDelete({name: this.state.originalPerson})
    this.setState({ originalPerson: "" })
  }

  render() {   
    return (
      <ValidatorForm                
              ref="form"
              onSubmit={this.handlePersonEdit}
              onError={errors => console.log(errors)} >
        <Grid container direction="column">
          <Grid item lg>
            <PeopleMenu 
              peopleList={this.props.peopleList}
              onPersonSelect={this.handlePersonSelect}
              personSelect={this.state.originalPerson}/>
          </Grid> 
          <Grid item lg>
            <TextValidator
              name="person"
              type="text" 
              required={true}
              value={this.state.person}
              onChange={this.handlePersonChange}
              label="Edit person name"
              margin="normal"
              id="person-edit"
              validators={['required']}
              errorMessages={['this field is required']} />
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
              onClick={this.handlePersonDelete} 
              style={{marginLeft: 10}}>
                Delete Person
            </Button>
          </Grid>          
        </Grid>
      </ValidatorForm>
    )
  }
}

export default ModifyPerson