import React from "react";
import { Text } from "./common";
import { NotFound } from "./notFound";
import { ThemeConsumer } from "../theme";

export const FormInput = () => (
  <ThemeConsumer>
    {value => (
      <div>
        <Text style={{ color: value.text }}>GitHub username:</Text>
        <div>
          <input
            style={{
              borderWidth: 0,
              padding: 10,
              borderRadius: 10,
              backgroundColor: value.highlight,
              color: value.text,
              fontSize: 25
            }}
          />
          <button
            style={{
              borderWidth: 0,
              padding: 15,
              backgroundColor: value.text,
              borderRadius: 10
            }}
          >
            <Text
              className={"icon"}
              style={{
                padding: 0,
                margin: 0,
                color: value.background,
                fontSize: 20
              }}
            >
              {"\ue800"}
            </Text>
          </button>
        </div>
        <NotFound />
      </div>
    )}
  </ThemeConsumer>
);
