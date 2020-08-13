import React from 'react';
import './ListItems.css'

function ListItems(props) {
    
    const items = props.items;
  
    const listItems = items.map(item => 
        {
            if (props.search.length > 0) {

                
            return props.search.toLowerCase() === item.title.toLowerCase().substr(0, props.search.length) ? <div className="list" key={item.key}>
                    <p> 
                        <input  
                        type="text" 
                        id={item.key} 
                        value={item.title} 
                        onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/> 
                            
                        <span 
                            className="delet"
                            onClick={() => props.deleteItem(item.key)}
                        >x</span> 
                    </p> 
                        
                     
                    
                    <button   onClick={props.toggledDiv}>    
                        Show/Hide announcement</button>

                        {props.show &&  
                        <textarea type="text" 
                        id={item.key} 
                        value={item.description} 
                        onChange={(e)=>{props.setUpdateDescription(e.target.value,item.key)}}/>
                        }
              
                         
                         
              
            </div> : null
            
            } else {
                return <div className="list" key={item.key}>
                    <p> 
                        <input  
                        type="text" 
                        id={item.key} 
                        value={item.title} 
                        onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/> 
                            
                        <span 
                            className="delet"
                            onClick={() => props.deleteItem(item.key)}
                        >x</span> 
                    </p> 
                        
                    <button      onClick={props.toggledDiv}>    
                        Show/Hide announcement</button>
                        
                        {props.show && item.key &&
                        <textarea type="text" 
                        id={item.key} 
                        value={item.description} 
                        onChange={(e)=>{props.setUpdateDescription(e.target.value,item.key)}}/>
                        }
              
            </div>
            }
        })
    

    return(
        <div>{listItems}</div>
    )
}

export default ListItems;
