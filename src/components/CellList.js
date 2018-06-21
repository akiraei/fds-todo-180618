import React, {Component} from 'react'
import ListUnit from './ListUnit'
import { CellConsumer, CellProvider } from '../contexts/CellContext';

export default class CellList extends Component {

  render() {

    return (
      <CellConsumer> 
        { ({cells}) => {
          <ul>
      {cells.map(cell => (
        <ListUnit
        key={cell.id} 
        {...cell}
        />
      ))
    }
    </ul>
        }} 
    </CellConsumer>
    )
  }
} 