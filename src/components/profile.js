import React from "react";
import { ThemeConsumer } from "../theme";
import { Text } from "./common";
const Item = ({ title, val, color, web }) => {
  const X = p => (web ? <a {...p} /> : <Text {...p} />);
  return (
    <Text style={{ fontSize: 20, color: "#888" }}>
      {val ? (
        <span>
          {title + ": "}
          <X href={val} style={{ color: web ? "#42a4ff" : color }} nb>
            {val}
          </X>
        </span>
      ) : (
        ""
      )}
    </Text>
  );
};

export const Profile = props => {
  const name = "Hamed AA",
    company = "raychat",
    website = "https://hameda169.ir",
    location = "Tabriz";
  return (
    <ThemeConsumer>
      {value => (
        <div
          style={{
            width: "25%"
          }}
        >
          <div
            style={{
              height: "25vh",
              backgroundColor: value.highlight,
              borderRadius: "8px"
            }}
          ></div>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: value.text }}>
            {name ? name : ""}
          </Text>
          <Item title={"Company"} val={company} color={value.text} />
          <Item title={"Location"} val={location} color={value.text} />
          <Item title={"Website"} val={website} color={value.text} web />
        </div>
      )}
    </ThemeConsumer>
  );
};
