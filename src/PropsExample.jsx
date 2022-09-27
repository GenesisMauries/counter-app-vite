export const PropsExample = ({ title, subTitle, number }) => {
  // desestructura objeto props
  // props sirve para enviar del padre al hijo
  // console.log(props);
  return (
    <>
      <h4>Props Example</h4>
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>Soy un número {number}</p>
      <hr />
    </>
  );
};
