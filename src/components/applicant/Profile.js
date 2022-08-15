import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className="container mb-3 mt-3" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
                <h1>Institute Profile</h1>


                <button style={{ marginRright: '5px' }} type="button" className="btn btn-primary">Edit</button>

                <div style={{ pointerEvents: 'none' }}>
                    <form>
                        <div className="mb-3">
                            <label for="firstName" className="form-label">First Name:</label>
                            <input type="text" value="John" className="form-control" id="firstName"
                                placeholder="John" />
                        </div>
                        <div className="mb-3">
                            <label for="lastName" className="form-label">Last Name:</label>
                            <input type="text" value="Doe" className="form-control" id="lastName"
                                placeholder="Doe" />
                        </div>

                        <div className="mb-3">
                            <label for="nationalId" className="form-label">National Id:</label>
                            <input type="text" value="00-112233X44" className="form-control" id="nationalId"
                                placeholder="National Id" />
                        </div>

                        <div className="mb-3">
                            <label for="homeAddress" className="form-label">Address:</label>
                            <input type="text" value="Senga Road, Gweru" className="form-control" id="homeAddress"
                                placeholder="Home Address" />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" value="john.doe@students.msu.ac.zw" className="form-control" id="email"
                                placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone:</label>
                            <input type="text" value="+263 54 2260359" className="form-control" id="phone"
                                placeholder="Phone" />
                        </div>

                        <div className="mb-3">
                            <label for="institueName" className="form-label">Institute Name:</label>
                            <input type="text" value="Midlands State University" className="form-control" id="institueName"
                                placeholder="Example input placeholder" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;