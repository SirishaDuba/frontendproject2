import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>India is my Country</h1>
        <br></br>
        <Link to="/page2">Go to Page2</Link>
        <br></br>
        <br></br>
        <Link to="/">Go to HomePage</Link>
      </div>
      

    )
  }
}
