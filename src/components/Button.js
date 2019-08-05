import React from 'react'
import createClass from "create-react-class"

const Button = createClass({
    getDefaultProps(){
        return {
            color: 'blue',
            text: 'Confirm'
        }
    },

    render(){
        const { color, text } = this.props 

        return (
            <button className={`btn btn-${color}`}>
                <em>{text}</em>
            </button>
        )
    }
})

class Button2 extends React.Component {
    constructor(props){
        super(props)
    }

    static defaultProps = {
        color: 'blue',
        text: 'Confirm'
    }

    render(){
        const {color, text} = this.defaultProps;

        return (
            <button className={`btn btn-${color}`}>
                <em>{text}</em>
            </button> 
        )
    }
}

function Button3(props){    
    let {color="blue", text="Confirm"} = props;
    return (
        <button className={`btn btn-${color}`}>
            <em>{text}</em>
        </button> 
    )
    
}


export default Button3