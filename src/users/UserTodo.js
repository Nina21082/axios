import axios from "axios";
import { Compbutton } from "./Compbutton";
import { InputElement } from "./InputElement";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function UserTodo(){
    const { id } = useParams()
    const [todos, setTodos] = useState([])

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/user/${id}/todos`)
         .then(res => {
           const todos = res.data
           setTodos(todos)

        })
    }, [id])

   const onDelate = (id) =>{
        setTodos(todos.filter(el => id !== el.id))
   }

     const  onComplate = (id) => {
          setTodos(todos.map(el => {
              if(el.id === id){
                  return{
                      ...el,  completed : !el.completed
                  }
              }
              return el
          })
      )
    }

    return(
         <>       
    <InputElement />   
        <div className="container">
            <div className="row-10">
                    {todos.map(todo => (  
               <div className="col todos">
                  <strong>{todo.id}</strong>
                  <li className={todo.completed ? 'complated' : 'uncomplated'}>{todo.title}</li>
                  <button type="button" className="btn btn-danger m-2" onClick={() => onDelate(todo.id)}>Delate</button>
           <Compbutton 
                  key={todo.id}
                  id={todo.id}
                  complated={todo.completed}
                  onComplate={onComplate}
                />
            </div>      
        ))}
        </div>   
            </div>
         </>       
    )        
}

