import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "./userDetailsSlice";

function SelectedUserDetails() {
  const selectedUserId = useSelector(
    (state) => state.userDetails.selectedUserId
  );
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  if (!selectedUserId) {
    return <p>No user selected</p>;
  }

  const selectedUser = users.find((user) => user.id === selectedUserId);

  if (!selectedUser) {
    return <p>User not found</p>;
  }

  return (
    <div className="selected-user-details">
      <h2>Selected User</h2>
      <p>
        <strong>Name: </strong>
        {selectedUser.name}
      </p>
      <p>
        <strong>Email: </strong>
        {selectedUser.email}
      </p>

      <button className="clear-btn" onClick={() => dispatch(clearUser())}>
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails;
