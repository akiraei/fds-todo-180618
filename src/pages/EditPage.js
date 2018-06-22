import React, { Component, Fragment } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import { CellProvider } from '../contexts/CellContext';
import EditContainer from '../containers/EditContainer';
import withAuth from '../hocs/withAuth';

class EditPage extends Component {
  render() {
    return (
      <CellProvider>
        <h1>Edit</h1>
        <EditContainer />
      </CellProvider>
    );
  }
}

export default withAuth(EditPage);
