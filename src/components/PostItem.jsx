import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.number} {props.posts.title}</strong>
          <div>
            {props.posts.body}
          </div>
        </div>
        <div className="post_btn">
          <MyButton onClick={() => props.remove(props.posts)}>Delete post</MyButton>
        </div>
      </div>
    );
};

export default PostItem;