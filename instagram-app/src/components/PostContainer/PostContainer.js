import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';

function PostContainer() {
    return (
        <div>
            <img />
            <p> </p>
            <img />
            <img src={Heart} alt='heart' />
            <img src={Comment} alt='comment' />
        </div>
    )
};

export default PostContainer;