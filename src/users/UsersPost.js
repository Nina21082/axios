import React from "react";
import axios from "axios";

export class UsersPost extends React.Component{
    state = {
         posts: []
    }
     componentDidMount() {
         axios.get(`https://jsonplaceholder.typicode.com/comments`)
         .then(res => {
             const posts = res.data
             this.setState({posts})
         })
     }

    render() {
        return(
            <div className="container"  >
                <div className="row">
                    {this.state.posts.map(post => (
                        <div className="col-3" key={post.id}>
                            <div className="card">
                            
                                <div className="card-body">
                                    <h3 className="card-title">{post.name}</h3>
                                    <p className="card-text">{post.email}</p>
                                </div>
                                    <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{post.body}</li>
                                    </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}