import { combineReducers } from "redux";
import birthdays from "./reducers/birthdays";
import authUser from "./reducers/authUser";
import common from "./reducers/common";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    birthdays,
    authUser,
    common,
    router: routerReducer
})