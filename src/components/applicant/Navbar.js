import logo from '../../blockchain-logo.png';
import '../../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Requests from './Requests';
import Transcript from './Transcript';
import Profile from './Profile';
import ApplicantHome from './ApplicantHome';


class Navbar extends React.Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="blockchain-logo" width="100" height="80" className="d-inline-block align-text-center"/>
                            DTP Document Verification System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/requests">Requests</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/transcript">Transcript</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" elment={<ApplicantHome />} />

                    <Route exact path="/requests" element={<Requests />} />

                    <Route exact path="/transcript" element={<Transcript />} />

                    <Route exact path="/profile" element={<Profile />}/>
                    
                </Routes>
            </Router>
        );
    }
}

export default Navbar;