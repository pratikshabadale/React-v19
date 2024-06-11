//You won't need to use the useMemo() hook after React19, as React Compiler will memoize by itself.
//In the below example, you can see that after React19, we don't need to memo the values –
// React19 will do it by itself under the hood

import React, { useState } from "react";

function UsememoExample() {
  const [inputValue, setInputValue] = useState("");

  const isInputEmpty = () => {
    console.log("Checking if input is empty...");
    return inputValue.trim() === "";
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type something...'
      />
      <p>{isInputEmpty ? "Input is empty" : "Input is not empty"}</p>
    </div>
  );
}

export default UsememoExample;
