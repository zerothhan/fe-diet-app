// async action creator
const login = (data) => {
  return (dispatch, getState) => {
    console.log("login action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

// sync action creator
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

function login(id, password) {
  return (dispatch, getState) => {
    console.log("login action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const userAction = { login };
