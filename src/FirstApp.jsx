// si no esta alterando el estado va fuera del componente jsx
// para no requerirlo cada que se monta
const name = "Génesis";

// Fuera del componente para no usar espacio en memoria
const multiplicacion = (a, b) => {
  return a * b;
};

export const FirstApp = () => {
  return (
    <>
      <h4>Retornar un grupo de elementos HTML</h4>
      <p>Con un fragment</p>
      <p>para no romper el estilo con un elemento div/section</p>
      {/*  No es recomendable mostrar de esta forma el resultado de la fn */}
      <p> Multiplicacion {multiplicacion(39, 11)}</p>
      <i>by {name}</i>
      <hr />
    </>
  );
};
