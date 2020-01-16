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
  const [state, setState] = useState(
    localStorage.getItem("theme") === "light" ? light : dark
  );
  const changeTheme = () => {
    localStorage.setItem("theme", state.name === "light" ? "dark" : "light");
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
