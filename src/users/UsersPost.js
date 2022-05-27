import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from 'react-router-dom';



export default function UsersPost(){
  const { id } = useParams()
    

    const[posts, setPosts] = useState([]);
    const[comments, setComments] = useState([]);
    const[activePostId, setActivePostId] = useState(null)

    
    useEffect(() =>{
           
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => {
            const posts = res.data
            setPosts(posts)
        })
        
    }, [id]);


    const showComment = (id) =>{
        if(id === activePostId){
            setActivePostId(null)
            return 
        }  
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         .then(res => {
         const comments = res.data
         setComments(comments)        
         })
         setActivePostId(id);  
    }

    return(
        <div className="container">
            <div className="row">
                {posts.map((post, index) => (
                <div className="col-9" key={index}>
                    <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> {post.body}
                        </div>
                       <button onClick={() => showComment(post.id)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           User comments {post.id}
                       </button>              
                        <div className={activePostId === post.id ? 'openComment' : 'closeComment' }>{comments.map(comment => (
                            <div>


<div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="people-nearby">
                                            
                                            <div class="nearby-user">
                                                <div class="row">
                                                <div class="col-md-2 col-sm-2">
                                                    <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="user" class="profile-photo-lg" />
                                                </div>
                                                <div class="col-md-8 col-sm-8">
                                                    <h5>{comment.name}</h5>
                                                    <p>{comment.email}</p>
                                                    <p class="text-muted">{comment.body}</p>
                                                </div>
                                                </div>        
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> 
              </div>              
                ))}
            </div>
        </div>
    )
}
