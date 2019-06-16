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
      {this.state.dummyData.map((post) =>{return <PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} />})}
    </div>
  );
  }
}

export default App;
