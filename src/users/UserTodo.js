import axios from "axios";
import React from "react";
import { Compbutton } from "./Compbutton";
import { InputElement } from "./InputElement";

export class UserTodo extends React.Component{
    state = {
        todos: []
    }
    
    componentDidMount () {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => {
            const todos = res.data
            this.setState({todos})

        })
    }
    onDelate = (id) =>{
        this.setState((prevState) => ({
            ...prevState,
            todos: prevState.todos.filter((el) => el.id !== id)
            })
        )
    }

    onComplate = (id) => {
      this.setState((prevState) => ({
          ...prevState,
          todos: prevState.todos.map(el => {
              if(el.id === id){
                  return{
                      ...el,  completed : !el.completed
                  }
              }
              return el
          })
      }))
    }
    
    render() {
        return(
            <>
                <InputElement />   
    <div className="container">
        <div className="row-10">
                {this.state.todos.map(todo => (  
        <div className="col todos">
            <strong>{todo.id}</strong>
            <li className={todo.completed ? 'complated' : 'uncomplated'} >{todo.title}</li>
            <button type="button" className="delate" onClick={() => this.onDelate(todo.id)}>Delate</button>
            <Compbutton 
                key={todo.id}
                id={todo.id}
                complated={todo.completed}
                onComplate={this.onComplate}
            />
        </div>      
    ))}
    </div>   
         </div>
            </>
        )
    }
}