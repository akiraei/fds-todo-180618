import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import {CellProvider} from '../contexts/CellContext';
import CellList from '../components/CellList'
import withAuth from '../hocs/withAuth'


 class BoardListPage extends Component {
  render() {
    return (
      
      <CellProvider>
        <h1>Board</h1>
        <CellList/>       
      </CellProvider>

      )
  }
}

export default withAuth(BoardListPage);