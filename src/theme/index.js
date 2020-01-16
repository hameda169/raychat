import { createContext } from "react";
const Context = createContext();
export const ThemeProvider = Context.Provider;
export const ThemeConsumer = Context.Consumer;
export default Context;
