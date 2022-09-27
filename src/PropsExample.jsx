export const PropsExample = ({ title, subTitle, number }) => {
  // desestructura objeto props
  // props sirve para enviar del padre al hijo
  // console.log(props);
  return (
    <>
      <h2>Props Example</h2>
      <h4>{title}</h4>
      <h4>{subTitle}</h4>
      <h4>Soy un número {number}</h4>
      <hr />
    </>
  );
};
