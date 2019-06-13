import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SrearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
    </div>
  );
}

export default App;
