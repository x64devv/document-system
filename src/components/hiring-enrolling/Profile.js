import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'
import Navbar from './Navbar'


class Profile extends React.Component {

    render() {

        return (
            <div className="container mb-5" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
                <h1>Institute Profile</h1>

                <button style={{ marginRight: '5px' }} type="button" className="btn btn-primary">Edit</button>


                <div style={{pointerEvents:'none'}}>
                    <form>
                        <div className="mb-3">
                            <label for="institueName" className="form-label">Institute Name:</label>
                            <input type="text" value="Midlands State University" className="form-control" id="institueName"
                                placeholder="Example input placeholder" />
                        </div>
                        <div className="mb-3">
                            <label for="instituteType" className="form-label">Institute Type:</label>
                            <input type="text" value="University" className="form-control" id="instituteType"
                                placeholder="Another input placeholder" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteDesc" className="form-label">Description:</label>
                            <textarea className="form-control"
                                id="instituteDesc">Midlands State University is a government owned university in Zimbabwe. The university has 9 faculties offering a wide variety of courses and many specialist programmes. The university is accredited through the National Council for Higher Education, under the Ministry of Higher and Tertiary Education of Zimbabwe.</textarea>
                        </div>
                        <div className="mb-3">
                            <label for="instituteAddress" className="form-label">Address:</label>
                            <input type="text" value="Senga Road, Gweru" className="form-control" id="instituteAddress"
                                placeholder="Another input placeholder" />
                        </div>

                        <div className="mb-3">
                            <label for="instituteEmail" className="form-label">Email:</label>
                            <input type="text" value="infoandpr@staff.msu.ac.zw" className="form-control" id="instituteEmail"
                                placeholder="Example input placeholder" />
                        </div>
                        <div className="mb-3">
                            <label for="institutePhone" className="form-label">Phone:</label>
                            <input type="text" value="+263 54 2260359" className="form-control" id="institutePhone"
                                placeholder="Another input placeholder" />
                        </div>
                        <button type="button" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div >
        );
    }
}



export default Profile;
