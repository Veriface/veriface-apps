import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Accordion, Alert } from 'react-bootstrap'
import { useMoralis } from 'react-moralis'
import { VERIFACE_ABI, VERIFACE_ADDRESS } from '../Constants'
import { ethers } from 'ethers'

const main = 'https://mumbai.polygonscan.com/tx/'

const Card = ({ address, transactions, url, handleChange, handleClick, handleRemove }) => {
    return (
        <div className='d-flex pt-4 pb-3 my-3 flex-column justify-content-start align-items-start px-4 box'>
            <div className='d-flex w-100 justify-content-between'>
                <div>  <h6 className='mb-4'>{address}</h6></div>
                <div><input type='checkbox' onClick={handleChange} /></div>
            </div>
            <div>
                <Accordion defaultActiveKey='1'>
                    {transactions && (transactions.map((object, index) => {
                        return (
                            <Accordion.Item className='my-2' eventKey={index}>

                                <Accordion.Header>{object[0]}</Accordion.Header>
                                <Accordion.Body>
                                    <a href={`${main}${object[0]}`}>{object[0]}</a><br />
                                    <p className='mt-3'>{object[1]}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }))}
                </Accordion>
            </div>

            <div className='w-100 d-flex justify-content-between' >
                <Button onClick={handleClick} variant='danger mx-1'>Approve</Button>
                <Button onClick={handleRemove} variant='success mx-1'>Close</Button>
            </div>
        </div>
    )
}



const Approvals = () => {

    const { Moralis, account } = useMoralis()
    const [requestItems, setRequestItems] = useState(null)
    const [batchAddress, setBatchAddress] = useState([])
    const [batchUri, setBatchUri] = useState([])

    const handleSelect = (address, uri) => {
        if (batchAddress.includes(address) && batchUri.includes(uri)) {
            const newBatchA = [...batchAddress]
            const newBatchU = [...batchUri]
            newBatchA.splice(newBatchA.indexOf(address), 1)
            newBatchU.splice(newBatchU.indexOf(uri), 1)
            setBatchAddress(newBatchA)
            setBatchUri(newBatchU)
        } else {
            let newBatchA = [...batchAddress]
            let newBatchU = [...batchUri]
            newBatchU.push(uri)
            newBatchA.push(address.toString())
            setBatchUri(newBatchU)
            setBatchAddress(newBatchA)
        }
    }


    const fetchRequests = async () => {
        const NewBlacklistReq = Moralis.Object.extend('BlacklistRequests')
        const query = new Moralis.Query(NewBlacklistReq)
        query.notEqualTo('closed', true)
        const results = await query.find()
        const requests = []
        if (requests) {
            results.map((object) => {
                requests.push({
                    'address': object.get('address'),
                    'transactions': object.get('data'),
                    'closed': object.get('closed'),
                    'time': object.createdAt,
                    'metadata': object.get('metadata')
                })
            })
        }
        setRequestItems(requests)
        console.log(requestItems)
    }

    const blackList = async (address, uri) => {
        //add to contract
        const options = {
            abi: VERIFACE_ABI,
            contractAddress: VERIFACE_ADDRESS,
            functionName: 'blackList',
            params: {
                userAddress: address,
                blackListUri: uri
            },
        }
        //add to contract
        await Moralis.executeFunction(options).then(() => {
            deleteItem(address)
        })
    }

    const batchBlackList = async (addresses, uris) => {
        //add to contract
        const options = {
            abi: VERIFACE_ABI,
            contractAddress: VERIFACE_ADDRESS,
            functionName: 'batchBlackList',
            params: {
                userAddresses: addresses,
                uris: uris
            },
        }
        //add to contract
        await Moralis.executeFunction(options).then(() => {
            addresses.forEach((address) => {
                deleteItem(address)
            })
        })

        window.reload()
    }

    useEffect(() => {
        console.log(batchAddress)
    }, [batchUri])

    const deleteItem = async (address) => {
        const NewBlacklistReq = Moralis.Object.extend('BlacklistRequests')
        const query = new Moralis.Query(NewBlacklistReq)
        query.equalTo('address', address)
        const object = await query.first()
        console.log(object)
        if (object) {
            object.destroy().then(() => {
                window.reload()
            }).catch(function (err) {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        fetchRequests()
    }, [])
    return (
        <div>
            <div><h3 >Approvals</h3></div>


            <div className='w-75 d-flex justify-content-end'>
                {batchAddress.length > 0 && (<Button variant='light' onClick={() => batchBlackList(batchAddress, batchUri)}>Batch BlackList</Button>)}
            </div>

            <div className='d-flex flex-column align-items-center justify-content-center'>
                {requestItems != null && (requestItems.map((e) => {
                    return (
                        (e.address && (<Card handleChange={() => handleSelect(e.address, e.metadata)} address={e.address} transactions={e.transactions} url={e.metadata} handleClick={() => { blackList(e.address, e.metadata) }} handleRemove={() => { deleteItem(e.address) }} />))
                    )
                }))}
            </div>
        </div>
    )
}

export default Approvals