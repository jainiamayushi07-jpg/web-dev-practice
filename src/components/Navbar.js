import React from 'react'
import './ColorButton.css'
import { Link } from 'react-router';

export default function Navbar(props) {
  console.log(props.mode)
  const colors = [
    "#1f2937", // dark slate
    "#f8fafc", // soft light
    "#0f172a", // blue tech
    "#fff7ed", // warm
    "#2e1065"  // purple
  ];

  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
         <a className="navbar-brand" href="#">Navbar w/ text</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
      <div className="collapse navbar-collapse" id="navbarText" >
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
         </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
      </ul>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' style={{height: '40px', width: '40px' ,cursor:'pointer'}} onClick={()=>{props.ToggleMode('primary')}}></div>
        <div className='bg-success rounded mx-2' style={{height: '40px', width: '40px' ,cursor:'pointer'}} onClick={()=>{props.ToggleMode('success')}}></div>
        <div className='bg-danger rounded mx-2' style={{height: '40px', width: '40px' ,cursor:'pointer'}} onClick={()=>{props.ToggleMode('danger')}}></div>
        <div className='bg-warning rounded mx-2' style={{height: '40px', width: '40px' ,cursor:'pointer'}} onClick={()=>{props.ToggleMode('warning')}}></div>
        
      </div>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
       <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.ToggleMode('null')}} id="switchCheckChecked"/>
        <label className="form-check-label" htmlFor="switchCheckChecked" >Enable Dark mode</label>
      </div>
    </div>
  </div>
    </nav>
  )
}

