import React from "react";
import { ThemeConsumer } from "../theme";
import { Text } from "./common";
import { connect } from "react-redux";
const Item = ({ title, val, color, web, loading }) => {
  const X = p => (web ? <a {...p} /> : <Text {...p} />);
  return (
    <ThemeConsumer>
      {value => (
        <Text
          style={{
            fontSize: 20,
            color: "#888",
            backgroundColor: loading ? value.highlight : null,
            width: "100%"
          }}
        >
          {val ? (
            <span>
              {title + ": "}
              <X href={val} style={{ color: web ? "#42a4ff" : color }} nb>
                {val}
              </X>
            </span>
          ) : (
            <div
              style={{
                backgroundColor: value.highlight,
                color: value.highlight,
                width: "100%",
                height: "100%"
              }}
            >
              {loading ? " ." : null}
            </div>
          )}
        </Text>
      )}
    </ThemeConsumer>
  );
};

const ProfileComp = props => {
  const data = props.user || {};
  console.log(data, 1);
  const name = data.name,
    company = data.company,
    website = data.blog,
    location = data.location;
  return (
    <ThemeConsumer>
      {value => (
        <div
          style={{
            width: "25%"
          }}
        >
          {props.loading || props.success ? (
            <div
              style={{
                height: "25vh",
                backgroundColor: value.highlight,
                borderRadius: "8px"
              }}
            >
              {!props.loading && props.success ? (
                <img src={data.avatar_url} width={"100%"} height={"100%"} />
              ) : null}
            </div>
          ) : null}
          <Text style={{ fontSize: 25, fontWeight: "bold", color: value.text }}>
            {name ? name : ""}
          </Text>
          <Item
            title={"Company"}
            val={company}
            color={value.text}
            loading={props.loading}
          />
          <Item
            title={"Location"}
            val={location}
            color={value.text}
            loading={props.loading}
          />
          <Item
            title={"Website"}
            val={website}
            color={value.text}
            loading={props.loading}
            web
          />
        </div>
      )}
    </ThemeConsumer>
  );
};
const mapStateToProps = state => ({
  loading: state.main.loading,
  success: state.main.success,
  user: state.main.user
});
export const Profile = connect(mapStateToProps)(ProfileComp);
