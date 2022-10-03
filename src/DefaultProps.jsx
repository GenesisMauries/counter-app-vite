import PropTypes from 'prop-types';
export const DefaultProps = ({ title, subTitle }) => {
  return (
    <>
      <h4>Default Props Example</h4>
      <p data-testid='test-title'>{title}</p>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <hr />
    </>
  );
};

// Define el tipo de datos
DefaultProps.propTypes = {
  // title: PropTypes.number,
  title: PropTypes.string.isRequired, // Vuelve obligatorio este prop
  subTitle: PropTypes.string,
};

DefaultProps.defaultProps = {
  subTitle: 'No envias subtitulo y este string es un prop por defecto',
};
