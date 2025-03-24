import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducer/index";
import { thunk } from "redux-thunk"; // ✅ Correct import

// Use Redux DevTools if available, otherwise just use `compose`
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
