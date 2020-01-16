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
        <Text style={{ fontSize: 35, fontWeight: "bold", color: value.text }}>
          Github Profiles
        </Text>
        <input
          style={{
            height: 30,
            width: 30,
            borderWidth: 0,
            backgroundColor: value.text
          }}
          onClick={value.changeTheme}
          type={"button"}
        />
      </div>
    )}
  </ThemeConsumer>
);
