import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border-bottom border-2 border-${props.mode==='light'?'success':'warning'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color: props.mode==='dark'?'red':'black'}} to='/'>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/' aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/text'>Text Utiliser</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/v'>v0.99</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input  className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <input onClick={props.toggleMode}  className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'Dark':'Light'} Mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string
}