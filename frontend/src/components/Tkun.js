import React, { useState, useEffect } from 'react';
const axios = require('axios');
function Tkun() {
  const [data, setData] = useState({
    name: 'name',
    time: 'time',
    io: 0,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      name: event.target.value,
    });
  };

  function handleClick(io) {
    const event = new Date().toJSON();
    console.log(new Date(JSON.parse(JSON.stringify(event))));
    setData({
      ...data,
      time: event,
      io: io,
    });
  }

  function updateAttendances() {
    axios
      .post('http://192.168.0.104:8080/api/attendances/', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    updateAttendances();
  }, [data.time, data.io]);

  return (
    <div>
      <div>
        <input type="text" value={data.name} onChange={handleChange} />
      </div>
      <div>
        <button onClick={() => handleClick(0)}>check in</button>
        <button onClick={() => handleClick(1)}>check out</button>
      </div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Tkun;
