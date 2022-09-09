 import React, { useState} from "react";
import PostForm from "./components/PostForm";
 
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
 
 import  './css styles/App.css';
function App() {
    const[post,setPost] = useState([
      {id:1, title: 'aa', body:'bb'},
      {id:2, title: 'gg', body:'aa'},
      {id:3, title: 'bb', body:'ww'},
    ])
      
    const [selectedSort,setSelectedSort] = useState('')

    const createPost = (newPost) =>{
        setPost([...post,newPost])
    }

   const removePost = (posts) => {
    setPost(post.filter(p => p.id !== posts.id))
   }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPost([...post].sort((a , b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue="Sort by"
        options={[
          {value:'title',name:'Sort by name'},
          {value:'body',name:'Sort by description'},
        ]}
        />
      </div>
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
