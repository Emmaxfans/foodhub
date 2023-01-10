import React from 'react'
import { useState, useEffect } from 'react'

const Getpage = () => {

    const [post, setPosts] = useState(['id', 'body', 'title']);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);


  return (
    <>
      <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>

               <div className="button">
               <button className="delete-btn">Delete</button>
               </div>
            </div>
    </>
  )
}

export default Getpage