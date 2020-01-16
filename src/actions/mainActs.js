import { ApiCall } from "../helpers/ApiCall";

export const init = () => ({ type: "init" });
export const getUsers = username => {
  return ApiCall({
    type: "getUser",
    request: {
      url: `/users/${username}`
    }
  });
};
export const getRepos = username => {
  return ApiCall({
    type: "getRepos",
    request: {
      url: `/users/${username}/repos`
    }
  });
};
