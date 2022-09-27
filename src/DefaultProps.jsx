import PropTypes from "prop-types";
export const DefaultProps = ({ title, subTitle }) => {
  return (
    <>
      <h2>Default Props Example</h2>
      <p>{title}</p>
      <p>{subTitle}</p>
      <hr />
    </>
  );
};

// Define el tipo de datos
DefaultProps.propTypes = {
  // title: PropTypes.number,
  title: PropTypes.number.isRequired, // Vuelve obligatorio este prop
  subTitle: PropTypes.string,
};

DefaultProps.defaultProps = {
  subTitle: "No envias subtitulo y este string es un prop por defecto",
};
