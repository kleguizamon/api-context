import './App.css';
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import C1 from './components/c1';

function App() {
  const [theme, setTheme] = useState('light');
  function handleClick() {
    setTheme('dark');
  }

  //  const handleCallback () => setTheme('light');

  function handleCallback() {
    setTheme('light');
  }

  const themeValue = {
    theme: theme,
    handleCallback: handleCallback, //funcion sin parentesis para que la funcion no se ejecute
    //y la ejecutamos en el hijo(C3)
  };
  return (
    <ThemeProvider value={themeValue}>
      <button onClick={handleClick}>Cambiar tema</button>
      <p>En app el valor de theme es: {theme}</p>
      <C1 />
    </ThemeProvider>
  );
}

export default App;
