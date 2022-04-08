import axios from 'axios'
import React,{useState,useEffect} from 'react'

const IdBtnClick = ()=>{
    const [id,setId] = useState()
    const [post,setPost] = useState({})
    const [idBtnClick,setIdBtnClick] = useState()
    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick}`)
            .then((res)=>{
                console.log(res)
                setPost(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[idBtnClick])

    const handleClick = ()=>{
        setIdBtnClick(id)
    }
    return(
        <div>
            <label>Id: </label>
            <input
                type="text"
                value = {id}
                onChange = {(e)=>setId(e.target.value)}
            />
            <button onClick={handleClick}>Push ID</button>
            <h1>{post.title}</h1>
        </div>
    )
}
export default IdBtnClick