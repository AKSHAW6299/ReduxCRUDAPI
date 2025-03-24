import { combineReducers } from "redux";
import userReducer from "./itemsReducer";


const rootReducer = combineReducers({
    users: userReducer,
})

export default rootReducer;