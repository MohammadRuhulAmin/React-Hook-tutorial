
import { useNavigate } from 'react-router-dom'

import React from 'react'

const OrderSummary = ()=>{
    const navigate = useNavigate()
    return(
        <>
            Order Confirmed
            <button onClick={()=>navigate('/')} >Move Back</button>
        </>
    )
}

export default OrderSummary