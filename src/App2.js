import React, {Component} from "react"

import TodoItem from "./components/TodoItem"
import todoData from "./todoData"



class App2 extends Component{

    constructor(){
        super();
        this.state={
            toDos:todoData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState=>{
            const mapped=this.state.toDos.map(item=>{
                if(item.id===id){
                    item.completed=!item.completed
                }
                return item;
            })
            return {
                toDos:mapped
            }
        })
        //console.log("Changed",id)
    }

    render(){
        const toDos=this.state.toDos.map(item=><TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)
    return(
        <div>
            {toDos}
        </div>
    )
    }
}

export default App2