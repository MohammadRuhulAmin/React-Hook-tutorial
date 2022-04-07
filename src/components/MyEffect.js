import React ,{useState,useEffect} from 'react'

const MyEffect = ()=>{
    const [EmployeeInfo,setEmployeeInfo] = useState({
        name:'',
        email:'',
    })
    useEffect(()=>{
        console.log('I am working as an use Effect')
    },[])
    return(
        <div>
            <h1>Employee Information : </h1>
            <div>
                <label>Employee Name </label>
                <input
                    type="text"
                    value = {EmployeeInfo.name}
                    onChange = {(e)=>{setEmployeeInfo({...EmployeeInfo,name:e.target.value})}}
                />
            </div>
            <div>
                <label>Employee Email</label>
                <input
                    type="email"
                    value={EmployeeInfo.email}
                    onChange= {(e)=>setEmployeeInfo({...EmployeeInfo,email:e.target.value})} 
                />
            </div>
            <div>
                <h1>Employee Information: </h1>
                <h1>{EmployeeInfo.name} : {EmployeeInfo.email}</h1>
            </div>
        </div>
    )
}

export default MyEffect