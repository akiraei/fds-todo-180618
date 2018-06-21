import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

import BoardListPage from './pages/BoardListPage'
import LoginPage from './pages/LoginPage'

import {UserProvider} from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Route path="/login" component={LoginPage}/>
          <Route path="/board" render={() => <BoardListPage/>}/>
          <Route exact path="/" component={Home}/>          
        </UserProvider>
        </Router>
    )
  }
}

const Home = () => 
  (localStorage.getItem('token')) ?
  <Redirect to="board"/> : <Redirect to="login"/>



export default App;