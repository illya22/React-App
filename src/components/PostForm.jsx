import React, { useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
    const [posts,setPosts] = useState({title:'', body:''})

    const addNewPost = (e) =>{
        e.preventDefault();
       const newPost={
        ...posts, id: Date.now()
       }
       create(newPost)
      setPosts({title:'', body:''})
      }

    return (
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
    );
};

export default PostForm;