import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CertHome from './CertHome'
import Addlecturer from './Addlecturer'
import Publish from './Publish'
import Profile from './Profile'
import Addstudent from './Addstudent';


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
                                    <Link className="nav-link" to="/addlecturer">Add Lecturer</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/addstudent">Add Student</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/publish">Publish Results</Link>
                                </li>
                                <li className="nav-item m-3">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" elment={<CertHome />} />

                    <Route exact path="/addlecturer" element={<Addlecturer />} />

                    <Route exact path="/addstudent" element={<Addstudent />} />

                    <Route exact path="/publish" element={<Publish />} />

                    <Route exact path="/profile" element={<Profile />}/>
                    
                </Routes>
            </Router>
        );
    }
}



export default Navbar;
