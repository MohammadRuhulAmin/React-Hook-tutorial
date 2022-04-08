import {info} from './CompC'
import CompF from "./CompF"
const CompE = ()=>{
    return(
        <div>
            <h1>CompE</h1>
            <info.Consumer>
                {
                    (value)=>{
                        return <h2>{value}</h2>
                    }

                }
            </info.Consumer>
            <CompF/>
        </div>
    )
}

export default CompE