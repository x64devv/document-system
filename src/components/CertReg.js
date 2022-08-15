import React from 'react'
import Navbar from './Navbar';

const CertReg = () => {
    return (
        <div>
            <Navbar />
            <div className="container mb-5" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
                <h1>Institute Registration</h1>

                <div >
                    <form>
                        <div className="mb-3">
                            <label for="institueName" className="form-label">Institute Name:</label>
                            <input type="text" value="" className="form-control" id="institueName"
                                placeholder="X-Institute" />
                        </div>
                        <div className="mb-3">
                            <label for="instituteType" className="form-label">Institute Type:</label>
                            <input type="text" value="" className="form-control" id="instituteType"
                                placeholder="Another input placeholder" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteDesc" className="form-label">Description:</label>
                            <textarea style={{height: "150px"}} className="form-control" placeholder="Type Description here"
                                id="instituteDesc"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="instituteAddress" className="form-label">Address:</label>
                            <input type="text" value="" className="form-control" id="instituteAddress"
                                placeholder="1 Henge Rd, Henge, ZW" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteEmail" className="form-label">Email:</label>
                            <input type="text" value="" className="form-control" id="instituteEmail"
                                placeholder="info@example.org" />
                        </div>
                        <div className="mb-3">
                            <label for="institutePhone" className="form-label">Phone:</label>
                            <input type="text" value="" className="form-control" id="institutePhone"
                                placeholder="+263 98 765432" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div >
        </div>
    );
}

export default CertReg;