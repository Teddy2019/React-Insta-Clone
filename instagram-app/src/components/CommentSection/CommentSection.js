import React from 'react';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentData: props.commentData,
      id: '',
      username: "teddy",
      text: ''
    }
  }
  render(){
    return (
        <div>
          <p className='comments'><strong>{this.state.commentData.username } </strong>{this.state.commentData.text}</p>
        </div>
    )
  }
};

export default CommentSection;