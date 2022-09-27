import PropTypes from "prop-types";
// const handleAdd = (event) => console.log("Mas uno", event); // Fuera porque no tiene nada que ver con el componente y para que no se le llame cada que renderiza el componente
export const CounterApp = ({ value }) => {
  const handleAdd = (event, value) => console.log("Mas uno", event, value);
  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      {/* Evento */}
      {/* <button onClick={handleAdd}>+1</button> */}
      {/* Evento + de un argumento */}
      <button onClick={(event) => handleAdd(event, value)}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
