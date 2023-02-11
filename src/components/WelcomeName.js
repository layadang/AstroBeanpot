import React, { useState } from 'react';

const handleSubmit = (event, name) => {
  alert('Your favorite flavor is: ' + name);
  event.preventDefault();
}

function WelcomeName(props) {
  const [name, setName] = useState(props.name);

    return (
      <div>
        {name ? <h1>Welcome, {name}!</h1> : <h1>Please enter your name</h1>}
        <form onSubmit={e => handleSubmit(e, name)}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => {
            setName(e.target.value)
          } }/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  };
  

export default WelcomeName