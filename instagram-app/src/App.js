import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/authentication';
import Login from './components/Login/Login'

class App extends React.Component {
  constructor(){
    super();
   this.state = {
     username : '',
     password : ''
   }
  }

  usernameChangHandeler = (e) =>{ 
    this.setState({username: e.target.value}); 
  }

  passwordChangHandeler = (e) =>{ 
    this.setState({password: e.target.value}); 
  }
  
  render() {

 const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

  return (
    <div className="App">
      <ComponentFromWithAuthenticate  />
    </div>
  );
  }
}

export default App;
