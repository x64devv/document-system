import React, { useState } from 'react';
import Navbar from './Navbar';
import HirringReg from './HirringReg'
import CertReg from './CertReg'
import OrgHome from './hiring-enrolling/OrgHome'
import CertHome from './cert-issuing/CertHome'
import ApplicantHome from './applicant/ApplicantHome'

function Login() {
    const [active, setActive] = useState("login")





    if (active === "login") {
        return (
            <div style={{margin: 'auto'}}>
                <Navbar />
                <div className="container" style={{ backgroundColor: '#22e2cb', margin: 'auto', width: '80%', borderRadius: '16px', padding: '20px' }} >
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="card" style={{ width: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Cert-Issuing Institute</h5>
                                    <p className="card-text">Certificate Issuer, record your students progress.</p>
                                    <button onClick={() => setActive("cert")} style={{ width: '100%', margin: "5px" }} className="btn btn-primary mb-3 align-middle">Jump In</button>
                                    <button onClick={() => setActive("certreg")} style={{ width: '100%', margin: "5px" }} className="btn btn-primary  mb-3 align-middle">Register</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" style={{ width: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Applicant</h5>
                                    <p className="card-text">For all applicants either for a job or higher education</p>
                                    <button onClick={() => setActive("applicant")} style={{ width: '100%', margin: "5px" }} className="btn btn-primary mb-3 align-middle">Jump In</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" style={{ width: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Hiring/Enrolling</h5>
                                    <p className="card-text">Verify your applicant academic
                                        qualifications.
                                    </p>
                                    <button onClick={() => setActive("hirring")} style={{ width: '100%', margin: "5px" }} className="btn btn-primary mb-3 align-middle">Jump In</button>
                                    <button onClick={() => setActive("hirringreg")} style={{ width: '100%', margin: "5px" }} className="btn btn-primary mb-3 align-middle">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    } else if (active === "applicant") {
        return (
            <div>
                <ApplicantHome />
            </div>
        );
    }
    else if (active === "hirringreg") {
        return (
            <div>
                <HirringReg />
            </div>
        );
    }
    else if (active === "certreg") {
        return (
            <div>
                <CertReg />
            </div>
        );
    }
    else if (active === "hirring") {
        return (
            <div>
                <OrgHome />
            </div>
        );
    }
    else if (active === "cert") {
        return (
            <div>
                <CertHome />
            </div>
        );
    }



}

export default Login;