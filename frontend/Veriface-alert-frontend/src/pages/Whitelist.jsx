import { loadavg } from 'os'
import React, { useEffect, useState } from 'react'
import { Button, Alert, Spinner } from 'react-bootstrap'
import { useMoralis } from 'react-moralis'

const Whitelist = () => {
    const { Moralis, account, } = useMoralis()
    const [isRequested, setIsRequested] = useState(true)
    const [loading, setIsLoading] = useState(false)
    const [message, setMessage] = useState(`Whitelist already requested for ${account && account.slice(0, 12)} ...`)

    const checkIfRequest = async () => {
        const NewWhitelistReq = Moralis.Object.extend('WhitelistRequests')
        const query = new Moralis.Query(NewWhitelistReq)
        query.equalTo('address', account)
        const exists = await query.first()
        console.log(exists)
        if (exists === 'undefined' || typeof exists == undefined || exists == null) {
            setIsRequested(false)
        } else {
            setIsRequested(true)
        }

    }

    useEffect(() => {
        checkIfRequest()
    }, [, account])

    const requestWhiteList = async () => {
        setIsLoading(true)
        const NewWhitelistReq = Moralis.Object.extend('WhitelistRequests')
        const query = new Moralis.Query(NewWhitelistReq)
        query.equalTo('address', account)
        const exists = await query.first()
        console.log(typeof exists)
        if (exists === 'undefined' || typeof exists == undefined || exists == null) {

            await Moralis.authenticate({ signingMessage: `request a whitelist for ${account}` }).then(async () => {
                const newReq = new NewWhitelistReq()
                newReq.set('initiator', account)
                newReq.set('zkId', '')
                newReq.set('address', account)
                newReq.set('closed', false)
                await newReq.save()
                setIsLoading(false)
                setIsRequested(true)
                setMessage('Whitelist Requested')
            }).catch((err) => {
                alert(err.message)
            })

        } else {
            alert('Pending whitelist request exists')
            setIsLoading(false)
        }
    }
    return (
        <div>
            <div className='my-5 w-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='w-75'>
                    <Alert variant='light' className='alert-bg'>
                        <p>Click the button below to request an address whitelist</p>
                    </Alert>
                    {isRequested === false &&
                        (!loading ? <Button onClick={requestWhiteList} variant='outline-dark text-white w-100'>Request Address WhiteList</Button> : <Button variant='outline-dark w-100'><Spinner className='text-white' animation='border'></Spinner></Button>)
                    }
                    {isRequested === true && <Button variant='outline-dark w-100 py-4  text-white'>{message}</Button>}
                </div>
            </div>


        </div>
    )
}

export default Whitelist