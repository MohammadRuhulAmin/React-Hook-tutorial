import React,{useState} from 'react'


const MyForm = ()=>{
    const [contactInfo,setContactInfo] = useState({
        mobile:'',
        email:''
    })
    return(
        <div>
            <h1>Contact & Email</h1>
            <div>
                <label>Mobile:</label>
                <input
                    type="text"
                    value={contactInfo.mobile}
                    onChange={(e)=>setContactInfo({...contactInfo,mobile:e.target.value})} 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="text"
                    value = {contactInfo.email}
                    onChange={(e)=>setContactInfo({...contactInfo,email:e.target.value})}
                />
            </div>
            <div>
                <label>Mobile: {contactInfo.mobile}</label>
                <label>Email : {contactInfo.email}</label>
            </div>
        </div>
    )

}
export default MyForm