import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.number} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_btn">
          <MyButton>Delete post</MyButton>
        </div>
      </div>
    );
};

export default PostItem;