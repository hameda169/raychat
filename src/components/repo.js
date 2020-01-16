import React from "react";
import { ThemeConsumer } from "../theme";
import { Text } from "./common";
const Square = () => (
  <ThemeConsumer>
    {value => (
      <Text
        className={"icon"}
        style={{ color: value.secondary, fontSize: 20, paddingRight: 5 }}
        nb
      >
        {"\ue800"}
      </Text>
    )}
  </ThemeConsumer>
);
export const Repo = props => {
  return (
    <ThemeConsumer>
      {value => (
        <div
          style={{
            width: "43%",
            backgroundColor: value.highlight,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            paddingLeft: "5%"
          }}
        >
          <Text
            style={{
              margin: 0,
              padding: 0,
              borderWidth: 1,
              color: "#2792ce",
              fontSize: 20
            }}
          >
            name
          </Text>
          <Text
            style={{
              margin: 0,
              padding: 0,
              borderWidth: 1,
              color: value.text,
              fontSize: 20
            }}
          >
            name
          </Text>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Square />
            <Text style={{ margin: 0, paddingRight: 30 }}>Python</Text>
            <Square />
            <Text style={{ margin: 0, paddingRight: 30 }}>77</Text>
            <Square />
            <Text style={{ margin: 0 }}>6</Text>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};
