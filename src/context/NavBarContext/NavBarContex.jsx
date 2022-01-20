import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  return (
    <NavBarContext.Provider value={{ navBarExpanded, setNavBarExpanded }}>
      {children}
    </NavBarContext.Provider>
  );
};
