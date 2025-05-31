import { combineReducers } from "redux";
import userDetailsReducer from "./features/userDetails/userDetailsSlice";
import userListReducer from "./features/usersList/userListSlice";

const rootReducer = combineReducers({
  userData: userListReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;