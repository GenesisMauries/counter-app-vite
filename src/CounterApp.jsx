import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // Demuestra las llamadas del componente cada vez que cambia
  console.log("Render");

  const [counter, setCounter] = useState(value);

  // Funciones
  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter + -1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
