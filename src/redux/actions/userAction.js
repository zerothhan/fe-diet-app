const login = (data) => {
  return (dispatch, getState) => {
    console.log("login action");
    dispatch(logInSuccess(data));
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const userAction = { login };
