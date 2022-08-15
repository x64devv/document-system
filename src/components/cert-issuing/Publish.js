import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'


class Publish extends React.Component {

    render() {

        return (
            <div>
                <div style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }} className="container  mt-3 mb-3">
                    <h1 >Upload CSV</h1>

                    <form>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label className="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>

                        <button style={{ width: '200px' }} type="submit" className="btn btn-primary mt-3 mb-3">Publish</button>
                    </form>
                </div>
            </div>
        );
    }
}



export default Publish;
