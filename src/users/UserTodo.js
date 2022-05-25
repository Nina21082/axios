import axios from "axios";
import React from "react";
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

    
    render() {
        return(
            <>
                <InputElement />   
                {this.state.todos.map(todo => (
                <>  
                    <div className="todos">
                        <p>{todo.title}</p>
                        <button type="button" class="btn btn-danger">Delate</button>
                        <button type="button" class="btn btn-primary">Complated</button>
                    </div>
                </> 
                ))}
            </>
        )
    }
}