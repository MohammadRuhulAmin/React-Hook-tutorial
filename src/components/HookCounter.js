import React,{useState} from 'react'

const HookCounter = ()=>{
    const [count,setCount] = useState(0)
    return (
        <div>
            <button 
                onClick={(e)=>setCount(prevCount => prevCount+1)}
            >
                Count {count}
            </button>
            <button 
                onClick = {(e)=>setCount(prevCount=> 0)}
            >
                Reset
             </button>
             <button
                onClick={()=>setCount(prevCount => prevCount+1000)}
             >
                 Increment More ? 
             </button>
        </div>
    )


}


export default HookCounter