import React from "react"

function Joke(props){

    return(
        <div>
            <p>
                {props.question}
            </p>
            <h2 style={{display: !props.punchLine && "none"}}>
                PunchLine: {props.punchLine}
            </h2>
        </div>
    )
}


export default Joke