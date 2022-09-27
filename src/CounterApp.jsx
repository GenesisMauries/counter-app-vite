import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // useState necesita el valor y la funcion que modificara el estado
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 2);
    // setCounter((c) => c + 10); // Cambiar el estado con callback
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
