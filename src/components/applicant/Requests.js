import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'

const Requests = () => {
    return (
        <div style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
           <h1>All Requests</h1>

           <ol className="list-group list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                            </div>
                            <button type="button" className="btn btn-success">View</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                            </div>
                            <button type="button" className="btn btn-warning">Pending</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                            </div>
                            <button type="button" className="btn btn-danger">Declined</button>
                        </li>
                    </ol>
        </div >
    );
}

export default Requests;