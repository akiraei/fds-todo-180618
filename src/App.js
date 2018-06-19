import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {UserProvider} from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Route path="/login" component={LoginPage}/>
          <Route path="/todo" component={TodoPageComponent}/>
          <Route exact path="/" component={Home}/>          
        </UserProvider>
        </Router>
    )
  }
}

const Home = () => 
  (localStorage.getItem('token')) ?
  <Redirect to="todo"/> : <Redirect to="login"/>

const TodoPageComponent = () => (
  (localStorage.getItem('token')) ?
  <Route path="/todo" component={TodoPage}/> : <Redirect to="login"/>
) //problem solved as asshole





export default App;