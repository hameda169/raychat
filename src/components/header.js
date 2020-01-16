import React from "react";
import { Text } from "./common";

export const Header = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <Text style={{ fontSize: 35, fontWeight: "bold" }}>Github Profiles</Text>
    <input
      style={{
        height: 30,
        width: 30,
        borderWidth: 0,
        backgroundColor: "#000"
      }}
      type={"button"}
    />
  </div>
);
