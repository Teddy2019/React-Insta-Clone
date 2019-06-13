import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div>
            <img src={props.postData.thumbnailUrl} alt={props.postData.username} />
            <p> {props.postData.username} </p>
            <img src={props.postData.imageUrl} alt={props.postData.username} />
            <img src={Heart} alt='heart' />
            <img src={Comment} alt='comment' />
            <p>{props.postData.likes}<strong>likes</strong></p>
            {props.postData.comments.map((comment)=>{return <CommentSection commentData={comment} />})}
            <p>{props.postData.timestamp}</p>
            <input type='text' placeholder='add a comment..' name='comment' />
        </div>
    )
};

export default PostContainer;