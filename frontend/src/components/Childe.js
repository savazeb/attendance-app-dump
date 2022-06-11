import React from "react";

function Childe({ word, changeWord }) {
  const handleChange = (event) => {
    changeWord(event.target.value);
  };
  return (
    <div>
      <input type="text" value={word} onChange={handleChange} />
    </div>
  );
}

export default Childe;
