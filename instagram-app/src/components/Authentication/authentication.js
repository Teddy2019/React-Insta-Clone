import React from 'react';

const withAuthenticate = Firstnewcomponent =>Secondnewcomponent =>
  class extends React.Component {
    render() {
        if(localStorage.getItem('username') === localStorage.getItem('password') )
        {return <Secondnewcomponent />;}
        else {return <Firstnewcomponent />;}
        }
  };
  export default withAuthenticate;