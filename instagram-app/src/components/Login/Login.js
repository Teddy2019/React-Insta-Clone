import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
   
  }
  
  render() {
   return (
    <div className="Login">
      UserName : <input  /> <br />
      password : <input /> <br />
      <button>Login</button>
    </div>
  );
  }
}

export default Login;
