import React from 'react'

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome React Framework!'
    }
  }

  render() {
    return (
      <h2>{this.state.message}</h2>
    )
  }
}