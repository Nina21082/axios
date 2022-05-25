import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";


export class UserPage extends React.Component{
    state = {
        user: []
    }
     componentDidMount () {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
             const user = res.data;
             this.setState({user})
         })
     }

    
    render() {
        return(
                <>   
                
                <div class="container">
                    <div class="row">
                {this.state.user.map(user => (
                 
                      <div class="col-3" key={user.id}>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Name: {user.name}</h5>
                                <p className="card-text">Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Company: {user.company.name}</p>
                                <p className="card-text"><small className="text-muted">Website: {user.website}</small></p>

                                <Link className='todo' to="user-todo">ShowTodos</Link>
                                <Link className="post" to="user-posts">Show Post</Link>                     
                            </div>
                            </div>
                        </div>
                       
                    </div>
                  </div>

                        
                )
                   
                )}
                    </div>   
                </div>
    </>
    

                      
        ) 
    }
}