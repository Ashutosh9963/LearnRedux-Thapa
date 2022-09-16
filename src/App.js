import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>

        <div className="quantity">
          <button
            className="quantity_minus"
            title="decrement"
            onClick={() => dispatch(decNumber(2))}
          >
            <span>-</span>
          </button>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
          />
          <button
            className="quantity_plus"
            title="increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
