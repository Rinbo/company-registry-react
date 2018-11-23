import React, { Component } from 'react'
import CreatePerson from '../components/CreatePerson';
import {Tab, Tabs, Typography, MenuItem} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export class PersonContainer extends Component {
  
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

    const companyList = this.props.companies.map((company) => {
      return <MenuItem value={company} key={company}>{company}</MenuItem>
    })
    return (
      <div style={{padding: 0}}>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="Add Person" />
            <Tab label="Modify Person" />
          </Tabs>
        </div>
        <SwipeableViews
          axis='x'
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir='x'>
            <CreatePerson 
              onPersonSave={this.props.onPersonSave} 
              companyList={companyList} 
              onCompanyChange={this.props.onCompanyChange} 
              companyInput={this.props.companyInput} />          
          </TabContainer>
          <TabContainer dir='x'>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

export default PersonContainer



 
