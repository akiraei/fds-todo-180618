import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.
import boardAPI from '../boardAPI'

const {Provider, Consumer} = React.createContext();

export default class CellProvider extends Component {
  state = {
    loading: false,
    cells: []
  };
  
  componentDidMount() {
    this.fetch();
  }
  
  fetch = async () => {
    this.setState({
      loading: true
    })
    // console.log('only loading:', this.state)
    const res = await boardAPI.get('/cells')
    // console.log('data: ', res.data)
    this.setState({
      cells: res.data, //all cell data
      loading: false
    })
    // console.log('new state: ', this.state)
  }


//   createTodo = async newTodoBody => {
//     if (newTodoBody) {
//       const newTodo = {
//         body: newTodoBody,
//         complete: false
//       }
//       this.setState({
//         loading: true
//       })
//       await boardAPI.post('/todos', newTodo)
//       await this.fetchTodos()
//     }
//   };

//  deleteTodo = async (id, body) => {
//    this.setState({
//      loading: true
//    });
//    await boardAPI.patch(`/todos/${id}`, {
//      body
//    })
//    await this.fetchTodos();
//  }

//  updateTodoBody = async id => {
//     this.setState({
//       loading: true
//     })
//     await boardAPI.patch(`/todos/${id}`, {
//       complete: true
//     })
//     await this.fetchTodos();
//   };

  


  render() {
    // this.fetch()
    const value = {
      cells: this.state.cells,
      loading: this.state.loading,
      fetchTodos: this.fetchTodos,
      // createTodo: this.createTodo,
      // deleteTodo: this.deleteTodo,
      // updateTodoBody: this.updateTodoBody
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

export {CellProvider, Consumer as CellConsumer}