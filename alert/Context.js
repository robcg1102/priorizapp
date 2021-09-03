import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function MyProvider({ children }) {
  const [state, setState] = useState({
    themeDark: false,
    tema: 'yellow'
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
