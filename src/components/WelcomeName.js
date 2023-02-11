import React, { useState } from 'react';
import "../styles/global.css"

const handleSubmit = (event, name) => {
  event.preventDefault();
}

function WelcomeName(props) {
  const [name, setName] = useState(props.name);

    return (
      <div>
        {name ? <h1> Welcome, {name}! </h1> : <h1>Please Enter Your Name </h1>}
        <label>

          <input type="text" value={name} onChange={e => {
            setName(e.target.value)
          } }/>
        </label>
      </div>
    );
  };
  

export default WelcomeName