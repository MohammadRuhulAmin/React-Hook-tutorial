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
                    {
                        /**
                         * in relative links dont start  with forward slash
                         * like : 
                         *      localhost:3000/home/products/featured
                         */
                    }
                    <li><Link to='featured'>Featured </Link></li>
                    <li><Link to='new'> New </Link></li>
                </ul>
            </nav>
            <Outlet/>    
        </>
        
        
    )

}

export default Products