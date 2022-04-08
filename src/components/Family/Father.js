
import { GInfo } from './GrandFather'
const Father = ()=>{
    return (
        <div>
            <h2>Father</h2>
            <GInfo.Consumer>
            {(value)=>{
                    return <h1>{value.firstName} {value.nikeName} {value.lastName}</h1>
                }
            }
            </GInfo.Consumer>

        </div>
    )
}
export default Father 