import React, { useState, useEffect } from 'react'
import Whitelist from './Whitelist'
import Blacklist from './Blacklist'
import Approvals from './Approvals'
import "./Home.css"
import { useMoralis } from 'react-moralis'
import { VERIFACE_ABI, VERIFACE_ADDRESS } from '../Constants'


const Home = () => {
    const [tabs, setTabs] = useState(0)
    const [isAdmin, setIsAdmin] = useState(null)

    const { Moralis, account } = useMoralis()

    const isAdminAddress = async () => {
        const options = {
            abi: VERIFACE_ABI,
            contractAddress: VERIFACE_ADDRESS,
            functionName: 'isAdmin',
            params: {
                admin: account
            },
        }
        //add to contract
        const bool = await Moralis.executeFunction(options)
        setIsAdmin(bool)
    }

    useEffect(() => {
        isAdminAddress()
    }, [, account])

    return (
        <div>
            <h3 className='d-flex px-5 pt-4 ' style={{ fontFamily: 'annurati-font' }}>VERIFACE</h3>
            <div>
                <div className='align-items-center d-flex justify-content-left px-5 my-4' id='b-tabs'>
                    <p onClick={() => setTabs(0)} className={tabs == 0 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Blacklist</p>
                    <p onClick={() => setTabs(1)} className={tabs == 1 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Whitelist</p>
                    {isAdmin == true && (<p onClick={() => setTabs(2)} className={tabs == 2 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Approvals</p>)}
                </div>

                {/* mobile */}
                <div className='align-items-center d-flex justify-content-left px-1 my-4' id='b-tabs-sm'>
                    <p onClick={() => setTabs(0)} className={tabs == 0 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Blacklist</p>
                    <p onClick={() => setTabs(1)} className={tabs == 1 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Whitelist</p>
                    {isAdmin == true && (<p onClick={() => setTabs(2)} className={tabs == 2 ? 'selectedTab px-4 py-2 mx-2' : 'deselectedTab px-4 py-2 mx-2'}>Approvals</p>)}
                </div>
            </div>
            <div>
                {tabs == 0 && <Blacklist />}
                {tabs == 1 && <Whitelist />}
                {tabs == 2 && isAdmin == true && (<Approvals />)}
            </div>
        </div>
    )
}

export default Home