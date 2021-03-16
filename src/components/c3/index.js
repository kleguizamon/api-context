import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function C3() {
  //me importo el contexto(ThemeContext), se lo paso al hook useContext y se lo seteo en una variable
  const themeData = useContext(ThemeContext);
  return (
    <>
      <p>Soy el componente 3</p>
      <p>En C3 el valor del theme es: {themeData.theme}</p>
      <button onClick={themeData.handleCallback}>Volver a light mode</button>
    </>
  );
}

export default C3;
