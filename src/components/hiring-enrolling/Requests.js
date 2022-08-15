import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'
import Navbar from './Navbar'


class Requests extends React.Component {

    render() {

        return (
            <div style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button style={{ color: 'black' }} className="nav-link active" id="nav-sent-requests" data-bs-toggle="tab" data-bs-target="#sent-requests"
                        type="button" role="tab" aria-controls="sent-requests" aria-selected="true" >All Requests</button>

                    <button style={{ color: 'black' }} className="nav-link" id="nav-send-request" data-bs-toggle="tab" data-bs-target="#send-request" type="button"
                        role="tab" aria-controls="send-request" aria-selected="false" >Send Request</button>

                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active p-3" id="sent-requests" role="tabpanel" aria-labelledby="nav-sent-requests">
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
                            <button type="button" className="btn btn-danger">Failed</button>
                        </li>
                    </ol>

                </div>

                <div className="tab-pane fade  p-3" id="send-request" role="tabpanel" aria-labelledby="nav-send-request">

                    <form>
                        <div className="mb-3">
                            <label for="walletAddress" className="form-label">Wallet address</label>
                            <input type="email" className="form-control" id="walletAddress" placeholder="name@example.com" />
                        </div>
                        <button type="button" className="btn btn-primary">Send Request</button>
                    </form>
                </div>

            </div>
        </div >
        );
    }
}



export default Requests;
