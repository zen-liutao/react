import React, {Component} from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {counter: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        const {counter} = this.state
        this.setState({counter: counter+1})

    }

    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <a onClick={this.handleClick}>increment</a>
            </div>
        )
    }

}

export default Counter