import logo from './blockchain-logo.png';
import './App.css';
import React, { useState,  useEffect } from 'react'
import Web3 from 'web3'
import Login from './components/Login';



function App() {

    const [test, setTest] = useState("test passed")
    

    return(
        <div>
            <Login />
        </div>
    );
}

export default App;
