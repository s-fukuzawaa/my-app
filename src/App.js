import React from "react"
import "./style.css"

import Joke from "./components/Joke"

function App(){
    return(
        <div>
            <Joke question="Hello" punchLine="It's me"/>
            <Joke question="Fuck" punchLine="You"/>
            <Joke question="This is a" punchLine="joke"/>
            <Joke question="No punchLine" />
            <Joke question="Also no punchLine"/>
        </div>
    )
}

export default App