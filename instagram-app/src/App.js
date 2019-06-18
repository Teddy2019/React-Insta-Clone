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
      searchData: [],
      search: '',
    };

    console.log(this.state.search);
  }
  
  serachChangeHundeler = (e) =>{ 
    this.setState({search: e.target.value}); 
  }

  search = () => {
    
    if(this.state.search.length > 0) {
      const newdummyData = this.state.dummyData.filter((post)=>{
       return post.username === this.state.search; 
    }) 
    this.setState({ searchData: newdummyData });}
    
    else {
      this.setState({ searchData: dummyData });
    }
    //this.setState({ search: ''})
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
 let postcontainer;
 if(this.state.searchData.length > 0) {
  postcontainer = this.state.searchData.map(post => <PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)
  }
else {
  postcontainer = this.state.dummyData.map(post =><PostContainer postData={post} key={post.id} addNewComment={this.addNewComment} addNewLike= {this.addNewLike} />)
  }

  return (
    <div className="App">
      <SearchBar search={this.search} serachChangeHundeler={this.serachChangeHundeler} />
      {postcontainer }
    </div>
  );
  }
}

export default App;
