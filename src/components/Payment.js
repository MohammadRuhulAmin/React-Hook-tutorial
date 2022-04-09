import React from 'react' 
import { useNavigate } from 'react-router-dom'

const Payment = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            Payment is processing ... 
            <button  onClick={()=>navigate('cancel')}>Cancel Payment</button>
        </div>
    )
}

export default Payment 