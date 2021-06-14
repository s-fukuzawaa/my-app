import React, {Component} from "react"


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={

            top:"",
            bottom:"",
            randImg: "http://i.imgflip.com/ibij.jpg",
            allMemeImgs:[]

        }
        this.handleChange=this.handleChange.bind(this)
        this.gen=this.gen.bind(this)
    }

    handleChange(event){

        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    gen(){
        if(this.state.allMemeImgs.length>0){
            const num=Math.random(this.state.allMemeImgs.length);
            this.setState({
                randImg:this.state.allMemeImgs[num].url
            })
        }
    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then(response=>this.setState({
                allMemeImgs:response.data.memes
            }))

    }
    render(){
        return(
            <div>
                <form onSubmit={this.gen}>
                    <input type="text" name="top" value={this.state.top} onChange={this.handleChange}/>
                    <input type="text" name="bottom" value={this.state.bottom} onChange={this.handleChange}/>
                    <button>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt=""/>
                    <h2>{this.state.top}</h2>
                    <h2>{this.state.bottom}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator