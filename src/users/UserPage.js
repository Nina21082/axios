import React from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import { useState, useEffect } from "react";


export function UserPage(){
  const [user, setUser] = useState([])

  useEffect (() =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        const users = res.data;
        setUser(users)
    })  
  }, [])

  return(
    <>   
                
    <div className="container">
        <div className="row">
    {user.map(user => (
          <div className="col-4" key={user.id}>
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
                    <Link className='btn btn-success' to={`/user-todo/${user.id}`}>ShowTodos</Link>
                    <Link className="btn btn-danger" to={`/user-posts/${user.id}`}>Show Post</Link>
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

