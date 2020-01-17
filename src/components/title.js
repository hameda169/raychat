import React from "react";
import { Text } from "./common";
import { ThemeConsumer } from "../theme";

export const Title = () => (
  <ThemeConsumer>
    {value => (
      <Text style={{ fontSize: 20, color: value.text }}>
        Enter a github username,
        <br />
        to see the magic:
      </Text>
    )}
  </ThemeConsumer>
);
