import React from "react";
import { Repos } from "./components/repos";
import { Profile } from "./components/profile";
import { FormInput } from "./components/formInput";
import { Header } from "./components/header";
import { Title } from "./components/title";
import ThemeContext from "./theme";

export default () => (
  <ThemeContext.Consumer>
    {value => (
      <div style={{ ...styles.body, backgroundColor: value.background }}>
        <div style={styles.container}>
          <Header />
          <Title />
          <FormInput />
          <div style={styles.result}>
            <Profile />
            <Repos />
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    margin: -8,
    marginBottom: -20,
    height: "99vh"
  },
  container: {
    height: "100%",
    width: "62vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  result: {
    height: "50vh",
    display: "flex",
    justifyContent: "space-between"
  }
};
