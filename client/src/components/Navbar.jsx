import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getText } from "../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState();
  const handleInput = (e) => {
    settext(e.target.value);
  };

  const handleClick = (e) => {
    if (text) {
      e.preventDefault();
      dispatch(getText(text));
      settext("");
    } else {
      alert("Please enter a text");
    }
  };
  return (
    <nav
      class="navbar navbar-expand-lg bg-danger d-flex justify-content-center "
      style={{ height: "5rem" }}
    >
      <div class="d-flex w-50">
        <input
          type="text"
          class="form-control me-2"
          placeholder="Insert Text"
          name="text"
          value={text}
          onChange={handleInput}
        />
        <div>
          <button class="btn btn-primary" onClick={handleClick} style={{ width: "5rem" }}>
            Send
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
