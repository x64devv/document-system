import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'


class Addlecturer extends React.Component {

    render() {

        return (

            <div className="mt-3 mb-3" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }} >
                <h1 className="mb-3 mt-3">Add Lecturer</h1>

                <form >
                    <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="lecturerName" placeholder="John"/>
                            <label for="lecturerName">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="lecturerLastName" placeholder="Doe"/>
                            <label for="lecturerLastName">Last Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="lecturerEmail" placeholder="johndoe@org.ac.zw"/>
                            <label for="lecturerEmail">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="phone" className="form-control" id="lecturerPhone" placeholder="0712345678"/>
                            <label for="lecturerPhone">Phone</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="address" className="form-control" id="lecturerAddress" placeholder="01 Home, Sweet Home, SH"/>
                            <label for="lecturerAddress">Address</label>
                    </div>

                    <button style={{width:'200px', justifyContent:'center'}} type="submit" className="btn btn-primary mt-3">Add Lecturer</button>

                </form>
            </div>
        );
    }
}



export default Addlecturer;





