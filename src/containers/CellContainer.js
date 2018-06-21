import React from 'react'
import authfunc from '../hocs/withAuth'

import {UserConsumer} from '../contexts/UserContext';
import {CellConsumer} from '../contexts/CellContext';

class ButtonListContainer extends React.Component {

  render() {
      return (
        <UserConsumer>
          <CellConsumer>

            
          </CellConsumer>
        </UserConsumer>
      )
    }
  }

export default authfunc(ButtonListContainer)