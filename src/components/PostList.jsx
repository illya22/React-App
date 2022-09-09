import React from 'react';
import PostItem from './PostItem';

const PostList = ({post,title,remove}) => {

    if(!post.length){
        return(
            <h1>There is no Posts!!!</h1>
        )
    }
    return (
        <div>
            <h1>{title}</h1>
         {post.map((posts, index) =>
          <PostItem remove={remove} number={index + 1} posts={posts} key={posts.id}/>
          )}  
        </div>
    );
};

export default PostList;