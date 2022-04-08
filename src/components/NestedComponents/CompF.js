
import {info} from './CompC'
const CompF = ()=>{
    return(
        <div>
            <h1>CompF</h1>
            <info.Consumer>
                {(value)=>
                    {
                        return<h1>{value}</h1>
                    }

                }
            </info.Consumer>
        </div>
    )
}

export default CompF