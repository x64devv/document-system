import '../App.css';
import React from 'react'
import Navbar from './Navbar';

const HirringReg = () => {
    return (

        <div>
            <Navbar />
            <div className="container mb-5" style={{ backgroundColor: '#22e2cb', margin: '0 auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
                <h1>Organisation Registration</h1>

                <button style={{ marginRight: '5px' }} type="button" className="btn btn-primary">Edit</button>


                <div >
                    <form>
                        <div className="mb-3">
                            <label for="institueName" className="form-label">Institute Name:</label>
                            <input type="text" value="" className="form-control" id="institueName"
                                placeholder="X-Org" />
                        </div>
                        <div className="mb-3">
                            <label for="instituteType" className="form-label">Institute Type:</label>
                            <input type="text" value="" className="form-control" id="instituteType"
                                placeholder="Software Company" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteDesc" className="form-label">Description:</label>
                            <textarea className="form-control" placeholder="Type Description Here."
                                id="instituteDesc"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="instituteAddress" className="form-label">Address:</label>
                            <input type="text" value="" className="form-control" id="instituteAddress"
                                placeholder="12 Henge St, Henge, ZW" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteEmail" className="form-label">Email:</label>
                            <input type="text" value="" className="form-control" id="instituteEmail"
                                placeholder="info@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="institutePhone" className="form-label">Phone:</label>
                            <input type="text" value="" className="form-control" id="institutePhone"
                                placeholder="+263 98 123456" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div >
        </div>
    );

}

export default HirringReg;