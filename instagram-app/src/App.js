import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SrearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyData: [],
    };
  }

   addNewLike = (id, newLike)=> {
     const newLikes ={
       id: id,
       like: newLike
     }

     const newdummyData = this.state.dummyData.map((postObj) =>{
      if(newLikes.id === postObj.id){ 
        const newpostObj = {...postObj,
          likes: newLikes.like }
         return  newpostObj
        }
        else {
          return postObj;
        }
    })

    this.setState({ dummyData: newdummyData });
   }

   addNewComment = (id, newComment) =>{ 

    const newcomment ={
         id: id,
         comments: newComment
    }
    const newdummyData = this.state.dummyData.map((postObj) =>{
      if(newcomment.id === postObj.id){ 
        const newpostObj = {...postObj,
          comments: newcomment.comments }
         return  newpostObj
        }
        else {
          return postObj;
        }
    })

    this.setState({ dummyData: newdummyData });
    
  }

  componentDidMount() {
    this.setState({dummyData:dummyData})
  }

  render() {
  return (
    <div className="App">
      <SearchBar />
      {this.state.dummyData.map((post) =>{
        return <PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />})}
    </div>
  );
  }
}

export default App;
