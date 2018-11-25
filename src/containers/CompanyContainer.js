import React, { Component } from 'react'
import {Tab, Tabs, Typography} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import CreateCompany from '../components/CreateCompany'
import ModifyCompany from '../components/ModifyCompany'

function TabContainer({ children, dir }) {

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export class CompanyContainer extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };  
 


  render() {
    return (
      <div style={{padding: 0, margin: 0}}>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="Add Company" />
            <Tab label="Modify Company" />
          </Tabs>
        </div>
        <SwipeableViews
          axis='x'
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir='x'>
            <CreateCompany 
              onCompanyCreate={this.props.onCompanyCreate} />
          </TabContainer>
          <TabContainer dir='x'>
            <ModifyCompany 
              onCompanyEdit={this.props.onCompanyEdit}
              onCompanyDelete={this.props.onCompanyDelete} 
              companyList={this.props.companyList} />               
          </TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

export default CompanyContainer
