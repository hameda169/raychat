import React from "react";
import { Repo } from "./repo";

export const Repos = () => (
  <div
    style={{
      height: "25vh",
      width: "65%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "12vh",
        justifyContent: "space-around"
      }}
    >
      <Repo />
      <Repo />
    </div>
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "12vh",
        justifyContent: "space-around"
      }}
    >
      <Repo />
      <Repo />
    </div>
  </div>
);
