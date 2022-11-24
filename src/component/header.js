import React from 'react'
import {Link} from "react-router-dom"

function header() {
  return (<>
    <nav>get ready</nav>
    <div className='header'>
        <Link to="/">Homes</Link>
        <Link to="/about">About</Link>
        <Link to="/sec">Sec</Link>
    </div>
    </>
  )
}

export default header