import PropTypes from "prop-types";
export const PropTypesExample = ({ title, address }) => {
  return (
    <>
      <h2>PropsTypes Example</h2>
      <h4>{title}</h4>
      <h4>{address}</h4>
      <hr />
    </>
  );
};

// Define el tipo de datos
PropTypesExample.propTypes = {
  // title: PropTypes.number,
  title: PropTypes.number.isRequired, // Vuelve obligatorio este prop
  address: PropTypes.string,
};
