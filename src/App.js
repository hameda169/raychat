import React from "react";
import { Repos } from "./components/repos";
import { Profile } from "./components/profile";
import { FormInput } from "./components/formInput";
import { Header } from "./components/header";
import { Title } from "./components/title";

export default () => (
  <div style={styles.body}>
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
);

const styles = {
  body: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    height: "90vh",
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
