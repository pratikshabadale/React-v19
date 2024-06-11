import React, { useRef } from "react";
import MyInput from "./MyInput";

function ForwordrefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder='Type something...' />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default ForwordrefExample;
