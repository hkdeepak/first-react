import React from 'react'

function Navbar(props) {
  return (
    <div className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{height:"80px"}}>   
    <div className="btn-group m-2" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary m-2 ">Left</button>
  <button type="button" className="btn btn-primary m-2 ">Middle</button>
  <button type="button" className="btn btn-primary m-2 ">Right</button>
</div>
<div className={`form-check form-switch text-${props.mode==='green'?'aqua':'green'} `} >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toglebtn} </label>
</div>
    </div>
  );
}

 export default Navbar

// Navbar.propTypes={
//   title:PropTypes.string
// };
// Navbar.defaultProps={
//   desc:'sagar'
// };
