import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout } from '../../actions/auth';

const NavBar=({auth:{isAuthenticated ,loading} , logout})=> {
    const authLinks = (
        <Nav className="justify-content-end">
                    <Nav.Link  onClick={logout} >
                        <Link to="/"  >logout</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/profile">profile</Link>
                    </Nav.Link>
        </Nav>
        
    );
    const gusteLinks = (
        <Nav className="justify-content-end">
                    <Nav.Link>
                        <Link to="/login">Login</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/register">Register</Link>
                    </Nav.Link>
                    </Nav>        );
    return (
        <Navbar bg="light" expand="lg">
         <Link to='/'>    <Navbar.Brand >EE-guide</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" >
                
                    
                    {!loading && <div className="justify-content-end">{isAuthenticated ? authLinks : gusteLinks }</div>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
NavBar.prototype={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired

}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{logout})(NavBar);
