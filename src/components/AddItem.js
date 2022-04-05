
import React,{useState} from 'react'
const AddItem = ()=>{
    const [items,setItems] = useState([])
    const addItem = ()=>{
        setItems([...items,{id:items.id,value:items.length+1}])
    }
    return(
        <div>
            <button onClick={addItem}>Add an Item </button>
            <ul>
                {
                    items.map(item=>(
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AddItem