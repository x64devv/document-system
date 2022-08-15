import logo from '../../blockchain-logo.png';
import '../../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import AddressLookup from './AddressLookup';
import Profile from './Profile';
import Requests from './Requests';
import OrgHome from './OrgHome';


class Navbar extends React.Component {

    render() {

        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} width="100" height="80" className="d-inline-block align-text-center" />
                            DTP Document Verification System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item m-3 ">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/requests">Requests</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/address-lookup">Address Lookup</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" elment={<OrgHome />} />

                    <Route exact path="/requests" element={<Requests />} />

                    <Route exact path="/address-lookup" element={<AddressLookup />} />

                    <Route exact path="/profile" element={<Profile />} />

                </Routes>
            </Router>

        );
    }
}



export default Navbar;



