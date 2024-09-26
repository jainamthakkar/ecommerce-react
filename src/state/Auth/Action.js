import { api } from "../../Config/apiConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const TOKEN = localStorage.getItem("jwt");

console.log(TOKEN);

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  console.log("userData ", userData);
  try {
    const response = await api.post(`/auth/signup`, userData);
    const user = response.data;
    console.log("register user:", user, " jwt ", user.jwt);
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("jwt in register :", localStorage.getItem("jwt"));
    dispatch(registerSuccess(user.jwt));
    console.log("user ", user);
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  console.log("inside login ", userData);
  try {
    const response = await api.post(`/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(loginSuccess(user.jwt));
    console.log("user ", user);
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  console.log("jwt in getUser :", jwt);
  try {
    console.log("inside try");
    const response = await api.get(`/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("API Response:", response.data); 
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.log("ERROOROROROr!!!");
    console.error(
      "API Error:",
      error.response ? error.response.data : error.message
    ); // Log error details
    dispatch(
      getUserFailure(error.response ? error.response.data : error.message)
    );
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear(); 
};
