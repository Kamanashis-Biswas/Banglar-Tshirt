import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = ({ ring }) => {
  const anti = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>Ring: {anti}</p>
    </div>
  );
};

export default Special;
