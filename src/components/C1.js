import { Component } from "react";

class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {role:"Engineer",name:"",bool:"true"};
    }
    handleclick = () => {
        this.setState({
            role:"doctor"
        })
    }
    handlechange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlesignal = () =>{
        this.setState({
            bool: !this.state.bool
        })
    }
    render()
    {
        return(
            <div>
                <h1>props value is {this.props.gift}</h1>
                <h1>state value is {this.state.role}</h1>
                <button onClick={this.handleclick}>chage state</button>
                < input placeholder="Enter your name" onChange={this.handlechange}/>
                <p>your name is :{this.state.name}</p>
                <button onClick={this.handlesignal}>signal</button>
                {(this.state.bool)?<h1 style={{color:"green"}}>Go</h1>:<h1 style={{color:"red"}}>Stop</h1>}
            
            </div>
        )
    }
}
export default C1;