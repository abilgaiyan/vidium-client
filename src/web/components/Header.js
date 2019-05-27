import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import cinema_icon from "../images/cinema-icon.png";
import './StyleHeader.css'

class Header extends Component {
    renderLinks = () => {
        if (this.props.authenticated) {
            return (
                <React.Fragment>
                    <li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>
                    <li>|</li>
                    <li className="nav-item"><Link className="nav-link" to="/fileUpload">File Upload</Link></li>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    {/* <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                    <li>|</li> */}
                    <li className="nav-item"><Link className="nav-link" to="/signin"><i className="fas fa-key fa-flip-horizontal" style={{"verticalAlign":"middle"}}></i> Log In</Link></li>
                </React.Fragment>)
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm justify-content-between">
                    <ul className="navbar-nav ">
                        {/* <li className="nav-item" style={{"visibility":"hidden"}}>Vidium</li> */}
                        <li className="nav-item" style={{"visibility":"hidden"}}>Vidium</li>
                    </ul>
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home"><i className="fas fa-home"></i> Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fas fa-search"></i> Search</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><img src={cinema_icon} className="img-fluid" style={{"height": "20px","opacity": "0.5","verticalAlign": "text-bottom"}} alt="cinemaicon"></img> Channel</Link>

                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        {this.renderLinks()}
                    </ul>
                </nav>
            </React.Fragment>
        )
        
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
