const init = {
  loading_user: false,
  loading_repo: false,
  loading: false,
  success_user: false,
  success_repo: false,
  success: false,
  error: null,
  not_found: false,
  user: null,
  repos: null
};
export const main = (state = init, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case "INIT":
      return { ...init };
    case "getUser":
      return {
        ...state,
        loading: true,
        success: false,
        loading_user: true,
        success_user: false,
        error: null,
        user: null,
        repos: null,
        not_found: false
      };
    case "getUser_SUCCESS":
      console.log(action.response);
      return {
        ...state,
        loading_user: false,
        success_user: true,
        user: action.response
      };
    case "getUser_FAIL":
      return {
        ...state,
        loading: false,
        success: false,
        loading_user: false,
        success_user: false,
        error: action.err.message,
        not_found: true
      };
    case "getRepos":
      return {
        ...state,
        loading_repo: true,
        success_repo: false,
        error: null
      };
    case "getRepos_SUCCESS":
      console.log(action.response);
      return {
        ...state,
        loading: false,
        success: true,
        loading_repo: false,
        success_repo: true,
        repos: action.response.slice(
          action.response.length - 4 < 0 ? 0 : action.response.length - 4
        )
      };
    case "getRepos_FAIL":
      return {
        ...state,
        loading: false,
        success: false,
        loading_repo: false,
        success_repo: false,
        error: action.err.message
      };
    default:
      return { ...state };
  }
};
