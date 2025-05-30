import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();


  return (
    <form className="add-user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        dispatch({type: "userList/addUser", payload: {id: Date.now(),name, email }})

        }}
      >
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
