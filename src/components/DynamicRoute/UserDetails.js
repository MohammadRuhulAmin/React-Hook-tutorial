import { useParams } from "react-router-dom"
const UserDetails = ()=>{
    
    const params = useParams()
    const uId  = params.userId
    return(
        <div>
            details about users {uId}
        </div>
    )
}
export default UserDetails