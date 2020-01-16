import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Text } from "./common";
import { NotFound } from "./notFound";
import { ThemeConsumer } from "../theme";
import { getRepos, getUsers } from "../actions/mainActs";

const FormInputComp = props => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (props.success_user) {
      props.getRepos(username);
    }
  }, [props.success_user]);
  return (
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
              onChange={e => setUsername(e.target.value.replace("@", ""))}
            />
            <button
              style={{
                borderWidth: 0,
                padding: 15,
                backgroundColor: value.text,
                borderRadius: 10
              }}
              onClick={() => props.getUser(username)}
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
                {props.loading ? "\uf10c" : "\ue800"}
              </Text>
            </button>
          </div>
          {props.not_found && <NotFound />}
        </div>
      )}
    </ThemeConsumer>
  );
};

const mapStateToProps = state => ({
  loading: state.main.loading,
  success_user: state.main.success_user,
  not_found: state.main.not_found
});
const mapDispatchToProps = dispatch => ({
  getUser: username => dispatch(getUsers(username)),
  getRepos: username => dispatch(getRepos(username))
});
export const FormInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInputComp);
