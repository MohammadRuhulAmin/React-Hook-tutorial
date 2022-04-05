import { useState } from "react"


const NameInfo = ()=>{
    const [name,setName] = useState({
        firstName :'',
        lastName  :''
    })
    return(
        <div>
            <table>
                <tr>
                    <td> First Name </td>
                    <td>
                        <input type = "text"                            
                            value={name.firstName}
                            onChange = {(e)=>setName({...name,firstName : e.target.value})}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Last Name </td>
                    <td>
                        <input
                            type="text"
                            value = {name.lastName}
                            onChange = {(e)=>setName({...name,lastName:e.target.value})}
                        />
                    </td>
                </tr>
            </table>
            <h1>{name.firstName} {name.lastName}</h1>
        </div>
    )


}


export default NameInfo