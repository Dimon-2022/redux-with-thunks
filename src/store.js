import { createStore, applyMiddleware } from "redux";
import userListReducer from "./features/usersList/userListSlice";
import {thunk} from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
