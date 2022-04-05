import React,{useState} from 'react'

const UserName = ()=>{

    const [name,setName] = useState({
        firstName:'',
        middleName:'',
        lastName:''
    })

    return (
        <div>
            <div>
                <label>First Name</label>
                <input 
                    type="text"
                    value={name.firstName}
                    onChange = {(e)=>setName({...name,firstName:e.target.value})}
                />
            </div>
            <div>
                <label>Mid Name</label>
                <input
                    type="text"
                    value = {name.middleName}
                    onChange = {(e)=>setName({...name,middleName:e.target.value})}
                />
            </div>
            <div>
                <label> Last Name </label>
                <input 
                    type="text"
                    value={name.lastName}
                    onChange = {(e)=>setName({...name,lastName:e.target.value})}
                />
            </div>
            <div>
                <h2>Full Name : {name.firstName}{name.middleName}{name.lastName}</h2>
            </div>
        </div>
        
    )

}


export default UserName