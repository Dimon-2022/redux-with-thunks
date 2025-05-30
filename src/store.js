import { createStore } from "redux";
import userListReducer from "./features/usersList/userListSlice";

const store = createStore(userListReducer);

export default store;

console.log(store.getState());