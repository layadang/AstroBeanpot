import React, { useState } from 'react';
import "../styles/global.css"

const handleSubmit = (event, name) => {
  event.preventDefault();
}

function WelcomeName(props) {
  const [name, setName] = useState(props.name);

    return (
      <div className = "container">
        {name ? <h1> Hello,</h1> : <h1> Please enter your name: </h1>}
        <label>

          <input 
            className="nameBox" 
            type="text" 
            value={name}
            size={name.length} 
            onChange={e => {
              setName(e.target.value)
          } }
            /> 

        </label>
        <h1> ! </h1>
      </div>

    );
  };
  

export default WelcomeName