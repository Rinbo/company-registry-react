import React, { Component } from 'react'
import {CreateCompany} from '../components/CreateCompany'
import {ListCompany} from '../components/ListCompany'
import {CreatePerson} from '../components/CreatePerson'
import {ListPerson} from '../components/ListPerson'

export class FormsContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <CreateCompany />
          <ListCompany />
        </div>          
        <div>
          <CreatePerson />
          <ListPerson />
        </div>
      </div>
    )
  }
}

export default FormsContainer
