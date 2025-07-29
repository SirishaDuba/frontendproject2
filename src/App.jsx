import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:'lightblue'}}>
      <h1>Welcome to Frontend Class KLU</h1>
      <h2>Today's topic is Introduction to React</h2>
      <h3>Today's Date is 29.07.2025</h3>
      <h4>2400031818-Sirisha</h4>

      <Link to="/page1">Go to Page1</Link><br></br>
      <Link to="/page2">Go to Page2</Link><br></br>
      <Link to="/page3">Go to Page3</Link>
      
    </div>
  )
}

export default App
