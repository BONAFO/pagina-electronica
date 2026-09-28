
"use client";

import { createContext, useContext } from "react";

const NavigationContext = createContext();

const navigation = {
  pages: [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Productos",
      path: "/products/",
    },
    {
      name: "Servicios",
      path: "/services/",
    },
    {
      name: "Nosotros",
      path: "/about/",
    },
    {
      name: "Contacto",
      path: "/contact/",
    },
  ],
};

export function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
