import React from 'react';

const WelcomeName = ({ name }) => {

    return (
      <div>
        {name ? <h1>Welcome, {name}!</h1> : <h1>Please enter your name</h1>}  
      </div>
    );
  };
  

export default WelcomeName