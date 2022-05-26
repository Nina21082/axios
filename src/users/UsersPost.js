import React from "react";
import axios from "axios";


export class UsersPost extends React.Component{
    state = {
         posts: [],
         comments: [],
         activePostId: null,
    }
    
     componentDidMount() {
         axios.get(`https://jsonplaceholder.typicode.com/posts`)
         .then(res => {
             const posts = res.data
             this.setState({posts})
         })
     }


    showComment = (id) =>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         .then(res => {
         const comments = res.data
         this.setState({comments})        
         })
       this.setState({activePostId: id});  
    }
    render() {
        return(
<div className="container">
    <div className="row">
        {this.state.posts.map(posts => (
        <div className="col-9">
            <div className="accordion" id="accordionExample">
             <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> {posts.body}
                </div>
               <button onClick={() => this.showComment(posts.id)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                   User comments {posts.id}
               </button>              
                <div className={this.state.activePostId === posts.id ? 'openComment' : 'closeComment'}>{this.state.comments.map(comment => (<div>{comment.name}</div> ))}</div>
            </div>
          </div>
        </div> 
      </div>              
        ))}
    </div>
</div>
        )
    }
}