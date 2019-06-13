import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';

function PostContainer(props) {
    return (
        <div>
            <img src={props.postData.thumbnailUrl} alt={props.postData.username} />
            <p> {props.postData.username} </p>
            <img src={props.postData.imageUrl} alt={props.postData.username} />
            <img src={Heart} alt='heart' />
            <img src={Comment} alt='comment' />
            <p>{props.postData.likes}<strong>likes</strong></p>
            <CommentSection />
        </div>
    )
};

export default PostContainer;