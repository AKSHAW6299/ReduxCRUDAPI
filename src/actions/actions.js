import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./actionTypes";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Dummy API

// Fetch Users (READ)
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};

// Add User (CREATE)
export const addUser = (user) => {
  return async (dispatch) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const newUser = await response.json();
    // console.log('>>>>>>>>>>>>>>>>>>>>', newUser);

    dispatch({ type: ADD_USER, payload: newUser });
  };
};

// Update User (UPDATE)
export const updateUser = (id, user) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    dispatch({ type: UPDATE_USER, payload: updatedUser });
  };
};

// Delete User (DELETE)
export const deleteUser = (id) => {
  return async (dispatch) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    dispatch({ type: DELETE_USER, payload: id });
  };
};
