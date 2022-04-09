import React from 'react' 
import { useNavigate } from 'react-router-dom'

const Cancel = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            Cancel is Successful !... 
            <button  onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default Cancel  