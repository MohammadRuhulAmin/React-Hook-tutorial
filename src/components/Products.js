import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Products = ()=>{
    return(
        <>
            <div>
                Search :  <input type="search"/>
            </div>
            <nav>
                <ul>
                    <li><Link to='featured'>Featured </Link></li>
                    <li><Link to='new'> New </Link></li>
                </ul>
                
                
            </nav>
            <Outlet/>
        </>
        
        
    )

}

export default Products