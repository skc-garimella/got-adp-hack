import React, { Component } from 'react';
import RatingIndex from './rating-index';
import Nav from './nav-bar';


export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
