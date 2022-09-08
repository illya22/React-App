 import React, { useState,useRef } from "react";
 
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
    
    const [posts,setPosts] = useState({title:'', bode:''})
    

    const addNewPost = (e) =>{
      e.preventDefault();
     setPost([...post,{...posts,id: Date.now()}])
    setPosts({title:'', bode:''})
    }

  return (
    <div className="App">
      <form>
        <MyInput
        value={posts.title}
        onChange={e=> setPosts({...posts,title:e.target.value})}
        type="text" placeholder="Name"/>
        <MyInput
          value={posts.body}
          onChange={e=> setPosts({...posts,body:e.target.value})}
        type="text" placeholder="Description"/>
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
     <PostList post={post} title="List of Posts"/>
    </div>
  );
}

export default App;
