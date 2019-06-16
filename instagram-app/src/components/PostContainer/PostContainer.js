import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      postData: props.postData,
      commentData: props.postData.comments,
      id: '',
      username: "teddy",
      text: ''
    }
  }
  changHandeler = (e) =>{ 
    this.setState({text: e.target.value}) 
  }

  submitHandeler = (e) => {
    e.preventDefault();
    const newObject = {
      id: Date.now(),
      username: this.state.username,
      text: this.state.text
    }    
    this.setState({commentData: [...this.state.commentData, newObject]}) 
    this.props.addNewComment(this.props.id, this.state.commentData);
    this.setState({text: ''}) 
  }
  render(){

    return (
        <div className='postData'>
            <div className='ProfilData'>
              <img className='ProfiPicture' src={this.state.postData.thumbnailUrl} alt={this.state.postData.username} />
              <p className='ProfileName'> {this.state.postData.username} </p>  
            </div>
            <img className='postImag' src={this.state.postData.imageUrl} alt={this.state.postData.username} />
            <div className='likeImg' >
             <img src={Heart} alt='heart' />
             <img src={Comment} alt='comment' />   
            </div>
            <p className='likes'>{this.state.postData.likes}<strong>likes</strong></p>
            {this.state.commentData.map((comment)=>{return <CommentSection commentData={comment} key={comment.id} />})}
            <p className='time'>{this.state.postData.timestamp}</p>
            <form onSubmit={this.submitHandeler}>
             <input className='commentBox' type='text' placeholder='add a comment..' name='comment' onChange={this.changHandeler} />
             <button type='submit'>&#9863;</button>
            </form>
        </div>
    )
  }
};

PostContainer.propTypes = {
    postData: PropTypes.shape({
                id: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                thumbnailUrl: PropTypes.string.isRequired,
                imageUrl: PropTypes.string.isRequired,
                likes: PropTypes.number,
                timestamp: PropTypes.string,
                comments: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    username:PropTypes.string,
                    text: PropTypes.string,
                }))
        })
}


// might not work since the App component is the one recive the data and map it and pass to the PostContainer componets. so if the main data is empty then the app crash since map is not applied on empty array. 
PostContainer.defaultProps = {
    postData: [
        {
          id: "a",
          username: "philzcoffee",
          thumbnailUrl:
            "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
      
          imageUrl:
            "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
          likes: 400,
          timestamp: "July 17th 2017, 12:42:40 pm",
          comments: [
            {
              id: 1,
              username: "philzcoffee",
              text:
                "We've got more than just delicious coffees to offer at our shops!"
            },
            
          ]
        },
    ]
}

export default PostContainer;