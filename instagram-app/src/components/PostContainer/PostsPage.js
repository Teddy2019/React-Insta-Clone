import React from 'react';
import SearchBar from '../SrearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
  constructor(props){
    super(props);
   
    }
    render(){
     return(
      <div className= 'PostsPage'>
       <SearchBar  serachChangeHundeler={this.props.serachChangeHundeler} />
       { 
        this.props.theBigData.filter((post)=>{return post.username.indexOf(this.props.search) !== -1; }).map(post =><PostContainer postData={post} key={post.id} addNewComment={this.props.addNewComment} addNewLike= {this.props.addNewLike} />)
       }
      </div>
        )
    }

  }

  export default PostsPage;