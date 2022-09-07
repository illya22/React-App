 import React, { useState } from "react";
 
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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
        <MyInput type="text" placeholder="Name"/>
        <MyInput type="text" placeholder="Description"/>
        <MyButton>Add post</MyButton>
      </form>
     <PostList post={post} title="List of Posts"/>
    </div>
  );
}

export default App;
