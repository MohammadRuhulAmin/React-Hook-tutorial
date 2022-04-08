import React,{useState,useEffect} from 'react'
import axios from 'axios'
const IncInfo = ()=>{
    const[counter,setCounter] = useState(0)
    const[post,setPost] = useState({})
    useEffect(()=>{
        axios 
            .get(`https://jsonplaceholder.typicode.com/posts/${counter}`)
            .then((res)=>{
                console.log(res.data)
                setPost(res.data)   
            })
            .catch((err)=>{
                console.log(err)
            })
    },[counter])
    return(
        <div>
            <h1>Counter : {counter} . {post.title} </h1>
            <button
                onClick={(e)=>setCounter(prevCount=> prevCount+1)}
            >
                Increment
            </button>
            <button
                onClick={(e)=>setCounter(prevCount=>prevCount-1)}
            >
                Decrement
            </button>
            <button
                onClick={(e)=>setCounter(0)}
            >
                Reset
            </button>
        </div>
    )

}

export default IncInfo