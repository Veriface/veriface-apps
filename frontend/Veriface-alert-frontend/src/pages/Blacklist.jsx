import React, { useState } from 'react'
import { Button, Alert, Spinner } from 'react-bootstrap'
import { useMoralis } from 'react-moralis'
import { ethers } from 'ethers'
import './Blacklist.css'

function validate_txhash(addr) {
    return /^0x([A-Fa-f0-9]{64})$/.test(addr);
}

const Blacklist = () => {
    const [tIds1, setTids1] = useState("")
    const [tIds2, setTids2] = useState("")
    const [tdesc1, setTDesc1] = useState("")
    const [tdesc2, setTDesc2] = useState("")
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)


    const { Moralis, account } = useMoralis()

    const checkIfRequest = async () => {
        const BlackLists = Moralis.Object.extend('BlacklistRequests')
        const query = new Moralis.Query(BlackLists)
        query.equalTo('address', address)
        const exists = await query.first()
        console.log(exists)
        if (exists === 'undefined' || typeof exists == undefined || exists == null) {
            return true
        } else {
            return false
        }

    }

    const requestBlackList = async () => {
        if (!ethers.utils.isAddress(address)) {
            alert('Not a valid address')
            return
        }
        if (await checkIfRequest() == false) {
            alert(`blacklist for ${account}  requested already'`)
            return
        }

        if (validate_txhash(tIds1) || validate_txhash(tIds2)) {

        } else {
            alert('Invalid transaction hash')
            return
        }

        if (tdesc1.length < 20 || tdesc2.length < 20) {
            alert('Please add required explanations')
            return
        }

        setLoading(true)

        const data = [[tIds1, tIds2], [tdesc1, tdesc2]]
        const object = {
            createdBy: account,
            data: data
        }

        const file = new Moralis.File('data.json', { base64: btoa(JSON.stringify(object)) })
        await file.saveIPFS()

        const fileurl = file.ipfs()
        console.log(fileurl)

        //save the data
        const NewBlacklistReq = Moralis.Object.extend('BlacklistRequests')
        const newReq = new NewBlacklistReq()
        newReq.set('initiator', account)
        newReq.set('data', data)
        newReq.set('metadata', fileurl)
        newReq.set('address', address)
        newReq.set('closed', false)
        await newReq.save()
        setLoading(false)
        setAddress('')
        setTDesc1('')
        setTDesc2('')
        setTids1('')
        setTids2('')
        alert('sent request')
    }

    const adminBlackList = () => {
        //grad data run
    }



    return (

        <div className=''>
            <div id='b-section' className='my-5 w-100 d-flex flex-column  align-items-center justify-content-center b-section'>
                <div className='w-75 align-items-start main p-5 d-flex flex-column'>
                    <Alert variant='light' className='d-flex w-100 flex-column align-items-start alert-bg'>
                        <p>Click the button below to request an address blacklist</p>
                        <p>Our team would go through to verify the details</p>
                        <p>A request may also be passed on the the DAO to vote on</p>
                    </Alert>

                    <input value={address} onChange={(e) => setAddress(e.target.value)} className='form-control' placeholder='Address 0x898.....' />

                    <div className='d-flex w-100 my-3'>
                        <input value={tIds1} onChange={(e) => { setTids1((prev) => prev = e.target.value) }} className='form-control w-50' placeholder='Fradulent transaction Id' />
                        <input value={tdesc1} onChange={(e) => { setTDesc1((prev) => prev = e.target.value) }} className='form-control w-50 mx-1' placeholder='Explanation (20 minimum characters)' />
                    </div>
                    <div className='d-flex w-100 my-3'>
                        <input value={tIds2} onChange={(e) => { setTids2((prev) => prev = e.target.value) }} className='form-control w-50' placeholder='Fradulent transaction Id' />
                        <input value={tdesc2} onChange={(e) => { setTDesc2((prev) => prev = e.target.value) }} className='form-control w-50 mx-1' placeholder='Explanation (20 minimum characters)' />
                    </div>
                    {!loading ? <Button onClick={requestBlackList} variant='dark w-100'>Request Address Blacklist</Button> : <Button variant='dark w-100'><Spinner animation='border'></Spinner></Button>}
                </div>
            </div>

            {/* mobile */}
            <div id='b-section-sm' className='my-5 w-100 px-2 d-flex flex-column  align-items-center justify-content-center b-section-sm'>
                <div className='w-100 align-items-start main px-2 py-5 d-flex flex-column'>
                    <Alert variant='light' className='d-flex w-100 flex-column align-items-start alert-bg'>
                        <p>Click the button below to request an address blacklist</p>
                        <p>Our team would go through to verify the details</p>
                        <p>A request may also be passed on the the DAO to vote on</p>
                    </Alert>

                    <input value={address} onChange={(e) => setAddress(e.target.value)} className='form-control' placeholder='Address 0x898.....' />

                    <div className='w-100 my-3'>
                        <input value={tIds1} onChange={(e) => { setTids1((prev) => prev = e.target.value) }} className='form-control w-100 mb-1' placeholder='Fradulent transaction Id' />
                        <input value={tdesc1} onChange={(e) => { setTDesc1((prev) => prev = e.target.value) }} className='form-control w-100 mb-1' placeholder='Explanation (20 minimum characters)' />
                    </div>
                    <div className='w-100 my-3'>
                        <input value={tIds2} onChange={(e) => { setTids2((prev) => prev = e.target.value) }} className='form-control w-100 mb-1' placeholder='Fradulent transaction Id' />
                        <input value={tdesc2} onChange={(e) => { setTDesc2((prev) => prev = e.target.value) }} className='form-control w-100 mb-1' placeholder='Explanation (20 minimum characters)' />
                    </div>
                    {!loading ? <Button className='py-3' onClick={requestBlackList} variant='dark w-100'>Request Address Blacklist</Button> : <Button className='py-3' variant='dark w-100'><Spinner animation='border'></Spinner></Button>}
                </div>
            </div>
        </div>
    )
}

export default Blacklist