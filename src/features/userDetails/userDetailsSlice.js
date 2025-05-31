const initialState = { selectedUserId: null };

export default function userDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "userDetails/selectUser":
      return { ...state, selectedUserId: action.payload };
    case "userDetails/clearUser":
      return { ...state, selectedUserId: null };
    default:
      return state;
  }
}

export function selectUser(userId) {
  return { type: "userDetails/selectUser", payload: userId };
}

export function clearUser() {
  return { type: "userDetails/clearUser" };
}
