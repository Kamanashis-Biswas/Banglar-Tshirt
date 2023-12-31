import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./GrandPa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const ring = "Diamond";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 *  1, create a context and export it
 *  2, create a provider and pass a value
 *  3, use useContext to receive
 */
