 import React, { useMemo, useState} from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
 
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
 
 
 import  './css styles/App.css';
function App() {
    const[post,setPost] = useState([
      {id:1, title: 'aa', body:'bb'},
      {id:2, title: 'gg', body:'aa'},
      {id:3, title: 'bb', body:'ww'},
    ])
      
    const [filter,setFilter] = useState({sort:'', query:''})
    const [modal,setModal] = useState(false);
    

    const sortedPost = useMemo(() =>{
      console.log('worked')
      if(filter.sort){
        return [...post].sort((a , b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return post;
    },[filter.sort,post])

    const sortedandSearchedPost = useMemo(()=>{
       return sortedPost.filter(post=>post.title.toLowerCase().includes(filter.query))
    }, [filter.query,sortedPost])

    const createPost = (newPost) =>{
        setPost([...post,newPost])
        setModal(false)
    }

   const removePost = (posts) => {
    setPost(post.filter(p => p.id !== posts.id))
   }

 

  return (
    <div className="App">
      <MyButton style={{marginTop:15}} onClick={()=> setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
       
      <hr style={{margin:'15px 0'}}/>
       <PostFilter 
       filter={filter}
        setFilter={setFilter}/>
      
      <PostList remove={removePost} post={sortedandSearchedPost} title="List of Posts"/>
 
    </div>
  );
}

export default App;
