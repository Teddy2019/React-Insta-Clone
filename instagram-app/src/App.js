import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SrearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
  return (
    <div className="App">
      <SearchBar />
      {this.state.dummyData.map((post) =>{return <PostContainer postData={post} key={post.id} />})}
    </div>
  );
  }
}

export default App;
