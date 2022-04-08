import { createContext } from 'react'
import CompE from './CompE'

export const info = createContext(null)
const CompC = ()=>{
    return(
        <div>
            <h1>CompC</h1>
            <info.Provider value = "Md Ruhul Amin">
                <CompE/>
            </info.Provider>
            
        </div>
    )
}

export default CompC