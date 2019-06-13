import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SrearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map((post) =>{return <PostContainer postData={post} key={post.id} />})}
    </div>
  );
}

export default App;
