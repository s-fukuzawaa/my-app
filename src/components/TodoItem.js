import React from "react"



function TodoItem(props){
    return (
        <div>
        <input type="checkbox" onChange={()=>props.handleChange(props.item.id)} checked={props.item.completed} />
        {
            props.item.completed===true?<p style={{color:"purple"}}>{props.item.text}</p>:
            <p >{props.item.text}</p>
        }
        </div>
    )
}


export default TodoItem