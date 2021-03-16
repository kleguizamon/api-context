import React from 'react';

//el parametro es el valor inicial del contexto
const ThemeContext = React.createContext('light');

//exportamos propiedad del contexto que creamos
export const ThemeProvider = ThemeContext.Provider;

//exportamos el contexto
export default ThemeContext;
