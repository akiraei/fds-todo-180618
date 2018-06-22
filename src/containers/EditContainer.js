import React from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { CellConsumer } from '../contexts/CellContext';
import withAuth from '../hocs/withAuth';

class EditContainer extends React.Component {
  render() {
    const { id, body, title, username, data, tag } = cells;

    return (
      <CellConsumer>
        {() => (
          <React.Fragment>
            <input placeholder="title" />
            <textarea placeholder="body">{body}</textarea>
            <div>
              {username}/{date}
            </div>
          </React.Fragment>
        )}
      </CellConsumer>
    );
  }
}

export default withAuth(EditContainer);
