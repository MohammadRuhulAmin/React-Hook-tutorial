import React,{useState,useEffect} from 'react'
import axios from 'axios'
const IndevidualData = ()=>{
    const [post,setPost] = useState({})
    const [id,setId] = useState()
    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>{
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    },[id])
    return(
        <div>
            <label>Put An ID : </label>
            <input
                type="text"
                value = {id}
                onChange = {(e)=>setId(e.target.value)}
            />
            <h1>{post.title}</h1>    
        </div>
    )
}
export default IndevidualData