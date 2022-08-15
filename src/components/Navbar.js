import React from 'react';
import logo from '../blockchain-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="blockchain-logo" width="100" height="80" className="d-inline-block align-text-center" />
                    DTP Document Verification System
                </a>
            </div>
        </nav>
    );
}

export default Navbar;