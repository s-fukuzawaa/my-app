import React from "react"


class App extends React.Component{
    constructor(){
        super();
        this.state={
            isLogged:false
        }
        this.logIn=this.logIn.bind(this)
    }

    componentDidMount(){

    }

    logIn(){
        this.setState(prevState=>{
            return {
                isLogged:!prevState.isLogged
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.logIn}>{this.state.isLogged===true? "LoggedIn":
                "LoggedOut"}</button>
                {this.state.isLogged===true? <h1>Logged in</h1>:
                <h1> Logged out</h1>}
            </div>
        )
    }
}


export default App