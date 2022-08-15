import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'

const Transcript = () => {
    return (
        <div className="m-4" style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '100%', borderRadius: '16px', padding: '20px' }}>
            <h1>Transcript</h1>

            <table class=" table table-bordered table-hover table-striped">
                <thead>
                    <tr >
                        <th style={{width:'20%'}} scope="col">Txn Hash</th>
                        <th style={{width:'20%'}} scope="col">Age</th>
                        <th style={{width:'20%'}} scope="col">From</th>
                        <th style={{width:'20%'}} scope="col">To</th>
                        <th style={{width:'20%'}} scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0x700440bf89b68969a9b35e4d3296076ff8ed1b13e6320d396c890fc9d11fade5</td>
                        <td>10 hrs 32 mins ago</td>
                        <td>0xc310800fbad7fe91acf195dac428430e4c847e6a</td>
                        <td>0xb46eaa46511100154b31b28f7430530fb958dec1</td>
                        <td>0.‍0096166 Ether</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Transcript;