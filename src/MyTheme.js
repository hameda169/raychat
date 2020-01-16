import React, { useState } from "react";
import { ThemeProvider } from "./theme";
export const Theme = props => {
  const light = {
    name: "light",
    background: "#fff",
    text: "#000",
    highlight: "#fafafa",
    secondary: "#aaa"
  };
  const dark = {
    name: "dark",
    background: "#000",
    text: "#fff",
    highlight: "#1f1f1f",
    secondary: "#666"
  };
  const [state, setState] = useState(light);
  const changeTheme = () => {
    setState(state.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider
      value={{
        ...state,
        changeTheme: changeTheme
      }}
    >
      {props.children}
    </ThemeProvider>
  );
};
