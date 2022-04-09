import { useNavigate } from "react-router-dom"
import Payment from "../Payment"
export const Home = ()=>{
    const navigate =  useNavigate()
    return (
        <>
            <div>Home Page</div>
            <Payment/>
            <button onClick={()=> navigate('order-summary')}>Place Order </button>
        </>
    )
}