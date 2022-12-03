import React, { useContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMoralis, useChain } from 'react-moralis';
import Home from './pages/Home';
import { GemProvider } from './GemContext';
import Prohibited from './pages/Prohibited';

function App() {
  const { user, authenticate, isAuthenticated, isWeb3Enabled, isWeb3EnableLoading, enableWeb3, account, Moralis, isUnauthenticated } = useMoralis()

  const [use, setUser] = useState('')
  const { switchNetwork, chainId, chain } = useChain();
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    if (isWeb3Enabled && isAuthenticated) {
      setIsAuth(true)
    } else {
      const isInstalled = await Moralis.isMetaMaskInstalled()
      if (isInstalled) {
        console.log(isInstalled)
        // await enableWeb3()
        await Moralis.authenticate({ provider: "metamask" }).then(() => {
          setIsAuth(true)
          setLoading(false)
        }).catch((err) => {
          alert(err.message)
          setLoading(false)
        })
        switchCheck()
      } else {
        // await Moralis.enableWeb3({ provider: "walletconnect" });
        await Moralis.authenticate({ provider: "walletconnect" }).then(() => {
          setIsAuth(true)
          setLoading(false)
        }).catch((err) => {
          alert(err.message)
          setLoading(false)
        })
        switchCheck()
        console.log('Wallet connect')
      }
    }

  }


  //Request network change
  const switchCheck = () => {
    if (chainId != '0x13881' && chainId != null && typeof chainId != undefined) {
      if (window.confirm("You're on the wrong network! Click OK to switch to Mumbai Testnet!")) {
        switchNetwork("0x13881")
      } else {
        alert("You're on the wrong network & will result in loss of funds due to failed transaction!. Switch to Mumbai manually in your Wallet!");
      }
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      setIsAuth(true)
    }
    if (chainId != '0x13881' && chainId != null && typeof chainId != undefined) {
      if (window.confirm("You're on the wrong network! Click OK to switch to Mumbai Testnet!")) {
        switchNetwork("0x13881")
      } else {
        alert("You're on the wrong network & will result in loss of funds due to failed transaction!. Switch to Mumbai manually in your Wallet!");
      }
    }
  }, [account, chain, chainId]);



  // admins.includes(`${user?.get('ethAddress')}`

  return (

    <div className="App">
      {
        isAuth == true ? (<Home />) :
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
            <h3 className='d-flex px-5 py-2 ' style={{ fontFamily: 'annurati-font' }}>VERIFACE ALERT APP</h3>
            {!loading ? <Button variant='light' onClick={login}>CONNECT WALLET</Button> : <Button variant='light'><Spinner animation='grow'></Spinner></Button>}
          </div>
      }
    </div >
  );
}

export default App;
