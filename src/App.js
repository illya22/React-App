 import React, { useState} from "react";
import PostForm from "./components/PostForm";
 
import PostList from "./components/PostList";
 
 import  './css styles/App.css';
function App() {
    const[post,setPost] = useState([
      {id:1, title: 'first post', body:'description'},
      {id:2, title: 'second post', body:'description'},
      {id:3, title: 'third post', body:'description'},
    ])
      
    const createPost = (newPost) =>{
        setPost([...post,newPost])
    }

   const removePost = (posts) => {
    setPost(post.filter(p => p.id !== posts.id))
   }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {post.length !==0
      ? 
      <PostList remove={removePost} post={post} title="List of Posts"/>
      :
       <h1>There is no Posts!!!</h1>
      }
     
    </div>
  );
}

export default App;
