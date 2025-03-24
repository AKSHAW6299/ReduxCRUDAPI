import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
  } from "../actions/actionTypes";
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_USER:
        return { ...state, users: [...state.users, action.payload] };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  