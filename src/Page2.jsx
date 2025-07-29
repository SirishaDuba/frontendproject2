import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/Page2.css'
  
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> Andhra Pradesh</h1>
        <div id='text1'>
        <h3> Today's Topic is HTML & CSS Basic</h3>
        </div>
<Link to="/page1">Go to Page1</Link>
<br></br><br></br>
<div className='link2'>
  <Link to="/">Go to HomePage</Link>
</div>

      </div>
    )
  }
}
