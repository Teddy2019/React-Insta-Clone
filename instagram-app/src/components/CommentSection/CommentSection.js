import React from 'react';

function CommentSection(props) {
    return (
        <div>
          <p><strong>{props.commentData.username } </strong>{props.commentData.text}</p>
        </div>
    )
};

export default CommentSection;