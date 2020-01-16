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
  const data = props.data || {};
  const name = data.name,
    desc = data.description,
    lang = data.language,
    starts = data.stargazers_count,
    forks = data.forks;
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
            {name ? name : ""}
          </Text>
          <Text
            style={{
              margin: 0,
              padding: 0,
              borderWidth: 1,
              color: value.text,
              fontSize: 14
            }}
          >
            {desc ? desc : ""}
          </Text>
          {name ? (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Square />
              <Text style={{ margin: 0, paddingRight: 30, color: value.text }}>
                {lang ? lang : "NOT_SET"}
              </Text>
              <Square />
              <Text style={{ margin: 0, paddingRight: 30, color: value.text }}>
                {starts ? starts : 0}
              </Text>
              <Square />
              <Text style={{ margin: 0, color: value.text }}>
                {forks ? forks : 0}
              </Text>
            </div>
          ) : null}
        </div>
      )}
    </ThemeConsumer>
  );
};
