import React from 'react'
import {
  Link , NavLink
} from "react-router-dom";
function mNavbar(props) {
  console.log(props.back);
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav_color  navbar-dark" style={{height : "60px" , backgroundColor : `${props.back}` }} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/weather-app"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border : "2px solid green"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor : `${props.back}`}} >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" >
        <li className="nav-item mx-3" style={{backgroundColor : `${props.back}`}}>
        <NavLink exact= "true" activeclassname="active" className="nav-link fs-5" aria-current="page" to="/weather-app" >Home</NavLink>
        </li>
                <li className="nav-item mx-3">
            <NavLink exact= "true" activeclassname="active" className="nav-link fs-5" to="/home">APP</NavLink>
        </li>
        <li className="nav-item mx-3">
            <NavLink exact= "true" activeclassname="active" className="nav-link fs-5" to="/maps">MAPS</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default mNavbar
