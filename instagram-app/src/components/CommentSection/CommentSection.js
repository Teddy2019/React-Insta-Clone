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
          <li className='comments'><strong>{this.state.commentData.username } </strong>{this.state.commentData.text}</li>
        </div>
    )
  }
};

export default CommentSection;