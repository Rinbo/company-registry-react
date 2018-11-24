import React, { Component } from 'react'
import {Tab, Tabs, Typography} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PeopleTable from './PeopleTable'
import AssignmentList from './AssignmentList';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export class PeopleList extends Component {

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
    const assignedPeople = this.props.people.filter(person => person.company !== "")
    return (
      <div style={{padding: 0}}>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="Assigned People" />
            <Tab label="Unassigned People" />
          </Tabs>
        </div>
        <SwipeableViews
          axis='x'
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir='x'>
            <PeopleTable people={assignedPeople} />   
          </TabContainer>
          <TabContainer dir='x'>
          <AssignmentList 
              people={this.props.people}
              onCompanyAssign={this.props.onCompanyAssign}
              companyList = {this.props.companyList} />
          </TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

export default PeopleList










