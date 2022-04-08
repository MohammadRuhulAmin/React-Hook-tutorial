import { useMemo, useState } from "react"

const UsingMemo = ()=>{
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)
    const clickEvent1 = ()=>{
        setCounter1(counter1=>counter1+1)
    }
    const clickEvent2 = ()=>{
        setCounter2(counter2 => counter2+1)
    }
    
    const isEven = useMemo(()=>{
        for(let i = 1;i<100000000;i++)
        return counter1%2 ===0
    },[counter1])
    return(
        <div>
            <h1>{counter1} = {counter2}</h1>
            <button onClick={clickEvent1}> 
                Increment {counter1}
            </button>
            <span>{isEven?"Even" : "ODD"}</span>
            <button onClick={clickEvent2}>Increment {counter2}</button>
        </div>
    )
}

export default UsingMemo 