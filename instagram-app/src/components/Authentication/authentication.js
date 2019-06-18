import React from 'react';

const withAuthenticate = Neednewcomponent =>
  class extends React.Component {
    render() {
      return <Neednewcomponent />;
    }
  };
  export default withAuthenticate;