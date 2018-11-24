import React, { Component } from 'react'
// import { Grid, TextField, Button} from '@material-ui/core'
// import CompanyMenu from './CompanyMenu';

export class ModifyPerson extends Component {

  handlePersonSave = () => {
    const personNameElement = document.getElementById('person-name')
    const personCompanyElement = document.getElementById('person-company')
    this.props.onPersonSave({
      name: personNameElement.value, 
      company: personCompanyElement.value
    })
    personNameElement.value=""
  }

  render() {
    // if (this.props.selectedPerson === "") {
      return <h3>Select person from right hand view</h3>
    // } else {      
    //   return (
    //     // <div>
    //     //   <Grid container direction="column">
    //     //     <Grid item lg><TextField label={this.props.selectedPerson.name} margin="normal" id="person-name" /></Grid>   
    //     //     {/* <Grid item lg><CompanyMenu companyList={this.props.companyList} onCompanyChange={this.props.onCompanyChange} companyInput={this.props.onCompanyChange}/></Grid>  */}
    //     //     <Grid item lg>
    //     //       <Button color="primary" variant="contained" onClick={this.handlePersonSave} style={{marginRight: 10}}>Save</Button>
    //     //       <Button color="secondary" variant="contained" onClick={this.handlePersonSave} style={{marginLeft: 10}}>Delete</Button>
    //     //     </Grid>          
    //     //   </Grid>
    //     // </div>
    //   )
    // }
  }
}

export default ModifyPerson