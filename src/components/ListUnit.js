import React, {Component} from 'react'
export default class ListUnit extends Component {

  handleEnterEditPage = () => {
    this.props.id
  }

  render() {
    const {
       id,
       title,
       username,
       token,
       date,
       tag
      } = this.props;
    return (
      <li key={id}>
        <span>{title}/{username}/{date}</span>
      </li>
    );
  }
}

