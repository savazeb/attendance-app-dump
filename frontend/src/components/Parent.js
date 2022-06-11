import React, { useState } from "react";

import Childe from "./Childe";

function Parent() {
  const [word, setWord] = useState("ID");
  return (
    <div>
      <text>{word}</text>
      <Childe word={word} changeWord={(word) => setWord(word)} />
    </div>
  );
}

export default Parent;
