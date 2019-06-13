import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div>
            <div className='ProfilData'>
              <img className='ProfiPicture' src={props.postData.thumbnailUrl} alt={props.postData.username} />
              <p className='ProfileName'> {props.postData.username} </p>  
            </div>
            <img src={props.postData.imageUrl} alt={props.postData.username} />
            <div>
             <img src={Heart} alt='heart' />
             <img src={Comment} alt='comment' />   
            </div>
            <p>{props.postData.likes}<strong>likes</strong></p>
            {props.postData.comments.map((comment)=>{return <CommentSection commentData={comment} key={comment.id} />})}
            <p>{props.postData.timestamp}</p>
            <input type='text' placeholder='add a comment..' name='comment' />
        </div>
    )
};

export default PostContainer;