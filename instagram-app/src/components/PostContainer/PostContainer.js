import React from 'react';
import Heart from './asset/instag_heart.png';
import Comment from './asset/instag_comment.png';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <div className='postData'>
            <div className='ProfilData'>
              <img className='ProfiPicture' src={props.postData.thumbnailUrl} alt={props.postData.username} />
              <p className='ProfileName'> {props.postData.username} </p>  
            </div>
            <img className='postImag' src={props.postData.imageUrl} alt={props.postData.username} />
            <div className='likeImg' >
             <img src={Heart} alt='heart' />
             <img src={Comment} alt='comment' />   
            </div>
            <p className='likes'>{props.postData.likes}<strong>likes</strong></p>
            {props.postData.comments.map((comment)=>{return <CommentSection commentData={comment} key={comment.id} />})}
            <p className='time'>{props.postData.timestamp}</p>
            <form>
             <input className='commentBox' type='text' placeholder='add a comment..' name='comment' />
             <button type='submit'>&#9863;</button>
            </form>
        </div>
    )
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