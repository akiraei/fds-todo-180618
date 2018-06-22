import React from 'react';
import { Redirect } from 'react-router-dom';

export default function(WrappedComponent, redirectPath = '/login') {
  return class extends React.Component {
    render() {
      if (localStorage.getItem('token')) {
        return <WrappedComponent />;
      } else {
        return <Redirect to={redirectPath} />;
      }
    }
  };
}
