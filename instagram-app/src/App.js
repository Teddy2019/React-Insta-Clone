import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyData: [],
      //all the uncommented one was used for the first trial of search bar works good but has some glitch.
      //searchData: [],
      search: '',
    };
  }
  
  serachChangeHundeler = (e) =>{ 
    this.setState({search: e.target.value}); 
    //this.search();
  }

  // search = () => {
    
  //    if(this.state.search.length > 0) {
  //      const newdummyData = this.state.dummyData.filter((post)=>{
  //       return post.username.indexOf(this.state.search) !== -1; 
  //    }) 
  //    this.setState({ searchData: newdummyData });}
    
  //    else {
  //      this.setState({ searchData: dummyData });
  //    }

  //   const newdummyData = this.state.dummyData.filter((post)=>{
  //     return post.username.indexOf(this.state.search) !== -1; 
  //  }) 
  //  this.setState({ searchData: newdummyData })
  // }

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
    });

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
//  let postcontainer;
//  if(this.state.searchData.length > 0) {
//   postcontainer = this.state.searchData.map(post => <PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)
//   }
// else {
//   postcontainer = this.state.dummyData.map(post =><PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)
//   }
//the js under this line was inside the js below < SearchBar .../ >
// {this.state.searchData.length > 0 ? 
//   (this.state.searchData.map(post => <PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)) :
//   (this.state.dummyData.map(post =><PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)) 
//   }

  return (
    <div className="App">
      <PostsPage theBigData ={this.state.dummyData} search={this.state.search} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} serachChangeHundeler={this.serachChangeHundeler} />
    </div>
  );
  }
}

export default App;
