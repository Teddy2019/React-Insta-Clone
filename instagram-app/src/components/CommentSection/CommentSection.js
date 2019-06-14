import React from 'react';

function CommentSection(props) {
    return (
        <div>
          <p className='comments'><strong>{props.commentData.username } </strong>{props.commentData.text}</p>
        </div>
    )
};

export default CommentSection;