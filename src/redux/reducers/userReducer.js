let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
