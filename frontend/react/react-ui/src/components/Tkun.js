import React, { useState } from "react";
const axios = require("axios");
function Tkun() {
  const [text, setText] = useState("name");
  const [dateTime, setDateTime] = useState("");
  const [IO, setIO] = useState(0);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = async () => {
    setDateTime(new Date().toLocaleString());
    await axios
      .post("http://localhost:80/api/attendances/", {
        name: { text },
        time: { dateTime },
        io: { IO },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
      </div>

      <div>
        <button onClick={() => setIO(0)}>check in</button>
        <button onClick={() => setIO(1)}>check out</button>
      </div>
      <div>
        <span>io: {IO}</span>
      </div>
      <div>
        <span>dateTime: {dateTime}</span>
      </div>
      <div>
        <button onClick={handleClick}>POST</button>
      </div>
    </div>
  );
}

export default Tkun;
