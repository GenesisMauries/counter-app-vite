import PropTypes from "prop-types";
export const PropTypesExample = ({ title, address }) => {
  return (
    <>
      <h4>PropsTypes Example</h4>
      <p>{title}</p>
      <p>{address}</p>
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
