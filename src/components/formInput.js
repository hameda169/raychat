import React from "react";
import { Text } from "./common";
import { NotFound } from "./notFound";

export const FormInput = () => (
  <div>
    <p>GitHub username:</p>
    <div>
      <input
        style={{
          borderWidth: 0,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#f5f5f5",
          fontSize: 25
        }}
      />
      <button
        style={{
          borderWidth: 0,
          padding: 15,
          backgroundColor: "#000",
          borderRadius: 10
        }}
      >
        <Text
          className={"icon"}
          style={{ padding: 0, margin: 0, color: "#fff", fontSize: 20 }}
        >
          {"\ue800"}
        </Text>
      </button>
    </div>
    <NotFound />
  </div>
);
