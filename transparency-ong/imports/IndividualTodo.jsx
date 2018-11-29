import React from 'react'
import { todoContainer } from './api/todos'

export default class IndividualTodo extends React.Component {
    
    deleteTodo() {
        var id = this.props.id
        todoContainer.remove({ _id: id })
    }
    
    addLine(){
        var id = this.props.id
        var done = this.props.done
        todoContainer.update({_id:id},{ $set:{ done: !done }
        })
    }

    render() {
        const list = {
            listStyle: "none",
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
            marginTop: "10px"
        }
        
        const lineThrough = {
            textDecoration: "line-through",
            listStyle: "none",
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
            marginTop: "10px"
        }
        return (
            <div>
                <li style={list}>{this.props.todo}</li>
                    {this.props.done == true ? <li style={lineThrough} 
                    onClick={this.addLine.bind(this)}>{this.props.todo}</li> : 
                    <li style={list} onClick={this.addLine.bind(this)}>{this.props.todo}
                </li>}

                <button onClick={this.deleteTodo.bind(this)}>X</button>
            </div>
        )
    }
}