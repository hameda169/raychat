import React from "react";
import { Repo } from "./repo";
import { connect } from "react-redux";

const ReposComp = props => (
  <div
    style={{
      height: "25vh",
      width: "75%",
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
        justifyContent: "flex-start"
      }}
    >
      {props.repos ? props.repos.slice(0, 2).map(x => <Repo data={x} />) : null}
      {props.loading ? ["", ""].map(() => <Repo />) : null}
    </div>
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "12vh",
        justifyContent: "flex-start"
      }}
    >
      {props.repos ? props.repos.slice(2).map(x => <Repo data={x} />) : null}
      {props.loading ? [""].map(() => <Repo />) : null}
    </div>
  </div>
);

const mapStateToProps = state => ({
  loading: state.main.loading,
  success: state.main.success,
  repos: state.main.repos
});
export const Repos = connect(mapStateToProps, {})(ReposComp);
