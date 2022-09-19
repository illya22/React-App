import React from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
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
            <TransitionGroup>
            {post.map((posts, index) =>
            <CSSTransition
            key={posts.id}
            timeout={500}
            classNames="post"
          >
          <PostItem remove={remove} number={index + 1} posts={posts}/>
          </CSSTransition>
          )}  
            </TransitionGroup>
        </div>
    );
};

export default PostList;