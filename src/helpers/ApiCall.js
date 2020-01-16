import axios from "./axios";

const success = type => `${type}_SUCCESS`;
const fail = type => `${type}_FAIL`;

export const ApiCall = (action, payload) => (dispatch, getState) => {
  dispatch({ type: action.type });
  axios({
    ...action.request,
    url: axios.defaults.baseURL + action.request.url,
    headers: { ...action.request.headers }
  })
    .then(res => {
      dispatch({ type: success(action.type), response: res.data, payload });
    })
    .catch(err => {
      dispatch({ type: fail(action.type), err: err.response.data, payload });
    });
};
