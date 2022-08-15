import logo from '../../blockchain-logo.png';
import '../../App.css';
import React from 'react'


class AddressLookup extends React.Component {

    render() {

        return (

            <div style={{ backgroundColor: '#22e2cb', margin: 'auto', alignSelf: 'center', width: '50%', borderRadius: '16px', padding: '20px' }} class="container">
                <form>
                    <div class="mb-3">
                        <label for="walletAddress" class="form-label">Wallet address</label>
                        <input type="email" class="form-control" id="walletAddress" placeholder="name@example.com" />
                    </div>
                    <button type="button" class="btn btn-primary">Lookup Address</button>
                </form>
            </div>
        );
    }

}


export default AddressLookup;
