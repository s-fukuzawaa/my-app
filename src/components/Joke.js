import React from "react"

function Joke(props){

    return(
        <div>
            <p>
                {props.question}
            </p>
            <h2>
                {if(props.punchLine!==null&&props.punchLine!==""){
                    props.punchLine
                }}
            </h2>
        </div>
    )
}


export default Joke