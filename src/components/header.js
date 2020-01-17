import React from "react";
import { Text } from "./common";
import { ThemeConsumer } from "../theme";

export const Header = () => (
  <ThemeConsumer>
    {value => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 30, color: value.text }}>Github Profiles</Text>
        <input
          className={"icon"}
          style={{
            fontSize: 30,
            borderWidth: 0,
            backgroundColor: value.background,
            color: value.text
          }}
          onClick={value.changeTheme}
          type={"button"}
          value={value.name === "light" ? "\ue801" : "\ue803"}
        />
      </div>
    )}
  </ThemeConsumer>
);
