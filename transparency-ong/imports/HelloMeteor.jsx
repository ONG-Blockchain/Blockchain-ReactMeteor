import React from 'react'
import {todoContainer} from './api/todos'
import TodoList from './TodoList'

export default class HelloMeteor extends React.Component {
  
  constructor() {
    super()
    this.state = {
      todo: ""
    }
  }
  handleChange(e) {
    var todo = this.refs.input.value
    this.setState({ todo: todo })
  }

  handleClick(){
    var todo = this.state.todo
    var done = false
    todoContainer.insert({todo},(err,done)=>{
     console.log(err + " id = " + done)
    })
   this.setState({todo: ""})
   this.refs.input.value = ""
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} ref="input" />
        <button onClick={this.handleClick.bind(this)}>Add</button>
        <TodoList/>
        <h1>{this.state.todo}</h1>
      </div>
    )
  }
}
