"use client";

import { useState } from "react";

const NotFound = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <h1>Page nahi mila!</h1>
      {!flag ? (
        <button onClick={() => setFlag(true)}>kiu?</button>
      ) : (
        <>
          <h2>ghalat route hae is liye nai mila</h2>
          <button onClick={() => setFlag(false)}>a6a</button>
        </>
      )}
    </>
  );
};

export default NotFound;
