import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'


class Addstudent extends React.Component {

    render() {

        return (
            <div>
                <div className="mt-3 mb-3" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }} >
                    <h1 className="mb-3 mt-3">Add Student</h1>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="name" className="form-control" id="studentName" placeholder="John" />
                            <label for="studentName">First Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="name" className="form-control" id="studentLastName" placeholder="Doe" />
                            <label for="studentLastName">Last Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="studentNationalId" placeholder="00-000000 X00" />
                            <label for="studentNationalId">National Id</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="studentEmail" placeholder="johndoe@org.ac.zw" />
                            <label for="studentEmail">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="phone" className="form-control" id="studentPhone" placeholder="0712345678" />
                            <label for="studentPhone">Phone</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="address" className="form-control" id="studentAddress" placeholder="01 Home, Sweet Home, SH" />
                            <label for="studentAddress">Address</label>
                        </div>

                        <button style={{ width: '200px' }} type="submit" className="btn btn-primary mt-3 mb-3">Add student</button>

                    </form>
                </div>
            </div>
        );
    }
}



export default Addstudent;
