import { createContext } from "react"
import Father from "./Father"
export const  GInfo = createContext(null)
const GrandFather = ()=>{
    const name = {
        nikeName:'Mohammad',
        firstName:'Abdul',
        lastName:'Khaleq'
    }
    return (
        <div>
            <h2> Grand Father </h2>
            <GInfo.Provider value={name}>
                <Father/>
            </GInfo.Provider>
        </div>
    )

}


export default GrandFather