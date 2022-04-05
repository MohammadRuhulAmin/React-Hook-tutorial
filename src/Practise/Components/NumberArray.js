import React,{useState} from 'react'

const NumberArray = ()=>{
    const [rollNo,setRollNo] = useState([])

    const addRoll = ()=>{
        setRollNo([...rollNo,{
            id:rollNo.length,
            value: rollNo.length + 1
        }])
    }
    
    return(
        <div>
            <button
                onClick={addRoll}
            >
                 Push Roll 
            </button>
            <ul>
                {
                    rollNo.map(roll=>(
                        <li key={roll.id}>{roll.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NumberArray