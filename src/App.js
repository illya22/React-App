 import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
 import  './css styles/App.css';
function App() {
    const[post,setPost] = useState([
      {id:1, title: 'first post', body:'description'},
      {id:2, title: 'second post', body:'description'},
      {id:3, title: 'third post', body:'description'},
    ])
  
    

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Description"/>
        <button>Add post</button>
      </form>
     <PostList post={post} title="List of Posts"/>
    </div>
  );
}

export default App;
