
import React, { createContext, useState } from 'react';

// 1. Create the context
export const ColorContext = createContext();

function ThemeContext({ children }) {
  // 2. Store the current theme
  const [color, setColor] = useState('light');

  // 3. Toggle between light and dark
  const colorToggler = () => {
    setColor((prevColor) =>
      prevColor === 'light' ? 'dark' : 'light'
    );
  };

  // 4. Provide the context to child components
  return (
    <ColorContext.Provider value={{ color, colorToggler }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ThemeContext;
