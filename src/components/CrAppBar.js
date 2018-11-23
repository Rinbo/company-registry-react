import React, { Component } from 'react'
import { Typography, AppBar, Toolbar} from '@material-ui/core'

export class CrAppBar extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          {this.props.title}
        </Typography>
      </Toolbar>
    </AppBar>
    )
  }
}

export default CrAppBar